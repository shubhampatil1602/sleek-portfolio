import { ImageResponse } from "next/og";

export const alt = "Shubham Patil · Full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card for LinkedIn, X, Slack and search results.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#fafafa",
        color: "#171717",
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>
        Shubham Patil
      </div>
      <div style={{ fontSize: 40, color: "#525252", marginTop: 16 }}>
        Full-stack engineer
      </div>
      <div style={{ fontSize: 30, color: "#737373", marginTop: 48 }}>
        Next.js · TypeScript · PostgreSQL
      </div>
      <div style={{ fontSize: 26, color: "#a3a3a3", marginTop: "auto" }}>
        shubhamspatil.me
      </div>
    </div>,
    size,
  );
}
