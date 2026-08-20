import SwiftUI
import MetalKit

final class InteractiveMTKView: MTKView {
    weak var renderer: Renderer?
    private var downPoint: CGPoint = .zero
    override var acceptsFirstResponder: Bool { true }

    override func updateTrackingAreas() {
        super.updateTrackingAreas()
        trackingAreas.forEach(removeTrackingArea)
        addTrackingArea(NSTrackingArea(rect: bounds,
            options: [.mouseMoved, .activeInKeyWindow, .inVisibleRect], owner: self))
    }
    private func devicePoint(_ event: NSEvent) -> CGPoint {
        let p = convert(event.locationInWindow, from: nil)
        let scale = window?.backingScaleFactor ?? 2
        return CGPoint(x: p.x * scale, y: (bounds.height - p.y) * scale)
    }
    override func mouseMoved(with event: NSEvent) {
        renderer?.hoverPoint = devicePoint(event)
    }
    override func mouseExited(with event: NSEvent) { renderer?.hoverPoint = nil }
    override func mouseDown(with event: NSEvent) {
        downPoint = devicePoint(event)
    }
    override func mouseUp(with event: NSEvent) {
        let p = devicePoint(event)
        let dx = p.x - downPoint.x, dy = p.y - downPoint.y
        if dx*dx + dy*dy < 36 {
            renderer?.clickPoint = p
            renderer?.autoOrbit = false     // inspecting a node shouldn't fight the drift
        }
    }
    override func mouseDragged(with event: NSEvent) {
        guard let r = renderer else { return }
        r.autoOrbit = false
        r.azimuth -= Float(event.deltaX) * 0.006
        r.elevation = min(1.4, max(-1.4, r.elevation + Float(event.deltaY) * 0.006))
    }
    override func scrollWheel(with event: NSEvent) {
        guard let r = renderer else { return }
        r.distance = min(900, max(30, r.distance - Float(event.scrollingDeltaY) * 0.8))
    }
}

struct MetalView: NSViewRepresentable {
    let renderer: Renderer
    @Binding var scrub: Double
    @Binding var autoOrbit: Bool
    @Binding var anatomy: Bool
    @Binding var density: Double
    @Binding var langMode: Int

    func makeNSView(context: Context) -> InteractiveMTKView {
        let v = InteractiveMTKView(frame: .zero, device: renderer.device)
        v.delegate = renderer
        v.renderer = renderer
        v.preferredFramesPerSecond = 60
        v.colorPixelFormat = .bgra8Unorm
        return v
    }
    func updateNSView(_ v: InteractiveMTKView, context: Context) {
        renderer.scrub = Float(scrub)
        renderer.mode = anatomy ? 1 : 0
        renderer.minBright = Float(density)
        renderer.langMode = Float(langMode)
        if autoOrbit { renderer.autoOrbit = true }
    }
}

@MainActor
final class AppModel: ObservableObject {
    let base: String
    let shared: SharedMeta
    let renderer: Renderer
    @Published var runId: String

    init() {
        base = ProcessInfo.processInfo.environment["MINDVIZ_DATA"]
            ?? "/Volumes/ExternalSSD/cc-lens/mindviz"
        do {
            shared = try ParticleLoader.loadShared(base)
            let first = shared.runs[0].id
            runId = first
            let f = try ParticleLoader.loadRun(base, first)
            renderer = try Renderer(device: MTLCreateSystemDefaultDevice()!,
                                    field: f, shared: shared)
        } catch { fatalError("J Volume failed to start: \(error)") }
    }

    func switchRun(_ id: String) {
        guard id != runId, let f = try? ParticleLoader.loadRun(base, id) else { return }
        runId = id
        renderer.setField(f)
    }

    var field: ParticleField { renderer.field }
}

