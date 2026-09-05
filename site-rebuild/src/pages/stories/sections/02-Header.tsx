// Header.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import content from "../content/02-Header";

export function Header() {
  return (
    <div className="framer-1adk5kz" data-framer-name="Header" style={{ width: "1240px", height: "228px", maxWidth: "1240px", padding: "100px 20px 20px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "60px" } as CSSProperties}>
      <div className="framer-1k2i2on" style={{ width: "1200px", height: "108px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "25px" } as CSSProperties}>
        <div className="framer-d276y" data-framer-component-type="RichTextContainer" style={{ width: "700px", height: "108px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
          <h1 className="framer-text framer-styles-preset-1gzpg4m" data-styles-preset="gM4yNG9Qq" dir="auto" style={{ width: "700px", height: "108px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "54px", fontWeight: "500", lineHeight: "54px", letterSpacing: "-2.16px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties}>
            {content.header}
          </h1>
        </div>
      </div>
    </div>
  );
}
