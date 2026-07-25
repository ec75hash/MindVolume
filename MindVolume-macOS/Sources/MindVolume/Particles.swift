import Foundation
import simd

struct SharedMeta: Codable {
    struct RunRef: Codable { var id: String; var title: String }
    var words: [String]
    var wordCluster: [Int]
    var wordLang: [Int]
    var clusterLabels: [String]
    var clusterColors: [String]
    var runs: [RunRef]
    var wordGloss: [String: String]?
}

struct RunMeta: Codable {
    var tokens: [String]
    var n_prompt: Int
    var n_positions: Int
    var phrases: [String: [String: String]]?
}

struct ParticleField {
    var count: Int
    var positions: [Float]
    var brightness: [Float]
    var classes: [Float]
    var clusters: [Float]
    var langs: [Float]
    var wordIdx: [UInt32]
    var meta: RunMeta
}

enum ParticleLoader {
    static func loadShared(_ base: String) throws -> SharedMeta {
        try JSONDecoder().decode(SharedMeta.self,
            from: Data(contentsOf: URL(fileURLWithPath: base + "/v2_shared.json")))
    }

    static func loadRun(_ base: String, _ runId: String) throws -> ParticleField {
        let data = try Data(contentsOf: URL(fileURLWithPath: "\(base)/v2_\(runId).bin"))
        guard data.count > 8, data.prefix(4) == Data("MVL3".utf8) else {
            throw NSError(domain: "MindVolume", code: 1,
                          userInfo: [NSLocalizedDescriptionKey: "bad magic for \(runId)"])
        }
        let n = Int(data.withUnsafeBytes { $0.load(fromByteOffset: 4, as: UInt32.self) })
        var off = 8
        func floats(_ m: Int) -> [Float] {
            defer { off += m * 4 }
            return data.withUnsafeBytes { raw in
                let p = raw.baseAddress!.advanced(by: off).assumingMemoryBound(to: Float.self)
                return Array(UnsafeBufferPointer(start: p, count: m))
            }
        }
        func bytes(_ m: Int) -> [Float] {
            defer { off += m }
            return data.subdata(in: off..<(off + m)).map { Float($0) }
        }
        let pos = floats(n * 3)
        let bright = floats(n)
        let cls = bytes(n)
        let clu = bytes(n)
        let lng = bytes(n)
        let wid = data.withUnsafeBytes { raw -> [UInt32] in
            let p = raw.baseAddress!.advanced(by: off).assumingMemoryBound(to: UInt32.self)
            return Array(UnsafeBufferPointer(start: p, count: n))
        }
        let meta = try JSONDecoder().decode(RunMeta.self,
            from: Data(contentsOf: URL(fileURLWithPath: "\(base)/v2_\(runId)_meta.json")))
        return ParticleField(count: n, positions: pos, brightness: bright,
                             classes: cls, clusters: clu, langs: lng, wordIdx: wid, meta: meta)
    }
}

func hexColor(_ hex: String) -> SIMD3<Float> {
    var h = hex; if h.hasPrefix("#") { h.removeFirst() }
    let v = UInt32(h, radix: 16) ?? 0x888888
    return SIMD3<Float>(Float((v >> 16) & 0xff) / 255,
                        Float((v >> 8) & 0xff) / 255,
                        Float(v & 0xff) / 255)
}
