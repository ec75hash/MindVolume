import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ---------- data loading (MVL3 format) ----------
async function loadShared() {
  return (await fetch("/data/v2_shared.json")).json();
}
async function loadRun(runId) {
  const buf = await (await fetch(`/data/v2_${runId}.bin`)).arrayBuffer();
  const dv = new DataView(buf);
  const magic = new TextDecoder().decode(buf.slice(0, 4));
  if (magic !== "MVL3") throw new Error("bad magic");
  const n = dv.getUint32(4, true);
  let off = 8;
  const pos = new Float32Array(buf, off, n * 3); off += n * 12;
  const bright = new Float32Array(buf, off, n); off += n * 4;
  const cls = new Uint8Array(buf, off, n); off += n;
  const clu = new Uint8Array(buf, off, n); off += n;
  const lang = new Uint8Array(buf, off, n); off += n;
  const wid = new Uint32Array(buf, off, n);
  const meta = await (await fetch(`/data/v2_${runId}_meta.json`)).json();
  return { n, pos, bright, cls, clu, lang, wid, meta };
}

// ---------- shaders (story + anatomy + language filter + scrub) ----------
const VSH = `
attribute float aBright; attribute float aCls; attribute float aClu; attribute float aLang;
uniform float uMaxX; uniform float uMode; uniform float uLang; uniform float uMinB; uniform float uScale;
varying vec3 vColor; varying float vAlpha;
vec3 palette(int i) {
  if (i==0) return vec3(0.910,0.475,0.976); if (i==1) return vec3(0.376,0.647,0.980);
  if (i==2) return vec3(0.204,0.827,0.600); if (i==3) return vec3(0.984,0.749,0.141);
  if (i==4) return vec3(0.133,0.827,0.933); if (i==5) return vec3(0.969,0.443,0.443);
  if (i==6) return vec3(0.655,0.545,0.980); if (i==7) return vec3(0.612,0.639,0.686);
  if (i==8) return vec3(0.984,0.573,0.235); return vec3(0.976,0.659,0.831);
}
void main() {
  float hidden = 0.0;
  if (position.x > uMaxX || aBright < uMinB) hidden = 1.0;
  if (uLang > 0.5 && uLang < 1.5 && aLang > 0.5) hidden = 1.0;
  if (uLang > 1.5 && aLang < 0.5) hidden = 1.0;
  float t = clamp(0.15 + 2.2 * aBright, 0.0, 1.0);
  vec3 c; float a;
  if (uMode < 0.5) {
    c = mix(vec3(0.137,0.227,0.369), vec3(0.863,0.925,0.988), t);
    a = 0.10 + 0.55 * t;
    if (aCls > 2.5) { c = vec3(1.0); a = 0.95; }
    else if (aCls > 1.5) { c = vec3(1.0,0.42,0.616); a = 0.9; }
    else if (aCls > 0.5) { c = vec3(1.0,0.823,0.341); a = 0.30 + 0.5 * t; }
  } else {
    if (aClu < 250.0) { c = palette(int(aClu)); a = 0.35 + 0.6 * t; }
    else { c = vec3(0.30,0.32,0.36); a = 0.05 + 0.18 * t; }
  }
  vColor = c; vAlpha = a * (1.0 - hidden);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float size = uScale * (0.12 + 1.1 * sqrt(aBright));
  if (aCls > 2.5) size = max(size, uScale * 0.85);
  else if (aCls > 1.5) size = max(size, uScale * 0.75);
  else if (aCls > 0.5) size = max(size, uScale * 0.38);
  gl_PointSize = size * 300.0 / -mv.z;
  gl_Position = projectionMatrix * mv;
}`;
const FSH = `
varying vec3 vColor; varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0 || vAlpha <= 0.001) discard;
  float falloff = exp(-2.6 * r2);
  gl_FragColor = vec4(vColor * vAlpha * falloff, vAlpha * falloff);
}`;

function makePoints(run) {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(run.pos, 3));
  g.setAttribute("aBright", new THREE.BufferAttribute(run.bright, 1));
  g.setAttribute("aCls", new THREE.BufferAttribute(Float32Array.from(run.cls), 1));
  g.setAttribute("aClu", new THREE.BufferAttribute(Float32Array.from(run.clu), 1));
  g.setAttribute("aLang", new THREE.BufferAttribute(Float32Array.from(run.lang), 1));
  const m = new THREE.ShaderMaterial({
    vertexShader: VSH, fragmentShader: FSH,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uMaxX: { value: 1e9 }, uMode: { value: 0 }, uLang: { value: 0 },
      uMinB: { value: 0 }, uScale: { value: 0.9 },
    },
  });
  return new THREE.Points(g, m);
}

