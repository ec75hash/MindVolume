// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "JVolume",
    platforms: [.macOS(.v14)],
    targets: [
        .executableTarget(name: "JVolume", path: "Sources/JVolume")
    ]
)
