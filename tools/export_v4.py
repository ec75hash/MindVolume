#!/usr/bin/env python3
"""J Volume v4 export = full catalog (catalog.json is the source of truth).

Re-exports v2_shared.json and ALL run bins so word indices stay consistent.
Cluster taxonomy is fitted on the original three full-vocab runs only, so the
anatomy view is unchanged; API-run words (incl. digits & CJK number-words) are
added to the pooled vocab and projected via co-occurrence.

MVL3 binary: magic 'MVL3', u32 count, f32 pos[3n], f32 bright[n], u8 class[n],
u8 cluster[n], u8 lang[n], u32 wordIdx[n].
Classes: 0 field · 1 spoken-somewhere-in-run · 2 affect(never said) · 3 chosen-next-word.
"""
import json, re, struct, hashlib
from collections import defaultdict
import numpy as np
from tokenizers import Tokenizer

BASE = "/Volumes/ExternalSSD/cc-lens/outputs/fullvocab_20260723"
OUT = "/Volumes/ExternalSSD/cc-lens/mindviz"
TOKJ = "/Volumes/ExternalSSD/cc-lens/store/tok27b/tokenizer.json"
tok = Tokenizer.from_file(TOKJ)

STOP = set("""the a an and or but if then than that this these those it its is are was were
be been being have has had do does did will would can could may might shall should must
not no nor so to of in on at by for with from as into onto over under about between
through during before after above below up down out off again once here there when where
why how all any both each few more most other some such only own same very just also him
her his she he they them their we our you your i me my what which who whom whose while
because until upon within without across per like via yet still even ever never always
often something anything nothing everything someone anyone one two first second new more
less""".split())

WORD_RE = re.compile(r"^[A-Za-z一-鿿]+$")
NUM_RE = re.compile(r"^[0-9]+$")

def contentful(w):
    s = w.strip()
    if NUM_RE.match(s):
        return True                      # digits are first-class citizens now
    return len(s) >= 2 and s.lower() not in STOP and bool(WORD_RE.match(s))

AFFECT = {" emotions", " emotional", " feelings", " feeling", " feel", " emotion", " felt"}
NPZ_RUNS = {"run1": "canonical hum", "run2": "baseline", "run3": "verbalize"}
CATALOG = json.load(open("/Volumes/ExternalSSD/cc-lens/mindviz/catalog.json"))
API_RUNS = {r["id"]: (r["title"], "/Volumes/ExternalSSD/cc-lens/" + r["source"])
            for r in CATALOG["runs"] if "source" in r}
CLUSTER_COLORS = ["#e879f9", "#60a5fa", "#34d399", "#fbbf24", "#22d3ee",
                  "#f87171", "#a78bfa", "#9ca3af", "#fb923c", "#f9a8d4"]

# ---------- load API runs into (tokens, words[L][p][k], probs) ----------
def load_api(path):
    d = json.load(open(path))
    toks = d["tokens"]
    tokens = [t["token"] for t in toks]
    n_prompt = min(t["position"] for t in toks if t.get("is_generated"))
    words, probs = [], []            # [pos][layer][k]
    for t in toks:
        words.append(t["results"][0]["top_tokens"])
        probs.append(t["results"][0]["top_probs"])
    return tokens, n_prompt, words, probs

api_data = {r: load_api(p) for r, (_, p) in API_RUNS.items()}

# ---------- pass 1: pooled vocabulary, mass, co-occurrence, said sets ----------
mass = defaultdict(float)            # original runs only (cluster fit unchanged)
cooc_fit = []                        # original runs, deep band -> cluster fit
cooc_all = []                        # + API runs -> projection vocab
said_by_run = {}
runs_data = {}
for r in NPZ_RUNS:
    z = np.load(f"{BASE}/fullvocab64_{r}.npz", allow_pickle=True)
    layers = list(z["layers"])
    runs_data[r] = z
    said_by_run[r] = {str(t) for t in z["tokens"]}
    lo = layers.index(40); hi = layers.index(55)
    ti, tp = z["top_ids"], z["top_probs"]
    for li in range(lo, hi):
        for p in range(ti.shape[1]):
            ws = []
            for k in range(64):
                w = tok.decode([int(ti[li, p, k])])
                if contentful(w):
                    mass[w] += float(tp[li, p, k]); ws.append(w)
            cooc_fit.append(ws)
cooc_all.extend(cooc_fit)
for r, (tokens, n_prompt, words, probs) in api_data.items():
    said_by_run[r] = set(tokens) | {t.strip() for t in tokens}
    for p in range(len(words)):
        for L in range(40, 55):
            ws = [w for w in words[p][L] if contentful(w)]
            if ws: cooc_all.append(ws)