struct DossierView: View {
    let sel: Selection
    let meta: RunMeta
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(sel.word.replacingOccurrences(of: " ", with: "\u{2423}"))
                .font(.system(size: 22, weight: .bold, design: .monospaced))
            if let g = sel.gloss {
                Text("\u{201C}\(g)\u{201D}")
                    .font(.system(size: 14, design: .serif))
                    .foregroundStyle(Color(red: 0.55, green: 0.85, blue: 1.0))
            }
            Text(sel.kindLine).font(.callout).foregroundStyle(.secondary)
            if let cl = sel.clusterLabel {
                HStack(spacing: 6) {
                    Circle().fill(color(sel.clusterColor)).frame(width: 10, height: 10)
                    Text("family: \(cl)").font(.callout)
                }
            }
            Divider()
            Text("held at **\(sel.heldMoments)** points in this conversation")
            Text(sel.spokenInRun ? "was spoken at least once here"
                                 : "never spoken in this conversation")
                .foregroundStyle(sel.spokenInRun ? .primary : Color(red: 1, green: 0.42, blue: 0.62))
            Divider()
            if let ph = meta.phrases?[String(sel.moment)] {
                Text("At this moment, each depth was about to say:")
                    .font(.headline)
                phraseRow("deep (45%)", ph["L45"])
                phraseRow("almost-final (86%)", ph["L55"])
                phraseRow("at the door (98%)", ph["L61"])
                let start = sel.moment + 1
                let end = min(meta.tokens.count, start + 12)
                if start < end {
                    phraseRow("what it actually said",
                              meta.tokens[start..<end].joined(), gold: true)
                }
            } else {
                Text("moment \(sel.moment) · \(sel.closenessPct)% of the way to being spoken")
                    .font(.callout).foregroundStyle(.secondary)
            }
            Spacer()
        }
        .padding(16)
        .frame(width: 330, alignment: .topLeading)
        .background(.black.opacity(0.75))
    }

    func clean(_ s: String?) -> String {
        guard var t = s else { return "—" }
        if let r = t.range(of: "<|") { t = String(t[..<r.lowerBound]) }
        return t.replacingOccurrences(of: "\n", with: " ")
            .trimmingCharacters(in: .whitespaces)
    }
    @ViewBuilder func phraseRow(_ label: String, _ s: String?, gold: Bool = false) -> some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(label).font(.caption2).foregroundStyle(.secondary)
            Text("\u{201C}\(clean(s))\u{201D}")
                .font(.system(size: 12, design: .serif))
                .foregroundStyle(gold ? Color(red: 1, green: 0.82, blue: 0.34) : .primary)
        }
    }
    func color(_ c: SIMD3<Float>?) -> Color {
        guard let c else { return .gray }
        return Color(red: Double(c.x), green: Double(c.y), blue: Double(c.z))
    }
}

struct LegendView: View {
    let shared: SharedMeta
    let anatomy: Bool
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            if anatomy {
                Text("families of the unspoken").font(.caption.bold())
                ForEach(Array(shared.clusterLabels.enumerated()), id: \.offset) { i, label in
                    HStack(spacing: 6) {
                        Circle().fill(Color(hex: shared.clusterColors[i])).frame(width: 8, height: 8)
                        Text(label).font(.caption)
                    }
                }
                HStack(spacing: 6) {
                    Circle().fill(Color(white: 0.35)).frame(width: 8, height: 8)
                    Text("spoken / other").font(.caption)
                }
            } else {
                Text("reading the field").font(.caption.bold())
                legendRow(Color(red: 0.5, green: 0.7, blue: 0.95), "background thought (brighter = stronger)")
                legendRow(Color(red: 1, green: 0.82, blue: 0.34), "spoken somewhere in the answer")
                legendRow(Color(red: 1, green: 0.42, blue: 0.62), "feeling words — never spoken")
                legendRow(.white, "the word it chose at that moment")
            }
        }
        .padding(10)
        .background(.black.opacity(0.6), in: RoundedRectangle(cornerRadius: 10))
    }
    @ViewBuilder func legendRow(_ c: Color, _ t: String) -> some View {
        HStack(spacing: 6) {
            Circle().fill(c).frame(width: 8, height: 8)
            Text(t).font(.caption)
        }
    }
}

extension Color {
    init(hex: String) {
        var h = hex; if h.hasPrefix("#") { h.removeFirst() }
        let v = UInt32(h, radix: 16) ?? 0x888888
        self.init(red: Double((v >> 16) & 0xff) / 255,
                  green: Double((v >> 8) & 0xff) / 255,
                  blue: Double(v & 0xff) / 255)
    }
}

struct DemoSeg {
    let t0: Double, t1: Double
    let run: String
    let anatomy: Bool
    let lang: Int
    let s0: Double, s1: Double
    let caption: String
}

