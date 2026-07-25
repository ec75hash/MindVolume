import MetalKit
import simd
import Combine

struct Selection {
    var word: String
    var kindLine: String
    var clusterLabel: String?
    var clusterColor: SIMD3<Float>?
    var moment: Int
    var closenessPct: Int
    var heldMoments: Int
    var spokenInRun: Bool
    var gloss: String?
}

final class Renderer: NSObject, MTKViewDelegate, ObservableObject {
    @Published var hoverLabel: String? = nil
    @Published var selection: Selection? = nil

    var hoverPoint: CGPoint? = nil { didSet { needsPick = true } }
    var clickPoint: CGPoint? = nil { didSet { needsClick = clickPoint != nil } }
    var viewSize = CGSize(width: 1, height: 1)
    private var needsPick = false
    private var needsClick = false
    private var lastMVP = matrix_identity_float4x4

    let device: MTLDevice
    let queue: MTLCommandQueue
    var particlePipeline: MTLRenderPipelineState!
    var planePipeline: MTLRenderPipelineState!

    var posBuf: MTLBuffer!
    var brightBuf: MTLBuffer!
    var classBuf: MTLBuffer!
    var clusterBuf: MTLBuffer!
    var langBuf: MTLBuffer!
    var field: ParticleField
    let shared: SharedMeta

    var azimuth: Float = -0.9
    var elevation: Float = 0.35
    var distance: Float = 190
    var target = SIMD3<Float>(77, 22, 0)
    var autoOrbit = true

    var scrub: Float = 1.0
    var pointScale: Float = 0.55
    var mode: Float = 0          // 0 story, 1 anatomy
    var minBright: Float = 0.0
    var langMode: Float = 0      // 0 both, 1 english, 2 chinese

    struct Uniforms {
        var mvp: simd_float4x4
        var camRight: SIMD3<Float>
        var camUp: SIMD3<Float>
        var maxConversationX: Float
        var pointScale: Float
        var mode: Float
        var minBright: Float
        var langMode: Float
    }

    init(device: MTLDevice, field: ParticleField, shared: SharedMeta) throws {
        self.device = device
        self.queue = device.makeCommandQueue()!
        self.field = field
        self.shared = shared
        super.init()

        let lib = try device.makeLibrary(source: shaderSource, options: nil)

        let pd = MTLRenderPipelineDescriptor()
        pd.vertexFunction = lib.makeFunction(name: "particle_vertex")
        pd.fragmentFunction = lib.makeFunction(name: "particle_fragment")
        pd.colorAttachments[0].pixelFormat = .bgra8Unorm
        pd.colorAttachments[0].isBlendingEnabled = true
        pd.colorAttachments[0].rgbBlendOperation = .add
        pd.colorAttachments[0].alphaBlendOperation = .add
        pd.colorAttachments[0].sourceRGBBlendFactor = .one
        pd.colorAttachments[0].destinationRGBBlendFactor = .one
        pd.colorAttachments[0].sourceAlphaBlendFactor = .one
        pd.colorAttachments[0].destinationAlphaBlendFactor = .one
        particlePipeline = try device.makeRenderPipelineState(descriptor: pd)

        let pp = MTLRenderPipelineDescriptor()
        pp.vertexFunction = lib.makeFunction(name: "plane_vertex")
        pp.fragmentFunction = lib.makeFunction(name: "plane_fragment")
        pp.colorAttachments[0].pixelFormat = .bgra8Unorm
        pp.colorAttachments[0].isBlendingEnabled = true
        pp.colorAttachments[0].sourceRGBBlendFactor = .sourceAlpha
        pp.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
        planePipeline = try device.makeRenderPipelineState(descriptor: pp)

        makeBuffers()
    }