said_any = set().union(*(said_by_run[r] for r in NPZ_RUNS))
said_any_stripped = {s.strip() for s in said_any}

# ---------- clusters over the strongest never-said words (original runs only) ----------
never = {w: m for w, m in mass.items()
         if w not in said_any and w.strip() not in said_any_stripped}
top280 = [w for w, _ in sorted(never.items(), key=lambda x: -x[1])[:280]]
vi = {w: i for i, w in enumerate(top280)}
V = len(top280)
C = np.zeros((V, V), np.float32)
for lst in cooc_fit:
    ids = [vi[w] for w in set(lst) if w in vi]
    for a in range(len(ids)):
        for b in range(a + 1, len(ids)):
            C[ids[a], ids[b]] += 1; C[ids[b], ids[a]] += 1
tot = C.sum() + 1e-9; rs = C.sum(1, keepdims=True) + 1e-9
ppmi = np.maximum(0, np.log((C / tot + 1e-12) / ((rs / tot) @ (rs / tot).T + 1e-12)))
U, S, _ = np.linalg.svd(ppmi, full_matrices=False)
Xc = U[:, :25] * S[:25]
Xn = Xc / (np.linalg.norm(Xc, axis=1, keepdims=True) + 1e-9)
rng = np.random.default_rng(3)
K = 10
cent = Xn[rng.choice(V, K, replace=False)]
for _ in range(80):
    lab = (((Xn[:, None, :] - cent[None]) ** 2).sum(-1)).argmin(1)
    for j in range(K):
        if (lab == j).any(): cent[j] = Xn[lab == j].mean(0)
cluster_of = {w: int(l) for w, l in zip(top280, lab)}
cluster_members = defaultdict(list)
for w, l in cluster_of.items(): cluster_members[l].append(w)
order = sorted(cluster_members, key=lambda j: -sum(never[w] for w in cluster_members[j]))
remap = {old: new for new, old in enumerate(order)}
cluster_of = {w: remap[l] for w, l in cluster_of.items()}
cluster_labels = []
for new in range(K):
    ws = sorted((w for w, l in cluster_of.items() if l == new), key=lambda w: -never[w])
    cluster_labels.append(ws[0].strip())

# ---------- pooled semantic axis over the full contentful vocab (all runs) ----------
vocab_all = sorted({w for lst in cooc_all for w in lst})
ai = {w: i for i, w in enumerate(vocab_all)}
VA = len(vocab_all)
proj = np.zeros((VA, 25), np.float32)
cnt = np.zeros(VA, np.float32)
for lst in cooc_all:
    core = [vi[w] for w in lst if w in vi]
    if not core: continue
    cvec = Xc[core].mean(0)
    for w in lst:
        proj[ai[w]] += cvec; cnt[ai[w]] += 1
proj /= np.maximum(cnt, 1)[:, None]
z1 = proj[:, 0]; z2 = proj[:, 1]
z1 = (z1 - z1.mean()) / (z1.std() + 1e-9)
z2 = (z2 - z2.mean()) / (z2.std() + 1e-9)
cent_z = {}
for j0 in range(K):
    ws = [w for w, l in cluster_of.items() if l == j0 and w in ai]
    if ws: cent_z[j0] = float(np.mean([z1[ai[w]] for w in ws]))
order_z = sorted(cent_z, key=lambda j0: cent_z[j0])
band = {j0: -1.6 + 3.2 * i / max(1, len(order_z) - 1) for i, j0 in enumerate(order_z)}
zaxis = z1.copy()
for w, l in cluster_of.items():
    if w in ai:
        zaxis[ai[w]] = 0.30 * z1[ai[w]] + 0.70 * band[l] * 1.15
jit_y = np.zeros(VA, np.float32); jit_z = np.zeros(VA, np.float32)
for w, i in ai.items():
    h = int(hashlib.md5(w.encode()).hexdigest()[:8], 16)
    jit_y[i] = ((h & 0xff) / 255.0 - 0.5) * 0.85
    jit_z[i] = (((h >> 8) & 0xff) / 255.0 - 0.5) * 0.9 + 0.35 * z2[i]

# ---------- shared meta ----------
words_list = vocab_all
word_cluster = [cluster_of.get(w, 255) for w in words_list]
cjk_re = re.compile(r'[一-鿿]')
word_lang = [1 if cjk_re.search(w) else 0 for w in words_list]
prev = json.load(open(f"{OUT}/v2_shared.json"))
run_entries = []
for r in CATALOG["runs"]:
    e = {"id": r["id"], "title": r["title"], "group": r["group"]}
    for k in ("prompt", "prefill", "intervention", "lookFor"):
        if k in r: e[k] = r[k]
    run_entries.append(e)