function App() {
  const mountRef = useRef(null);
  const stateRef = useRef({});
  const [shared, setShared] = useState(null);
  const [runId, setRunId] = useState("run1");
  const [runMeta, setRunMeta] = useState(null);
  const [scrub, setScrub] = useState(1);
  const [mode, setMode] = useState(0);
  const [lang, setLang] = useState(0);
  const [minB, setMinB] = useState(0);
  const [hover, setHover] = useState(null);
  const [dossier, setDossier] = useState(null);

  useEffect(() => { loadShared().then(setShared); }, []);

  // three.js scene
  useEffect(() => {
    if (!shared || !mountRef.current) return;
    const el = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x101017);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, el.clientWidth / el.clientHeight, 0.5, 3000);
    camera.position.set(60, 70, 160);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true; controls.autoRotateSpeed = 0.5;
    const st = stateRef.current;
    Object.assign(st, { renderer, scene, camera, controls, points: null, run: null });

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);
    let alive = true;
    (function loop() {
      if (!alive) return;
      requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    })();
    return () => { alive = false; window.removeEventListener("resize", onResize); el.innerHTML = ""; };
  }, [shared]);

  // load run
  useEffect(() => {
    if (!shared) return;
    loadRun(runId).then((run) => {
      const st = stateRef.current;
      if (st.points) { st.scene.remove(st.points); st.points.geometry.dispose(); }
      st.run = run;
      st.points = makePoints(run);
      st.scene.add(st.points);
      st.controls.target.set(run.meta.n_positions / 2, 22, 0);
      setRunMeta(run.meta);
      setDossier(null);
    });
  }, [shared, runId]);

  // uniforms
  useEffect(() => {
    const st = stateRef.current;
    if (!st.points || !st.run) return;
    const u = st.points.material.uniforms;
    u.uMaxX.value = scrub * st.run.meta.n_positions;
    u.uMode.value = mode; u.uLang.value = lang; u.uMinB.value = minB;
  }, [scrub, mode, lang, minB, runMeta]);

  // picking (nearest projected point)
  function pick(ev, click) {
    const st = stateRef.current;
    if (!st.run || !st.camera) return;
    const rect = st.renderer.domElement.getBoundingClientRect();
    const mx = ev.clientX - rect.left, my = ev.clientY - rect.top;
    const w = rect.width, h = rect.height;
    const maxX = scrub * st.run.meta.n_positions;
    const v = new THREE.Vector3();
    let best = -1, bestScore = -1;
    const { pos, bright, cls, lang: lg, n } = st.run;
    for (let i = 0; i < n; i++) {
      if (pos[i * 3] > maxX) continue;
      const b = bright[i];
      if (b < Math.max(0.03, minB) && cls[i] < 1) continue;
      if (lang === 1 && lg[i] > 0) continue;
      if (lang === 2 && lg[i] < 1) continue;
      v.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).project(st.camera);
      if (v.z > 1) continue;
      const sx = (v.x * 0.5 + 0.5) * w, sy = (-v.y * 0.5 + 0.5) * h;
      const d2 = (sx - mx) ** 2 + (sy - my) ** 2;
      if (d2 > 400) continue;
      const score = (b + cls[i] * 0.3) / (1 + d2 * 0.01);
      if (score > bestScore) { bestScore = score; best = i; }
    }
    if (best < 0) { if (!click) setHover(null); return; }
    const wIdx = st.run.wid[best];
    const word = shared.words[wIdx];
    const gloss = shared.wordGloss?.[word.trim()];
    const moment = Math.round(pos[best * 3]);
    const closeness = Math.round((pos[best * 3 + 1] / 44) * 100);
    const kind = cls[best] > 2 ? "the word it chose at this moment"
      : cls[best] > 1 ? "a feeling word — never spoken"
      : cls[best] > 0 ? "spoken elsewhere in the answer" : "background thought";
    const info = { word, gloss, moment, closeness, kind, cluster: shared.wordCluster[wIdx] };
    if (click) setDossier(info); else setHover(info);
  }

  const clusterLabel = (c) =>
    c != null && c < (shared?.clusterLabels?.length || 0) ? shared.clusterLabels[c] : null;
  const spoken = runMeta && scrub != null
    ? runMeta.tokens.slice(runMeta.n_prompt,
        Math.max(runMeta.n_prompt, Math.floor(scrub * runMeta.n_positions))).join("")
    : "";
  const phrases = dossier && runMeta?.phrases?.[String(dossier.moment)];

  const seg = (opts, val, set) => (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {opts.map(([label, v]) => (
        <button key={label} onClick={() => set(v)}
          style={{ background: val === v ? "#3b4252" : "#1a1a22", color: "#d8dbe0",
                   border: "1px solid #333", borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>
          {label}
        </button>
      ))}
    </span>
  );

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 14px", display: "flex", gap: 14, alignItems: "center",
                    background: "#15151c", borderBottom: "1px solid #26262e", flexWrap: "wrap" }}>
        <b>MindVolume</b>
        {shared && (
          <select value={runId} onChange={(e) => setRunId(e.target.value)}
            style={{ background: "#1a1a22", color: "#d8dbe0", border: "1px solid #333",
                     borderRadius: 6, padding: "4px 8px", maxWidth: 280 }}>
            {(shared.groups || [...new Set(shared.runs.map((r) => r.group || "other"))]).map((g) => (
              <optgroup key={g} label={g}>
                {shared.runs.filter((r) => (r.group || "other") === g).map((r) => (
                  <option key={r.id} value={r.id}>{r.title}</option>
                ))}
              </optgroup>
            ))}
          </select>
        )}
        {seg([["story", 0], ["anatomy", 1]], mode, setMode)}
        {seg([["both", 0], ["english", 1], ["中文", 2]], lang, setLang)}
        <label style={{ fontSize: 12 }}>detail
          <input type="range" min="0" max="0.08" step="0.002" value={minB}
                 onChange={(e) => setMinB(+e.target.value)} /></label>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <div ref={mountRef} style={{ position: "absolute", inset: 0 }}
             onPointerMove={(e) => pick(e, false)} onClick={(e) => pick(e, true)} />
        {hover && (
          <div style={{ position: "absolute", top: 10, left: 10, background: "#000a",
                        padding: "6px 12px", borderRadius: 999, fontFamily: "monospace", fontSize: 13 }}>
            {hover.word.replace(" ", "␣")}
            {hover.gloss ? `  “${hover.gloss}”` : ""} · {hover.kind} · moment {hover.moment},
            {" "}{hover.closeness}% of the way to being spoken
          </div>
        )}
        {dossier && (
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 320,
                        background: "#000c", padding: 16, overflowY: "auto", fontSize: 13 }}>
            <div style={{ fontSize: 22, fontFamily: "monospace", fontWeight: 700 }}>
              {dossier.word.replace(" ", "␣")}</div>
            {dossier.gloss && <div style={{ color: "#8cd9ff", fontStyle: "italic" }}>“{dossier.gloss}”</div>}
            <div style={{ color: "#999", margin: "6px 0" }}>{dossier.kind}</div>
            {clusterLabel(dossier.cluster) && <div>family: {clusterLabel(dossier.cluster)}</div>}
            <hr style={{ borderColor: "#333" }} />
            {phrases ? (
              <>
                <b>At this moment, each depth was about to say:</b>
                {[["deep (45%)", "L45"], ["almost-final (86%)", "L55"], ["at the door (98%)", "L61"]]
                  .map(([lab, k]) => (
                    <div key={k} style={{ margin: "8px 0" }}>
                      <div style={{ fontSize: 11, color: "#888" }}>{lab}</div>
                      <div style={{ fontFamily: "serif" }}>
                        “{(phrases[k] || "—").split("<|")[0].replace(/\n/g, " ").trim()}”</div>
                    </div>
                  ))}
                <div style={{ margin: "8px 0" }}>
                  <div style={{ fontSize: 11, color: "#888" }}>what it actually said</div>
                  <div style={{ fontFamily: "serif", color: "#ffd257" }}>
                    “{runMeta.tokens.slice(dossier.moment + 1, dossier.moment + 13).join("")}”</div>
                </div>
              </>
            ) : (
              <div style={{ color: "#888" }}>moment {dossier.moment} · {dossier.closeness}% of
                the way to being spoken</div>
            )}
            <button onClick={() => setDossier(null)}
              style={{ marginTop: 10, background: "#1a1a22", color: "#d8dbe0",
                       border: "1px solid #333", borderRadius: 6, padding: "3px 10px" }}>close</button>
          </div>
        )}
        <div style={{ position: "absolute", left: 0, right: dossier ? 320 : 0, bottom: 0,
                      background: "#000a", padding: "10px 16px" }}>
          <div style={{ color: "#ffd257", fontFamily: "serif", fontSize: 14, whiteSpace: "nowrap",
                        overflow: "hidden", textOverflow: "ellipsis" }}>
            {spoken || "(reading the question…)"}
          </div>
          <label style={{ fontSize: 12, display: "flex", gap: 8, alignItems: "center" }}>
            read the conversation
            <input style={{ flex: 1 }} type="range" min="0" max="1" step="0.002" value={scrub}
                   onChange={(e) => setScrub(+e.target.value)} />
          </label>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
