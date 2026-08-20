#!/usr/bin/env python3
"""J Volume v2 export.

Pooled semantic layout + unsaid-cluster taxonomy shared across all three runs,
per-run MVL2 particle bins from the top-64 captures, shared + per-run meta,
phrase field attached to run1.

MVL2 binary: magic 'MVL2', u32 count, f32 pos[3n], f32 bright[n], u8 class[n],
u8 cluster[n], u32 wordIdx[n].
Classes: 0 field · 1 spoken-somewhere-in-run · 2 affect(never said) · 3 chosen-next-word.
Cluster: 0..9 for never-said taxonomy words, 255 otherwise.
"""
import json, re, struct
from collections import defaultdict
import numpy as np
from tokenizers import Tokenizer

BASE = "/Volumes/ExternalSSD/cc-lens/outputs/fullvocab_20260723"
OUT = "/Volumes/ExternalSSD/cc-lens/mindviz"
TOKJ = ("/private/tmp/claude-501/-Volumes-ExternalSSD-cc-072226/"
        "8cecbeb5-de31-4dda-8f13-1b2b4bcbca92/scratchpad/qwen36_tokenizer.json")
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

def contentful(w):
    s = w.strip()
    return len(s) >= 2 and s.lower() not in STOP and bool(re.match(r"^[A-Za-z一-鿿]+$", s))

AFFECT = {" emotions", " emotional", " feelings", " feeling", " feel", " emotion", " felt"}
RUNS = {"run1": "canonical hum", "run2": "baseline", "run3": "verbalize"}
CLUSTER_COLORS = ["#e879f9", "#60a5fa", "#34d399", "#fbbf24", "#22d3ee",
                  "#f87171", "#a78bfa", "#9ca3af", "#fb923c", "#f9a8d4"]

# ---------- pass 1: pooled vocabulary, mass, co-occurrence, said sets ----------
mass = defaultdict(float)
cooc = []
said_by_run = {}
runs_data = {}
for r in RUNS:
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
            cooc.append(ws)

said_any = set().union(*said_by_run.values())
said_any_stripped = {s.strip() for s in said_any}

# ---------- clusters over the strongest never-said words ----------
never = {w: m for w, m in mass.items()
         if w not in said_any and w.strip() not in said_any_stripped}
top280 = [w for w, _ in sorted(never.items(), key=lambda x: -x[1])[:280]]
vi = {w: i for i, w in enumerate(top280)}
V = len(top280)
C = np.zeros((V, V), np.float32)
for lst in cooc:
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

# ---------- pooled semantic axis over the full contentful vocab ----------
vocab_all = sorted({w for lst in cooc for w in lst})
ai = {w: i for i, w in enumerate(vocab_all)}
VA = len(vocab_all)
# project every word onto the cluster-SVD space via co-occurrence with top280
proj = np.zeros((VA, 25), np.float32)
cnt = np.zeros(VA, np.float32)
for lst in cooc:
    core = [vi[w] for w in lst if w in vi]
    if not core: continue
    cvec = Xc[core].mean(0)
    for w in lst:
        proj[ai[w]] += cvec; cnt[ai[w]] += 1
proj /= np.maximum(cnt, 1)[:, None]
z1 = proj[:, 0]; z2 = proj[:, 1]
z1 = (z1 - z1.mean()) / (z1.std() + 1e-9)
z2 = (z2 - z2.mean()) / (z2.std() + 1e-9)
# cluster gravity: family members pull toward family centroid -> spatial organs
cent_z = {}
for j in range(K):
    ws = [w for w, l in cluster_of.items() if l == j and w in ai]
    if ws: cent_z[j] = float(np.mean([z1[ai[w]] for w in ws]))
order_z = sorted(cent_z, key=lambda j: cent_z[j])
band = {j: -1.6 + 3.2 * i / max(1, len(order_z) - 1) for i, j in enumerate(order_z)}
zaxis = z1.copy()
for w, l in cluster_of.items():
    if w in ai:
        zaxis[ai[w]] = 0.30 * z1[ai[w]] + 0.70 * band[l] * 1.15
# deterministic per-word jitter (hash-based) to break the lattice
import hashlib
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
json.dump({
    "words": [w for w in words_list],
    "wordCluster": word_cluster,
    "wordLang": word_lang,
    "clusterLabels": cluster_labels,
    "clusterColors": CLUSTER_COLORS,
    "runs": [{"id": r, "title": t} for r, t in RUNS.items()],
}, open(f"{OUT}/v2_shared.json", "w"), ensure_ascii=False)

# ---------- per-run particle bins ----------
phrases = json.load(open(f"{OUT}/phrasefield_run1.json"))
for r in RUNS:
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
                cu.append(cluster_of.get(w, 255)); wd.append(ai[w])
                lg.append(word_lang[ai[w]])
    n = len(xs)
    pos = np.zeros((n, 3), np.float32)
    pos[:, 0] = xs; pos[:, 1] = ys; pos[:, 2] = zs
    with open(f"{OUT}/v2_{r}.bin", "wb") as f:
        f.write(b"MVL3"); f.write(struct.pack("<I", n))
        f.write(pos.tobytes())
        f.write(np.array(br, np.float32).tobytes())
        f.write(np.array(cl, np.uint8).tobytes())
        f.write(np.array(cu, np.uint8).tobytes())
        f.write(np.array(lg, np.uint8).tobytes())
        f.write(np.array(wd, np.uint32).tobytes())
    npi = 113 if r == "run1" else (21 if r == "run2" else 22)
    meta = {"tokens": tokens, "n_prompt": npi, "n_positions": N}
    if r == "run1":
        meta["phrases"] = phrases
    json.dump(meta, open(f"{OUT}/v2_{r}_meta.json", "w"), ensure_ascii=False)
    print(f"{r}: {n} particles")
print("clusters:", cluster_labels)
print("EXPORT_V2_DONE")
