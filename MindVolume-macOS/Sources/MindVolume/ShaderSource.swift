let shaderSource = """
#include <metal_stdlib>
using namespace metal;

struct Uniforms {
    float4x4 mvp;
    float3 camRight;
    float3 camUp;
    float maxConversationX;
    float pointScale;
    float mode;        // 0 = story, 1 = anatomy
    float minBright;   // density cutoff
    float langMode;    // 0 both, 1 english, 2 chinese
};

struct VOut {
    float4 pos [[position]];
    float2 uv;
    float3 color;
    float alpha;
};

constant float2 corners[6] = {
    float2(-1,-1), float2(1,-1), float2(-1,1),
    float2(1,-1),  float2(1,1),  float2(-1,1)
};

constant float3 palette[10] = {
    float3(0.910, 0.475, 0.976), // cognitive
    float3(0.376, 0.647, 0.980), // processes-ish
    float3(0.204, 0.827, 0.600),
    float3(0.984, 0.749, 0.141),
    float3(0.133, 0.827, 0.933),
    float3(0.969, 0.443, 0.443),
    float3(0.655, 0.545, 0.980),
    float3(0.612, 0.639, 0.686),
    float3(0.984, 0.573, 0.235),
    float3(0.976, 0.659, 0.831)
};

vertex VOut particle_vertex(uint vid [[vertex_id]],
                            uint iid [[instance_id]],
                            const device float *positions [[buffer(0)]],
                            const device float *brightness [[buffer(1)]],
                            const device float *classes [[buffer(2)]],
                            const device float *clusters [[buffer(5)]],
                            const device float *langs [[buffer(6)]],
                            constant Uniforms &u [[buffer(3)]])
{
    VOut o;
    float3 center = float3(positions[iid*3+0], positions[iid*3+1], positions[iid*3+2]);
    float b = brightness[iid];
    float cls = classes[iid];
    float clu = clusters[iid];

    float hidden = (center.x > u.maxConversationX || b < u.minBright) ? 1.0 : 0.0;
    float lg = langs[iid];
    if (u.langMode > 0.5 && u.langMode < 1.5 && lg > 0.5) hidden = 1.0;
    if (u.langMode > 1.5 && lg < 0.5) hidden = 1.0;

    float size = u.pointScale * (0.12 + 1.1 * sqrt(b));
    if (cls > 2.5)      size = max(size, u.pointScale * 0.85);
    else if (cls > 1.5) size = max(size, u.pointScale * 0.75);
    else if (cls > 0.5) size = max(size, u.pointScale * 0.38);

    float2 corner = corners[vid];
    float3 world = center + (corner.x * u.camRight + corner.y * u.camUp) * size;
    o.pos = u.mvp * float4(world, 1.0);
    o.uv = corner;

    float t = clamp(0.15 + 2.2 * b, 0.0, 1.0);
    float3 c; float a;
    if (u.mode < 0.5) {
        float3 fieldLo = float3(0.137, 0.227, 0.369);
        float3 fieldHi = float3(0.863, 0.925, 0.988);
        c = mix(fieldLo, fieldHi, t);
        a = 0.10 + 0.55 * t;
        if (cls > 2.5)      { c = float3(1.0, 1.0, 1.0); a = 0.95; }
        else if (cls > 1.5) { c = float3(1.0, 0.42, 0.616); a = 0.9; }
        else if (cls > 0.5) { c = float3(1.0, 0.823, 0.341); a = 0.30 + 0.5 * t; }
    } else {
        if (clu < 9.5) {
            c = palette[int(clu)];
            a = 0.35 + 0.6 * t;
        } else {
            c = float3(0.30, 0.32, 0.36);   // spoken / unclustered: recede
            a = 0.05 + 0.18 * t;
        }
    }
    o.color = c;
    o.alpha = a * (1.0 - hidden);
    return o;
}

fragment float4 particle_fragment(VOut in [[stage_in]]) {
    float r2 = dot(in.uv, in.uv);
    if (r2 > 1.0) discard_fragment();
    float falloff = exp(-2.6 * r2);
    return float4(in.color * in.alpha * falloff, in.alpha * falloff);
}

struct PlaneV { float4 pos [[position]]; float alpha; };

constant float2 planeCorners[6] = { float2(0,0), float2(1,0), float2(0,1),
                                    float2(1,0), float2(1,1), float2(0,1) };

vertex PlaneV plane_vertex(uint vid [[vertex_id]],
                           constant Uniforms &u [[buffer(3)]],
                           constant float4 &rect [[buffer(4)]])
{
    float2 k = planeCorners[vid];
    float3 world = float3(mix(rect.x, rect.y, k.x), 44.5, mix(rect.z, rect.w, k.y));
    PlaneV o;
    o.pos = u.mvp * float4(world, 1.0);
    o.alpha = 0.06;
    return o;
}

fragment float4 plane_fragment(PlaneV in [[stage_in]]) {
    return float4(0.9, 0.9, 0.95, in.alpha);
}
"""
