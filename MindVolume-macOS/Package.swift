// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "MindVolume",
    platforms: [.macOS(.v14)],
    targets: [
        .executableTarget(name: "MindVolume", path: "Sources/MindVolume")
    ]
)
