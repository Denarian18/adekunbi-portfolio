import { ImageResponse } from "next/og";

export const alt = "Adekunbi Oluwole | Technical Support Specialist & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0b0f",
          color: "#f5f5f7",
        }}
      >
        <div style={{ fontSize: 28, color: "#818cf8", display: "flex" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, marginTop: 16, display: "flex" }}>
          Adekunbi Oluwole
        </div>
        <div style={{ fontSize: 38, color: "#9ca3af", marginTop: 16, display: "flex" }}>
          Technical Support Specialist & Web Developer
        </div>
      </div>
    ),
    size
  );
}