let DEMO_SCRIPT: [DemoSeg] = [
    DemoSeg(t0: 9,   t1: 19,  run: "run1", anatomy: false, lang: 0, s0: 1.0,  s1: 1.0,
            caption: "Every glowing dot is a word the model considered while answering. Height = how close it came to being spoken."),
    DemoSeg(t0: 19,  t1: 33,  run: "run1", anatomy: false, lang: 0, s0: 0.0,  s1: 1.0,
            caption: "Scrubbing the conversation: gold = spoken · blue = held but never said · pink = feeling-words it held the whole time."),
    DemoSeg(t0: 33,  t1: 44,  run: "run1", anatomy: false, lang: 2, s0: 1.0,  s1: 1.0,
            caption: "The Chinese channel — mid-layer thoughts in 中文 that never reach the output (hover for translations)."),
    DemoSeg(t0: 44,  t1: 55,  run: "run1", anatomy: true,  lang: 0, s0: 1.0,  s1: 1.0,
            caption: "Anatomy view — the never-spoken vocabulary self-organizes into ten families: cognition, monitoring, metaphor…"),
    DemoSeg(t0: 55,  t1: 61,  run: "arith_easy", anatomy: false, lang: 0, s0: 0.0, s1: 0.19,
            caption: "NEW — watch it do math: \"What is (10+20)/2?\""),
    DemoSeg(t0: 61,  t1: 71,  run: "arith_easy", anatomy: false, lang: 0, s0: 0.19, s1: 0.19,
            caption: "Frozen at the end of the QUESTION: the answer digits are already lit — computed while reading, before one word is written."),
    DemoSeg(t0: 71,  t1: 82,  run: "arith_easy", anatomy: false, lang: 0, s0: 0.19, s1: 1.0,
            caption: "The prose is theater — the digits vanish, then re-stage just in time at each equals sign."),
    DemoSeg(t0: 82,  t1: 88,  run: "arith_hard", anatomy: false, lang: 0, s0: 0.0, s1: 0.14,
            caption: "The hard one: (17+29)/2. Same question shape — but now the read-time answer is GONE."),
    DemoSeg(t0: 88,  t1: 99,  run: "arith_hard", anatomy: false, lang: 0, s0: 0.14, s1: 0.90,
            caption: "46 and 23 only materialize at the equals signs — for hard problems the written steps are real computation."),
    DemoSeg(t0: 99,  t1: 110, run: "arith_hard", anatomy: false, lang: 2, s0: 0.90, s1: 0.90,
            caption: "And the result arrives in Chinese first: 二十三 (twenty-three) in the mid-band, before the English digits."),
    DemoSeg(t0: 110, t1: 119, run: "run1", anatomy: false, lang: 0, s0: 1.0, s1: 1.0,
            caption: "J Volume — open source · github.com/jeffreywilliamportfolio/MindVolume"),
]

