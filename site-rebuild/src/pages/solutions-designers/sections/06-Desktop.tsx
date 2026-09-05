// Desktop.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "../content/06-Desktop";

export function Desktop() {
  return (
    <motion.section className="framer-yoyGa framer-lRLSj framer-68isl3 framer-v-68isl3" data-framer-name="Desktop" style={{ width: "100%", height: "654.297px", padding: "120px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "40px", backgroundColor: "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))", overflow: "clip", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
      <motion.div className="framer-1cu7igh" data-framer-name="Header" style={{ width: "1200px", height: "96.7969px", maxWidth: "1200px", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
        <motion.div className="framer-1covu7f" data-framer-component-type="RichTextContainer" style={{ width: "400px", height: "96.7969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
          <motion.h2 className="framer-text framer-styles-preset-fbtpvo" data-styles-preset="qRN7MgZKk" dir="auto" style={{ width: "400px", height: "96.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "44px", fontWeight: "500", lineHeight: "48.4px", letterSpacing: "-1.76px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
            {content.header}
          </motion.h2>
        </motion.div>
      </motion.div>
      <motion.ul className="framer-1epk6b5" data-border="true" data-framer-name="Cards" style={{ width: "1200px", height: "277.5px", maxWidth: "1200px", position: "relative", display: "grid", flexDirection: "row", justifyContent: "start", gridTemplateColumns: "300px 300px 300px 300px", gridTemplateRows: "138.75px 138.75px", borderRadius: "18px", overflow: "clip", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
        <motion.li className="framer-lrl88n-container" data-framer-name="Designers" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
          <motion.a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg" data-border="true" data-framer-name="Large" data-framer-page-link-current="true" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} href={content.large}>
            <div className="framer-19tuglo" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-baUZC framer-sl8461" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#3112628790" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </svg>
            </div>
            <div className="framer-zf3qd1 hv-1627" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title}
                </p>
              </div>
              <div className="framer-6bm4gv hv-1630" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_2}
                </p>
              </div>
            </div>
          </motion.a>
        </motion.li>
        <li className="framer-1fl1tw6-container" data-framer-name="Marketers" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_2}>
            <div className="framer-19tuglo hv-1634" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-hpBXv framer-sl8461" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#4183316575" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </svg>
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns hv-1638" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_3}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_4}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-1w9gm8n-container" data-framer-name="Site Teams" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_3}>
            <div className="framer-19tuglo" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-0t1g5 framer-sl8461" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#2313243780" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </svg>
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_5}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_6}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-164uker-container" data-framer-name="Growth" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_4}>
            <div className="framer-19tuglo" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <div data-framer-name="Icon L" className="framer-sApDh framer-sl8461" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", aspectRatio: "1 / 1", "--1l3yetw": "rgb(255, 255, 255)", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", opacity: "1" } as CSSProperties} />
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_7}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_8}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-shmai0-container" data-framer-name="Builders" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_5}>
            <div className="framer-19tuglo hv-1663" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-nROxc framer-sl8461 hv-1664" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#919011021" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hvt-1665 hv-1665" />
              </svg>
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_9}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_10}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-1680fxm-container" data-framer-name="Engineers" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg hv-1672" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_6}>
            <div className="framer-19tuglo hv-1673" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-7n5wY framer-sl8461 hvt-1674 hv-1674" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#3510397326" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </svg>
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_11}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_12}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-jowp2n-container hv-1681" data-framer-name="Agencies" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg hv-1682" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_7}>
            <div className="framer-19tuglo hvt-1683 hv-1683" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-dapqQ framer-sl8461" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#1142937281" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </svg>
            </div>
            <div className="framer-zf3qd1" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_13}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb hv-1690" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_14}
                </p>
              </div>
            </div>
          </a>
        </li>
        <li className="framer-1gs725i-container hv-1691" data-framer-name="Founders" style={{ width: "300px", height: "138.75px", position: "relative", display: "list-item", flexDirection: "row", opacity: "1" } as CSSProperties}>
          <a className="framer-gdN8K framer-naRDe framer-1bys4nl framer-v-1069q3g framer-3cgpzg hvt-1692 hv-1692" data-border="true" data-framer-name="Large" style={{ width: "100%", height: "138.75px", padding: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", alignContent: "flex-start", gap: "20px", color: "rgb(0, 0, 238)", overflow: "hidden", "--border-bottom-width": "1px", "--border-color": "var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))", "--border-left-width": "0px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", opacity: "1" } as CSSProperties} data-external-route="1" href={content.large_8}>
            <div className="framer-19tuglo" data-framer-name="Icon" style={{ width: "18px", height: "18px", position: "relative", zIndex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "10px", opacity: "1" } as CSSProperties}>
              <svg data-framer-name="Icon L" className="framer-kq1Rp framer-sl8461 hv-1694" role="presentation" viewBox="0 0 20 20" style={{ width: "18px", height: "18px", position: "relative", display: "block", flexDirection: "row", overflow: "hidden", aspectRatio: "1 / 1", "--17kkcf8": "var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))", "--1iwhep7": "2", "--1l3yetw": "rgb(255, 255, 255)", opacity: "1" } as CSSProperties}>
                <use href="#2458882080" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} className="hv-1695" />
              </svg>
            </div>
            <div className="framer-zf3qd1 hvt-1696 hv-1696" data-framer-name="Title" style={{ width: "260px", height: "60.75px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", opacity: "1" } as CSSProperties}>
              <div className="framer-1jw3mns" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "20.25px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", "--extracted-r6o4lv": "rgb(255, 255, 255)", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "20.25px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" } as CSSProperties}>
                  {content.title_15}
                </p>
              </div>
              <div className="framer-6bm4gv" data-framer-component-type="RichTextContainer" style={{ width: "260px", height: "40.5px", position: "relative", display: "flow-root", flexDirection: "column", justifyContent: "flex-start", overflow: "clip", "--1lo7wea": "2", "--extracted-r6o4lv": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))", transform: "none", opacity: "1" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-4eptxb" data-styles-preset="XHuCPIQKc" dir="auto" style={{ width: "260px", height: "40.5px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "15px", lineHeight: "20.25px", letterSpacing: "-0.1px", textAlign: "left", color: "rgba(255, 255, 255, 0.6)", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))" } as CSSProperties}>
                  {content.title_16}
                </p>
              </div>
            </div>
          </a>
        </li>
      </motion.ul>
    </motion.section>
  );
}
