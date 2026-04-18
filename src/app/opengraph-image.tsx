import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const alt = "Play In Code — online programming for kids 7–16";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #60C849 0%, #4CAF50 55%, #2E7D32 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            {"<>"}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>
            Play In Code
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Online Coding for Kids
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              opacity: 0.95,
            }}
          >
            Personal mentor · Scratch · Roblox · Python
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          {["Ages 7–16", "Russian-speaking mentor", "US & Europe"].map((chip) => (
            <div
              key={chip}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
