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
        if dx*dx + dy*dy < 36 { renderer?.clickPoint = p }
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
        let fm = FileManager.default
        let cwd = fm.currentDirectoryPath
        let candidates = [
            ProcessInfo.processInfo.environment["MINDVIZ_DATA"],
            cwd + "/../data", cwd + "/data",
        ].compactMap { $0 }
        base = candidates.first { fm.fileExists(atPath: $0 + "/v2_shared.json") }
            ?? (cwd + "/data")
        do {
            shared = try ParticleLoader.loadShared(base)
            let first = shared.runs[0].id
            runId = first
            let f = try ParticleLoader.loadRun(base, first)
            renderer = try Renderer(device: MTLCreateSystemDefaultDevice()!,
                                    field: f, shared: shared)
        } catch { fatalError("MindVolume failed to start: \(error)") }
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

struct ContentView: View {
    @ObservedObject var model: AppModel
    @ObservedObject var renderer: Renderer
    @State private var scrub: Double = 1.0
    @State private var autoOrbit = true
    @State private var anatomy = false
    @State private var density: Double = 0.0
    @State private var langMode: Int = 0
    @State private var showLegend = true

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
                if showLegend {
                    LegendView(shared: model.shared, anatomy: anatomy).padding(12)
                }
            }
            if let sel = renderer.selection {
                DossierView(sel: sel, meta: model.field.meta)
            }
        }
        .toolbar {
            ToolbarItemGroup {
                Picker("conversation", selection: Binding(
                    get: { model.runId },
                    set: { model.switchRun($0) })) {
                    ForEach(model.shared.runs, id: \.id) { r in
                        Text(r.title).tag(r.id)
                    }
                }
                .pickerStyle(.segmented)
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
            }
        }
        .frame(minWidth: 1250, minHeight: 750)
        .navigationTitle("MindVolume — what it was thinking while it answered")
    }
}

@main
struct MindVolumeApp: App {
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
