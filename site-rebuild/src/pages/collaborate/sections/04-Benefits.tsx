// Benefits.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "../content/04-Benefits";

export function Benefits() {
  return (
    <section className="framer-o73y54" data-framer-name="Benefits" style={{ width: "1440px", height: "1576.8px", padding: "120px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "40px", overflow: "visible clip" } as CSSProperties}>
      <header className="framer-hr3p8d" data-framer-name="Header" style={{ width: "1200px", height: "96.7969px", maxWidth: "1200px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", overflow: "clip" } as CSSProperties}>
        <div className="framer-12du107" data-framer-component-type="RichTextContainer" style={{ width: "330px", height: "96.7969px", maxWidth: "100%", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
          <h2 className="framer-text framer-styles-preset-fbtpvo" data-styles-preset="qRN7MgZKk" dir="auto" style={{ width: "330px", height: "96.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "44px", fontWeight: "500", lineHeight: "48.4px", letterSpacing: "-1.76px", color: "rgb(255, 255, 255)" } as CSSProperties}>
            {content.header}
          </h2>
        </div>
      </header>
      <div className="framer-xdijcn" data-border="true" style={{ width: "1200px", height: "1200px", maxWidth: "1200px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "center", gridTemplateColumns: "600px 600px", gridTemplateRows: "600px 600px", borderRadius: "25px", overflow: "clip" } as CSSProperties}>
        <motion.div className="framer-1ii4a8a" data-border="true" data-framer-name="Edit" style={{ width: "600px", height: "600px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", overflow: "hidden" } as CSSProperties} initial={{ opacity: 0.001, filter: "blur(5px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
          <div className="framer-6qsm82" data-framer-name="Visual" style={{ width: "580px", height: "442.812px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: "20px" } as CSSProperties}>
            <div className="framer-4enhu9 hidden-1be051o hidden-bwql3w" data-framer-name="Mobile Collaborate" style={{ width: "580px", height: "442.812px", padding: "50px", position: "relative", zIndex: "0", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(0, 0, 0)" } as CSSProperties}>
              <div className="framer-ow8n47" data-border="true" data-framer-name="Device New" data-nosnippet="true" style={{ width: "420px", height: "576.789px", padding: "20px 20px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "15px", backgroundColor: "rgb(10, 10, 10)", borderRadius: "60px 60px 0px 0px" } as CSSProperties}>
                <div className="framer-an3lwm" data-border="true" data-framer-name="Border" style={{ width: "406px", height: "569.789px", position: "absolute", top: "7px", right: "7px", left: "7px", zIndex: "2", inset: "7px 7px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(0, 0, 0)", borderRadius: "53px 53px 0px 0px", overflow: "clip" } as CSSProperties} />
                <div className="framer-9tn8px" data-border="true" data-framer-name="Dynamic Island" style={{ width: "95px", height: "29.9922px", position: "relative", zIndex: "2", display: "block", flexDirection: "row", borderRadius: "100px", aspectRatio: "3.16667 / 1" } as CSSProperties}>
                  <div style={{ width: "95px", height: "29.9922px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                    <img decoding="auto" loading="lazy" width="190" height="60" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 190 / 60", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.dynamicIsland.src} alt={content.dynamicIsland.alt} />
                  </div>
                  <div data-framer-component-type="SVG" className="framer-3pfpef" aria-hidden="true" style={{ width: "65px", height: "26px", position: "absolute", top: "2px", right: "27px", bottom: "1.99219px", left: "3px", inset: "2px 27px 1.99219px 3px", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 65 26%22 overflow=%22visible%22><path d=%22M 0 13 C 0 5.82 5.82 0 13 0 L 52 0 C 59.18 0 65 5.82 65 13 L 65 13 C 65 20.18 59.18 26 52 26 L 13 26 C 5.82 26 0 20.18 0 13 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>')" } as CSSProperties} />
                </div>
                <div className="framer-vzsikk" data-framer-name="Search Bar" style={{ width: "350px", height: "35px", padding: "0px 15px", position: "relative", zIndex: "2", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(17, 17, 17)", borderRadius: "10px", overflow: "clip" } as CSSProperties}>
                  <div className="framer-1au8o7z" data-framer-component-type="RichTextContainer" style={{ width: "127.836px", height: "16.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                    <p dir="auto" style={{ width: "127.836px", height: "16.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", fontWeight: "500", lineHeight: "16.8px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "14px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties} className="framer-text">
                      {content.searchBar}
                    </p>
                  </div>
                </div>
                <div className="framer-1u1164" data-framer-name="Site" style={{ width: "380px", height: "461.797px", position: "relative", zIndex: "2", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties}>
                  <div className="framer-jgvvxi" data-framer-name="Site" style={{ width: "380px", height: "461.797px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties}>
                    <div className="framer-13w1125" data-framer-name="Top Bar" style={{ width: "380px", height: "50px", padding: "15px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" } as CSSProperties}>
                      <div className="framer-1h5ys4b" data-framer-name="Logo" style={{ width: "123.789px", height: "20px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip" } as CSSProperties}>
                        <div className="framer-1ctogf7" data-framer-name="Icon" style={{ width: "19px", height: "19px", padding: "1.98px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "9.86px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "6px", overflow: "clip", aspectRatio: "1 / 1" } as CSSProperties}>
                          <div className="framer-1yfwnme" style={{ width: "15.0469px", height: "15.0469px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(20, 20, 20)", borderRadius: "5px", overflow: "clip" } as CSSProperties} />
                        </div>
                        <div className="framer-pvwtxz" data-framer-component-type="RichTextContainer" style={{ width: "94.7891px", height: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "94.7891px", height: "20px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "20px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXdMQ0FpZDJkb2RDSWdOVGN3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'ss03' on, 'cv01' on, 'case' on", "--framer-font-size": "14px", "--framer-font-variation-axes": "\"opsz\" 30, \"wght\" 570", "--framer-line-height": "20px", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.logo}
                          </p>
                        </div>
                      </div>
                      <div className="framer-Ss7sw framer-18nycnj" style={{ width: "20px", height: "20px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", aspectRatio: "1 / 1" } as CSSProperties} />
                    </div>
                    <div className="framer-1fl6cs7" data-framer-name="Header" style={{ width: "380px", height: "131.797px", padding: "30px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center" } as CSSProperties}>
                      <div className="framer-1o2rzuk" data-border="true" data-framer-name="Content" style={{ width: "340px", height: "71.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                        <div className="framer-1dvbw6c" data-framer-name="Top" style={{ width: "340px", height: "20px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                          <div className="framer-upuys6" data-framer-name="Back" style={{ width: "56.1797px", height: "20px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                            <svg className="framer-79Pel framer-8gknm8" role="presentation" viewBox="0 0 20 20" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1" } as CSSProperties}>
                              <use href="#2571499015" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                            <div className="framer-l5xmxk" data-framer-component-type="RichTextContainer" style={{ width: "39.1797px", height: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                              <p dir="auto" style={{ width: "39.1797px", height: "20px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "20px", color: "rgb(255, 255, 255)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURVeE1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--framer-font-size": "14px", "--framer-font-variation-axes": "\"wght\" 510", "--framer-line-height": "20px", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                                {content.back}
                              </p>
                            </div>
                          </div>
                          <div className="framer-18rj7bq" data-framer-component-type="RichTextContainer" style={{ width: "69.3203px", height: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                            <p dir="auto" style={{ width: "69.3203px", height: "20px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", fontSize: "14px", lineHeight: "20px", color: "rgba(255, 255, 255, 0.6)", "--font-selector": "R0Y7R2Vpc3QtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURVeE1BPT0=", "--framer-font-family": "\"Geist Variable\", \"Geist Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--framer-font-size": "14px", "--framer-font-variation-axes": "\"wght\" 510", "--framer-line-height": "20px", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)" } as CSSProperties} className="framer-text">
                              {content.top}
                            </p>
                          </div>
                        </div>
                        <div className="framer-u1m0mm" data-border="true" data-framer-name="Bottom" style={{ width: "340px", height: "41.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "15px" } as CSSProperties}>
                          <div className="framer-1e2g52f" data-framer-name="Typewriter" style={{ width: "279px", height: "41.7969px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                            <div className="framer-ijog7v-container" style={{ width: "279px", height: "41.7969px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                              <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", fontFamily: "\"EB Garamond\", \"EB Garamond Placeholder\", serif", fontSize: "44px", lineHeight: "0.95em", letterSpacing: "-0.025em", textAlign: "center", color: "rgb(255, 255, 255)", whiteSpace: "pre-wrap", overflow: "visible", wordBreak: "break-word", fontStyle: "normal", fontWeight: "400" } as CSSProperties}>
                                <div style={{ width: "100%", height: "41.7969px", position: "relative", display: "grid", flexDirection: "row", gridTemplateColumns: "279px", gridTemplateRows: "41.7969px" } as CSSProperties}>
                                  <div aria-hidden="true" style={{ width: "100%", height: "41.7969px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", visibility: "hidden", whiteSpace: "pre-wrap", wordBreak: "break-word", textAlign: "center", pointerEvents: "none", userSelect: "none" } as CSSProperties}>
                                    {" "}
                                  </div>
                                  <div style={{ width: "100%", height: "41.7969px", position: "static", display: "block", flexDirection: "row", gridArea: "1 / 1", alignSelf: "start", justifySelf: "stretch", whiteSpace: "pre-wrap", wordBreak: "break-word", textAlign: "center" } as CSSProperties}>
                                    <span style={{ width: "279px", height: "41.7969px", position: "static", display: "block", flexDirection: "row" } as CSSProperties}>
                                      {content.typewriter}
                                      <span aria-hidden="true" style={{ width: "10.3438px", height: "41.7969px", position: "static", display: "inline-block", flexDirection: "row", whiteSpace: "pre", lineHeight: "inherit", verticalAlign: "baseline", color: "rgb(255, 255, 255)", visibility: "visible" } as CSSProperties}>
                                        {content.typewriter_2}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-fje9re" data-framer-name="Hero" style={{ width: "380px", height: "280px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip" } as CSSProperties}>
                      <div className="framer-1nnjtc0" data-border="true" data-framer-name="Image" style={{ width: "380px", height: "280px", position: "relative", display: "block", flexDirection: "row", borderRadius: "25px" } as CSSProperties}>
                        <div style={{ width: "380px", height: "280px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                          <img decoding="auto" loading="lazy" width="1540" height="1021" sizes="(min-width: 1200px) 380px, (min-width: 810px) and (max-width: 1199.98px) 380px, (max-width: 809.98px) 380px" srcSet={"/images/f218037e-0HbgO4OOARF8eP65HCSKlTfks.avif?scale-down-to=512&width=1540&height=1021 512w,/images/f218037e-0HbgO4OOARF8eP65HCSKlTfks.avif?scale-down-to=1024&width=1540&height=1021 1024w,/images/f218037e-0HbgO4OOARF8eP65HCSKlTfks.avif?width=1540&height=1021 1540w"} style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 1540 / 1021", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.image.src} alt={content.image.alt} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-161gnhi" data-framer-name="Text" style={{ width: "580px", height: "137.188px", padding: "20px", position: "relative", zIndex: "3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "hidden" } as CSSProperties}>
            <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <div className="framer-1i82ing-container" style={{ width: "205.984px", height: "24.2969px", position: "relative", zIndex: "1", display: "block", flexDirection: "row" } as CSSProperties}>
                <a className="framer-y3Tcj framer-1yj9q62 framer-v-1yj9q62 framer-fbfhdw" data-framer-name="L" data-highlight="true" tabIndex={0} style={{ width: "205.984px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "6px", filter: "invert(0)", color: "rgb(0, 0, 238)", overflow: "hidden", WebkitFilter: "invert(0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.l}>
                  <div className="framer-46btbc" data-framer-component-type="RichTextContainer" style={{ width: "183.984px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-a0htzi": "var(--variable-reference-u7EixmfP1-M8z52uvts)", "--extracted-zfisys": "\"opsz\" 18, \"wght\" 420", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-u7eixmfp1-m8z52uvts": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                    <h3 dir="auto" className="framer-text" style={{ width: "183.984px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOREl3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv11' on", "--framer-font-size": "18px", "--framer-font-variation-axes": "var(--extracted-zfisys, \"opsz\" 18, \"wght\" 420)", "--framer-letter-spacing": "-0.2px", "--framer-line-height": "1.35em", "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-u7EixmfP1-M8z52uvts))" } as CSSProperties}>
                      {content.l_2}
                    </h3>
                  </div>
                  <div className="framer-17vqbi5" style={{ width: "16px", height: "24.2969px", padding: "1px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <svg className="framer-ooj1j framer-1pqbd5p" role="presentation" viewBox="0 0 20 20" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", "--17kkcf8": "rgba(136, 136, 136, 0.2)", opacity: "1" } as CSSProperties}>
                      <use href="#1825208344" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="framer-ytpq27" data-framer-component-type="RichTextContainer" style={{ width: "460px", height: "72.8906px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "460px", height: "72.8906px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                {content.text}
              </p>
            </div>
          </div>
          <div className="framer-10qf0bx" data-framer-name="Fade" style={{ width: "600px", height: "300px", position: "absolute", top: "300px", zIndex: "0", inset: "300px 0px 0px", display: "block", flexDirection: "row", backgroundColor: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties} />
        </motion.div>
        <div className="framer-1gmmopn hv-1288" data-border="true" data-framer-name="Roles" style={{ width: "600px", height: "600px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", overflow: "hidden" } as CSSProperties}>
          <div className="framer-1f1s8id" data-framer-name="Visual" style={{ width: "580px", height: "442.812px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: "20px", overflow: "clip" } as CSSProperties}>
            <div className="framer-1nulrl9 hidden-1be051o hidden-bwql3w" data-framer-name="Desktop" style={{ width: "580px", height: "442.812px", padding: "50px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties}>
              <div className="framer-1rdrr9c" data-framer-name="Permissions" style={{ width: "300px", height: "152px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", borderRadius: "18px", overflow: "clip" } as CSSProperties}>
                <div className="framer-5a8o4m" data-framer-name="UI" data-nosnippet="true" style={{ width: "300px", height: "152px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                  <div className="framer-skul2j" data-framer-name="User" style={{ width: "280px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px" } as CSSProperties}>
                    <div className="framer-1acd4zh" data-framer-name="Avatar" style={{ width: "30px", height: "30px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "8px", boxShadow: "rgba(0, 153, 255, 0.15) 0px 0px 0px 1px inset" } as CSSProperties}>
                      <div style={{ width: "30px", height: "30px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                        <img decoding="auto" loading="lazy" width="512" height="512" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 512 / 512", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.avatar.src} alt={content.avatar.alt} />
                      </div>
                    </div>
                    <div className="framer-pl3x01" data-framer-name="Name" style={{ width: "240px", height: "30px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "2px" } as CSSProperties}>
                      <div className="framer-ygm5uf" data-framer-component-type="RichTextContainer" style={{ width: "240px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                        <p dir="auto" style={{ width: "240px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "\"opsz\" 14, \"wght\" 500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                          {content.name}
                        </p>
                      </div>
                      <div className="framer-1rxymia" data-framer-name="Permissions" style={{ width: "240px", height: "14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "5px" } as CSSProperties}>
                        <div className="framer-1qu2zx9" data-framer-component-type="RichTextContainer" style={{ width: "92.1406px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", overflow: "hidden", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "92.1406px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "\"opsz\" 14, \"wght\" 500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" } as CSSProperties} className="framer-text">
                            {content.permissions}
                          </p>
                        </div>
                        <div data-framer-component-type="SVG" className="framer-1lnhewg" aria-hidden="true" style={{ width: "8px", height: "8px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                          <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                            <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                              <use href="#svg10994104066" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1q8f24f" style={{ width: "280px", height: "92px", padding: "0px 0px 0px 40px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip" } as CSSProperties}>
                    <div className="framer-1e64kcb" data-border="true" data-framer-name="Permissions" style={{ width: "208px", height: "92px", padding: "0px 5px", position: "relative", zIndex: "10", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(17, 17, 17)", borderRadius: "13px", boxShadow: "rgba(0, 0, 0, 0.08) 0px 3px 6px 0px", overflow: "clip" } as CSSProperties}>
                      <div className="framer-11si060" data-framer-name="Design" style={{ width: "198px", height: "30px", padding: "10px 5px 10px 3px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "8px", overflow: "clip" } as CSSProperties}>
                        <div className="framer-1kw711n" data-border="true" data-framer-name="Checkbox" style={{ width: "14px", height: "14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 153, 255)", borderRadius: "4px", aspectRatio: "1 / 1" } as CSSProperties}>
                          <div data-framer-component-type="SVG" data-framer-name="Graphic" className="framer-5l5zgg" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                            <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                              <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                                <use href="#svg12583983403" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1pyf9pw" data-framer-component-type="RichTextContainer" style={{ width: "39.8516px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "39.8516px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.design}
                          </p>
                        </div>
                        <div className="framer-12rys6" data-framer-component-type="RichTextContainer" style={{ width: "116.148px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "116.148px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "right", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.design_2}
                          </p>
                        </div>
                      </div>
                      <div className="framer-1i1q06f" data-framer-name="Line" style={{ width: "198px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.07)", overflow: "clip" } as CSSProperties} />
                      <div className="framer-i33rr2" data-framer-name="Content" style={{ width: "198px", height: "30px", padding: "10px 5px 10px 3px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "8px", overflow: "clip" } as CSSProperties}>
                        <div className="framer-1a55bbp" data-border="true" data-framer-name="Checkbox" style={{ width: "14px", height: "14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 153, 255)", borderRadius: "4px", aspectRatio: "1 / 1" } as CSSProperties}>
                          <div data-framer-component-type="SVG" data-framer-name="Graphic" className="framer-12n240j" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0" } as CSSProperties}>
                            <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                              <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                                <use href="#svg12583983403" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1vyxrq4" data-framer-component-type="RichTextContainer" style={{ width: "45.5859px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "45.5859px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.content}
                          </p>
                        </div>
                        <div className="framer-1vee048" data-framer-component-type="RichTextContainer" style={{ width: "110.414px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "110.414px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "right", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.content_2}
                          </p>
                        </div>
                      </div>
                      <div className="framer-1yypln8" data-framer-name="Line" style={{ width: "198px", height: "1px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.07)", overflow: "clip" } as CSSProperties} />
                      <div className="framer-6p5b9p" data-framer-name="Deploy" style={{ width: "198px", height: "30px", padding: "10px 5px 10px 3px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "8px", overflow: "clip" } as CSSProperties}>
                        <div className="framer-wsxugb" data-border="true" data-framer-name="Checkbox" style={{ width: "14px", height: "14px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "4px", aspectRatio: "1 / 1" } as CSSProperties} />
                        <div className="framer-e3xxwc" data-framer-component-type="RichTextContainer" style={{ width: "40.2891px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "40.2891px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.deploy}
                          </p>
                        </div>
                        <div className="framer-crumgv" data-framer-component-type="RichTextContainer" style={{ width: "115.711px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", opacity: "0.5", whiteSpace: "pre-wrap", overflow: "hidden", transform: "none" } as CSSProperties}>
                          <p dir="auto" style={{ width: "115.711px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "right", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "right", "--framer-text-color": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))" } as CSSProperties} className="framer-text">
                            {content.deploy_2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1rweo3f" data-framer-name="Text" style={{ width: "580px", height: "137.188px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "hidden" } as CSSProperties}>
            <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <div className="framer-1lp8pew-container" style={{ width: "339.492px", height: "24.2969px", position: "relative", zIndex: "1", display: "block", flexDirection: "row" } as CSSProperties}>
                <a className="framer-y3Tcj framer-1yj9q62 framer-v-1yj9q62 framer-fbfhdw" data-framer-name="L" data-highlight="true" tabIndex={0} style={{ width: "339.492px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "6px", filter: "invert(0)", color: "rgb(0, 0, 238)", overflow: "hidden", WebkitFilter: "invert(0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.l_3}>
                  <div className="framer-46btbc" data-framer-component-type="RichTextContainer" style={{ width: "317.492px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-a0htzi": "var(--variable-reference-u7EixmfP1-M8z52uvts)", "--extracted-zfisys": "\"opsz\" 18, \"wght\" 420", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-u7eixmfp1-m8z52uvts": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                    <h3 dir="auto" className="framer-text" style={{ width: "317.492px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOREl3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv11' on", "--framer-font-size": "18px", "--framer-font-variation-axes": "var(--extracted-zfisys, \"opsz\" 18, \"wght\" 420)", "--framer-letter-spacing": "-0.2px", "--framer-line-height": "1.35em", "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-u7EixmfP1-M8z52uvts))" } as CSSProperties}>
                      {content.l_4}
                    </h3>
                  </div>
                  <div className="framer-17vqbi5" style={{ width: "16px", height: "24.2969px", padding: "1px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <svg className="framer-ooj1j framer-1pqbd5p" role="presentation" viewBox="0 0 20 20" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", "--17kkcf8": "rgba(136, 136, 136, 0.2)", opacity: "1" } as CSSProperties}>
                      <use href="#1825208344" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="framer-r2l9ad" data-framer-component-type="RichTextContainer" style={{ width: "420px", height: "72.8906px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "420px", height: "72.8906px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start" } as CSSProperties}>
                {content.text_2}
              </p>
            </div>
          </div>
        </div>
        <div className="framer-1uh6o1h" data-border="true" data-framer-name="Comments" style={{ width: "600px", height: "600px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", overflow: "hidden" } as CSSProperties}>
          <div className="framer-9betbg hv-1349" data-framer-name="Visual" style={{ width: "580px", height: "442.812px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(0, 0, 0)", borderRadius: "20px", overflow: "clip" } as CSSProperties}>
            <div className="framer-1h94ow3 hidden-1be051o hidden-bwql3w" data-framer-name="Desktop" style={{ width: "580px", height: "442.812px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties}>
              <div className="framer-8ih972" data-framer-name="Comments" data-nosnippet="true" style={{ width: "272px", height: "164.992px", position: "absolute", top: "221.406px", right: "18px", bottom: "56.4141px", left: "290px", zIndex: "1", inset: "221.406px 18px 56.4141px 290px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", transform: "matrix(1, 0, 0, 1, -136, -82.4961)", transformOrigin: "136px 82.4961px" } as CSSProperties}>
                <div className="framer-1g1lxjg" data-framer-name="User" style={{ width: "32px", height: "32px", padding: "2px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(17, 17, 17)", borderRadius: "100px 100px 100px 24px", boxShadow: "rgb(33, 33, 33) 0px 0px 0px 1px", overflow: "clip" } as CSSProperties}>
                  <div className="framer-z6up3j" style={{ width: "28px", height: "28px", position: "relative", display: "block", flexDirection: "row", borderRadius: "100%", overflow: "clip" } as CSSProperties}>
                    <div style={{ width: "28px", height: "28px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                      <img decoding="auto" loading="lazy" width="192" height="192" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 192 / 192", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.user.src} alt={content.user.alt} />
                    </div>
                  </div>
                </div>
                <div className="framer-1injkio-container" style={{ width: "230px", height: "164.992px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                  <div className="framer-R3KBx framer-g7t4bl framer-v-g7t4bl" data-border="true" data-framer-name="Off 1" style={{ width: "100%", height: "164.992px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px", overflow: "clip", "--border-bottom-width": "1px", "--border-color": "var(--token-81eeded8-7d17-49fd-8f9d-4b09d4083be5, rgba(255, 255, 255, 0.07))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": "0.752", cornerShape: "superellipse(1.5)", borderBottomLeftRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                    <div className="framer-ac0fh6" style={{ width: "210px", height: "99.5938px", padding: "0px 0px 2px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                      <div className="framer-edmar4" style={{ width: "210px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                        <div className="framer-dscltk" data-border="true" style={{ width: "30px", height: "30px", position: "relative", zIndex: "1", display: "block", flexDirection: "row", borderRadius: "6px", filter: "grayscale(0)", aspectRatio: "1 / 1", "--border-bottom-width": "1.5px", "--border-color": "rgba(255, 255, 255, 0.1)", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                          <div style={{ width: "30px", height: "30px", position: "absolute", display: "block", flexDirection: "row", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as CSSProperties} data-framer-background-image-wrapper="true">
                            <img decoding="auto" width="192" height="192" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", borderRadius: "inherit", overflow: "clip", objectFit: "cover", aspectRatio: "auto 192 / 192", cornerShape: "inherit", objectPosition: "center" } as CSSProperties} src={content.off1.src} alt={content.off1.alt} />
                          </div>
                        </div>
                        <div className="framer-1plct0k" style={{ width: "170px", height: "28.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "clip", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                          <div className="framer-15s3g4p" data-framer-component-type="RichTextContainer" style={{ width: "67.4766px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                            <p dir="auto" className="framer-text" style={{ width: "67.4766px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                              {content.off1_2}
                            </p>
                          </div>
                          <div className="framer-1nu306x" data-framer-component-type="RichTextContainer" style={{ width: "51.2578px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-r6o4lv": "var(--token-28fd9ca0-18c8-4b2c-b240-cbd29f83e8a5, rgb(102, 102, 102))", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                            <p dir="auto" className="framer-text" style={{ width: "51.2578px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(102, 102, 102)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-28fd9ca0-18c8-4b2c-b240-cbd29f83e8a5, rgb(102, 102, 102)))" } as CSSProperties}>
                              {content.off1_3}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-oiclrq" data-framer-component-type="RichTextContainer" style={{ width: "210px", height: "57.5938px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-r6o4lv": "var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135))", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                        <p dir="auto" className="framer-text" style={{ width: "210px", height: "57.5938px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontWeight: "500", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)))" } as CSSProperties}>
                          {content.off1_4}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1tu8yig" data-framer-name="Divider" style={{ width: "210px", height: "1px", position: "relative", zIndex: "1", display: "block", flexDirection: "row", backgroundColor: "var(--token-81eeded8-7d17-49fd-8f9d-4b09d4083be5, rgba(255, 255, 255, 0.08))", overflow: "hidden", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} />
                    <div className="framer-1utay0y" style={{ width: "210px", height: "24.3984px", padding: "5px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", overflow: "clip", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                      <div className="framer-form-text-input framer-form-input-wrapper framer-8801c0 framer-form-text-input-type" style={{ width: "210px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", "--framer-input-font-color": "var(--token-28fd9ca0-18c8-4b2c-b240-cbd29f83e8a5, rgb(102, 102, 102))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-28fd9ca0-18c8-4b2c-b240-cbd29f83e8a5, rgb(102, 102, 102))", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                        <input type="text" name="Name" placeholder="Reply..." className="framer-form-input framer-form-input-empty" value="" style={{ width: "210px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "Inter", fontWeight: "500", lineHeight: "14.4px", color: "rgb(102, 102, 102)", whiteSpace: "nowrap", overflow: "clip" } as CSSProperties} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-11vkeed" data-framer-name="Text" style={{ width: "580px", height: "137.188px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "hidden" } as CSSProperties}>
            <div className="framer-40vlrr" data-framer-component-type="RichTextContainer" style={{ width: "540px", height: "24.2969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <h3 className="framer-text framer-styles-preset-ojsfn5" data-styles-preset="VQBQVu8qk" dir="auto" style={{ width: "540px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--framer-text-alignment": "start" } as CSSProperties}>
                {content.text_3}
              </h3>
            </div>
            <div className="framer-1d0wrms" data-framer-component-type="RichTextContainer" style={{ width: "428px", height: "72.8906px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "428px", height: "72.8906px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start" } as CSSProperties}>
                {content.text_4}{" "}
                <code className="framer-text framer-styles-preset-7a2d2k" data-styles-preset="UerhIinlb" style={{ padding: "2.16px 4.32px", position: "static", display: "inline", flexDirection: "row", backgroundColor: "rgb(34, 34, 34)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "6px", fontFamily: "\"Azeret Mono\", \"Azeret Mono Placeholder\", sans-serif", fontSize: "14.4px", lineHeight: "19.44px", color: "rgb(255, 255, 255)" } as CSSProperties}>
                  {content.text_5}
                </code>
                {" "}{content.text_6}
              </p>
            </div>
          </div>
        </div>
        <div className="framer-6f4459" data-border="true" data-framer-name="Staging" style={{ width: "600px", height: "600px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", backgroundColor: "rgb(0, 0, 0)", overflow: "hidden" } as CSSProperties}>
          <div className="framer-1t8jm6l" data-framer-name="Visual" style={{ width: "580px", height: "442.812px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", borderRadius: "20px", overflow: "clip" } as CSSProperties}>
            <div className="framer-1og0pax hidden-1be051o hidden-bwql3w" data-framer-name="Desktop" style={{ width: "580px", height: "442.812px", padding: "25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "rgb(0, 0, 0)" } as CSSProperties}>
              <div className="framer-m3cygy-container" style={{ width: "300px", height: "180px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties}>
                <div className="framer-VyzVY framer-11r6kh4 framer-v-11r6kh4" data-border="true" data-framer-name="Branch" data-nosnippet="true" style={{ width: "100%", height: "180px", padding: "10px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", backgroundColor: "var(--token-66b4c800-8615-4d3f-b022-5740b5e73cff, rgb(31, 31, 31))", borderRadius: "18px", overflow: "clip", "--border-bottom-width": "1px", "--border-color": "var(--token-81eeded8-7d17-49fd-8f9d-4b09d4083be5, rgba(255, 255, 255, 0.07))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties}>
                  <div className="framer-ux6gjj" data-framer-name="List" style={{ width: "280px", height: "120px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <div className="framer-z75ot2" data-framer-name="Branch" style={{ width: "280px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="Branch" className="framer-1sdkb6g" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", borderRadius: "1px", overflow: "hidden", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg10867483945" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                      <div className="framer-pta9hs" style={{ width: "258px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "8px 8px 0px 0px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1nzms4" data-framer-component-type="RichTextContainer" style={{ width: "258px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-2gg91v": "\"opsz\" 14, \"wght\" 500", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "258px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 14, \"wght\" 500)", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                            {content.branch}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-2e0p1g" data-framer-name="Domain" style={{ width: "280px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="Globe" className="framer-jwr56l" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg11500755854" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                      <div className="framer-1oqi0n4" style={{ width: "258px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "8px 8px 0px 0px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", opacity: "1" } as CSSProperties}>
                        <div className="framer-105c6cs" data-framer-component-type="RichTextContainer" style={{ width: "258px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-2gg91v": "\"opsz\" 14, \"wght\" 500", "--extracted-r6o4lv": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "258px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 14, \"wght\" 500)", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153)))" } as CSSProperties}>
                            {content.domain}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-p39tk0" data-framer-name="Time" style={{ width: "280px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="Dropdown Icon" className="framer-1nczhkh" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0)", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg9203629568" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                      <div className="framer-1ofvzug" style={{ width: "238px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "8px 8px 0px 0px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", opacity: "1" } as CSSProperties}>
                        <div className="framer-1x79zml" data-framer-component-type="RichTextContainer" style={{ width: "238px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-2gg91v": "\"opsz\" 14, \"wght\" 500", "--extracted-r6o4lv": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "238px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 14, \"wght\" 500)", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153)))" } as CSSProperties}>
                            {content.time}
                          </p>
                        </div>
                      </div>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-1ldz3up" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg8798386552" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1ev9198" data-framer-name="Changes" style={{ width: "280px", height: "30px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
                      <div data-framer-component-type="SVG" data-framer-name="User" className="framer-1hgrmpl" aria-hidden="true" style={{ width: "12px", height: "12px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg11832395151" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                      <div className="framer-8l1fr" style={{ width: "238px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", borderRadius: "8px 8px 0px 0px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", opacity: "1" } as CSSProperties}>
                        <div className="framer-z96m7x" data-framer-component-type="RichTextContainer" style={{ width: "238px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", overflow: "hidden", "--extracted-2gg91v": "\"opsz\" 14, \"wght\" 500", "--extracted-r6o4lv": "var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))", transform: "none", opacity: "1" } as CSSProperties}>
                          <p dir="auto" className="framer-text" style={{ width: "238px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "left", color: "rgb(153, 153, 153)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 14, \"wght\" 500)", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153)))" } as CSSProperties}>
                            {content.changes}
                          </p>
                        </div>
                      </div>
                      <div data-framer-component-type="SVG" data-framer-name="graphic" className="framer-yz6diw" aria-hidden="true" style={{ width: "10px", height: "10px", position: "relative", display: "block", flexDirection: "row", imageRendering: "pixelated", flexShrink: "0", opacity: "1" } as CSSProperties}>
                        <div className="svgContainer" style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", aspectRatio: "inherit" } as CSSProperties}>
                          <svg style={{ width: "100%", height: "100%", position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
                            <use href="#svg8798386552" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1ltz98v" data-framer-name="Button" style={{ width: "280px", height: "30px", padding: "0px 10px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "8px", backgroundColor: "var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))", borderRadius: "8px", overflow: "hidden", opacity: "1" } as CSSProperties}>
                    <div className="framer-13h4mnv" data-framer-component-type="RichTextContainer" style={{ width: "42.5312px", height: "14.3984px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", whiteSpace: "pre", "--extracted-2gg91v": "\"opsz\" 14, \"wght\" 600", "--extracted-r6o4lv": "var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{ width: "42.5312px", height: "14.3984px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", lineHeight: "14.4px", textAlign: "center", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv11' on", "--framer-font-size": "12px", "--framer-font-variation-axes": "var(--extracted-2gg91v, \"opsz\" 14, \"wght\" 600)", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4a5ab9b5-071f-4390-82c0-81f9558f671f, rgb(255, 255, 255)))" } as CSSProperties}>
                        {content.button}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-10x1vsj" data-framer-name="Text" style={{ width: "580px", height: "137.188px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", overflow: "hidden" } as CSSProperties}>
            <div className="ssr-variant" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <div className="framer-1ghqvk-container" style={{ width: "288.766px", height: "24.2969px", position: "relative", zIndex: "1", display: "block", flexDirection: "row" } as CSSProperties}>
                <a className="framer-y3Tcj framer-1yj9q62 framer-v-1yj9q62 framer-fbfhdw" data-framer-name="L" data-highlight="true" tabIndex={0} style={{ width: "288.766px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", gap: "6px", filter: "invert(0)", color: "rgb(0, 0, 238)", overflow: "hidden", WebkitFilter: "invert(0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.l_5}>
                  <div className="framer-46btbc" data-framer-component-type="RichTextContainer" style={{ width: "266.766px", height: "24.2969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre", "--extracted-a0htzi": "var(--variable-reference-u7EixmfP1-M8z52uvts)", "--extracted-zfisys": "\"opsz\" 18, \"wght\" 420", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-u7eixmfp1-m8z52uvts": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties}>
                    <h3 dir="auto" className="framer-text" style={{ width: "266.766px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOREl3", "--framer-font-family": "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", "--framer-font-open-type-features": "'cv11' on", "--framer-font-size": "18px", "--framer-font-variation-axes": "var(--extracted-zfisys, \"opsz\" 18, \"wght\" 420)", "--framer-letter-spacing": "-0.2px", "--framer-line-height": "1.35em", "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-u7EixmfP1-M8z52uvts))" } as CSSProperties}>
                      {content.l_6}
                    </h3>
                  </div>
                  <div className="framer-17vqbi5" style={{ width: "16px", height: "24.2969px", padding: "1px 0px 0px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center", opacity: "1" } as CSSProperties}>
                    <svg className="framer-ooj1j framer-1pqbd5p" role="presentation" viewBox="0 0 20 20" style={{ width: "16px", height: "16px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--1iwhep7": "2", "--1l3yetw": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))", "--17kkcf8": "rgba(136, 136, 136, 0.2)", opacity: "1" } as CSSProperties}>
                      <use href="#1825208344" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="framer-4wgzvr" data-framer-component-type="RichTextContainer" style={{ width: "480px", height: "72.8906px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <p className="framer-text framer-styles-preset-vn6u90" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "480px", height: "72.8906px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                {content.text_7}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