struct LandingView: View {
    let shared: SharedMeta
    let onSelect: (String) -> Void
    let onDismiss: () -> Void
    var groups: [String] {
        var seen: [String] = []
        for r in shared.runs {
            let g = r.group ?? "other"
            if !seen.contains(g) { seen.append(g) }
        }
        return seen
    }
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text("J Volume")
                .font(.system(size: 34, weight: .bold))
            Text("An explorable map of what a language model was \u{201C}thinking\u{201D} while it answered.")
                .font(.system(size: 16))
                .foregroundStyle(.secondary)
                .padding(.top, 4)
            HStack(spacing: 18) {
                label(Color(red: 0.5, green: 0.7, blue: 0.95), "background thought")
                label(Color(red: 1, green: 0.82, blue: 0.34), "spoken in the answer")
                label(Color(red: 1, green: 0.42, blue: 0.62), "feelings, never said")
                label(.white, "the chosen next word")
            }
            .padding(.top, 12)
            Divider().padding(.vertical, 14)
            Text("THE CATALOG — \(shared.runs.count) CAPTURES · CLICK ONE TO ENTER")
                .font(.caption.bold()).foregroundStyle(.secondary)
            ScrollView {
                VStack(alignment: .leading, spacing: 10) {
                    ForEach(groups, id: \.self) { g in
                        Text(g.uppercased())
                            .font(.system(size: 11, weight: .bold))
                            .foregroundStyle(Color(red: 0.55, green: 0.85, blue: 1.0))
                            .padding(.top, 8)
                        ForEach(shared.runs.filter { ($0.group ?? "") == g }, id: \.id) { r in
                            Button { onSelect(r.id) } label: {
                                VStack(alignment: .leading, spacing: 5) {
                                    Text(r.title).font(.system(size: 15, weight: .semibold))
                                    if let p = r.prompt {
                                        Text("\u{201C}\(p)\u{201D}")
                                            .font(.system(size: 12.5, design: .serif))
                                            .foregroundStyle(Color(red: 1, green: 0.82, blue: 0.34))
                                            .lineLimit(2)
                                    }
                                    if let iv = r.intervention {
                                        Text(iv)
                                            .font(.system(size: 11.5, design: .monospaced))
                                            .foregroundStyle(Color(red: 0.55, green: 0.95, blue: 0.75))
                                    }
                                    if let lf = r.lookFor {
                                        Text("Look for: \(lf)")
                                            .font(.system(size: 12))
                                            .foregroundStyle(.secondary)
                                            .lineLimit(3)
                                    }
                                }
                                .frame(maxWidth: .infinity, alignment: .leading)
                                .padding(10)
                                .background(.white.opacity(0.06), in: RoundedRectangle(cornerRadius: 10))
                            }
                            .buttonStyle(.plain)
                        }
                    }
                }
                .padding(.vertical, 2)
            }
            HStack {
                Text("Drag to orbit · scroll to zoom · slider to scrub time · click any dot for its dossier")
                    .font(.caption).foregroundStyle(.secondary)
                Spacer()
                Button("Enter the field") { onDismiss() }
                    .keyboardShortcut(.defaultAction)
            }
            .padding(.top, 12)
        }
        .padding(28)
        .frame(width: 780, height: 640)
        .background(.black.opacity(0.88), in: RoundedRectangle(cornerRadius: 18))
        .overlay(RoundedRectangle(cornerRadius: 18).stroke(.white.opacity(0.12)))
    }
    @ViewBuilder func label(_ c: Color, _ t: String) -> some View {
        HStack(spacing: 6) {
            Circle().fill(c).frame(width: 9, height: 9)
            Text(t).font(.system(size: 12))
        }
    }
}

struct ContentView: View {
    @ObservedObject var model: AppModel
    @ObservedObject var renderer: Renderer
    @State private var scrub: Double = 1.0
    @State private var autoOrbit = true
    @State private var anatomy = false
    @State private var density: Double = 0.0
    @State private var langMode: Int = 0
    @State private var showLegend = true
    @State private var showLanding = true
    private var demoMode: Bool { ProcessInfo.processInfo.environment["JVOLUME_DEMO"] != nil }
    @State private var demoStart: Date? = nil
    @State private var demoCaption: String? = nil
    private let demoTimer = Timer.publish(every: 1.0/30.0, on: .main, in: .common).autoconnect()

    func demoTick() {
        let goPath = ProcessInfo.processInfo.environment["JVOLUME_DEMO_GO"] ?? "/tmp/jvolume_go"
        if demoStart == nil {
            showLanding = true
            if FileManager.default.fileExists(atPath: goPath) { demoStart = Date() }
            return
        }
        let t = Date().timeIntervalSince(demoStart!)
        if t < 9 {                       // opening shot: the landing card itself
            showLanding = true
            demoCaption = nil
            return
        }
        showLanding = false
        guard let seg = DEMO_SCRIPT.first(where: { t >= $0.t0 && t < $0.t1 }) else {
            demoCaption = nil; return
        }
        let f = (t - seg.t0) / max(0.001, seg.t1 - seg.t0)
        scrub = seg.s0 + (seg.s1 - seg.s0) * f
        if anatomy != seg.anatomy { anatomy = seg.anatomy }
        if langMode != seg.lang { langMode = seg.lang }
        if model.runId != seg.run { model.switchRun(seg.run) }
        // math runs are ~100 positions vs ~250: ease the camera in so they fill the frame
        let target: Float = seg.run.hasPrefix("arith") ? 110 : 190
        renderer.distance += (target - renderer.distance) * 0.04
        demoCaption = seg.caption
    }

    var spokenSoFar: String {
        let meta = model.field.meta
        let upto = min(meta.tokens.count, Int(scrub * Double(meta.n_positions)))
        guard upto > meta.n_prompt else { return "(reading the question…)" }
        return meta.tokens[meta.n_prompt..<upto].joined()
            .replacingOccurrences(of: "\n", with: " ")
    }