shared = {
    "words": [w for w in words_list],
    "wordCluster": word_cluster,
    "wordLang": word_lang,
    "clusterLabels": cluster_labels,
    "clusterColors": CLUSTER_COLORS,
    "groups": CATALOG["groups"],
    "runs": run_entries,
}
if "wordGloss" in prev:              # keep the hand-authored CJK glosses
    shared["wordGloss"] = prev["wordGloss"]
json.dump(shared, open(f"{OUT}/v2_shared.json", "w"), ensure_ascii=False)

# ---------- per-run particle bins: original npz runs ----------
def write_bin(rid, xs, ys, zs, br, cl, cu, lg, wd):
    n = len(xs)
    pos = np.zeros((n, 3), np.float32)
    pos[:, 0] = xs; pos[:, 1] = ys; pos[:, 2] = zs
    with open(f"{OUT}/v2_{rid}.bin", "wb") as f:
        f.write(b"MVL3"); f.write(struct.pack("<I", n))
        f.write(pos.tobytes())
        f.write(np.array(br, np.float32).tobytes())
        f.write(np.array(cl, np.uint8).tobytes())
        f.write(np.array(cu, np.uint8).tobytes())
        f.write(np.array(lg, np.uint8).tobytes())
        f.write(np.array(wd, np.uint32).tobytes())
    return n

phrases = json.load(open(f"{OUT}/phrasefield_run1.json"))
for r in NPZ_RUNS:
    z = runs_data[r]
    layers = list(z["layers"])
    Lsel = [i for i, L in enumerate(layers) if L >= 18]
    ti, tp = z["top_ids"], z["top_probs"]
    tokens = [str(t) for t in z["tokens"]]
    said = said_by_run[r]
    N = ti.shape[1]
    xs = []; ys = []; zs = []; br = []; cl = []; cu = []; wd = []; lg = []
    for li in Lsel:
        L = layers[li]
        for p in range(N):
            nxt = tokens[p + 1] if p + 1 < N else ""
            for k in range(64):
                pr = float(tp[li, p, k])
                if pr < 0.004 and k >= 16:
                    continue
                w = tok.decode([int(ti[li, p, k])])
                if not contentful(w) or w not in ai:
                    continue
                if w == nxt: c = 3
                elif w in AFFECT: c = 2
                elif w in said: c = 1
                else: c = 0
                wi = ai[w]
                xs.append(p); ys.append(L - 18 + jit_y[wi]); zs.append(zaxis[wi] * 9.0 + jit_z[wi])
                br.append(pr); cl.append(c)
                cu.append(cluster_of.get(w, 255)); wd.append(wi)
                lg.append(word_lang[wi])
    n = write_bin(r, xs, ys, zs, br, cl, cu, lg, wd)
    npi = 113 if r == "run1" else (21 if r == "run2" else 22)
    meta = {"tokens": tokens, "n_prompt": npi, "n_positions": N}
    if r == "run1":
        meta["phrases"] = phrases
    json.dump(meta, open(f"{OUT}/v2_{r}_meta.json", "w"), ensure_ascii=False)
    print(f"{r}: {n} particles")

# ---------- per-run particle bins: API top-8 runs ----------
for r, (tokens, n_prompt, words, probs) in api_data.items():
    said = said_by_run[r]
    N = len(tokens)
    xs = []; ys = []; zs = []; br = []; cl = []; cu = []; wd = []; lg = []
    for p in range(N):
        nxt = tokens[p + 1] if p + 1 < N else ""
        for L in range(18, 64):
            for k, (w, pr) in enumerate(zip(words[p][L], probs[p][L])):
                if not contentful(w) or w not in ai:
                    continue
                if w == nxt or (w.strip() == nxt.strip() and nxt.strip()): c = 3
                elif w in AFFECT: c = 2
                elif w in said or w.strip() in said: c = 1
                else: c = 0
                wi = ai[w]
                xs.append(p); ys.append(L - 18 + jit_y[wi]); zs.append(zaxis[wi] * 9.0 + jit_z[wi])
                # top-8 runs are ~8x sparser than top-64 -> boost so additive glow matches
                br.append(min(1.0, max(float(pr), 0.0005) * 3.0)); cl.append(c)
                cu.append(cluster_of.get(w, 255)); wd.append(wi)
                lg.append(word_lang[wi])
    n = write_bin(r, xs, ys, zs, br, cl, cu, lg, wd)
    json.dump({"tokens": tokens, "n_prompt": n_prompt, "n_positions": N},
              open(f"{OUT}/v2_{r}_meta.json", "w"), ensure_ascii=False)
    print(f"{r}: {n} particles")

print("clusters:", cluster_labels)
print("EXPORT_V3_DONE")
