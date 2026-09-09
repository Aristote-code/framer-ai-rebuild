// FAQ.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "../content/08-FAQ";

export function FAQ() {
  return (
    <div className="framer-1q87a7z hv-2761" data-framer-name="FAQ" style={{ width: "1440px", height: "745.156px", padding: "120px 20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)" } as CSSProperties}>
      <div className="framer-5velxz" data-framer-name="Inner" style={{ width: "1200px", height: "505.156px", maxWidth: "1200px", position: "relative", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "40px" } as CSSProperties}>
        <div className="framer-1tktilm hvt-2763" data-framer-component-type="RichTextContainer" style={{ width: "386.664px", height: "96.7969px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", whiteSpace: "pre-wrap", transform: "none" } as CSSProperties}>
          <h2 className="framer-text framer-styles-preset-fbtpvo" data-styles-preset="qRN7MgZKk" dir="auto" style={{ width: "386.664px", height: "96.7969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"GT Walsheim Medium\", \"GT Walsheim Medium Placeholder\", sans-serif", fontSize: "44px", fontWeight: "500", lineHeight: "48.4px", letterSpacing: "-1.76px", textAlign: "left", color: "rgb(255, 255, 255)", "--framer-text-alignment": "left" } as CSSProperties}>
            {content.inner}
          </h2>
        </div>
        <motion.div className="framer-wxtgop hv-2765" data-framer-name="Content" style={{ width: "773.336px", height: "505.156px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", overflow: "clip" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
          <motion.div className="framer-11hsn4a" data-border="true" data-framer-name="FAQ Item" style={{ width: "773.336px", height: "156.484px", padding: "0px 0px 30px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "5px", overflow: "clip" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
            <motion.div className="framer-1ehu4a8 hvt-2767" data-framer-component-type="RichTextContainer" style={{ width: "320px", height: "24.2969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <motion.h3 className="framer-text framer-styles-preset-ojsfn5" data-styles-preset="VQBQVu8qk" dir="auto" style={{ width: "320px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                {content.faqItem}
              </motion.h3>
            </motion.div>
            <motion.div className="ssr-variant hidden-brtj6u hv-2769" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <motion.div className="framer-1usuw4s" data-framer-component-type="RichTextContainer" style={{ width: "773.336px", height: "97.1875px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                <motion.p className="framer-text framer-styles-preset-vn6u90 hvt-2771" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "773.336px", height: "97.1875px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                  {content.faqItem_2}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="framer-1qwdsbl" data-border="true" data-framer-name="FAQ Item" style={{ width: "773.336px", height: "162.188px", padding: "30px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "5px", overflow: "clip" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
            <motion.div className="framer-bcjf50 hv-2773" data-framer-component-type="RichTextContainer" style={{ width: "400px", height: "24.2969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <motion.h3 className="framer-text framer-styles-preset-ojsfn5" data-styles-preset="VQBQVu8qk" dir="auto" style={{ width: "400px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                {content.faqItem_3}
              </motion.h3>
            </motion.div>
            <motion.div className="ssr-variant hidden-brtj6u hvt-2775" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <div className="framer-o3fwc9" data-framer-component-type="RichTextContainer" style={{ width: "773.336px", height: "72.8906px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-vn6u90 hv-2777" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "773.336px", height: "72.8906px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                  {content.faqItem_4}
                </p>
              </div>
            </motion.div>
          </motion.div>
          <div className="framer-esvrud" data-framer-name="FAQ Item" style={{ width: "773.336px", height: "186.484px", padding: "30px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", alignContent: "flex-start", gap: "5px", overflow: "clip" } as CSSProperties}>
            <div className="framer-6ioz9g hvt-2779" data-framer-component-type="RichTextContainer" style={{ width: "517px", height: "24.2969px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
              <h3 className="framer-text framer-styles-preset-ojsfn5" data-styles-preset="VQBQVu8qk" dir="auto" style={{ width: "517px", height: "24.2969px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgb(255, 255, 255)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties}>
                {content.faqItem_5}
              </h3>
            </div>
            <div className="ssr-variant hidden-brtj6u hv-2781" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <div className="framer-r9zxs8" data-framer-component-type="RichTextContainer" style={{ width: "773.336px", height: "97.1875px", maxWidth: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", transform: "none" } as CSSProperties}>
                <p className="framer-text framer-styles-preset-vn6u90 hvt-2783" data-styles-preset="kuibWYBoM" dir="auto" style={{ width: "773.336px", height: "97.1875px", position: "static", display: "block", flexDirection: "row", fontFamily: "\"Inter Variable\", \"Inter Variable Placeholder\", sans-serif", fontSize: "18px", lineHeight: "24.3px", letterSpacing: "-0.2px", color: "rgba(255, 255, 255, 0.6)", "--framer-text-alignment": "start", "--framer-text-color": "var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))" } as CSSProperties}>
                  {content.faqItem_6}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