    var body: some View {
        HStack(spacing: 0) {
            ZStack(alignment: .bottom) {
                MetalView(renderer: renderer, scrub: $scrub, autoOrbit: $autoOrbit,
                          anatomy: $anatomy, density: $density, langMode: $langMode)
                    .ignoresSafeArea()
                VStack(spacing: 8) {
                    if let hl = renderer.hoverLabel {
                        Text(hl)
                            .font(.system(size: 13, weight: .medium, design: .monospaced))
                            .foregroundStyle(.white)
                            .padding(.vertical, 4).padding(.horizontal, 10)
                            .background(.black.opacity(0.7), in: Capsule())
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    Text(spokenSoFar.isEmpty ? "…" : spokenSoFar)
                        .font(.system(size: 14, design: .serif))
                        .foregroundStyle(Color(red: 1, green: 0.82, blue: 0.34))
                        .lineLimit(2)
                        .frame(maxWidth: .infinity, alignment: .leading)
                    HStack(spacing: 12) {
                        Text("read the conversation").font(.caption).foregroundStyle(.secondary)
                        Slider(value: $scrub, in: 0...1)
                        Text("detail").font(.caption).foregroundStyle(.secondary)
                        Slider(value: $density, in: 0...0.08).frame(width: 90)
                        Toggle("drift", isOn: $autoOrbit).toggleStyle(.switch).font(.caption)
                    }
                }
                .padding(14)
                .background(.black.opacity(0.55), in: RoundedRectangle(cornerRadius: 12))
                .padding(16)
            }
            .overlay(alignment: .topLeading) {
                if showLegend && !showLanding {
                    LegendView(shared: model.shared, anatomy: anatomy).padding(12)
                }
            }
            .overlay(alignment: .top) {
                if let cap = demoCaption, !showLanding {
                    Text(cap)
                        .font(.system(size: 18, weight: .semibold))
                        .multilineTextAlignment(.center)
                        .padding(.vertical, 10).padding(.horizontal, 20)
                        .background(.black.opacity(0.72), in: RoundedRectangle(cornerRadius: 12))
                        .frame(maxWidth: 980)
                        .padding(.top, 12)
                }
            }
            .overlay {
                if showLanding {
                    ZStack {
                        Color.black.opacity(0.55).ignoresSafeArea()
                        LandingView(shared: model.shared,
                                    onSelect: { id in model.switchRun(id); showLanding = false },
                                    onDismiss: { showLanding = false })
                    }
                }
            }
            if let sel = renderer.selection {
                DossierView(sel: sel, meta: model.field.meta)
            }
        }
        .onReceive(demoTimer) { _ in if demoMode { demoTick() } }
        .toolbar {
            ToolbarItemGroup {
                Picker("conversation", selection: Binding(
                    get: { model.runId },
                    set: { model.switchRun($0) })) {
                    ForEach(Array(Set(model.shared.runs.compactMap { $0.group ?? "other" }))
                        .sorted { a, b in
                            let order = model.shared.runs.compactMap { $0.group ?? "other" }
                            return (order.firstIndex(of: a) ?? 0) < (order.firstIndex(of: b) ?? 0)
                        }, id: \.self) { g in
                        Section(g) {
                            ForEach(model.shared.runs.filter { ($0.group ?? "other") == g }, id: \.id) { r in
                                Text(r.title).tag(r.id)
                            }
                        }
                    }
                }
                .pickerStyle(.menu)
                .frame(maxWidth: 260)
                Picker("view", selection: $anatomy) {
                    Text("story").tag(false)
                    Text("anatomy").tag(true)
                }
                .pickerStyle(.segmented)
                Picker("language", selection: $langMode) {
                    Text("both").tag(0)
                    Text("english").tag(1)
                    Text("中文").tag(2)
                }
                .pickerStyle(.segmented)
                Toggle("legend", isOn: $showLegend)
                Button("about") { showLanding = true }
            }
        }
        .frame(minWidth: 1250, minHeight: 750)
        .navigationTitle("J Volume — what it was thinking while it answered")
    }
}

@main
struct JVolumeApp: App {
    @StateObject private var model = AppModel()

    var body: some Scene {
        WindowGroup {
            ContentView(model: model, renderer: model.renderer)
                .onAppear {
                    NSApp.setActivationPolicy(.regular)
                    NSApp.activate(ignoringOtherApps: true)
                    NSApp.windows.first?.makeKeyAndOrderFront(nil)
                }
        }
    }
}
