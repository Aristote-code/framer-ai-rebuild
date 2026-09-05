// Header.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "../content/02-Header";

export function Header() {
  return (
    <header className="framer-439ac6" data-framer-name="Header" style={{ width: "1440px", height: "19376px", padding: "100px 0px 60px", position: "relative", zIndex: "2", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "50px", backgroundColor: "rgb(0, 0, 0)" } as CSSProperties}>
      <div className="framer-e4n9oy" data-framer-name="Content" style={{ width: "1440px", height: "168px", padding: "0px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "25px" } as CSSProperties}>
        <div className="framer-wsxgzy" data-framer-name="Text" style={{ width: "1200px", height: "108px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "20px" } as CSSProperties}>
          <div className="framer-saq8sj" data-framer-component-type="RichTextContainer" style={{ width: "700px", height: "108px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
            <h1 className="framer-text framer-styles-preset-1gzpg4m" data-styles-preset="gM4yNG9Qq" dir="auto" style={{ width: "700px", height: "108px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "54px", fontWeight: "500", lineHeight: "54px", letterSpacing: "-2.16px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
              {content.text}
            </h1>
          </div>
        </div>
        <div className="framer-lgxrpn" data-framer-name="CTA" style={{ width: "1200px", height: "35px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
          <div className="framer-12dit3h-container" style={{ width: "186.719px", height: "34px", position: "relative", zIndex: "1", display: "block", flexDirection: "row" } as CSSProperties}>
            <a className="framer-k8Dz4 framer-qkzqfa framer-v-qkzqfa framer-lt5xhr hv-98" data-framer-name="Regular" data-highlight="true" data-reset="button" tabIndex={0} style={{ width: "186.719px", height: "34px", maxHeight: "35px", padding: "10px 14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "7px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "8px", color: "rgb(0, 0, 238)", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", boxShadow: "var(--9xgf7k)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.regular}>
              <div className="framer-o5mers" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "158.719px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-2gg91v": "\"opsz\" 18, \"wght\" 540", "--extracted-r6o4lv": "var(--variable-reference-xdxfhd9wh-KsxdqjKwX)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-rm8thjdvn-ksxdqjkwx": "14", "--variable-reference-xdxfhd9wh-ksxdqjkwx": "rgb(0, 0, 0)", opacity: "1", transform: "none" } as CSSProperties}>
                <p dir="auto" className="framer-text" style={{ width: "158.719px", height: "14px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "14px", letterSpacing: "-0.28px", textAlign: "center", color: "rgb(0, 0, 0)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOVFF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "calc(var(--variable-reference-rm8ThjdVN-KsxdqjKwX) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 18, \"wght\" 540)", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-xdxfhd9wh-KsxdqjKwX))" } as CSSProperties}>
                  {content.label}
                </p>
              </div>
            </a>
          </div>
          <div className="framer-1nw2qsg-container hidden-c61ew0" style={{ width: "143.109px", height: "35px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="framer-eMjew framer-g7l72j framer-v-g7l72j" data-framer-name="Mac" style={{ width: "143.109px", height: "35px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <div className="framer-1mz4r8l-container" data-framer-name="Windows" style={{ width: "143.109px", height: "35px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-k8Dz4 framer-qkzqfa framer-v-qkzqfa framer-lt5xhr hv-104" data-framer-name="Regular" data-highlight="true" data-reset="button" target="_blank" tabIndex={0} style={{ width: "143.109px", height: "35px", maxHeight: "35px", padding: "10px 14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "7px", backgroundColor: "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", borderRadius: "8px", color: "rgb(0, 0, 238)", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", boxShadow: "var(--9xgf7k)", opacity: "1" } as CSSProperties} href={content.regular_2}>
                  <div className="framer-o5mers" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "93.1094px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-2gg91v": "\"opsz\" 18, \"wght\" 540", "--extracted-r6o4lv": "var(--variable-reference-xdxfhd9wh-KsxdqjKwX)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-rm8thjdvn-ksxdqjkwx": "14", "--variable-reference-xdxfhd9wh-ksxdqjkwx": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", opacity: "1", transform: "none" } as CSSProperties}>
                    <p dir="auto" className="framer-text" style={{ width: "93.1094px", height: "14px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "14px", letterSpacing: "-0.28px", textAlign: "center", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOVFF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "calc(var(--variable-reference-rm8ThjdVN-KsxdqjKwX) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 18, \"wght\" 540)", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-xdxfhd9wh-KsxdqjKwX))" } as CSSProperties}>
                      {content.label_2}
                    </p>
                  </div>
                  <svg data-framer-name="Icon R" className="framer-A4jA7 framer-89r3p7" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", "--17kkcf8": "rgba(136, 136, 136, 0.2)", opacity: "1" } as CSSProperties}>
                    <use href="#3553501619" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-1fq7lha" data-framer-name="Use Cases" style={{ width: "1440px", height: "228px", padding: "0px 20px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip" } as CSSProperties}>
        <div className="framer-1r0kndz-container" style={{ width: "1200px", height: "228px", maxWidth: "1200px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
          <div className="ssr-variant hidden-c61ew0 hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
            <div className="framer-gR8rc framer-7t2te9 framer-v-7t2te9" data-border="true" data-framer-name="Desktop" style={{ width: "100%", height: "228px", maxWidth: "100%", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gridTemplateColumns: "240px 240px 240px 240px 240px", gridTemplateRows: "114px 114px", borderRadius: "18px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
              <div className="framer-jikcjt-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-114" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-116" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-IbFO6 framer-g8wfnk hvt-117 hv-117" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.15)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#2993768241" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-119" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-124 hv-124" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1w5z7e2-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-127" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_2}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-129" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-4j1yF framer-g8wfnk hvt-130 hv-130" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1232319397" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-132" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "94px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fg4kt" data-framer-name="S" style={{ width: "94px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "94px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "94px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.s}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-137 hv-137" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-azew5u-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-140" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", backdropFilter: "saturate(115%) brightness(115%) blur(5px)", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_3}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-142" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-gChrr framer-g8wfnk hvt-143 hv-143" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#4290634540" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-145" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m_2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-150 hv-150" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1mcfuad-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-153" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_4}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-155" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-ooj1j framer-g8wfnk hvt-156 hv-156" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.15)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1825208344" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-158" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m_3}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-163 hv-163" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-mizl0c-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-166" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_5}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-168" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-TXDnm framer-g8wfnk hvt-169 hv-169" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.15)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#2712300145" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-171" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m_4}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-176 hv-176" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1jz7b0k-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-179" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_6}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-181" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-93zNj framer-g8wfnk hvt-182 hv-182" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3515536241" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-184" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m_5}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-189 hv-189" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1vd55x0-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-192" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_7}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-194" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-4E5dL framer-g8wfnk hvt-195 hv-195" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3797874707" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-197" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "130px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-13ihfp7" data-framer-name="L" style={{ width: "130px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "130px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "130px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.l}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-202 hv-202" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1ypb86x-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-205" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_8}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-207" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-uSyMf framer-g8wfnk hvt-208 hv-208" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3578254236" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-210" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fni1y4" data-framer-name="M" style={{ width: "116px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "116px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "116px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.m_6}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-215 hv-215" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1g3kq3y-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-218" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_9}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-220" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-vqnL3 framer-g8wfnk hvt-221 hv-221" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1770930775" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-223" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "94px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-fg4kt" data-framer-name="S" style={{ width: "94px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "94px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "94px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.s_2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-228 hv-228" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
              <div className="framer-1lq1qoo-container" style={{ width: "240px", height: "114px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                <a className="framer-SpFex framer-1ylh6f framer-v-ottlqz framer-1141ein hv-231" data-border="true" data-framer-name="Simple" style={{ width: "100%", height: "114px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", "--owisgu": "20px", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1)", borderRadius: "0px", opacity: "1" } as CSSProperties} data-external-route="1" href={content.simple_10}>
                  <div className="framer-1cef1mv" style={{ width: "241px", height: "114px", position: "absolute", right: "-1px", inset: "0px -1px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-5pqpoi hv-233" style={{ width: "18px", height: "18px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <motion.svg data-framer-name="Icon L" className="framer-FWUEe framer-g8wfnk hvt-234 hv-234" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.15)", "--1l3yetw": "rgb(255, 255, 255)", "--1iwhep7": "2" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#4112815077" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </div>
                  <div className="framer-cdozc7 hv-236" style={{ width: "200px", height: "36px", padding: "0px 5px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-1fh73r7-container" style={{ width: "130px", height: "36px", maxWidth: "100%", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div className="framer-aE3iw framer-13ihfp7 framer-v-13ihfp7" data-framer-name="L" style={{ width: "130px", height: "100%", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1ptol71" data-framer-component-type="RichTextContainer" style={{ width: "130px", height: "36px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"opsz\" 32, \"wght\" 500", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--variable-reference-hx_eyvbb1-cncr1d_lo": "15", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "130px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "18px", letterSpacing: "-0.01px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss07' on, 'cv05' on, 'ss03' on, 'cv11' on", "--framer-font-size": "calc(var(--variable-reference-hx_eyvbB1-Cncr1d_lo) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 32, \"wght\" 500)", "--framer-letter-spacing": "-0.01px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                            {content.l_2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1x6nu5f hvt-241 hv-241" data-framer-name="Arrow" style={{ width: "28px", height: "28px", minWidth: "28px", minHeight: "28px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", borderRadius: "100px", opacity: "0", overflow: "clip", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" } as CSSProperties} />
                  </div>
                  <div className="framer-1euzglo" data-framer-name="GenBorder" style={{ width: "240px", height: "114px", position: "absolute", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-wvpgbm" data-framer-name="Sections" id="usecases" style={{ width: "1440px", height: "18720px", padding: "20px 20px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "30px", overflow: "clip visible" } as CSSProperties}>
        <div className="framer-25xq7j" style={{ width: "1200px", height: "18700px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start" } as CSSProperties}>
          <motion.div className="framer-1lq0t8l hidden-la4w5q hidden-c61ew0" data-framer-name="Side nav" style={{ width: "1px", height: "480px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "block", flexDirection: "row", opacity: "0", transformOrigin: "0.5px 240px", willChange: "transform" } as CSSProperties} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
            <motion.div className="framer-rfjbye-container" style={{ width: "48px", height: "480px", position: "absolute", top: "240px", right: "18px", bottom: "-240px", left: "-65px", zIndex: "3", inset: "240px 18px -240px -65px", display: "block", flexDirection: "row", transform: "translateY(-50%)", transformOrigin: "24px 240px" } as CSSProperties} initial={{ y: "-50%" }} whileInView={{ y: "-50%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
              <div className="framer-vclyA framer-1fgbfm5 framer-v-1fgbfm5" data-framer-name="Edit" style={{ width: "48px", height: "480px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                <div className="framer-n4v10m-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-1mnnq5z framer-jnf93f" data-framer-name="Active" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-external-route="1" href={content.active}>
                    <svg data-framer-name="Icon L" className="framer-IbFO6 framer-17nbr06" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.2)", opacity: "1", willChange: "transform" } as CSSProperties}>
                      <use href="#2993768241" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </a>
                </div>
                <div className="framer-1k7kaok-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-253" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive}>
                    <motion.svg data-framer-name="Icon L" className="framer-4j1yF framer-17nbr06 hvt-254 hv-254" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1232319397" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-qlelx7-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-257" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_2}>
                    <motion.svg data-framer-name="Icon L" className="framer-gChrr framer-17nbr06 hvt-258 hv-258" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#4290634540" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-1hl627x-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-261" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_3}>
                    <motion.svg data-framer-name="Icon L" className="framer-ooj1j framer-17nbr06 hvt-262" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.2)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1825208344" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-n633st-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-265" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_4}>
                    <motion.svg data-framer-name="Icon L" className="framer-TXDnm framer-17nbr06 hvt-266" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "rgba(255, 255, 255, 0.2)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#2712300145" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-1dtg28f-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-269" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_5}>
                    <motion.svg data-framer-name="Icon L" className="framer-93zNj framer-17nbr06 hvt-270" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3515536241" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-rtyplh-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-273" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_6}>
                    <motion.svg data-framer-name="Icon L" className="framer-4E5dL framer-17nbr06 hvt-274" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3797874707" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-12f5sab-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-277" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_7}>
                    <motion.svg data-framer-name="Icon L" className="framer-uSyMf framer-17nbr06 hvt-278" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3578254236" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-1qkxql8-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-281" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_8}>
                    <motion.svg data-framer-name="Icon L" className="framer-vqnL3 framer-17nbr06 hvt-282" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#1770930775" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-6md72a-container" style={{ width: "48px", height: "48px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <a className="framer-QyciY framer-1mnnq5z framer-v-13tpril framer-jnf93f hv-285" data-framer-name="Inactive" style={{ width: "48px", height: "48px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", color: "rgb(0, 0, 238)", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties} data-highlight="true" data-external-route="1" href={content.inactive_9}>
                    <motion.svg data-framer-name="Icon L" className="framer-7n5wY framer-17nbr06 hvt-286" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", opacity: "0.5", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.2)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", willChange: "transform" } as CSSProperties} initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}>
                      <use href="#3510397326" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </motion.svg>
                  </a>
                </div>
                <div className="framer-5yxn7l" data-framer-name="Active" style={{ width: "48px", height: "48px", padding: "15px", position: "absolute", bottom: "432px", zIndex: "-1", inset: "0px 0px 432px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "52.0833%", transform: "none", transformOrigin: "50% 50% 0px", overflow: "clip", "--corner-shape-fallback": "1", cornerShape: "superellipse(1)", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" } as CSSProperties} />
              </div>
            </motion.div>
          </motion.div>
          <div className="framer-1awqt99" style={{ width: "1199px", height: "18700px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "20px" } as CSSProperties}>
            <div className="framer-1nthv9k" data-framer-name="Update" id="update" style={{ width: "1199px", height: "1950px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1950px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-uq5vg0 hidden-c61ew0" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" width="745" height="942" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/7d6000ef-roRKZ3e9bgsCCBhCdgI94zH62tc.avif?width=745&height=942 745w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 745 / 942", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.update.src} alt={content.update.alt} />
                  </div>
                  <div className="framer-1gsmnh5" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-1iij0l4" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-nvn6sh" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.update_2}
                      </h2>
                    </div>
                    <div className="framer-1r76ksg" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.update_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-lyyduw" data-framer-name="Cards" style={{ width: "796px", height: "1950px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-aduvcz" data-border="true" id="1-1" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="303">
                    <div className="framer-1rayv28" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards}
                      </h3>
                    </div>
                    <div className="framer-1ocbmks" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-rx3yxj-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_2}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-j4qdnl" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-8855bg-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_2}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_3}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_4}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-pltm0y" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1ueeg8m-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_3}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_5}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_6}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-awhxoh" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties}>
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-12w3xzp-container" id="12w3xzp" style={{ width: "796px", height: "496.523px", position: "relative", display: "block", flexDirection: "row", aspectRatio: "1.60313 / 1" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "496.523px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "496.523px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="auto" poster={"/images/50654f7d-yA3q10qiRktfapt9WCgP0508o97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} autoPlay src={content.upload} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "223.258px", right: "373px", bottom: "223.266px", left: "373px", zIndex: "1", inset: "223.258px 373px 223.266px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-eeoa5v" id="1-2" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="371">
                    <div className="framer-9pidph" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_2}
                      </h3>
                    </div>
                    <div className="framer-bbdiii" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-cve27a-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_4}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_7}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_8}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-8r2zhe" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-kwtjbd-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_5}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_9}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_10}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1l7guya" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-42hwu9-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_6}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_11}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_12}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1ab74u8" id="1-4" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-n92v4u" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_3}
                    </h3>
                  </div>
                  <div className="framer-x4r2us" style={{ width: "736px", height: "319.812px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="framer-ve1n3z-container hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                        <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                          <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                            <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                              {content.default_7}
                            </mark>
                          </p>
                        </div>
                        <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                            <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                              <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                            <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                              <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                  {content.copy_13}
                                </span>
                                <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                  <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                    {content.copy_14}
                                  </span>
                                  <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1kjz3lq hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-jvv1cq-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_8}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_15}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_16}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-a3lx6t" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1rexnti-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_9}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_17}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_18}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-177e2x4" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1cik2wh-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_10}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_19}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_20}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-yjwvac" data-framer-name="Design" id="design" style={{ width: "1199px", height: "2440px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "2440px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-1ntc5wd hidden-c61ew0" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="742" height="937" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/2a1f2d60-3Z5s3zrjMxb0KdPNibUKh9nATZo.avif?width=742&height=937 742w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 742 / 937", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.design.src} alt={content.design.alt} />
                  </div>
                  <div className="framer-1gm9sq7" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-15d00iw" style={{ width: "333px", height: "108.148px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-1qg7d51" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "37.3984px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "37.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.design_2}
                      </h2>
                    </div>
                    <div className="framer-1vm58vm" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.design_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-mcqeqf" data-framer-name="Cards" style={{ width: "796px", height: "2440px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-m0ogkx" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="508">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-eg03st-container" id="eg03st" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="metadata" poster={"/images/ecb1450e-uo69nt3PQm8ps5mjRcBxb4WapU97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} src={content.upload_2} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-q73p4q" data-border="true" id="1-1-1" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="521">
                    <div className="framer-1gsh43r" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_4}
                      </h3>
                    </div>
                    <div className="framer-3sh0an" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-ohurt2-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_11}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_21}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_22}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1xfv0m2" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-4wzhaz-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_12}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_23}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_24}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-q56sk6" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-ktx243-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_13}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_25}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_26}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-zg46gd" id="1-2-1" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="576">
                    <div className="framer-1vhy528" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_5}
                      </h3>
                    </div>
                    <div className="framer-1gqsd9p" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-tbrmll-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_14}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_27}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_28}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-emf4zk" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1ly4vfl-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_15}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_29}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_30}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-rmc666" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-tpbdlz-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_16}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_31}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_32}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-6rwk9p" id="1-3" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="631">
                    <div className="framer-czrdzm" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_6}
                      </h3>
                    </div>
                    <div className="framer-1kg26v0" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1gczu64-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_17}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_33}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_34}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-19xmki3" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1jljtxe-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_18}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_35}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_36}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1l8k1rt" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-2c8phy-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_19}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_37}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_38}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-kdutvn" id="1-4-1" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-1nel8bf" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_7}
                    </h3>
                  </div>
                  <div className="framer-15bi2px" style={{ width: "736px", height: "261.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-ic74nr-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_20}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_39}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_40}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-10rhrdc" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-6xuw2x-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_21}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_41}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_42}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1t1iaqd" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1rezldi-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_22}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_43}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_44}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lwuhd2" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="framer-354zhl-container hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                        <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                          <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                            <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                              {content.default_23}
                            </mark>
                          </p>
                        </div>
                        <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                            <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                              <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                            <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                              <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                  {content.copy_45}
                                </span>
                                <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                  <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                    {content.copy_46}
                                  </span>
                                  <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1lflcmi" data-framer-name="New sites" id="new-sites" style={{ width: "1199px", height: "2440px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "2440px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-q07ke0" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="742" height="937" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/e1f6e15c-uTBgxwAhoAACj8gFmNaHhyLHY.avif?width=742&height=937 742w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 742 / 937", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.newSites.src} alt={content.newSites.alt} />
                  </div>
                  <div className="framer-1pu4fzk" style={{ width: "333px", height: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <svg data-framer-name="Icon L" className="framer-gChrr framer-o40rcd" role="presentation" viewBox="0 0 20 20" style={{ width: "20px", height: "20px", position: "relative", display: "block", flexDirection: "row", opacity: "0", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <use href="#4290634540" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                  <div className="framer-4nu4j2" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-q2au5b" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.newSites_2}
                      </h2>
                    </div>
                    <div className="framer-xznyde" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.newSites_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-1wq71tm" data-framer-name="Cards" style={{ width: "796px", height: "2440px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-19p0wy1" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="770">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-o1hq13-container" id="o1hq13" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="metadata" poster={"/images/c3a5c21a-9NJFGpaCCjcHXuEYlyLJ7p2wo97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} src={content.upload_3} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-10lu3yb" data-border="true" id="1-1-2" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="783">
                    <div className="framer-1gmnhdf" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_8}
                      </h3>
                    </div>
                    <div className="framer-18itm9g" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-vuetuj-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_24}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_47}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_48}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1yhwbof" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1qw15m0-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_25}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_49}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_50}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1892dlf" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-38erzf-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_26}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_51}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_52}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-hawf3x" id="1-2-2" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="838">
                    <div className="framer-1arxa3p" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_9}
                      </h3>
                    </div>
                    <div className="framer-yncoow" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1p59my5-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_27}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_53}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_54}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-oevd6j" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-193tw1o-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_28}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_55}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_56}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1d4tgzs" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1h8inf7-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_29}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_57}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_58}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1vfy3t8" id="1-3-1" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="893">
                    <div className="framer-1hyqmxa" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_10}
                      </h3>
                    </div>
                    <div className="framer-1efqjql" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1ihf0r3-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_30}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_59}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_60}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1tbq9my" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1hrckcs-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_31}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_61}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_62}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-pfkpqf" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-4djvv-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_32}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_63}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_64}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1qn8g7w" id="1-4-2" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "4", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", backdropFilter: "blur(10px)", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-3k2ofe" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_11}
                    </h3>
                  </div>
                  <div className="framer-xyjwer" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-12h44fb-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_33}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_65}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_66}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-ncrcto" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-140yiv3-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_34}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_67}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_68}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-85a60w" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-b0nv0l-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_35}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_69}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_70}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-13dl91j" data-framer-name="Migration" id="migrate" style={{ width: "1199px", height: "1460px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1460px" } as CSSProperties}>
              <div className="ssr-variant hidden-c61ew0 hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-g2w4yy" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="743" height="938" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/65714654-ooYL52EQxCVriKS1TJesIlV6Ns.avif?width=743&height=938 743w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 743 / 938", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.migration.src} alt={content.migration.alt} />
                  </div>
                  <div className="framer-lkcgx" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-kf5x45" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-1t6ya69" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.migration_2}
                      </h2>
                    </div>
                    <div className="framer-rbcr36" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.migration_3}
                      </p>
                    </div>
                  </div>
                  <div className="framer-133g5c4-container" style={{ width: "393px", height: "480px", position: "absolute", zIndex: "-1", display: "block", flexDirection: "row" } as CSSProperties}>
                    <div data-framer-component-type="Shader" style={{ width: "100%", height: "100%", position: "absolute", display: "block", flexDirection: "row", overflow: "hidden", flex: "0 0 auto", borderRadius: "inherit", cornerShape: "inherit", overflowX: "hidden", overflowY: "hidden", transform: "none" } as CSSProperties}>
                      <div data-framer-background-image-wrapper="true" style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                        <img decoding="auto" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center" } as CSSProperties} src={content.migration_4.src} alt={content.migration_4.alt} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-egom77" data-framer-name="Cards" style={{ width: "796px", height: "1460px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-y38ije" data-border="true" id="1-1-3" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1018">
                    <div className="framer-1ehup" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_12}
                      </h3>
                    </div>
                    <div className="framer-1tj1gsh" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-3qnsei-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_36}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_71}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_72}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-150n7us" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-13y4b7s-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_37}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_73}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_74}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-30argo" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1o9phh6-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_38}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_75}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_76}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-9hsott" id="1-3-2" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1073">
                    <div className="framer-1icit2h" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_13}
                      </h3>
                    </div>
                    <div className="framer-yrmqq7" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-pvbfbk-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_39}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_77}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_78}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cy6ho2" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1ggislt-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_40}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_79}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_80}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-lykpd5" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1eljd2n-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_41}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_81}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_82}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1yukdce" id="1-4-3" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-5u1icd" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_14}
                    </h3>
                  </div>
                  <div className="framer-m7clby" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1tkc2or-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_42}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_83}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_84}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1nb1leb" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-yv96dy-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_43}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_85}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_86}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vfgub2" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-y0anan-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_44}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_87}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_88}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-11q0l24" data-framer-name="Responsive" id="responsive" style={{ width: "1199px", height: "1950px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1950px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-v7hyze" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="739" height="933" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/5b5aa985-wIMcRPunUhvY1t5ApmFnTpuxwK0.avif?width=739&height=933 739w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 739 / 933", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.responsive.src} alt={content.responsive.alt} />
                  </div>
                  <div className="framer-gnpjb8" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-sugjj5" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-5j3r57" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.responsive_2}
                      </h2>
                    </div>
                    <div className="framer-1ixr8o2" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.responsive_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-7gbkae" data-framer-name="Cards" style={{ width: "796px", height: "1950px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-b5l9gx" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1194">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-e3poz4-container" id="e3poz4" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="auto" poster={"/images/9e0f2699-VlfObndH7NL8DuUVfTBpUoXc7dM97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} autoPlay src={content.upload_4} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-lbmqr5" data-border="true" id="1-1-4" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1207">
                    <div className="framer-c7ycoa" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_15}
                      </h3>
                    </div>
                    <div className="framer-jsk0gv" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-18xu209-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_45}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_89}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_90}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-19ay5m" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-7g0ed3-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_46}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_91}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_92}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1qzcpbj" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dv9aur-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_47}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_93}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_94}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-125clfc" id="1-2-4" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1262">
                    <div className="framer-1f4udby" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_16}
                      </h3>
                    </div>
                    <div className="framer-1fif6d1" style={{ width: "736px", height: "180.805px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1lf3v1u-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_48}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_95}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_96}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-357kdc" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-6hom50-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_49}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_97}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_98}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-5d72jv" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1rknfig-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_50}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_99}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_100}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-14ag64j" id="1-3-3" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-uz6abd" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_17}
                    </h3>
                  </div>
                  <div className="framer-1nc07ey" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1e311ff-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_51}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_101}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_102}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-7ra2ao" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-qdn359-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_52}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_103}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_104}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-bt7med" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-4mhsq4-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_53}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_105}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_106}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-13q660m" data-framer-name="Components" id="components" style={{ width: "1199px", height: "1460px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1460px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-5py149" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="745" height="941" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/d2335829-96YnYarfaXDEY7pUCIMXIGfH8yU.avif?width=745&height=941 745w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 745 / 941", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.components.src} alt={content.components.alt} />
                  </div>
                  <div className="framer-1c4wlui" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-gm4u12" style={{ width: "333px", height: "165.797px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-1gqu1oz" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.components_2}
                      </h2>
                    </div>
                    <div className="framer-onodz7" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "81px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "81px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.components_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-ir0067" data-framer-name="Cards" style={{ width: "796px", height: "1460px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1niauwc" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1383">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1qmzqln-container" id="1qmzqln" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="metadata" poster={"/images/3976271e-QycK29Qq77rrbejhKqqm6s7MA97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} src={content.upload_5} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1iql8tj" id="1-1-5" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1396">
                    <div className="framer-495lm7" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_18}
                      </h3>
                    </div>
                    <div className="framer-19ur5is" style={{ width: "736px", height: "180.805px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-i97b6h-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_54}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_107}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_108}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1prc2t6" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-tjszsx-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_55}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_109}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_110}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1wsqwlq" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1twjxjy-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_56}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_111}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_112}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-ya7asn" id="1-2-5" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-1uzh9uc" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_19}
                    </h3>
                  </div>
                  <div className="framer-f15gzz" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-18hbzat-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_57}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_113}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_114}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-uylyrr" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-jgcd5e-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_58}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_115}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_116}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-olv2gp" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-pf3vl5-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_59}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_117}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_118}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-17zq3n4" data-framer-name="SEO" id="seo" style={{ width: "1199px", height: "1950px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1950px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-1g2ddxp" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="756" height="960" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/c712b21b-oaHqRmPkOcioKxyADgCJp7aWy4Y.avif?width=756&height=960 756w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 756 / 960", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.seo.src} alt={content.seo.alt} />
                  </div>
                  <div className="framer-b714fr" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-r28xsj" style={{ width: "333px", height: "165.797px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-c23jav" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "320px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.seo_2}
                      </h2>
                    </div>
                    <div className="framer-1im0mxl" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "81px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "81px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.seo_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-75kqf9" data-framer-name="Cards" style={{ width: "796px", height: "1950px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1ong776" data-border="true" id="1-1-6" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1517">
                    <div className="framer-1jkkyag" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_20}
                      </h3>
                    </div>
                    <div className="framer-1wy6amf" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-19k0eex-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_60}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_119}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_120}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-10fcob8" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1dzrow0-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_61}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_121}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_122}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1gfjmag" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-vd6kfc-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_62}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_123}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_124}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-11cpo7t" id="1-2-6" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1572">
                    <div className="framer-1x61sra" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_21}
                      </h3>
                    </div>
                    <div className="framer-5hwoci" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1562m8z-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_63}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_125}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_126}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1a4d2hq" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1059onu-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_64}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_127}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_128}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1wfs9vo" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-2it6bn-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_65}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_129}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_130}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1n8jz7l" id="1-3-4" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1627">
                    <div className="framer-1r1480d" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_22}
                      </h3>
                    </div>
                    <div className="framer-1kkkfhg" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-fxpbaf-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_66}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_131}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_132}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1mypzgf" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1bowtgi-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_67}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_133}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_134}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-9wvqz8" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1in7f37-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_68}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_135}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_136}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-owizh7" id="14" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-3ley15" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_23}
                    </h3>
                  </div>
                  <div className="framer-1ujf8vo" style={{ width: "736px", height: "302.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-ebjjbx-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_69}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_137}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_138}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-9g1xyy" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-3949pc-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_70}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_139}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_140}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-9wi8yl" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-gkeu41-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_71}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_141}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_142}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-bh3abl hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="framer-1sdm5u7-container hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                        <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                          <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                            <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                              {content.default_72}
                            </mark>
                          </p>
                        </div>
                        <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                            <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                              <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                            <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                              <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                  {content.copy_143}
                                </span>
                                <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                  <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                    {content.copy_144}
                                  </span>
                                  <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-10awrb6 hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="framer-qllv3v-container hidden-la4w5q hidden-c61ew0" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                        <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                          <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                            <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                              {content.default_73}
                            </mark>
                          </p>
                        </div>
                        <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                            <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                              <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                            <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                              <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                  {content.copy_145}
                                </span>
                                <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                  <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                    {content.copy_146}
                                  </span>
                                  <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1b9ri7c" data-framer-name="CMS" id="cms" style={{ width: "1199px", height: "1950px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1950px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-ztzb17" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="737" height="931" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/125b1d02-d7J1LYwRQcByAYA4YvyLrlHTMs.avif?width=737&height=931 737w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 737 / 931", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.cms.src} alt={content.cms.alt} />
                  </div>
                  <div className="framer-i22dw9" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-1s64frs" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-poqo4g" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.cms_2}
                      </h2>
                    </div>
                    <div className="framer-1ixckxr" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.cms_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-opsmwp" data-framer-name="Cards" style={{ width: "796px", height: "1950px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-lbjrff" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1780">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1iywc0v-container" id="1iywc0v" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="auto" poster={"/images/e1690bb4-011TVHsqc0CZvxjgNvOsO5dQ5M97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} autoPlay src={content.upload_6} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1u2vjg9" data-border="true" id="1-1-7" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1793">
                    <div className="framer-1ce6ex2" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_24}
                      </h3>
                    </div>
                    <div className="framer-17otc9p" style={{ width: "736px", height: "239.609px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-wbn2cy-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_74}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_147}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_148}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1sdavvu" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1kk1r0d-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_75}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_149}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_150}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-10pjt3u" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1j7bt13-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_76}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_151}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_152}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-14hzxtj" id="1-2-7" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden", willChange: "transform", opacity: "1", transform: "none" } as CSSProperties}>
                    <div className="framer-n5phxs" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_25}
                      </h3>
                    </div>
                    <div className="framer-17eoazy" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-13s9mwq-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_77}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_153}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_154}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1p5jg9z" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-17k4qah-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_78}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_155}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_156}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-q9tzsu" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-vy9aq4-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_79}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_157}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_158}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-bsys2g" id="1-3-5" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-1t2ikho" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_26}
                    </h3>
                  </div>
                  <div className="framer-hn2ylb" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-vjutwt-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_80}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_159}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_160}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-pjbse" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1u7n1lu-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_81}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_161}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_162}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1338lic" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-1wt3xm9-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_82}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_163}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_164}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1a5z61i" data-framer-name="Audit" id="audit" style={{ width: "1199px", height: "1950px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "1950px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-y5kq39" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="739" height="934" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/f6b3545c-M94bAhBqE045z6QIHWQWyM7Q.avif?width=739&height=934 739w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 739 / 934", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.audit.src} alt={content.audit.alt} />
                  </div>
                  <div className="framer-s2zb9n" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-140fv2u" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-z3ghe0" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.audit_2}
                      </h2>
                    </div>
                    <div className="framer-xjtpo9" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        <strong className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                          {content.audit_3}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-xy7k6d" data-framer-name="Cards" style={{ width: "796px", height: "1950px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-urhonf" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1970">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-rfzrzk-container" id="rfzrzk" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="metadata" poster={"/images/f868d95d-Zz5ThptGssrhEgx5q9gZfAWpTQ97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} src={content.upload_7} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1afdkmp" data-border="true" id="1-1-8" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="1983">
                    <div className="framer-f1wrn6" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_27}
                      </h3>
                    </div>
                    <div className="framer-1hsvhqs" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-9bx4pe-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_83}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_165}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_166}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-38rnkz" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-wgj1d7-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_84}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_167}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_168}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-19tukcx" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-jmwhyx-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_85}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_169}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_170}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-1tungk4" id="1-2-8" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="2038">
                    <div className="framer-1wiwt41" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                        {content.cards_28}
                      </h3>
                    </div>
                    <div className="framer-qb0387" style={{ width: "736px", height: "200.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-mg1506-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_86}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_171}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_172}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-xigufj" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-1lk77h9-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_87}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_173}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_174}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-s9vjm7" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                      <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-15d25n3-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                          <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                            <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                              <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                                <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                  {content.default_88}
                                </mark>
                              </p>
                            </div>
                            <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                              <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                                <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                  <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                                </svg>
                                <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                  <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                    <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                      {content.copy_175}
                                    </span>
                                    <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                      <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                        {content.copy_176}
                                      </span>
                                      <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1rwc8j2" id="1-3-6" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "3", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", borderRadius: "25px", boxShadow: "rgb(26, 26, 26) 0px 0px 0px 1px", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-l77tz3" data-framer-component-type="RichTextContainer" style={{ width: "736px", height: "20.25px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "736px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties}>
                      {content.cards_29}
                    </h3>
                  </div>
                  <div className="framer-ri70it" style={{ width: "736px", height: "220.008px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-l6be6w-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_89}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_177}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_178}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-192vp58" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-16resx3-container" style={{ width: "736px", height: "59.6016px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "59.6016px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "19.6016px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "19.6016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_90}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_179}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_180}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-a3bqrl" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-69ipl6-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_91}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_181}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_182}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1mm9b4h" data-framer-name="External" id="external" style={{ width: "1199px", height: "970px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "393px 393px 393px", gridTemplateRows: "970px" } as CSSProperties}>
              <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <div className="framer-18kzbda" data-border="true" style={{ width: "393px", height: "480px", padding: "30px", position: "sticky", top: "120px", zIndex: "2", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", borderRadius: "25px", overflow: "hidden" } as CSSProperties}>
                  <div style={{ width: "393px", height: "480px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="746" height="943" sizes="(min-width: 1200px) max((min(max(min(100vw - 40px, 1200px) - 1px, 1px), 1200px) - 20px) / 3, 50px), (max-width: 809.98px) min(max(min(100vw - 40px, 1200px), 1px), 1200px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(min(100vw - 40px, 1200px), 1px), 1200px) - 20px) / 3, 50px)" srcSet={"/images/38386087-iry0OmCvWEcHFk2SAmMLcJIT0c.avif?width=746&height=943 746w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 746 / 943", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.external.src} alt={content.external.alt} />
                  </div>
                  <div className="framer-10ztvzg" style={{ width: "333px", height: "20px", minHeight: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties} />
                  <div className="framer-1piw40a" style={{ width: "333px", height: "145.547px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-1la0qrb" data-framer-component-type="RichTextContainer" style={{ width: "251px", height: "74.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                      <h2 className="framer-text framer-styles-preset-ird5u0" data-styles-preset="CTj861wGU" dir="auto" style={{ width: "251px", height: "74.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "34px", fontWeight: "500", lineHeight: "37.4px", letterSpacing: "-1.36px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
                        {content.external_2}
                      </h2>
                    </div>
                    <div className="framer-ga3i6o" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "60.75px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "none" } as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "320px", height: "60.75px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                        {content.external_3}
                      </p>
                    </div>
                  </div>
                  <div className="framer-pvj0uy-container" style={{ width: "234.969px", height: "34px", position: "relative", zIndex: "1", display: "block", flexDirection: "row" } as CSSProperties}>
                    <a className="framer-k8Dz4 framer-qkzqfa framer-v-qkzqfa framer-lt5xhr hv-2158" data-framer-name="Regular" data-highlight="true" data-reset="button" tabIndex={0} style={{ width: "234.969px", height: "34px", maxHeight: "35px", padding: "10px 14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "7px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "8px", color: "rgb(0, 0, 238)", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", boxShadow: "var(--9xgf7k)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.regular_3}>
                      <div className="framer-o5mers" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "206.969px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-2gg91v": "\"opsz\" 18, \"wght\" 540", "--extracted-r6o4lv": "var(--variable-reference-xdxfhd9wh-KsxdqjKwX)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-rm8thjdvn-ksxdqjkwx": "14", "--variable-reference-xdxfhd9wh-ksxdqjkwx": "rgb(0, 0, 0)", opacity: "1", transform: "none" } as CSSProperties}>
                        <p dir="auto" className="framer-text" style={{ width: "206.969px", height: "14px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "14px", letterSpacing: "-0.28px", textAlign: "center", color: "rgb(0, 0, 0)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOVFF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "calc(var(--variable-reference-rm8ThjdVN-KsxdqjKwX) * 1px)", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 18, \"wght\" 540)", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-xdxfhd9wh-KsxdqjKwX))" } as CSSProperties}>
                          {content.label_3}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="framer-ljjmdz" data-framer-name="Cards" style={{ width: "796px", height: "970px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", gridArea: "auto / span 2" } as CSSProperties}>
                <div className="ssr-variant hidden-c61ew0" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-z6b5f" data-border="true" style={{ width: "796px", height: "480px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "25px", transform: "none", transformOrigin: "398px 240px", overflow: "hidden", willChange: "transform", opacity: "1" } as CSSProperties} data-cs-id="2163">
                    <div className="ssr-variant hidden-la4w5q" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-s3w30j-container" id="s3w30j" style={{ width: "796px", height: "480px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-QGOY7 framer-gpnou framer-v-dnaixq" data-border="true" data-framer-name="Pause" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "30px", borderRadius: "25px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                          <div className="framer-sqhie-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-qZyXV framer-yco2tx framer-v-yco2tx" data-framer-name="Upload" style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", borderRadius: "25px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                              <div className="framer-1eu8l0p-container" style={{ width: "796px", height: "480px", position: "relative", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                                <video loop preload="auto" poster={"/images/5fc5a784-4CnXEw1dg8cuJVoYAO8wYJY2JWE97f9.png?width=1590&height=960"} muted playsInline style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", cursor: "auto", borderRadius: "0px", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" } as CSSProperties} autoPlay src={content.upload_8} />
                              </div>
                            </div>
                          </div>
                          <div className="framer-15ki428-container" style={{ width: "50px", height: "50px", position: "absolute", top: "215px", right: "373px", bottom: "215px", left: "373px", zIndex: "1", inset: "215px 373px", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-BDH4j framer-8ouk7h framer-v-8ouk7h" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ width: "100%", height: "100%", padding: "0px 0px 0px 2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", backgroundColor: "rgba(0, 0, 0, 0.15)", borderRadius: "100px", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset", backdropFilter: "blur(10px)", overflow: "clip", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Icon L" className="framer-HY60O framer-su4xho" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgb(255, 255, 255)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#102597446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1czojuo" data-border="true" id="1-1-9" style={{ width: "796px", height: "480px", padding: "30px 30px 10px", position: "sticky", top: "120px", zIndex: "1", inset: "120px auto auto", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "25px", backdropFilter: "blur(10px)", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-1h5klkr" style={{ width: "736px", height: "400.016px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip" } as CSSProperties}>
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-jqb0x0-container hidden-la4w5q" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {" "}{content.default_92}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_183}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_184}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-j7qq0w" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-10rxbzh-container hidden-la4w5q" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_93}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_185}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_186}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1igotu3 hidden-la4w5q" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-a0j6p7-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "0px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_94}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_187}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_188}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1yx2265 hidden-la4w5q" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-hh6pk1-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "0px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_95}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_189}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_190}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1o5n71 hidden-la4w5q" style={{ width: "736px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "clip" } as CSSProperties} />
                    <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                      <div className="framer-jt33o9-container" style={{ width: "736px", height: "79.2031px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                        <div className="framer-dqtV2 framer-Kwi81 framer-1y30uca framer-v-1y30uca" data-border="true" data-framer-name="Default" style={{ width: "100%", height: "79.2031px", padding: "20px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip", "--1i0f3wk": "20px 0px 20px 0px", "--border-bottom-width": "0px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", opacity: "1" } as CSSProperties}>
                          <div className="framer-1tbsyvg" data-framer-component-type="RichTextContainer" style={{ width: "647.992px", height: "39.2031px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--yfqnjp": "2", transform: "none", opacity: "1" } as CSSProperties}>
                            <p className="framer-text framer-styles-preset-rhbxb3" data-styles-preset="vvG68NbwN" dir="auto" style={{ width: "647.992px", height: "39.2031px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "19.6px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                              <mark className="framer-text" style={{ position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgba(0, 153, 255, 0)", "--framer-text-background-color": "rgba(0, 153, 255, 0)" } as CSSProperties}>
                                {content.default_96}
                              </mark>
                            </p>
                          </div>
                          <div className="framer-17nn0ee-container" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                            <div className="framer-Ihkp7 framer-QLujN framer-980pff framer-v-980pff" data-framer-name="Copy" data-highlight="true" id="KHuW5uc4O-980pff" tabIndex={0} style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                              <svg data-framer-name="Copy" className="framer-oQP1E framer-1d8erss" role="presentation" viewBox="0 0 20 20" style={{ width: "15px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "rgba(255, 255, 255, 0.1)", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                                <use href="#205413628" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                              <div className="framer-ophj44-container" style={{ width: "16px", height: "16px", position: "absolute", zIndex: "10", display: "block", flexDirection: "row", opacity: "0" } as CSSProperties}>
                                <button type="button" id="YwMNhliaq" aria-live="polite" aria-label="Copy prompt" style={{ width: "100%", height: "100%", position: "relative", display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 102, 255)", fontFamily: "Inter", fontSize: "16px", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", placeItems: "center", placeContent: "center", padding: "0px", cursor: "pointer", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", outline: "none", borderRadius: "0px", opacity: "1" } as CSSProperties}>
                                  <span aria-hidden="true" style={{ width: "97.2422px", height: "16px", position: "absolute", right: "-40.6172px", left: "-40.6172px", inset: "0px -40.6172px", display: "block", flexDirection: "row", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none" } as CSSProperties}>
                                    {content.copy_191}
                                  </span>
                                  <span style={{ width: "97.2422px", height: "16px", position: "relative", display: "grid", flexDirection: "row", alignItems: "center", gridTemplateColumns: "97.2422px", gridTemplateRows: "16px", placeItems: "center" } as CSSProperties}>
                                    <span style={{ width: "97.2422px", height: "16px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", whiteSpace: "nowrap", opacity: "1" } as CSSProperties}>
                                      {content.copy_192}
                                    </span>
                                    <span aria-hidden="true" style={{ position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", opacity: "0", whiteSpace: "nowrap" } as CSSProperties} />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
