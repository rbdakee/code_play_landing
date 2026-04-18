import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #60C849 0%, #4CAF50 55%, #2E7D32 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        {"<>"}
      </div>
    ),
    { ...size }
  );
}
