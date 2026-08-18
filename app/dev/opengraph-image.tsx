import { ImageResponse } from "next/og";
import { profile } from "@/data/dev";

export const alt =
  "Weronika Kmieć — Frontend Developer, React / Next.js / TypeScript, Warsaw, Poland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F2F1EC";
const INK = "#14161A";
const SLATE = "#5B6068";
const RULE = "#DAD8D1";
const ACCENT = "#23408E";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          borderTop: `10px solid ${ACCENT}`,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.16em",
            color: SLATE,
          }}
        >
          <span style={{ color: ACCENT, marginRight: 18 }}>01</span>
          <span>FRONTEND DEVELOPER</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: INK,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              paddingTop: 30,
              borderTop: `1px solid ${RULE}`,
              fontSize: 30,
              color: INK,
            }}
          >
            React · Next.js · TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: SLATE,
          }}
        >
          <span>Warsaw, Poland</span>
          <span>wercche.xyz/dev</span>
        </div>
      </div>
    ),
    size,
  );
}