    func makeBuffers() {
        posBuf = device.makeBuffer(bytes: field.positions, length: field.positions.count * 4)
        brightBuf = device.makeBuffer(bytes: field.brightness, length: field.brightness.count * 4)
        classBuf = device.makeBuffer(bytes: field.classes, length: field.classes.count * 4)
        clusterBuf = device.makeBuffer(bytes: field.clusters, length: field.clusters.count * 4)
        langBuf = device.makeBuffer(bytes: field.langs, length: field.langs.count * 4)
    }

    func setField(_ f: ParticleField) {
        field = f
        makeBuffers()
        target = SIMD3<Float>(Float(f.meta.n_positions) / 2, 22, 0)
        selection = nil
    }

    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {}

    func draw(in view: MTKView) {
        guard let drawable = view.currentDrawable,
              let rpd = view.currentRenderPassDescriptor else { return }
        if autoOrbit { azimuth += 0.0018 }

        let aspect = Float(view.drawableSize.width / max(1, view.drawableSize.height))
        let eye = target + SIMD3<Float>(
            distance * cos(elevation) * sin(azimuth),
            distance * sin(elevation),
            distance * cos(elevation) * cos(azimuth))
        let viewM = lookAt(eye: eye, center: target, up: SIMD3<Float>(0, 1, 0))
        let projM = perspective(fovyRadians: 0.9, aspect: aspect, near: 0.5, far: 3000)
        let fwd = simd_normalize(target - eye)
        let right = simd_normalize(simd_cross(fwd, SIMD3<Float>(0, 1, 0)))
        let up = simd_cross(right, fwd)

        var u = Uniforms(mvp: projM * viewM, camRight: right, camUp: up,
                         maxConversationX: scrub * Float(field.meta.n_positions),
                         pointScale: pointScale, mode: mode, minBright: minBright, langMode: langMode)
        lastMVP = u.mvp
        viewSize = view.drawableSize
        if needsPick { needsPick = false; runPick(hover: true) }
        if needsClick { needsClick = false; runPick(hover: false) }

        rpd.colorAttachments[0].clearColor = MTLClearColor(red: 0.063, green: 0.063, blue: 0.09, alpha: 1)
        let cb = queue.makeCommandBuffer()!
        let enc = cb.makeRenderCommandEncoder(descriptor: rpd)!

        enc.setRenderPipelineState(particlePipeline)
        enc.setVertexBuffer(posBuf, offset: 0, index: 0)
        enc.setVertexBuffer(brightBuf, offset: 0, index: 1)
        enc.setVertexBuffer(classBuf, offset: 0, index: 2)
        enc.setVertexBuffer(clusterBuf, offset: 0, index: 5)
        enc.setVertexBuffer(langBuf, offset: 0, index: 6)
        enc.setVertexBytes(&u, length: MemoryLayout<Uniforms>.stride, index: 3)
        enc.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 6,
                           instanceCount: field.count)

