import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 10,
        }}
      >
        {"<>"}
      </div>
    ),
    { ...size }
  );
}
