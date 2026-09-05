// Bento.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "../content/06-Bento";

export function Bento() {
  return (
    <section className="framer-1aw7urx" data-framer-name="Bento" style={{ width: "1440px", height: "2296.8px", padding: "120px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "40px", overflow: "hidden" } as CSSProperties}>
      <header className="framer-17vi6pm" data-framer-name="Header" style={{ width: "1200px", height: "96.7969px", maxWidth: "1200px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "20px" } as CSSProperties}>
        <div className="framer-rux9iz" data-framer-component-type="RichTextContainer" style={{ width: "300px", height: "96.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
          <h2 className="framer-text framer-styles-preset-fbtpvo" data-styles-preset="qRN7MgZKk" dir="auto" style={{ width: "300px", height: "96.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "44px", fontWeight: "500", lineHeight: "48.4px", letterSpacing: "-1.76px", color: "rgb(255, 255, 255)", "--framer-text-alignment": "start" } as CSSProperties}>
            {content.header}
          </h2>
        </div>
      </header>
      <div className="framer-1nid9s5" data-border="true" data-framer-name="Grid" style={{ width: "1200px", height: "1920px", maxWidth: "1200px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gridTemplateColumns: "400px 400px 400px", gridTemplateRows: "480px 480px 480px 480px", borderRadius: "25px" } as CSSProperties}>
        <div className="framer-2672mz" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", overflow: "hidden" } as CSSProperties}>
          <div className="framer-1en9nr9" data-framer-name="Shader" style={{ width: "350px", height: "356.406px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "20px" } as CSSProperties}>
            <div className="framer-1shs5wv-container" style={{ width: "180px", height: "180px", position: "relative", display: "block", flexDirection: "row", aspectRatio: "1 / 1" } as CSSProperties}>
              <div data-framer-component-type="Shader" style={{ width: "100%", height: "100%", position: "absolute", display: "block", flexDirection: "row", overflow: "hidden", flex: "0 0 auto", borderRadius: "inherit", cornerShape: "inherit", overflowX: "hidden", overflowY: "hidden", transform: "none" } as CSSProperties}>
                <div data-framer-background-image-wrapper="true" style={{ width: "180px", height: "180px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                  <img decoding="auto" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center" } as CSSProperties} src={content.shader.src} alt={content.shader.alt} />
                </div>
              </div>
            </div>
          </div>
          <div className="framer-3am8uh" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard}{" "}
              </span>
              {content.bentoCard_2}
            </p>
          </div>
        </div>
        <div className="framer-1r9xou6" data-border="true" data-framer-name="Bento Card" id="card-animations" style={{ width: "800px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", gridArea: "auto / span 2", overflow: "hidden" } as CSSProperties}>
          <div className="framer-d76b5u hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "750px", height: "356.406px", padding: "15px 35px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start" } as CSSProperties}>
            <div className="framer-1sk83ac" data-framer-name="Orbit" style={{ width: "455px", height: "341.406px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
              <div className="framer-8r4stf" data-border="true" data-framer-name="Outer Circle" style={{ width: "277px", height: "277px", position: "absolute", top: "170.703px", right: "-49.5px", bottom: "-106.297px", left: "227.5px", zIndex: "0", inset: "170.703px -49.5px -106.297px 227.5px", display: "block", flexDirection: "row", borderRadius: "100%", transform: "matrix(1, 0, 0, 1, -138.5, -138.5)", transformOrigin: "138.5px 138.5px", overflow: "clip", aspectRatio: "1 / 1" } as CSSProperties} />
              <div className="framer-166us1f" data-border="true" data-framer-name="Inner Circle" style={{ width: "165px", height: "165px", position: "absolute", top: "170.703px", right: "62.5px", bottom: "5.70312px", left: "227.5px", zIndex: "0", inset: "170.703px 62.5px 5.70312px 227.5px", display: "block", flexDirection: "row", borderRadius: "100%", transform: "matrix(1, 0, 0, 1, -82.5, -82.5)", transformOrigin: "82.5px 82.5px", overflow: "clip", aspectRatio: "1 / 1" } as CSSProperties} />
              <motion.div className="framer-1o93xgp" data-framer-name="Logo" style={{ width: "60px", height: "60px", position: "absolute", top: "170.703px", right: "167.5px", bottom: "110.703px", left: "227.5px", zIndex: "0", inset: "170.703px 167.5px 110.703px 227.5px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "100%", transform: "matrix(1, 0, 0, 1, -30, -30)", transformOrigin: "30px 30px", overflow: "clip", aspectRatio: "1 / 1" } as CSSProperties} initial={{ rotate: 180 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                <div data-framer-component-type="SVG" className="framer-n9anz3" aria-hidden="true" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", transform: "rotate(180deg)", transformOrigin: "14px 14px", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 28 28%22 overflow=%22visible%22><path d=%22M 0 28 L 14 28 L 28 14 L 14 14 Z M 0 14 L 14 14 L 28 0 L 14 0 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>\")" } as CSSProperties} />
              </motion.div>
              <div className="framer-1c8mnoa-container" style={{ width: "400px", height: "400px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                <motion.div style={{ width: "400px", height: "400px", position: "relative", display: "block", flexDirection: "row", overflow: "visible" } as CSSProperties} initial={{ rotate: 160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                  <motion.div style={{ width: "400px", height: "400px", position: "absolute", display: "block", flexDirection: "row", transform: "rotate(20.3573deg)", transformOrigin: "50% 50%", inset: "0px", willChange: "transform" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "60px", right: "140px", bottom: "280px", left: "200px", inset: "60px 140px 280px 200px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <motion.img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.orbit.src} alt={content.orbit.alt} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "130px", right: "18.7578px", bottom: "210px", left: "321.24355652982143px", inset: "130px 18.7578px 210px 321.244px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <motion.img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.orbit_2.src} alt={content.orbit_2.alt} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "270px", right: "18.7578px", bottom: "70px", left: "321.24355652982143px", inset: "270px 18.7578px 70px 321.244px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <motion.img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.orbit_3.src} alt={content.orbit_3.alt} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "340px", right: "140px", left: "200px", inset: "340px 140px 0px 200px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <motion.img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.orbit_4.src} alt={content.orbit_4.alt} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "270px", right: "261.25px", bottom: "70px", left: "78.75644347017858px", inset: "270px 261.25px 70px 78.7564px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <motion.img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.orbit_5.src} alt={content.orbit_5.alt} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div style={{ width: "60px", height: "60px", position: "absolute", top: "130px", right: "261.25px", bottom: "210px", left: "78.7564434701786px", inset: "130px 261.25px 210px 78.7564px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "translate(-50%, -50%)", transformOrigin: "30px 30px" } as CSSProperties} initial={{ rotate: -160.476 }} whileInView={{ rotate: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                      <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", transform: "rotate(-20.3573deg)", transformOrigin: "30px 30px", willChange: "transform" } as CSSProperties}>
                        <div style={{ width: "calc(100% - 0px)", height: "calc(100% - 0px)", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", border: "0px solid rgb(238, 238, 238)", overflow: "visible", borderRadius: "0", borderWidth: "0", borderStyle: "solid", borderColor: "rgb(238, 238, 238)", boxSizing: "border-box", background: "transparent" } as CSSProperties}>
                          <img style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", pointerEvents: "none", userSelect: "none" } as CSSProperties} src={content.orbit_6.src} alt={content.orbit_6.alt} />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="framer-3ov3no" data-border="true" data-framer-name="Loop Effect" data-nosnippet="true" style={{ width: "260px", height: "431px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px", overflow: "hidden" } as CSSProperties}>
              <div className="framer-1xij9yc" data-framer-name="Top" style={{ width: "260px", height: "50px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-16jfi0p" style={{ width: "66.0469px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px" } as CSSProperties}>
                  <div className="framer-18sjqd2" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ width: "66.0469px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "66.0469px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                      {content.title}
                    </p>
                  </div>
                </div>
                <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-1vnuqxk" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                      <use href="#svg11271281936" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="framer-1gg1idb" style={{ width: "260px", height: "1px", padding: "0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip" } as CSSProperties}>
                <div className="framer-19b2q0p" data-border="true" style={{ width: "230px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(17, 17, 17)", overflow: "hidden" } as CSSProperties} />
              </div>
              <div className="framer-1sj5ngi" data-framer-name="Content" style={{ width: "260px", height: "380px", padding: "15px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-le2g8d" data-framer-name="Tab Bar" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-kx13jm" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label}
                    </p>
                  </div>
                  <div className="framer-12x3t" data-framer-name="Segment Control" style={{ width: "134px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-1g1l1ou" data-framer-name="Active" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-18dsk3y" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "28.8906px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "28.8906px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show}
                        </p>
                      </div>
                      <div className="framer-1bp2bte" data-framer-name="Pseudo" style={{ width: "65px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-1uj79sr" data-framer-name="Inactive" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-orjmbn" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "35.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "35.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1l5i14v" data-framer-name="Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-150vrmd" data-framer-name="Radius Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.radiusTitle}
                    </p>
                  </div>
                  <div className="framer-c8n67o" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-4njt7w" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "7.78125px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "7.78125px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue}
                      </p>
                    </div>
                    <div className="framer-4hs4uc" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "5.82031px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "5.82031px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel}
                      </p>
                    </div>
                  </div>
                  <motion.div className="framer-1dayl3f" data-framer-name="Number Control" style={{ width: "62px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties} initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                    <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-gnsnh4" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", opacity: "0.2", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 10 10%22><path d=%22M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z%22 fill=%22rgb(153, 153, 153)%22></path></svg>')" } as CSSProperties} />
                    <div className="framer-m4wxtp" style={{ width: "1px", height: "14px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.07)" } as CSSProperties} />
                    <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-iy5s9n" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 10 10%22><path d=%22M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 5.5 5.5 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 L 4 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 C 0 4.336 0.336 4 0.75 4 L 4 4 Z%22 fill=%22rgb(153, 153, 153)%22></path></svg>')" } as CSSProperties} />
                  </motion.div>
                </div>
                <div className="framer-1fsak21" data-framer-name="Time" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-m0vtdr" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_2}
                    </p>
                  </div>
                  <div className="framer-1qarka4" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-go4cr4" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "7.78125px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "7.78125px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_2}
                      </p>
                    </div>
                    <div className="framer-kag6wc" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "5.82031px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "5.82031px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_2}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1g25y4u" data-framer-name="Slider Control" style={{ width: "62px", height: "26px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                    <div className="framer-jb1k8t" data-framer-name="Slider Track" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(36, 36, 36)", borderRadius: "1px" } as CSSProperties} />
                    <div className="framer-50z8or" data-framer-name="Slider Fill" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(0, 153, 255)", borderRadius: "1px" } as CSSProperties} />
                    <div className="framer-zypsk5" data-framer-name="Slider Knob" style={{ width: "10px", height: "10px", position: "absolute", top: "13px", bottom: "3px", left: "52px", inset: "13px 0px 3px 52px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "50%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0.5px 0px 0px", transform: "matrix(1, 0, 0, 1, 0, -5)", transformOrigin: "5px 5px", aspectRatio: "1 / 1" } as CSSProperties} />
                  </div>
                </div>
                <div className="framer-1qcdlfl" data-framer-name="Delay" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1p9ee60" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_3}
                    </p>
                  </div>
                  <div className="framer-1bfzxap" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-j8k7kt" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "7.78125px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "7.78125px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_3}
                      </p>
                    </div>
                    <div className="framer-182zc8t" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "5.82031px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "5.82031px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_3}
                      </p>
                    </div>
                  </div>
                  <div className="framer-duc517" data-framer-name="Slider Control" style={{ width: "62px", height: "26px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                    <div className="framer-1vv2reg" data-framer-name="Slider Track" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(36, 36, 36)", borderRadius: "1px" } as CSSProperties} />
                    <div className="framer-1l8325o" data-framer-name="Slider Fill" style={{ width: "15.5px", height: "2px", position: "absolute", top: "12px", right: "46.5px", bottom: "12px", inset: "12px 46.5px 12px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(0, 153, 255)", borderRadius: "1px" } as CSSProperties} />
                    <div className="framer-1myv94d" data-framer-name="Slider Knob" style={{ width: "10px", height: "10px", position: "absolute", top: "13px", right: "38px", bottom: "3px", left: "14px", inset: "13px 38px 3px 14px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "50%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0.5px 0px 0px", transform: "matrix(1, 0, 0, 1, 0, -5)", transformOrigin: "5px 5px", aspectRatio: "1 / 1" } as CSSProperties} />
                  </div>
                </div>
                <div className="framer-tdg3en" data-framer-name="Tab Bar" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1lsefvz" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_4}
                    </p>
                  </div>
                  <div className="framer-12k1uw5" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1sh13ju" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "23.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "23.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_4}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1g3zwwf" data-framer-name="Segment Control" style={{ width: "62px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-3gs7lr" data-framer-name="Active" style={{ width: "29px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-11wy1t2" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.1484px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.1484px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_2}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1d00il3" data-framer-name="Inactive" style={{ width: "29px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-pl6t05" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.1875px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.1875px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1jjel0e" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-zdqe51" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_5}
                    </p>
                  </div>
                  <div className="framer-r0lt6v" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-kneghp" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "13.2656px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "13.2656px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties} className="framer-text">
                        {content.controlValue_5}
                      </p>
                    </div>
                    <div className="framer-61c4yj" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "6.3125px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "6.3125px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_4}
                      </p>
                    </div>
                  </div>
                  <div className="framer-12nucoq" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-neojp4" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "13.2344px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "13.2344px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties} className="framer-text">
                        {content.controlValue_6}
                      </p>
                    </div>
                    <div className="framer-1y9ihvl" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "6.27344px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "6.27344px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_5}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1csfnb1" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-3qowdi" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_6}
                    </p>
                  </div>
                  <div className="framer-hj6wdh" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-epd6hn" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "13.2656px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "13.2656px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties} className="framer-text">
                        {content.controlValue_7}
                      </p>
                    </div>
                    <div className="framer-1mz8uuj" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "6.3125px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "6.3125px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_6}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1q93y6q" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-np7kdy" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "13.2344px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "13.2344px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties} className="framer-text">
                        {content.controlValue_8}
                      </p>
                    </div>
                    <div className="framer-omdw1k" data-framer-name="Control Label" data-framer-component-type="RichTextContainer" style={{ width: "6.27344px", height: "10.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "6.27344px", height: "10.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "9px", fontWeight: "500", lineHeight: "10.8px", textAlign: "right", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "9px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlLabel_7}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-sspf4v" data-framer-name="Tab Bar" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1usdd2p" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.label_7}
                    </p>
                  </div>
                  <div className="framer-1stgqf" data-framer-name="Segment Control" style={{ width: "134px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-1jrt77n" data-framer-name="Inactive" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-yuvhty" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "24.2578px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "24.2578px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_3}
                        </p>
                      </div>
                    </div>
                    <div className="framer-naohts" data-framer-name="Active" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-11qlqiu" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "35.5625px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "35.5625px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_3}
                        </p>
                      </div>
                      <div className="framer-19uagz" data-framer-name="Pseudo" style={{ width: "65px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className="framer-ihk849" data-framer-name="Border Hint" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-oladhf" data-framer-name="Border Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.borderTitle}
                    </p>
                  </div>
                  <div className="framer-1quamp3" data-framer-name="Hint Property" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-7ishzu" data-framer-name="Border Color" style={{ width: "22px", height: "22px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(68, 221, 221)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div className="framer-9tysky" data-framer-name="Border Color" style={{ width: "22px", height: "22px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(8, 154, 255)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                        <div data-framer-component-type="SVG" className="framer-1l8uf5l" aria-hidden="true" style={{ width: "17px", height: "16px", position: "absolute", top: "1.77344px", right: "3.11719px", bottom: "4.22656px", left: "1.88281px", inset: "1.77344px 3.11719px 4.22656px 1.88281px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 17 16%22><path d=%22M 4 14 L 14.5 3.5%22 fill=%22transparent%22 stroke-width=%221.5%22 stroke=%22%23FFFFFF%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22></path></svg>')" } as CSSProperties} />
                      </div>
                    </div>
                    <div className="framer-16p9isb" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "92px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "92px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlValue_9}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-prgirv" data-framer-component-type="RichTextContainer" style={{ width: "410px", height: "48.5938px", maxWidth: "410px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "410px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_3}{" "}
              </span>
              {content.bentoCard_4}
            </p>
          </div>
        </div>
        <div className="framer-1hqsmrg" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", overflow: "hidden" } as CSSProperties}>
          <div className="framer-4kvjb2 hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "350px", height: "356.406px", padding: "20px 0px 0px 25px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", alignContent: "flex-end", gap: "10px" } as CSSProperties}>
            <div className="framer-ldec04-container" style={{ width: "330px", height: "376.406px", position: "absolute", top: "-20px", right: "-9px", left: "29px", zIndex: "1", inset: "-20px -9px 0px 29px", display: "block", flexDirection: "row" } as CSSProperties}>
              <div className="framer-lO31a framer-h0mjrt framer-v-1hdnm2l" data-framer-name="Art Direction" data-highlight="true" style={{ width: "100%", height: "100%", padding: "25px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "40px", opacity: "1" } as CSSProperties}>
                <div className="framer-3hlvyl" style={{ width: "434px", height: "204px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "8px", opacity: "1" } as CSSProperties}>
                  <div className="framer-1iimxri" style={{ width: "434px", height: "36px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <div className="framer-18d8zw9" data-nosnippet="true" data-framer-component-type="RichTextContainer" style={{ width: "96px", height: "36px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre", "--extracted-2gg91v": "\"wght\" 450", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "96px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.9px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRMU1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on, 'cv10' on, 'case' on, 'ss02' on, 'ss04' on, 'ss08' on", "--framer-font-size": "30px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"wght\" 450)", "--framer-letter-spacing": "-0.03em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                        {content.artDirection}
                      </p>
                    </div>
                  </div>
                  <div className="framer-hmbifg" style={{ width: "434px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(20, 20, 20))", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-14jbtl8" style={{ width: "434px", height: "36px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <div className="framer-19109wg" data-nosnippet="true" data-framer-component-type="RichTextContainer" style={{ width: "105.547px", height: "36px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre", "--extracted-2gg91v": "\"wght\" 450", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "105.547px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.9px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRMU1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on, 'cv10' on, 'case' on, 'ss02' on, 'ss04' on, 'ss08' on", "--framer-font-size": "30px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"wght\" 450)", "--framer-letter-spacing": "-0.03em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                        {content.artDirection_2}
                      </p>
                    </div>
                  </div>
                  <div className="framer-15wztf0" style={{ width: "434px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(20, 20, 20))", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-f8f7f8" style={{ width: "434px", height: "36px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties} data-cs-id="1906">
                    <div className="framer-1gqjv5d" data-nosnippet="true" data-framer-component-type="RichTextContainer" style={{ width: "108.867px", height: "36px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre", "--extracted-2gg91v": "\"wght\" 450", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "108.867px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.9px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRMU1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on, 'cv10' on, 'case' on, 'ss02' on, 'ss04' on, 'ss08' on", "--framer-font-size": "30px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"wght\" 450)", "--framer-letter-spacing": "-0.03em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                        {content.artDirection_3}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1w7l03x" style={{ width: "434px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(20, 20, 20))", overflow: "clip", opacity: "1" } as CSSProperties} />
                  <div className="framer-qc5h9q" style={{ width: "434px", height: "36px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties} data-cs-id="1910">
                    <div className="framer-1t1l335" data-nosnippet="true" data-framer-component-type="RichTextContainer" style={{ width: "84.8125px", height: "36px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-2gg91v": "\"wght\" 450", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none", willChange: "transform", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "84.8125px", height: "36px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.9px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRMU1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on, 'cv10' on, 'case' on, 'ss02' on, 'ss04' on, 'ss08' on", "--framer-font-size": "30px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"wght\" 450)", "--framer-letter-spacing": "-0.03em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                        {content.artDirection_4}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1fe39se" style={{ width: "434px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(20, 20, 20))", overflow: "clip", opacity: "1" } as CSSProperties} data-cs-id="1913" />
                  <div className="framer-1qzqnhw" style={{ width: "7px", height: "7px", position: "absolute", top: "177.477px", right: "427px", bottom: "19.5234px", zIndex: "1", inset: "177.477px 427px 19.5234px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "100%", transform: "translateY(-50%)", transformOrigin: "50% 50% 0px", overflow: "clip", aspectRatio: "1 / 1" } as CSSProperties} data-cs-id="1914" />
                  <div data-framer-component-type="SVG" className="framer-dsfndi" aria-hidden="true" style={{ width: "19px", height: "24px", position: "absolute", top: "175px", right: "316px", bottom: "5px", left: "99px", inset: "175px 316px 5px 99px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                      <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "visible" } as CSSProperties} preserveAspectRatio="none" width="100%" height="100%">
                        <use href="#svg1821900306_6338" data-cs-id="1918" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                      </svg>
                    </div>
                  </div>
                  <div className="framer-d9jgiv" data-border="true" data-framer-appear-id="d9jgiv" data-framer-name="Image 4" style={{ width: "250px", height: "170px", position: "absolute", top: "100px", right: "-21px", bottom: "-66px", left: "205px", zIndex: "1", inset: "100px -21px -66px 205px", display: "block", flexDirection: "row", borderRadius: "25px", overflow: "clip", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.08))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", willChange: "transform", borderBottomLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(25px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1", transform: "none" } as CSSProperties}>
                    <div data-framer-background-image-wrapper="true" style={{ width: "250px", height: "170px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                      <motion.img decoding="auto" loading="lazy" width="1024" height="1024" sizes="250px" srcSet={"/images/0741bf0e-jK21Sjy9P1p1iFp5wcRYYbz9Vg.avif?scale-down-to=512&width=1024&height=1024 512w,/images/0741bf0e-jK21Sjy9P1p1iFp5wcRYYbz9Vg.avif?width=1024&height=1024 1024w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 1024 / 1024", cornerShape: "inherit", objectPosition: "center center" } as CSSProperties} initial={{ opacity: 0.05 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.image4.src} alt={content.image4.alt} />
                    </div>
                    <div className="framer-1czu46p" data-framer-name="Gloss" style={{ width: "250px", height: "100px", position: "absolute", bottom: "70px", inset: "0px 0px 70px", display: "block", flexDirection: "row", opacity: "0.05", mixBlendMode: "screen", overflow: "hidden", background: "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)" } as CSSProperties} />
                    <div className="framer-1lcaxxo" data-framer-name="Image 4" style={{ width: "250px", height: "170px", position: "absolute", zIndex: "0", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                      <div data-framer-background-image-wrapper="true" style={{ width: "250px", height: "170px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                        <img decoding="auto" loading="lazy" width="2688" height="1792" sizes="250px" srcSet={"/images/35467ab8-s6n79wGDtW1MrJPEz2fipom3n4E.avif?scale-down-to=512&width=2688&height=1792 512w,/images/35467ab8-s6n79wGDtW1MrJPEz2fipom3n4E.avif?scale-down-to=1024&width=2688&height=1792 1024w,/images/35467ab8-s6n79wGDtW1MrJPEz2fipom3n4E.avif?scale-down-to=2048&width=2688&height=1792 2048w,/images/35467ab8-s6n79wGDtW1MrJPEz2fipom3n4E.avif?width=2688&height=1792 2688w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "clip", objectFit: "cover", aspectRatio: "auto 2688 / 1792", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center" } as CSSProperties} src={content.image4_2.src} alt={content.image4_2.alt} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-6yxt0v" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", zIndex: "2", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_5}{" "}
              </span>
              {content.bentoCard_6}
            </p>
          </div>
          <div className="framer-179r3r7" data-framer-name="Fade" style={{ width: "107px", height: "480px", position: "absolute", left: "293px", zIndex: "0", inset: "0px 0px 0px 293px", display: "block", flexDirection: "row", overflow: "clip" } as CSSProperties} />
        </div>
        <div className="framer-1uwxstl" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px" } as CSSProperties}>
          <div className="framer-cc9nq9 hidden-r05htx hidden-kkqok7" data-framer-name="Variable fonts" style={{ width: "350px", height: "356.406px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
            <div className="framer-qazj0q-container" style={{ width: "260px", height: "271px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
              <div className="framer-otu2O framer-h58gkq framer-v-3tfxfi" data-framer-name="Off" data-nosnippet="true" style={{ width: "260px", height: "271px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "60px", overflow: "clip", opacity: "1" } as CSSProperties}>
                <div className="framer-s7yp8j-container" style={{ width: "260px", height: "151px", position: "relative", zIndex: "1", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                  <div className="framer-zAMtR framer-x7528q framer-v-x7528q" data-border="true" data-framer-name="Weight" style={{ width: "100%", height: "151px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "var(--token-5e2a9781-f258-43f3-ae02-0a76276a5519, rgb(8, 8, 8))", borderRadius: "20px", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", opacity: "1" } as CSSProperties}>
                    <div className="framer-kuyc57" data-framer-name="Top" style={{ width: "260px", height: "50px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                      <div className="framer-hiq7sk" style={{ width: "47.5781px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1gc3fts" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ width: "47.5781px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "47.5781px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))" } as CSSProperties}>
                            {content.title_2}
                          </p>
                        </div>
                      </div>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-1qm7xh6" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg11271281936" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1h0hksv" data-framer-name="Line" style={{ width: "230px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "var(--token-81eeded8-7d17-49fd-8f9d-4b09d4083be5, rgba(255, 255, 255, 0.08))", overflow: "clip", opacity: "1" } as CSSProperties} />
                    <div className="framer-1s2ysx8" style={{ width: "260px", height: "100px", padding: "15px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                      <div className="framer-1ah064l" data-framer-name="Weight" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1rw3mgz" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-r6o4lv": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153)))" } as CSSProperties}>
                            {content.label_8}
                          </p>
                        </div>
                        <div className="framer-15j62mv" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "8px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "16px", backgroundColor: "var(--token-94a5bf9a-16a4-4639-b671-271526647eef, rgb(43, 43, 43))", borderRadius: "8px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                          <div className="framer-djlcb0" data-framer-component-type="RichTextContainer" style={{ width: "23.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", opacity: "1", transform: "none" } as CSSProperties}>
                            <p dir="auto" className="framer-text" style={{ width: "23.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                              {content.numberControl}
                            </p>
                          </div>
                          <div className="framer-1xd075e" data-framer-component-type="RichTextContainer" style={{ width: "23.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", transform: "none" } as CSSProperties}>
                            <p dir="auto" className="framer-text" style={{ width: "23.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                              {content.numberControl_2}
                            </p>
                          </div>
                        </div>
                        <div className="framer-em1e4v" data-framer-name="Slider Control" style={{ width: "62px", height: "26px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-o85mcj" data-framer-name="Slider Track" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "var(--token-94a5bf9a-16a4-4639-b671-271526647eef, rgb(43, 43, 43))", borderRadius: "1px", opacity: "1" } as CSSProperties} />
                          <div className="framer-hc1oj8" data-framer-name="Slider Fill" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))", borderRadius: "1px", opacity: "1" } as CSSProperties} />
                          <div className="framer-8w55y2" data-framer-name="Slider Knob" style={{ width: "10px", height: "10px", position: "absolute", top: "13px", bottom: "3px", left: "52px", inset: "13px 0px 3px 52px", display: "block", flexDirection: "row", backgroundColor: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", borderRadius: "50%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0.5px 0px 0px", transform: "translateY(-50%)", transformOrigin: "5px 5px", aspectRatio: "1 / 1", opacity: "1" } as CSSProperties} />
                        </div>
                      </div>
                      <motion.div className="framer-1g406dk" data-framer-name="Italic" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                        <div className="framer-12qbtn3" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-r6o4lv": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153)))" } as CSSProperties}>
                            {content.label_9}
                          </p>
                        </div>
                        <div className="framer-1f1x768" data-framer-name="Number Control" style={{ width: "62px", height: "30px", padding: "8px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "16px", backgroundColor: "var(--token-94a5bf9a-16a4-4639-b671-271526647eef, rgb(43, 43, 43))", borderRadius: "8px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                          <div className="framer-13uuafe" data-framer-component-type="RichTextContainer" style={{ width: "7.78125px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", opacity: "1", transform: "none" } as CSSProperties}>
                            <motion.p dir="auto" className="framer-text" style={{ width: "7.78125px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties} initial={{ opacity: 1, y: "-50%" }} whileInView={{ opacity: 1, y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                              {content.numberControl_3}
                            </motion.p>
                          </div>
                          <div className="framer-x07mvy" data-framer-component-type="RichTextContainer" style={{ width: "15.5547px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", transform: "none" } as CSSProperties}>
                            <p dir="auto" className="framer-text" style={{ width: "15.5547px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'tnum' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                              {content.numberControl_4}
                            </p>
                          </div>
                        </div>
                        <div className="framer-1m3d9qr" data-framer-name="Slider Control" style={{ width: "62px", height: "26px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties}>
                          <div className="framer-1nws6fj" data-framer-name="Slider Track" style={{ width: "62px", height: "2px", position: "absolute", top: "12px", bottom: "12px", inset: "12px 0px", display: "block", flexDirection: "row", backgroundColor: "var(--token-94a5bf9a-16a4-4639-b671-271526647eef, rgb(43, 43, 43))", borderRadius: "1px", opacity: "1" } as CSSProperties} />
                          <div className="framer-16yvhcc" data-framer-name="Slider Fill" style={{ height: "2px", position: "absolute", top: "12px", right: "62px", bottom: "12px", inset: "12px 62px 12px 0px", display: "block", flexDirection: "row", backgroundColor: "var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))", borderRadius: "1px", opacity: "1" } as CSSProperties} />
                          <div className="framer-1r4ae2w" data-framer-name="Slider Knob" style={{ width: "10px", height: "10px", position: "absolute", top: "13px", right: "52px", bottom: "3px", inset: "13px 52px 3px 0px", display: "block", flexDirection: "row", backgroundColor: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", borderRadius: "50%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0.5px 0px 0px", transform: "translateY(-50%)", transformOrigin: "5px 5px", aspectRatio: "1 / 1", opacity: "1" } as CSSProperties} />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.div className="framer-pjj2k2-container" style={{ width: "260px", height: "60px", position: "relative", display: "block", flexDirection: "row", opacity: "1" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                  <div className="framer-FbDr3 framer-6oogsx framer-v-6oogsx" data-framer-name="Weight" style={{ width: "100%", height: "60px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                    <div className="framer-ovnzxq" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "60px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", "--extracted-2gg91v": "\"wght\" 900, \"ital\" 0", "--extracted-r6o4lv": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "260px", height: "60px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Lazzer Variable\", \"Lazzer Variable Placeholder\", sans-serif", fontSize: "60px", lineHeight: "60px", letterSpacing: "-1px", textAlign: "center", color: "rgb(255, 255, 255)", "--font-selector": "Q1VTVE9NO0xhenplciBWYXJpYWJsZVZGPUluZG5hSFFpSURrd01Dd2dJbWwwWVd3aUlEQT0=", "--framer-font-family": "\"Lazzer Variable\", \"Lazzer Variable Placeholder\", sans-serif", "--framer-font-size": "60px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"wght\" 900, \"ital\" 0)", "--framer-letter-spacing": "-1px", "--framer-line-height": "60px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))" } as CSSProperties}>
                        {content.weight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="framer-1qf15ep" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <motion.p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties} initial={{ opacity: 1, y: "-50%" }} whileInView={{ opacity: 1, y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_7}{" "}
              </span>
              {content.bentoCard_8}
            </motion.p>
          </div>
        </div>
        <div className="framer-1sfqoc9" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "960px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", gridArea: "span 2", overflow: "clip" } as CSSProperties}>
          <div className="framer-cd6dov hidden-kkqok7" data-framer-name="Visual" style={{ width: "350px", height: "836.406px", padding: "15px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", overflow: "hidden" } as CSSProperties}>
            <div className="framer-9au9mr" data-border="true" data-framer-name="OpenType" data-nosnippet="true" style={{ width: "260px", height: "894px", padding: "0px 15px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px", overflow: "hidden" } as CSSProperties}>
              <div className="framer-1oaposa" data-framer-name="Layout Row" style={{ width: "230px", height: "50px", padding: "14px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-1qpbe86" data-framer-name="Titile" data-framer-component-type="RichTextContainer" style={{ width: "59.125px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "59.125px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.titile}
                  </p>
                </div>
                <div data-framer-component-type="SVG" className="framer-xbmv10" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                      <use href="#svg10101970430" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="framer-1g8ov8" style={{ width: "230px", height: "120px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                <div className="framer-uv60hu" data-framer-component-type="RichTextContainer" style={{ width: "57.8594px", height: "38.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "57.8594px", height: "38.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "32px", fontWeight: "700", lineHeight: "38.4px", letterSpacing: "-1.92px", textAlign: "center", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNzAw", "--framer-font-size": "32px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.06em", "--framer-text-alignment": "center", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                    {content.opentype}
                  </p>
                </div>
              </div>
              <div className="framer-wro8g2" style={{ width: "230px", height: "45px", padding: "15px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-1q0m7tz" data-framer-name="Checked / Day" style={{ width: "230px", height: "30px", padding: "0px 10px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                  <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-nm4s28" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                      <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                        <use href="#svg11324189933" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                      </svg>
                    </div>
                  </div>
                  <div className="framer-cqgjxj" data-framer-name="Sibling Frame 1 Title" data-framer-component-type="RichTextContainer" style={{ width: "51.2109px", height: "12px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "51.2109px", height: "12px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "12px", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-line-height": "1em", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.siblingFrame1Title}
                    </p>
                  </div>
                  <div className="framer-1y04y45" style={{ width: "130.789px", height: "10px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties} />
                </div>
              </div>
              <div className="framer-1jhocko" data-border="true" style={{ width: "230px", height: "15px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(17, 17, 17)", overflow: "hidden" } as CSSProperties} />
              <div className="framer-12zeaaf" data-framer-name="Layout Row" style={{ width: "230px", height: "50px", padding: "14px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-1gj8u01" data-framer-name="Titile" data-framer-component-type="RichTextContainer" style={{ width: "75.2891px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "75.2891px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.titile_2}
                  </p>
                </div>
              </div>
              <div className="framer-mebixa" data-framer-name="Layout Section" style={{ width: "230px", height: "85px", padding: "0px 0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-36e4ti" data-framer-name="Position Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-82py82" style={{ width: "115px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                    <div className="framer-1hapkih" data-framer-name="Radius Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.radiusTitle_2}
                      </p>
                    </div>
                  </div>
                  <div className="framer-161fm8s" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1sodu05" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-14wpn1p" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_4}
                        </p>
                      </div>
                    </div>
                    <div className="framer-n2442y" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1qs52m8" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_4}
                        </p>
                      </div>
                      <div className="framer-i5cal9" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className="framer-1idmdo0" data-framer-name="Position Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-odp35i" style={{ width: "115px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                    <div className="framer-1svi69r" data-framer-name="Radius Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.radiusTitle_3}
                      </p>
                    </div>
                  </div>
                  <div className="framer-17ey7n3" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-ifngv0" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-trcx1x" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_5}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1lrfzz5" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1bj63x8" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_5}
                        </p>
                      </div>
                      <div className="framer-1rysfyx" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-1bx54w6" data-border="true" data-framer-name="Layout Row" style={{ width: "230px", height: "50px", padding: "14px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-rfsule" data-framer-name="Titile" data-framer-component-type="RichTextContainer" style={{ width: "108.539px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "108.539px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.titile_3}
                  </p>
                </div>
              </div>
              <div className="framer-7uc6w0" data-framer-name="Layout Section" style={{ width: "230px", height: "85px", padding: "0px 0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-o4bi70" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-qoatrs" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle}
                    </p>
                  </div>
                  <div className="framer-x2eulw" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1i49d9m" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-6y7nc0" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_6}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1q92w4n" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-13rlog2" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_6}
                        </p>
                      </div>
                      <div className="framer-1betben" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className="framer-1m4sk8k" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-4dr0lj" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_2}
                    </p>
                  </div>
                  <div className="framer-1pfh7of" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1gpnj2d" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-t978e2" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_7}
                        </p>
                      </div>
                      <div className="framer-qoagvz" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-16kgkvk" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-11mdb0r" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_7}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-1idkm28" data-border="true" data-framer-name="Layout Row" style={{ width: "230px", height: "50px", padding: "14px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-1d8l9b8" data-framer-name="Titile" data-framer-component-type="RichTextContainer" style={{ width: "54.0938px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "54.0938px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.titile_4}
                  </p>
                </div>
              </div>
              <div className="framer-1m77ri7" data-framer-name="Layout Section" style={{ width: "230px", height: "125px", padding: "0px 0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-hph57x" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-k4822k" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_3}
                    </p>
                  </div>
                  <div className="framer-osmhh2" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-11ldu2t" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-bog3tr" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_8}
                        </p>
                      </div>
                    </div>
                    <div className="framer-ky6zf4" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-xu431t" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_8}
                        </p>
                      </div>
                      <div className="framer-fqfzkf" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className="framer-1ox8d0b" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-ebu224" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_4}
                    </p>
                  </div>
                  <div className="framer-cwkjij" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-idgwwl" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1n9b6z3" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_9}
                        </p>
                      </div>
                      <div className="framer-1kt7wy" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-1l5qkb2" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-xirkhh" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_9}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-10g5fyg" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1djr9xg" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_5}
                    </p>
                  </div>
                  <div className="framer-a6cxwi" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-10phjqi" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-wgcchx" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_10}
                        </p>
                      </div>
                    </div>
                    <div className="framer-8e2kw0" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-ow3gwd" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_10}
                        </p>
                      </div>
                      <div className="framer-1d1h6e5" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-1lrgug" data-border="true" data-framer-name="Layout Row" style={{ width: "230px", height: "50px", padding: "14px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-9ll0ia" data-framer-name="Titile" data-framer-component-type="RichTextContainer" style={{ width: "53.2031px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "53.2031px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.titile_5}
                  </p>
                </div>
              </div>
              <div className="framer-15wo9ng" data-framer-name="Layout Section" style={{ width: "230px", height: "325px", padding: "0px 0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-1cj0sbx" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-czc2l" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_6}
                    </p>
                  </div>
                  <div className="framer-1m5gl8c" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1fvjvm6" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-dkfhoi" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_11}
                        </p>
                      </div>
                    </div>
                    <div className="framer-17cvawc" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-bnblm3" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_11}
                        </p>
                      </div>
                      <div className="framer-vuin9v" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className="framer-1lgitrz" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-zoc3bw" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_7}
                    </p>
                  </div>
                  <div className="framer-1v8x6zp" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1nvykkh" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1lwod2k" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_12}
                        </p>
                      </div>
                      <div className="framer-194jn0e" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-sdtv6p" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-w9wto6" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_12}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-uhve2l" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-qdjhy0" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_8}
                    </p>
                  </div>
                  <div className="framer-pofjtm" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-9h26fy" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-62n3op" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_13}
                        </p>
                      </div>
                      <div className="framer-1aql94m" data-framer-name="Pseudo" style={{ width: "43px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-1a6z4bj" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1l4j8zs" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_13}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1bg9yxf" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1a7wuir" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_9}
                    </p>
                  </div>
                  <div className="framer-1a2lwz8" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-zmp0d4" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-rhuvvv" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_14}
                        </p>
                      </div>
                    </div>
                    <div className="framer-pa3yu4" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-132c4gc" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_14}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-zpgvmn" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-yybn4h" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_10}
                    </p>
                  </div>
                  <div className="framer-ot946b" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-191mbij" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1tdknrm" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_15}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1hv6dds" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1k27ueu" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_15}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-f708xe" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-18use8n" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_11}
                    </p>
                  </div>
                  <div className="framer-iasgiz" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-xpxpar" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1jvxq1a" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_16}
                        </p>
                      </div>
                    </div>
                    <div className="framer-11ock2p" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-t96ljs" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_16}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1iaeeyl" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-14a5u6v" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_12}
                    </p>
                  </div>
                  <div className="framer-1a34ika" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1t4rsrj" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-443mst" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_17}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1hyxtpm" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1qi3ma" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_17}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-zjxpd9" data-framer-name="Overflow Row" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-rmq8l" data-framer-name="Overflow Title" data-framer-component-type="RichTextContainer" style={{ width: "115px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "115px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.overflowTitle_13}
                    </p>
                  </div>
                  <div className="framer-1qywmvy" data-framer-name="Segment Control" style={{ width: "90px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-9titb5" data-framer-name="Inactive" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-90g6xu" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "20.8203px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "20.8203px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_18}
                        </p>
                      </div>
                    </div>
                    <div className="framer-mo7767" data-framer-name="Active" style={{ width: "43px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-15hm6t" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "16.4219px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.4219px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_18}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-153stmu" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_9}{" "}
              </span>
              {content.bentoCard_10}
            </p>
          </div>
        </div>
        <div className="framer-1elcet7" data-border="true" data-framer-name="Bento Card" style={{ width: "800px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", gridArea: "auto / span 2", overflow: "hidden" } as CSSProperties}>
          <div className="framer-1e9sl3f hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "750px", height: "356.406px", padding: "25px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "50px" } as CSSProperties}>
            <div className="framer-1xhf4id" data-border="true" data-framer-name="Form" data-nosnippet="true" style={{ width: "390px", height: "300.594px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "20px" } as CSSProperties}>
              <div className="framer-av1tmh" data-framer-name="Header" style={{ width: "350px", height: "36.7969px", padding: "0px 0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "6px", overflow: "hidden" } as CSSProperties}>
                <div className="framer-1sweksj" data-framer-component-type="RichTextContainer" style={{ width: "117.719px", height: "28.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "117.719px", height: "28.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "24px", fontWeight: "700", lineHeight: "28.8px", letterSpacing: "-0.72px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-size": "24px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.03em", "--framer-text-color": "rgb(255, 255, 255)" } as CSSProperties} className="framer-text">
                    {content.header_2}
                  </p>
                </div>
              </div>
              <div className="framer-qtcozo" data-framer-name="Fields" style={{ width: "350px", height: "143.797px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "15px" } as CSSProperties}>
                <div className="framer-q1qj6z" style={{ width: "350px", height: "64.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "15px", overflow: "clip" } as CSSProperties}>
                  <label className="framer-1bzwlg6" style={{ width: "167.5px", height: "64.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px" } as CSSProperties}>
                    <div className="framer-1fyfwmx" data-framer-component-type="RichTextContainer" style={{ width: "33.6016px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "33.6016px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(136, 136, 136)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(136, 136, 136)" } as CSSProperties} className="framer-text">
                        {content.fields}
                      </p>
                    </div>
                    <div className="framer-form-text-input framer-form-input-wrapper framer-1jf1mpl framer-form-text-input-type" style={{ width: "167.5px", height: "40px", padding: "12px", position: "relative", display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "rgba(187, 187, 187, 0.15)", borderRadius: "10px", overflow: "hidden" } as CSSProperties}>
                      <input data-1p-ignore="true" data-lpignore="true" data-form-type="other" autoComplete="off" type="text" name="Name" placeholder="Jane Smith" className="framer-form-input framer-form-input-empty" value="" style={{ width: "143.5px", height: "16px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter", fontSize: "14px", lineHeight: "14px", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", overflow: "clip" } as CSSProperties} />
                    </div>
                  </label>
                  <label className="framer-1pz5xll" style={{ width: "167.5px", height: "64.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px" } as CSSProperties}>
                    <div className="framer-13fw7y5" data-framer-component-type="RichTextContainer" style={{ width: "30.7578px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "30.7578px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(136, 136, 136)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(136, 136, 136)" } as CSSProperties} className="framer-text">
                        {content.fields_2}
                      </p>
                    </div>
                    <div className="framer-form-text-input framer-form-input-wrapper framer-dym8jr" style={{ width: "167.5px", height: "40px", padding: "12px", position: "relative", display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "rgba(187, 187, 187, 0.15)", borderRadius: "10px", overflow: "hidden" } as CSSProperties}>
                      <input data-1p-ignore="true" data-lpignore="true" data-form-type="other" autoComplete="off" type="email" name="Email" placeholder="jane@framer.com" className="framer-form-input framer-form-input-empty" value="" style={{ width: "143.5px", height: "16px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter", fontSize: "14px", lineHeight: "14px", color: "rgb(255, 255, 255)", whiteSpace: "nowrap", overflow: "clip" } as CSSProperties} />
                    </div>
                  </label>
                </div>
                <label className="framer-cq66c7" style={{ width: "350px", height: "64.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px" } as CSSProperties}>
                  <div className="framer-1vpozcb" data-framer-component-type="RichTextContainer" style={{ width: "49.4688px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p style={{ width: "49.4688px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(136, 136, 136)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-family": "\"Inter\", \"Inter Placeholder\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "rgb(136, 136, 136)" } as CSSProperties} className="framer-text">
                      {content.fields_3}
                    </p>
                  </div>
                  <div className="framer-form-input-wrapper framer-form-select-wrapper framer-y5u7af" style={{ width: "350px", height: "40px", padding: "0px 12px 0px 0px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(187, 187, 187, 0.15)", borderRadius: "10px", overflow: "hidden" } as CSSProperties}>
                    <select name="Location" required className="framer-form-input" style={{ width: "338px", height: "40px", padding: "12px", position: "static", display: "inline-block", flexDirection: "row", alignItems: "center", fontFamily: "Inter", fontSize: "14px", lineHeight: "16.8px", color: "rgb(153, 153, 153)", whiteSpace: "nowrap" } as CSSProperties}>
                      <option value="" disabled selected style={{ minWidth: "24px", minHeight: "24px", padding: "0px 2px 1px", position: "static", display: "block", flexDirection: "row", alignItems: "center", gap: "7px", color: "rgba(0, 0, 0, 0.4)" } as CSSProperties}>
                        Select…
                      </option>
                      <option value="amsterdam" style={{ minWidth: "24px", minHeight: "24px", padding: "0px 2px 1px", position: "static", display: "block", flexDirection: "row", alignItems: "center", gap: "7px", color: "rgb(0, 0, 0)" } as CSSProperties}>
                        Amsterdam
                      </option>
                      <option value="barcelona" style={{ minWidth: "24px", minHeight: "24px", padding: "0px 2px 1px", position: "static", display: "block", flexDirection: "row", alignItems: "center", gap: "7px", color: "rgb(0, 0, 0)" } as CSSProperties}>
                        Barcelona
                      </option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="framer-nugpef" data-framer-name="Button" style={{ width: "350px", height: "40px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(51, 51, 51)", borderRadius: "10px" } as CSSProperties}>
                <div className="framer-ogl9uj" data-framer-component-type="RichTextContainer" style={{ width: "47.6328px", height: "16.7969px", position: "absolute", top: "20px", right: "127.367px", bottom: "3.20312px", left: "175px", inset: "20px 127.367px 3.20312px 175px", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "translate(-50%, -50%)", transformOrigin: "23.8164px 8.39844px", whiteSpace: "pre" } as CSSProperties}>
                  <p style={{ width: "47.6328px", height: "16.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", fontWeight: "600", lineHeight: "16.8px", color: "rgb(254, 254, 254)", "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-family": "\"Inter\", \"Inter Placeholder\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "600", "--framer-text-color": "rgb(254, 254, 254)" } as CSSProperties} className="framer-text">
                    {content.button}
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1sm9s6z" data-border="true" data-framer-name="Input" data-nosnippet="true" style={{ width: "260px", height: "295px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "16px", overflow: "hidden" } as CSSProperties}>
              <div className="framer-nki8im" data-framer-name="Header" style={{ width: "260px", height: "50px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-12pih43" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ width: "29.9766px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                  <p dir="auto" style={{ width: "29.9766px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter SemiBold\", \"Inter SemiBold Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "Q1VTVE9NVjI7SW50ZXIgU2VtaUJvbGQ=", "--framer-font-family": "\"Inter SemiBold\", \"Inter SemiBold Placeholder\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                    {content.title_3}
                  </p>
                </div>
                <motion.div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-phodkp" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties} initial={{ x: "-50%", y: "-50%" }} whileInView={{ x: "0%", y: "0%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                      <use href="#svg11695272811" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </motion.div>
              </div>
              <div className="framer-8814j1" data-framer-name="Options" style={{ width: "260px", height: "245px", padding: "0px 0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-1q1y9ek" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div data-framer-component-type="SVG" className="framer-287ix1" aria-hidden="true" style={{ width: "10px", height: "10px", position: "absolute", top: "11px", right: "234px", bottom: "9px", left: "16px", inset: "11px 234px 9px 16px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                      <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "visible" } as CSSProperties} preserveAspectRatio="none" width="100%" height="100%">
                        <use href="#svg1157502715_588" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                      </svg>
                    </div>
                  </div>
                  <div className="framer-r1042d" data-framer-name="Width Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.widthTitle}
                    </p>
                  </div>
                  <div className="framer-rnwxk8" data-framer-name="Enum Control" style={{ width: "134px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-zsh3mq" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "118px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "118px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_10}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-sfq0x5" data-framer-name="Position Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-c1zjse" style={{ width: "71px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                    <div className="framer-1z12yqy" data-framer-name="Radius Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.radiusTitle_4}
                      </p>
                    </div>
                  </div>
                  <div className="framer-jhlbli" data-framer-name="Segment Control" style={{ width: "134px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-dee6wj" data-framer-name="Active" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.08) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-1gud5jz" data-framer-name="Show" data-framer-component-type="RichTextContainer" style={{ width: "21.0703px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "21.0703px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.show_19}
                        </p>
                      </div>
                      <div className="framer-1pqaupc" data-framer-name="Pseudo" style={{ width: "65px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                    </div>
                    <div className="framer-phdngx" data-framer-name="Inactive" style={{ width: "65px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                      <div className="framer-dkw1u2" data-framer-name="Hide" data-framer-component-type="RichTextContainer" style={{ width: "16.3281px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "16.3281px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                          {content.hide_19}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-framer-component-type="SVG" className="framer-zsgd06" aria-hidden="true" style={{ width: "10px", height: "10px", position: "absolute", top: "11px", right: "234px", bottom: "9px", left: "16px", inset: "11px 234px 9px 16px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                      <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "visible" } as CSSProperties} preserveAspectRatio="none" width="100%" height="100%">
                        <use href="#svg1157502715_588" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="framer-1rm9fxn" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "8px" } as CSSProperties}>
                  <div className="framer-azx281" data-framer-name="Width Title" data-framer-component-type="RichTextContainer" style={{ width: "73px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "73px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.widthTitle_2}
                    </p>
                  </div>
                  <div className="framer-964g4i" data-framer-name="Enum Control" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1ofc7c3" data-framer-name="Dropdown" style={{ width: "22px", height: "22px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 153, 255)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-423r3x" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12 12%22><path d=%22M 2 4 L 6 8 L 10 4%22 fill=%22transparent%22 stroke-width=%222%22 stroke=%22rgb(255, 255, 255)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-dasharray=%22%22></path></svg>')" } as CSSProperties} />
                    </div>
                    <div className="framer-1ejltpa" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "72px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "72px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_11}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" className="framer-13a8n7h" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-vf9gy6" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-ke1t0w" data-framer-name="Width Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Medium\", \"Inter Medium Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "Q1VTVE9NVjI7SW50ZXIgTWVkaXVt", "--framer-font-family": "\"Inter Medium\", \"Inter Medium Placeholder\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.widthTitle_3}
                    </p>
                  </div>
                  <div className="framer-q36w0m" data-framer-name="Enum Control" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-1vczut4" data-framer-name="Dropdown" style={{ width: "22px", height: "22px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 153, 255)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-12eecoz" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12 12%22><path d=%22M 2 4 L 6 8 L 10 4%22 fill=%22transparent%22 stroke-width=%222%22 stroke=%22rgb(255, 255, 255)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-dasharray=%22%22></path></svg>')" } as CSSProperties} />
                    </div>
                    <div className="framer-du6jc1" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "76px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "76px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_12}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" className="framer-1ufkw1n" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1jmbemq" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-o05cq9" data-framer-name="Width Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.widthTitle_4}
                    </p>
                  </div>
                  <div className="framer-ln2a3i" data-framer-name="Enum Control" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-gelzkw" data-framer-name="Dropdown" style={{ width: "22px", height: "22px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 153, 255)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-145jb11" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12 12%22><path d=%22M 2 4 L 6 8 L 10 4%22 fill=%22transparent%22 stroke-width=%222%22 stroke=%22rgb(255, 255, 255)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-dasharray=%22%22></path></svg>')" } as CSSProperties} />
                    </div>
                    <div className="framer-wgfh58" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "76px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "76px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.controlValue_13}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" className="framer-pdauhx" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1aclbhv" data-framer-name="Width Row" style={{ width: "260px", height: "30px", padding: "0px 15px 0px 30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-myu3p8" data-framer-name="Width Title" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.widthTitle_5}
                    </p>
                  </div>
                  <div className="framer-i8arqi" data-framer-name="Enum Control" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                    <div className="framer-h4y7s5" data-framer-name="Dropdown" style={{ width: "22px", height: "22px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(51, 51, 51)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-1wkl0z3" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12 12%22><path d=%22M 2 4 L 6 8 L 10 4%22 fill=%22transparent%22 stroke-width=%222%22 stroke=%22rgb(255, 255, 255)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-dasharray=%22%22></path></svg>')" } as CSSProperties} />
                    </div>
                    <div className="framer-1llr6qv" data-framer-name="Control Value" data-framer-component-type="RichTextContainer" style={{ width: "76px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "76px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                        {content.controlValue_14}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" className="framer-1rk922" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-8hvfjf" data-framer-component-type="RichTextContainer" style={{ width: "420px", height: "48.5938px", maxWidth: "420px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "420px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_11}{" "}
              </span>
              {content.bentoCard_12}
            </p>
          </div>
        </div>
        <div className="framer-fdpvrg" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px" } as CSSProperties}>
          <div className="framer-15f0wm9 hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "350px", height: "356.406px", padding: "15px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", overflow: "clip" } as CSSProperties}>
            <div className="framer-15vulxj" data-border="true" data-framer-name="Masks" data-nosnippet="true" style={{ width: "260px", height: "405px", padding: "0px 15px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px", overflow: "hidden" } as CSSProperties}>
              <div className="framer-1a1lxu8" data-framer-name="Top" style={{ width: "230px", height: "50px", padding: "15px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-1r4jyoz" style={{ width: "31.3828px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px" } as CSSProperties}>
                  <div className="framer-189xeld" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ width: "31.3828px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "31.3828px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                      {content.title_4}
                    </p>
                  </div>
                </div>
                <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-k3qeue" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                      <use href="#svg11271281936" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="framer-138xr7s" data-framer-name="Segment Control" style={{ width: "230px", height: "30px", padding: "2px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                <div className="framer-1y8ecza" data-framer-name="Inactive" style={{ width: "56px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-16jcnoj" data-border="true" style={{ width: "14px", height: "14px", position: "relative", display: "block", flexDirection: "row", borderRadius: "100px" } as CSSProperties} />
                </div>
                <div className="framer-5l0z8o" data-framer-name="Line" style={{ width: "1px", height: "14px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.07)" } as CSSProperties} />
                <div className="framer-4qlv6c" data-framer-name="Inactive" style={{ width: "56px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-hem91h" data-border="true" style={{ width: "14px", height: "14px", position: "relative", display: "block", flexDirection: "row", borderRadius: "100px" } as CSSProperties} />
                </div>
                <div className="framer-1adjdpg" data-framer-name="Line" style={{ width: "1px", height: "14px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.07)" } as CSSProperties} />
                <div className="framer-masvgd" data-framer-name="Inactive" style={{ width: "56px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-1q93ncx" data-border="true" style={{ width: "14px", height: "14px", position: "relative", display: "block", flexDirection: "row", borderRadius: "50px" } as CSSProperties} />
                </div>
                <div className="framer-kyygnl" data-framer-name="Active" style={{ width: "56px", height: "26px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", alignContent: "center", backgroundColor: "rgb(56, 56, 56)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0.5px 0px 0px inset", overflow: "hidden" } as CSSProperties}>
                  <div className="framer-475k09" data-border="true" style={{ width: "14px", height: "14px", position: "relative", display: "block", flexDirection: "row", borderRadius: "100px", overflow: "hidden" } as CSSProperties}>
                    <div data-framer-component-type="SVG" className="framer-ld1oti" aria-hidden="true" style={{ width: "12px", height: "12px", position: "absolute", top: "1px", right: "1px", bottom: "1px", left: "1px", inset: "1px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12 12%22><g><defs><linearGradient id=%22idss8730141515_1g1140397100%22 x1=%220.49850746268656715%22 x2=%220.5024875621890548%22 y1=%220.2%22 y2=%221%22><stop offset=%220%22 stop-color=%22rgb(255, 255, 255)%22 stop-opacity=%221%22></stop><stop offset=%221%22 stop-color=%22rgba(255, 255, 255, 0)%22 stop-opacity=%220%22></stop></linearGradient></defs><path d=%22M 2.293 6.207 C 2.683 5.817 3.317 5.817 3.707 6.207 L 8.805 11.305 C 7.969 11.748 7.015 11.999 6.003 12 L 5.997 12 C 3.429 11.999 1.239 10.385 0.384 8.116 Z%22 fill=%22url(%23idss8730141515_1g1140397100)%22></path></g><path d=%22M 7.5 2 C 8.328 2 9 2.672 9 3.5 C 9 4.328 8.328 5 7.5 5 C 6.672 5 6 4.328 6 3.5 C 6 2.672 6.672 2 7.5 2 Z%22 fill=%22%23ffffff%22></path></svg>')" } as CSSProperties} />
                  </div>
                  <div className="framer-7s1zci" data-framer-name="Pseudo" style={{ width: "56px", height: "26px", position: "absolute", zIndex: "1", display: "block", flexDirection: "row", gap: "10px", borderRadius: "6px", boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", overflow: "hidden" } as CSSProperties} />
                </div>
              </div>
              <div className="framer-ishmn8" data-framer-name="Spacer" style={{ width: "230px", height: "15px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties} />
              <div className="framer-199nxuv" data-framer-name="Shape" style={{ width: "230px", height: "130px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px", overflow: "hidden" } as CSSProperties}>
                <div data-framer-component-type="SVG" data-framer-name="Graphic" className="framer-lcovsd" aria-hidden="true" style={{ width: "110px", height: "110px", position: "relative", display: "block", flexDirection: "row", aspectRatio: "1 / 1", imageRendering: "pixelated", flexShrink: "0", fill: "black", color: "black" } as CSSProperties}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties} viewBox="0 0 212 212" preserveAspectRatio="none" width="100%" height="100%">
                      <use href="#svg589146243_343" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="framer-1iddpsi" data-framer-name="Props" style={{ width: "230px", height: "180px", padding: "15px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-7x9kvz" data-framer-name="Res" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-pf97jo" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.res}
                    </p>
                  </div>
                  <div className="framer-1qee4le" data-framer-name="Dropdown" style={{ width: "134px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-9cm7t8" data-framer-component-type="RichTextContainer" style={{ width: "26.9453px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "26.9453px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.dropdown}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" data-framer-name="Dropdown Icon" className="framer-invsd" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1c6fesx" data-framer-name="Type" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-k3n0dp" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.type}
                    </p>
                  </div>
                  <div className="framer-v22m1q" data-framer-name="Dropdown" style={{ width: "134px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-1q9ybaa" data-framer-component-type="RichTextContainer" style={{ width: "16.1484px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "16.1484px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.dropdown_2}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" data-framer-name="Dropdown Icon" className="framer-a3wgto" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1h8qhqk" data-framer-name="Mode" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1jjfmpp" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.mode}
                    </p>
                  </div>
                  <div className="framer-g3hbm3" data-framer-name="Dropdown" style={{ width: "134px", height: "30px", padding: "0px 8px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-iw9xoz" data-framer-component-type="RichTextContainer" style={{ width: "32.9844px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "32.9844px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.dropdown_3}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" data-framer-name="Dropdown Icon" className="framer-iwmt43" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-q3kb4l" data-framer-name="Position" style={{ width: "230px", height: "30px", padding: "0px 0px 0px 15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-1gwead6" data-framer-component-type="RichTextContainer" style={{ width: "71px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "71px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.position}
                    </p>
                  </div>
                  <div className="framer-1zo09b" data-framer-name="Dropdown" style={{ width: "134px", height: "30px", padding: "0px 8px 0px 4px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "rgb(36, 36, 36)", borderRadius: "10px" } as CSSProperties}>
                    <div className="framer-npp6c0" data-framer-name="Position" style={{ width: "22px", height: "22px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(56, 56, 56)", borderRadius: "4px", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                      <div className="framer-1etmo" style={{ width: "3px", height: "3px", position: "absolute", top: "4px", right: "15px", bottom: "15px", left: "4px", inset: "4px 15px 15px 4px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-jprz2y" style={{ width: "3px", height: "3px", position: "absolute", top: "4px", right: "8px", bottom: "15px", left: "11px", inset: "4px 8px 15px 11px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", transform: "matrix(1, 0, 0, 1, -1.5, 0)", transformOrigin: "1.5px 1.5px", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-1twks3g" style={{ width: "3px", height: "3px", position: "absolute", top: "4px", right: "4px", bottom: "15px", left: "15px", inset: "4px 4px 15px 15px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-1arb62g" style={{ width: "3px", height: "3px", position: "absolute", top: "11px", right: "15px", bottom: "8px", left: "4px", inset: "11px 15px 8px 4px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", transform: "matrix(1, 0, 0, 1, 0, -1.5)", transformOrigin: "1.5px 1.5px", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-1x7e879" style={{ width: "3px", height: "3px", position: "absolute", top: "11px", right: "8px", bottom: "8px", left: "11px", inset: "11px 8px 8px 11px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", transform: "matrix(1, 0, 0, 1, -1.5, -1.5)", transformOrigin: "1.5px 1.5px", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-vsd882" style={{ width: "3px", height: "3px", position: "absolute", top: "11px", right: "4px", bottom: "8px", left: "15px", inset: "11px 4px 8px 15px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", transform: "matrix(1, 0, 0, 1, 0, -1.5)", transformOrigin: "1.5px 1.5px", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-x8myjk" style={{ width: "3px", height: "3px", position: "absolute", top: "15px", right: "15px", bottom: "4px", left: "4px", inset: "15px 15px 4px 4px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-1513hre" style={{ width: "3px", height: "3px", position: "absolute", top: "15px", right: "8px", bottom: "4px", left: "11px", inset: "15px 8px 4px 11px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", transform: "matrix(1, 0, 0, 1, -1.5, 0)", transformOrigin: "1.5px 1.5px", aspectRatio: "1 / 1" } as CSSProperties} />
                      <div className="framer-9wikry" style={{ width: "3px", height: "3px", position: "absolute", top: "15px", right: "4px", bottom: "4px", left: "15px", inset: "15px 4px 4px 15px", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "2px", opacity: "0.2", aspectRatio: "1 / 1" } as CSSProperties} />
                    </div>
                    <div className="framer-lmzehl" data-framer-component-type="RichTextContainer" style={{ width: "76px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
                      <p dir="auto" style={{ width: "76px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7SW50ZXItNTAw", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                        {content.dropdown_4}
                      </p>
                    </div>
                    <div data-framer-component-type="SVG" data-framer-name="Dropdown Icon" className="framer-f9bsv1" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                      <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                        <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                          <use href="#svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-yck1di" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_13}{" "}
              </span>
              {content.bentoCard_14}
            </p>
          </div>
        </div>
        <div className="framer-1kjbmzo" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px", overflow: "hidden" } as CSSProperties}>
          <div className="framer-lwa0b9 hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "350px", height: "356.406px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "30px" } as CSSProperties}>
            <div className="framer-14q52dm" data-framer-name="Card" style={{ width: "300px", height: "306.406px", position: "relative", display: "block", flexDirection: "row", gap: "10px", borderRadius: "30px", overflow: "clip" } as CSSProperties}>
              <div style={{ width: "300px", height: "306.406px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                <img decoding="auto" loading="lazy" width="830" height="1200" sizes="(min-width: 1200px) calc(max(min(100vw - 40px, 1200px) / 3, 50px) - 100px), (min-width: 810px) and (max-width: 1199.98px) calc(max(min(100vw - 40px, 1200px) / 3, 50px) - 100px), (max-width: 809.98px) calc(max(min(100vw - 40px, 1200px) / 3, 50px) - 100px)" srcSet={"/images/47a0bddc-GfBFVOtE6JjUhugOkrqy1o2iEGE.avif?scale-down-to=1024&width=830&height=1200 708w,/images/47a0bddc-GfBFVOtE6JjUhugOkrqy1o2iEGE.avif?width=830&height=1200 830w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", objectPosition: "center bottom", aspectRatio: "auto 830 / 1200", cornerShape: "inherit" } as CSSProperties} src={content.card.src} alt={content.card.alt} />
              </div>
              <div className="framer-nzowjj" data-framer-name="Gloss" style={{ width: "300px", height: "100px", position: "absolute", bottom: "206.406px", inset: "0px 0px 206.406px", display: "block", flexDirection: "row", opacity: "0.05", mixBlendMode: "screen", overflow: "hidden" } as CSSProperties} />
              <div className="framer-ohf4r4" data-border="true" data-framer-name="Top 1PX" style={{ width: "300px", height: "306.406px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "30px", mixBlendMode: "soft-light", overflow: "hidden" } as CSSProperties} />
            </div>
            <div className="framer-1phg03a" data-framer-name="Cursor" style={{ width: "139.234px", height: "46.1016px", position: "absolute", top: "260.305px", right: "-10px", bottom: "50px", left: "220.766px", zIndex: "1", inset: "260.305px -10px 50px 220.766px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", opacity: "1", transform: "none" } as CSSProperties}>
              <div data-framer-component-type="SVG" data-framer-name="Arrow" className="framer-2sdpy8" aria-hidden="true" style={{ width: "15px", height: "24px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                  <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "visible" } as CSSProperties} preserveAspectRatio="none" width="100%" height="100%">
                    <use href="#svg-1358190970_1975" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  </svg>
                </div>
              </div>
              <div className="framer-8bpj05" data-framer-name="Padding" style={{ width: "114.234px", height: "46.1016px", padding: "14px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                <div className="framer-17rzesj" data-framer-name="Button" style={{ width: "114.234px", height: "32.1016px", padding: "5px 10px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "10px", backdropFilter: "blur(10px)", overflow: "clip" } as CSSProperties}>
                  <div className="framer-uwkcas" data-framer-component-type="RichTextContainer" style={{ width: "94.2344px", height: "22.1016px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "94.2344px", height: "22.1016px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "17px", lineHeight: "22.1px", letterSpacing: "-0.11px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRMU1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on, 'cv10' on, 'case' on, 'ss02' on, 'ss04' on, 'ss08' on", "--framer-font-size": "17px", "--framer-font-variation-axes": "\"wght\" 450", "--framer-letter-spacing": "-0.11px", "--framer-line-height": "1.3em", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                      {content.button_2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-dce3x5" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_15}{" "}
              </span>
              {content.bentoCard_16}
            </p>
          </div>
        </div>
        <div className="framer-1nmjayx" data-border="true" data-framer-name="Bento Card" style={{ width: "400px", height: "480px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "25px" } as CSSProperties}>
          <div className="framer-12dkpzn hidden-r05htx hidden-kkqok7" data-framer-name="Visual" style={{ width: "350px", height: "356.406px", padding: "25px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
            <div className="framer-1ncdh1g" data-border="true" data-framer-name="Icons" data-nosnippet="true" style={{ width: "260px", height: "331.406px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px 20px 0px 0px", overflow: "hidden" } as CSSProperties}>
              <div className="framer-1wpzc4o" data-framer-name="Header" style={{ width: "230px", height: "50px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-11tfhgv" style={{ width: "91.1328px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "6px" } as CSSProperties}>
                  <div className="framer-1ir2ohd" data-framer-component-type="RichTextContainer" style={{ width: "91.1328px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "91.1328px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "600", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                      {content.header_3}
                    </p>
                  </div>
                </div>
                <div data-framer-component-type="SVG" data-framer-name="Graphic" className="framer-1cjb5e8" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                    <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                      <use href="#svg10978743661" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="framer-1o2dmht" data-border="true" data-framer-name="Search" style={{ width: "230px", height: "50px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                <div className="framer-q67ng0" style={{ width: "72.2109px", height: "20px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                  <div data-framer-component-type="SVG" className="framer-1kdjjgh" aria-hidden="true" style={{ width: "16px", height: "20px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                      <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                        <use href="#svg10770409774" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                      </svg>
                    </div>
                  </div>
                  <div className="framer-kbq8x9" data-framer-component-type="RichTextContainer" style={{ width: "51.2109px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "51.2109px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                      {content.search}
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-1st0k1b" style={{ width: "230px", height: "1460px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip", overflowY: "clip" } as CSSProperties}>
                <ul style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "10px", transform: "translateY(-43.3893px)", transformOrigin: "115px 730px", listStyleType: "none", padding: "0px", margin: "0px", opacity: "1" } as CSSProperties}>
                  <li className="ticker-item" aria-hidden="false" aria-posinset={1} aria-setsize={1} style={{ width: "fit-content", height: "fit-content", position: "relative", display: "list-item", flexDirection: "row", flexGrow: "0", flexShrink: "0", transform: "none" } as CSSProperties}>
                    <div className="framer-c6w18w" data-framer-name="Icons Grid" style={{ width: "230px", height: "480px", padding: "10px 0px 0px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "70px 70px 70px", gridTemplateRows: "70px 70px 70px 70px 70px 70px" } as CSSProperties}>
                      <div className="framer-1q7f8vt" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-GdrDK framer-1o8wxti" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1642661144" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <motion.div className="framer-1h1c964" data-border="true" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                        <svg className="framer-lUNqV framer-3j8jy7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4209924379" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </motion.div>
                      <div className="framer-m8n2wy" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-JcJ37 framer-1teqgwi" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1635548955" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1lvvk74" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MhmdC framer-1qma934" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#881773478" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-12rge25" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-UvZi2 framer-144764q" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#95487542" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1plngbu" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vqnL3 framer-1bmih2e" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1770930775" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-18r6mos" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-z8VX7 framer-199repz hv-2441" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2330263925" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1p9k2xz" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vjSOj framer-kp87hs" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#673751299" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1cilu9o" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-baUZC framer-d0caa4" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3112628790" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-sbzkrc" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-hzOEq framer-191k8or hv-2450" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1218162679" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-13s4919" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MfSJ6 framer-mtgvr7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#587222984" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-3kndtj" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-sHMAE framer-t58ake" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#734873119" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-12kmtsi" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-mwsio framer-14lvyb9 hv-2459" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3983927620" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-bvfia1" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-dapqQ framer-cjeri3" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1142937281" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-y57y5b" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-p0zrA framer-1epkzgc" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3788105446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1si1vfk" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-9XmUk framer-1i4iunm hv-2468" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1312992605" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-169owh" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-Y5p2P framer-11gigdr" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4111896214" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-w5owz2" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-kq1Rp framer-13r5wg7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2458882080" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="clone-item" aria-hidden="true" style={{ width: "fit-content", height: "fit-content", position: "relative", display: "list-item", flexDirection: "row", flexGrow: "0", flexShrink: "0", transform: "none" } as CSSProperties}>
                    <div className="framer-c6w18w hv-2477" data-framer-name="Icons Grid" style={{ width: "230px", height: "480px", padding: "10px 0px 0px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "70px 70px 70px", gridTemplateRows: "70px 70px 70px 70px 70px 70px" } as CSSProperties}>
                      <div className="framer-1q7f8vt" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-GdrDK framer-1o8wxti" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1642661144" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1h1c964" data-border="true" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-lUNqV framer-3j8jy7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4209924379" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-m8n2wy" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-JcJ37 framer-1teqgwi" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1635548955" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2486" />
                        </svg>
                      </div>
                      <div className="framer-1lvvk74" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MhmdC framer-1qma934" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#881773478" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-12rge25" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-UvZi2 framer-144764q" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#95487542" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1plngbu" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vqnL3 framer-1bmih2e" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1770930775" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2495" />
                        </svg>
                      </div>
                      <div className="framer-18r6mos" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-z8VX7 framer-199repz" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2330263925" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1p9k2xz" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vjSOj framer-kp87hs" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#673751299" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1cilu9o" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-baUZC framer-d0caa4" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3112628790" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2504" />
                        </svg>
                      </div>
                      <div className="framer-sbzkrc" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-hzOEq framer-191k8or" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1218162679" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-13s4919" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MfSJ6 framer-mtgvr7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#587222984" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-3kndtj" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-sHMAE framer-t58ake" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#734873119" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2513" />
                        </svg>
                      </div>
                      <div className="framer-12kmtsi" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-mwsio framer-14lvyb9" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3983927620" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-bvfia1" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-dapqQ framer-cjeri3" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1142937281" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-y57y5b" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-p0zrA framer-1epkzgc" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3788105446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2522" />
                        </svg>
                      </div>
                      <div className="framer-1si1vfk" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-9XmUk framer-1i4iunm" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1312992605" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-169owh" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-Y5p2P framer-11gigdr" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4111896214" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-w5owz2" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-kq1Rp framer-13r5wg7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2458882080" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2531" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="clone-item" aria-hidden="true" style={{ width: "fit-content", height: "fit-content", position: "relative", display: "list-item", flexDirection: "row", flexGrow: "0", flexShrink: "0", transform: "none" } as CSSProperties}>
                    <div className="framer-c6w18w" data-framer-name="Icons Grid" style={{ width: "230px", height: "480px", padding: "10px 0px 0px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gap: "10px", gridTemplateColumns: "70px 70px 70px", gridTemplateRows: "70px 70px 70px 70px 70px 70px" } as CSSProperties}>
                      <div className="framer-1q7f8vt" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-GdrDK framer-1o8wxti" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1642661144" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1h1c964" data-border="true" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-lUNqV framer-3j8jy7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4209924379" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2539" />
                        </svg>
                      </div>
                      <div className="framer-m8n2wy" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-JcJ37 framer-1teqgwi" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1635548955" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1lvvk74" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MhmdC framer-1qma934" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#881773478" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-12rge25" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-UvZi2 framer-144764q" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#95487542" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2548" />
                        </svg>
                      </div>
                      <div className="framer-1plngbu" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vqnL3 framer-1bmih2e" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1770930775" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-18r6mos" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-z8VX7 framer-199repz" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2330263925" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1p9k2xz" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-vjSOj framer-kp87hs" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#673751299" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2557" />
                        </svg>
                      </div>
                      <div className="framer-1cilu9o" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-baUZC framer-d0caa4" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3112628790" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-sbzkrc" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-hzOEq framer-191k8or" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1218162679" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-13s4919" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-MfSJ6 framer-mtgvr7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#587222984" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2566" />
                        </svg>
                      </div>
                      <div className="framer-3kndtj" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-sHMAE framer-t58ake" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#734873119" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-12kmtsi" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-mwsio framer-14lvyb9" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3983927620" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-bvfia1" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-dapqQ framer-cjeri3" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1142937281" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2575" />
                        </svg>
                      </div>
                      <div className="framer-y57y5b" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-p0zrA framer-1epkzgc" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#3788105446" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-1si1vfk" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-9XmUk framer-1i4iunm" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#1312992605" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                      <div className="framer-169owh" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-Y5p2P framer-11gigdr" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#4111896214" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-2584" />
                        </svg>
                      </div>
                      <div className="framer-w5owz2" style={{ width: "70px", height: "70px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(36, 36, 36)", borderRadius: "8px" } as CSSProperties}>
                        <svg className="framer-kq1Rp framer-13r5wg7" role="presentation" viewBox="0 0 20 20" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                          <use href="#2458882080" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {" "}
            </div>
          </div>
          <div className="framer-l422qk" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "48.5938px", maxWidth: "320px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
            <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "320px", height: "48.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
              <span style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                {content.bentoCard_17}
              </span>
              {content.bentoCard_18}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