        enc.setRenderPipelineState(planePipeline)
        var rect = SIMD4<Float>(0, Float(field.meta.n_positions), -30, 30)
        enc.setVertexBytes(&u, length: MemoryLayout<Uniforms>.stride, index: 3)
        enc.setVertexBytes(&rect, length: 16, index: 4)
        enc.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 6)

        enc.endEncoding()
        cb.present(drawable)
        cb.commit()
    }

    private func bestParticle(at pt: CGPoint) -> Int {
        let maxX = scrub * Float(field.meta.n_positions)
        let w = Float(viewSize.width), h = Float(viewSize.height)
        let hx = Float(pt.x), hy = Float(pt.y)
        var bestScore: Float = -1; var bestIdx = -1
        let m = lastMVP
        for i in 0..<field.count {
            let px = field.positions[i*3], py = field.positions[i*3+1], pz = field.positions[i*3+2]
            if px > maxX { continue }
            let b = field.brightness[i]
            if b < max(0.03, minBright) && field.classes[i] < 0.5 { continue }
            let clip = m * SIMD4<Float>(px, py, pz, 1)
            if clip.w <= 0 { continue }
            let sx = (clip.x/clip.w * 0.5 + 0.5) * w
            let sy = (1 - (clip.y/clip.w * 0.5 + 0.5)) * h
            let dx = sx - hx, dy = sy - hy
            let d2 = dx*dx + dy*dy
            if d2 > 500 { continue }
            let score = (b + field.classes[i] * 0.3) / (1 + d2 * 0.01)
            if score > bestScore { bestScore = score; bestIdx = i }
        }
        return bestIdx
    }

    private func kindLine(_ cls: Float) -> String {
        cls > 2.5 ? "the word it chose at this moment"
        : cls > 1.5 ? "a feeling word — never spoken"
        : cls > 0.5 ? "spoken elsewhere in the answer"
        : "background thought"
    }

    private func runPick(hover: Bool) {
        let pt = hover ? hoverPoint : clickPoint
        guard let pt else {
            if hover, hoverLabel != nil { DispatchQueue.main.async { self.hoverLabel = nil } }
            return
        }
        let idx = bestParticle(at: pt)
        if idx < 0 {
            DispatchQueue.main.async { if hover { self.hoverLabel = nil } }
            return
        }
        let wIdx = Int(field.wordIdx[idx])
        let word = shared.words[wIdx]
        let moment = Int(field.positions[idx*3])
        let depth = Int(field.positions[idx*3+1])
        let cls = field.classes[idx]
        let closeness = Int((Float(depth) / 44.0) * 100)

        if hover {
            var shown = word.replacingOccurrences(of: " ", with: "\u{2423}")
            if let g = shared.wordGloss?[word.trimmingCharacters(in: .whitespaces)] {
                shown += "  \u{201C}\(g)\u{201D}"
            }
            let label = "\(shown)   ·   \(kindLine(cls))   ·   moment \(moment), \(closeness)% of the way to being spoken"
            DispatchQueue.main.async { self.hoverLabel = label }
        } else {
            var held = 0
            for i in 0..<field.count where field.wordIdx[i] == UInt32(wIdx) { held += 1 }
            let cl = wIdx < shared.wordCluster.count ? shared.wordCluster[wIdx] : 255
            let sel = Selection(
                word: word,
                kindLine: kindLine(cls),
                clusterLabel: cl < shared.clusterLabels.count ? shared.clusterLabels[cl] : nil,
                clusterColor: cl < shared.clusterColors.count ? hexColor(shared.clusterColors[cl]) : nil,
                moment: moment,
                closenessPct: closeness,
                heldMoments: held,
                spokenInRun: field.meta.tokens.contains(word),
                gloss: shared.wordGloss?[word.trimmingCharacters(in: .whitespaces)])
            DispatchQueue.main.async {
                self.selection = sel
                self.clickPoint = nil
            }
        }
    }
}

func lookAt(eye: SIMD3<Float>, center: SIMD3<Float>, up: SIMD3<Float>) -> simd_float4x4 {
    let f = simd_normalize(center - eye)
    let s = simd_normalize(simd_cross(f, up))
    let u = simd_cross(s, f)
    return simd_float4x4(columns: (
        SIMD4<Float>(s.x, u.x, -f.x, 0),
        SIMD4<Float>(s.y, u.y, -f.y, 0),
        SIMD4<Float>(s.z, u.z, -f.z, 0),
        SIMD4<Float>(-simd_dot(s, eye), -simd_dot(u, eye), simd_dot(f, eye), 1)))
}

func perspective(fovyRadians: Float, aspect: Float, near: Float, far: Float) -> simd_float4x4 {
    let ys = 1 / tan(fovyRadians * 0.5)
    let xs = ys / aspect
    let zs = far / (near - far)
    return simd_float4x4(columns: (
        SIMD4<Float>(xs, 0, 0, 0),
        SIMD4<Float>(0, ys, 0, 0),
        SIMD4<Float>(0, 0, zs, -1),
        SIMD4<Float>(0, 0, zs * near, 0)))
}
