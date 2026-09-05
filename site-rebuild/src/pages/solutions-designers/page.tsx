// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
//   1. "Desktop Nav" → src/sections/01-DesktopNav.tsx
//   2. "Header" → src/sections/02-Header.tsx
//   3. "Use Cases" → src/sections/03-UseCases.tsx
//   4. "Agent" → src/sections/04-Agent.tsx
//   5. "Bento" → src/sections/05-Bento.tsx
//   6. "Desktop" → src/sections/06-Desktop.tsx
//   7. "New Pivot" → src/sections/07-NewPivot.tsx
//   8. "Bottom" → src/sections/08-Bottom.tsx
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "./content/shell";
import { DesktopNav } from "./sections/01-DesktopNav";
import { Header } from "./sections/02-Header";
import { UseCases } from "./sections/03-UseCases";
import { Agent } from "./sections/04-Agent";
import { Bento } from "./sections/05-Bento";
import { Desktop } from "./sections/06-Desktop";
import { NewPivot } from "./sections/07-NewPivot";
import { Bottom } from "./sections/08-Bottom";
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
      <div id="main" style={{ width: "1440px", height: "10643px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <style data-framer-html-style="">
          {content.text1}
        </style>
        <div className="framer-ykIBb framer-Grv0o framer-zprce9" data-layout-template="true" data-selection="true" style={{ width: "auto", height: "10643px", minHeight: "100vh", padding: "64px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", "--1moyfq9": "64px 0px 0px 0px", "--1r5dcfs": "visible", "--u410qi": "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" } as CSSProperties}>
          <div className="framer-1w39556-container" data-cs-id="3" style={{ width: "1440px", height: "64px", position: "fixed", bottom: "836px", zIndex: "10", inset: "0px 0px 836px", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="ssr-variant hidden-sv03hi" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <DesktopNav />
            </div>
          </div>
          <style data-framer-html-style="">
            {content.text2}
          </style>
          <div data-framer-root="" className="framer-Au4tM framer-Grv0o framer-naRDe framer-lRLSj framer-OM6Dg framer-0k2u9 framer-lch4v2" style={{ height: "min-content", minHeight: "100vh", position: "relative", display: "contents", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "clip", width: "auto" } as CSSProperties}>
            <Header />
            <UseCases />
            <Agent />
            <Bento />
            <motion.div className="ssr-variant hidden-ju81s0 hidden-1uuy1mt" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
              <motion.div className="framer-948sr9-container" style={{ width: "1440px", height: "654.297px", position: "relative", display: "block", flexDirection: "row" } as CSSProperties} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                <Desktop />
              </motion.div>
            </motion.div>
          </div>
          <div id="overlay" style={{ position: "static", display: "block", flexDirection: "row" } as CSSProperties} />
          <div className="framer-1j2gvch" style={{ position: "relative", display: "block", flexDirection: "row" } as CSSProperties} />
          <NewPivot />
          <Bottom />
        </div>
        <div id="template-overlay" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row" } as CSSProperties} />
      </div>
      <div id="svg-templates" style={{ position: "absolute", top: "900px", right: "1440px", zIndex: "0", inset: "900px 1440px 0px 0px", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", contain: "strict" } as CSSProperties} aria-hidden="true">
        {" "}
        <svg viewBox="0 0 14 14" id="svg10231122378" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 6.417 C 1.75 3.839 3.839 1.75 6.417 1.75 C 8.994 1.75 11.083 3.839 11.083 6.417 C 11.083 8.994 8.994 11.083 6.417 11.083 C 3.839 11.083 1.75 8.994 1.75 6.417 Z M 12.25 12.25 L 9.713 9.713" fill="transparent" strokeWidth="1.4" stroke="var(--token-6fff741a-90b6-438e-9423-1f7c07944681, rgb(255, 255, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg10522329964" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 10 5 L 10 15" fill="transparent" strokeWidth="2" stroke="var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5 10 L 15 10" fill="transparent" strokeWidth="2" stroke="var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10315723596" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 L 3.939 6.061 C 4.525 5.475 4.525 4.525 3.939 3.939 L 0 0" transform="translate(3.5 1) rotate(90 2.5 5)" fill="transparent" strokeWidth="2" stroke={"var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)) /* {\"name\":\"White 60\"} */"} strokeLinecap="round" strokeLinejoin="round" opacity="0" style={{ position: "static", display: "inline", flexDirection: "row", opacity: "0", transform: "matrix(0, 1, -1, 0, 11, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg12145085063" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" transform="translate(4 4) rotate(-45 9 9.25)" fill="rgba(255, 255, 255, 0.2)" strokeWidth="2" stroke="var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255))" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0.0953012, 13.0732)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9096210115" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 14.352 23.648 C 18.526 24.597 22.5 21.424 22.5 17.144 L 22.5 10.5 C 22.5 9.672 21.828 9 21 9 L 21 9 C 20.172 9 19.5 9.672 19.5 10.5 L 19.5 13 L 19.5 14 L 19.5 14 L 19.5 8.5 C 19.5 7.672 18.828 7 18 7 L 18 7 C 17.172 7 16.5 7.672 16.5 8.5 L 16.5 14 L 16.5 14 L 16.5 7.5 C 16.5 6.672 15.828 6 15 6 L 15 6 C 14.172 6 13.5 6.672 13.5 7.5 L 13.5 14 L 13.5 14 L 13.5 9.5 C 13.5 8.672 12.828 8 12 8 L 12 8 C 11.172 8 10.5 8.672 10.5 9.5 L 10.5 14 L 10.5 14.566 C 10.5 15.013 9.926 15.197 9.667 14.833 L 8.93 13.803 C 8.425 13.095 7.429 12.957 6.75 13.5 L 6.75 13.5 C 6.048 14.062 5.905 15.073 6.423 15.808 L 9.951 20.806 C 10.948 22.218 12.433 23.212 14.119 23.595 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9493335331" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 7 C 19.418 7 23 10.582 23 15 C 23 19.418 19.418 23 15 23 L 9 23 C 7.895 23 7 22.105 7 21 L 7 15 C 7 10.582 10.582 7 15 7 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg12425621608" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 23.5 C 10.306 23.5 6.5 19.694 6.5 15 C 6.5 12.796 7.339 10.787 8.716 9.277 C 9.404 8.521 10.226 7.891 11.145 7.422 C 11.605 7.188 12.088 6.994 12.591 6.846 L 12.682 6.828 C 13.337 6.701 13.885 7.329 13.67 7.961 L 13.67 7.961 C 13.559 8.456 13.5 8.971 13.5 9.5 C 13.5 13.366 16.634 16.5 20.5 16.5 C 21.029 16.5 21.544 16.441 22.039 16.33 L 22.039 16.33 C 22.671 16.115 23.299 16.663 23.172 17.318 L 23.154 17.409 C 23.08 17.66 22.994 17.907 22.898 18.148 C 22.802 18.389 22.695 18.625 22.578 18.855 C 22.109 19.774 21.479 20.596 20.723 21.284 C 19.213 22.661 17.204 23.5 15 23.5 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10018820250" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10994104066" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke={"var(--token-80b6d9ee-6797-4273-85d5-55a0c0e39c2c, rgb(102, 102, 102)) /* {\"name\":\"Icon 40\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg11460081331" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.181 0.73 C 5.987 0.402 5.513 0.402 5.319 0.73 L 0.652 8.644 C 0.421 9.036 0.793 9.509 1.229 9.376 L 5.75 8 L 10.271 9.376 C 10.707 9.509 11.079 9.036 10.848 8.644 Z" transform="translate(2.75 3.75) rotate(-45 5.75 5)" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(153, 153, 153, 0.2)) /* {\"name\":\"Icon 60 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0.898602, 9.28033)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg11855643982" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(4.75 4.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4.75, 4.75)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 5 0 L 5 10" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 5 L 10 5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg10115357809" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4.75 9.5 L 9.043 5.207 C 9.433 4.817 10.067 4.817 10.457 5.207 L 14.75 9.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 9.75 6.253 L 9.75 14.753" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg11271281936" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.5 1.5 L 1.5 8.5 M 1.5 1.5 L 8.5 8.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10101970430" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9.5 2.5 L 2.5 9.5 M 2.5 2.5 L 9.5 9.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11324189933" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 5 0 C 7.761 0 10 2.239 10 5 C 10 6.046 9.679 7.017 9.13 7.819 L 11.164 9.854 C 11.457 10.146 11.457 10.621 11.164 10.914 C 10.871 11.207 10.396 11.207 10.104 10.914 L 8.107 8.918 C 7.254 9.595 6.174 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z M 1.5 5 C 1.5 6.933 3.067 8.5 5 8.5 C 6.933 8.5 8.5 6.933 8.5 5 C 8.5 3.067 6.933 1.5 5 1.5 C 3.067 1.5 1.5 3.067 1.5 5 Z" fill="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg11695272811" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 2 L 2 8 M 2 2 L 8 8" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 9.5 9.5" overflow="visible" id="svg1157502715_588" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 4.75 0 C 7.373 0 9.5 2.127 9.5 4.75 C 9.5 7.373 7.373 9.5 4.75 9.5 C 2.127 9.5 0 7.373 0 4.75 C 0 2.127 2.127 0 4.75 0 Z" fill="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 4.75 7 L 4.75 2.5 M 7 4.75 L 2.5 4.75" fill="transparent" strokeWidth="1.5" stroke="var(--token-5e2a9781-f258-43f3-ae02-0a76276a5519, rgb(8, 8, 8))" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 6.5 L 6.5 1.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 6.5 6.5 L 1.5 1.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg width="212" height="212" fill="none" id="svg589146243_343" style={{ width: "212px", height: "212px", position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="m106 0 15.494 68.594 59.459-37.547-37.547 59.459L212 106l-68.594 15.494 37.547 59.459-59.459-37.547L106 212l-15.494-68.594-59.46 37.547 37.548-59.459L0 106l68.594-15.494-37.547-59.46 59.459 37.548L106 0Z" fill="#fff" style={{ position: "static", display: "inline", flexDirection: "row", fill: "#fff", fillOpacity: "1" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 3 3 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 14.33 23.84" overflow="visible" id="svg-445843385_1975" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 2.073 0.359 L 13.649 11.96 C 15.103 13.418 14.072 15.907 12.013 15.907 L 10.323 15.907 L 12.002 19.895 C 12.296 20.594 12.3 21.367 12.014 22.07 C 11.731 22.77 11.179 23.328 10.481 23.617 C 9.786 23.91 9.003 23.914 8.305 23.629 C 7.606 23.344 7.05 22.793 6.758 22.098 L 4.994 17.904 L 3.845 18.923 C 2.352 20.244 0 19.185 0 17.19 L 0 1.216 C 0 0.134 1.308 -0.408 2.073 0.36 Z" id="svg-445843385_1975_a4576z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg-445843385_1975_a4578z" filterUnits="objectBoundingBox" x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="2" in="SourceAlpha" result="a4581z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="2" in="a4581z" result="a4582z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a4583z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a4583z" in2="a4582z" operator="in" result="a4579z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg-445843385_1975_a4580z" x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" style={{ width: "217.2%", height: "187.2%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" fill="white" style={{ width: "31.1248px", height: "44.6285px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg-445843385_1975_a4576z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg-445843385_1975_a4578z)" mask="url(#svg-445843385_1975_a4580z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg-445843385_1975_a4578z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg-445843385_1975_a4576z" clipPath="url(#svg-445843385_1975_a4577z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg-445843385_1975_a4576z" fill="var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" clipPath="url(#svg-445843385_1975_a4577z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <path d="M 1.381 2.276 C 1.381 2.094 1.601 2.003 1.726 2.131 L 12.65 13.076 C 12.921 13.346 13.002 13.754 12.855 14.108 C 12.709 14.461 12.363 14.692 11.98 14.691 L 8.246 14.688 L 10.731 20.593 C 11.045 21.339 10.695 22.197 9.95 22.51 C 9.205 22.824 8.346 22.474 8.033 21.729 L 5.524 15.757 L 2.955 18.032 C 2.695 18.261 2.331 18.33 2.005 18.211 C 1.679 18.093 1.444 17.806 1.392 17.463 L 1.382 17.325 L 1.382 2.274 Z" fill="var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg10978743661" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.25 2 L 2.25 8 M 2.25 2 L 8.25 8" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 16 20" id="svg10770409774" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9 13 L 11 15 M 5.5 5 C 7.985 5 10 7.015 10 9.5 C 10 11.985 7.985 14 5.5 14 C 3.015 14 1 11.985 1 9.5 C 1 7.015 3.015 5 5.5 5 Z" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="367334708" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7 L 6.293 0.707 C 6.683 0.317 7.317 0.317 7.707 0.707 L 14 7" fill="transparent" id="aD_3Sblea" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6.5) rotate(540 7 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 17, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3797874707" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z M 13 13 L 16 16" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Uo84kFvT9" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="102597446" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.726 1.636 C 1.526 0.916 0 1.78 0 3.179 L 0 14.821 C 0 16.22 1.526 17.084 2.726 16.364 L 12.428 10.543 C 13.593 9.844 13.593 8.156 12.428 7.457 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="jwhVgqsrf" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3112628790" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nlSrohSU_" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="KsCrzTmH6" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1gctVLSo" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(-1.5 -1.5) rotate(-45 9 9.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, -5.4047, 7.57322)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="1218162679" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="nccNel0fJ" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16 0" fill="rgba(136, 136, 136, 0.2)" id="JYauSZ_tN" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 16" fill="rgba(136, 136, 136, 0.2)" id="WFBrjlGD_" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1232319397" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="transparent" id="F1ltdTok2" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 7.5 L 7.5 0 L 15 7.5" fill="transparent" id="rx3H5dkE6" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 15 8.5 C 15 9.052 14.552 9.5 14 9.5 L 1 9.5 C 0.448 9.5 0 9.052 0 8.5 L 0 7.5 L 7.5 0 L 15 7.5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="lhZ2SRe3M" transform="translate(2.5 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2749563111" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 8 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 10 C 16 11.657 14.657 13 13 13 L 3 13 C 1.343 13 0 11.657 0 10 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="CUpIJ0PUk" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6 0 L 0 0" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="WpKO3sWVJ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(7 18)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 7, 18)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="4183316575" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9.5 0 L 9.832 1.129 C 11.184 5.726 10.118 10.695 7 14.333 L 7 14.333 C 6.474 14.947 5.526 14.947 5 14.333 L 5 14.333 C 1.882 10.695 0.816 5.726 2.168 1.129 L 2.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="NILXUFy2o" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 1) rotate(180 6 7.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 16, 16.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.5 L 1.297 2.492 C 2.738 1.371 4.854 2.204 5.143 4.007 L 5.241 4.618 C 5.682 7.366 4.114 10.042 1.5 11 L 1.5 11" fill="transparent" id="N3FMfH7e5" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 9) rotate(180 3 5.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 20)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6 3.5 L 4.703 2.492 C 3.262 1.371 1.146 2.204 0.857 4.007 L 0.759 4.618 C 0.318 7.366 1.886 10.042 4.5 11 L 4.5 11" fill="transparent" id="w2mkobRwq" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(13 9) rotate(180 3 5.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 19, 20)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg id="3559153988" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" id="gwB_ZdJt6" transform="translate(3.75 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="xGkn4qbwc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="uQ9bOFKFt" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="hrURkUe9P" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 18)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1642661144" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.316 0.282 C 7.371 0.198 7.5 0.237 7.5 0.336 L 7.5 6.5 L 14.077 6.5 C 14.474 6.5 14.713 6.941 14.496 7.273 L 7.684 17.718 C 7.629 17.802 7.5 17.763 7.5 17.664 L 7.5 11.5 L 0.923 11.5 C 0.526 11.5 0.287 11.059 0.504 10.727 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="JLnAV7wPe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="4209924379" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 5 L 5.174 5 C 5.851 2.133 8.426 0 11.5 0 C 15.09 0 18 2.91 18 6.5 C 18 10.09 15.09 13 11.5 13 L 4 13 C 1.791 13 0 11.209 0 9 C 0 6.791 1.791 5 4 5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Pmy4ozTPP" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1635548955" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AdeKayc7d" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 10 3.5 L 10 3 C 10 1.343 8.657 0 7 0 L 3 0 C 1.343 0 0 1.343 0 3 L 0 7" fill="transparent" id="Ax6FRJvk6" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="881773478" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="SMM7MgBJf" transform="translate(6 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 12 16 L 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 L 0 8 C 0 3.582 3.582 0 8 0 L 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 L 16 9.25 C 16 10.493 14.993 11.5 13.75 11.5 L 13.75 11.5 C 12.507 11.5 11.5 10.493 11.5 9.25 L 11.5 8 L 11.5 8 C 11.5 6.067 9.933 4.5 8 4.5 L 8 4.5 L 8 4.5 C 6.067 4.5 4.5 6.067 4.5 8 L 4.5 8 L 4.5 8 C 4.5 9.933 6.067 11.5 8 11.5 L 8 11.5 L 8 11.5 C 9.933 11.5 11.5 9.933 11.5 8 L 11.5 8" fill="transparent" id="FYPv_MPlc" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="95487542" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 8 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 10 C 16 11.657 14.657 13 13 13 L 3 13 C 1.343 13 0 11.657 0 10 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="jYlNOZP6c" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 2.5" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="xoTnp1cUB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 2.5" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="WB9hnEF0c" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(14 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 14, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1770930775" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nMTYSAq1r" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="hvRKkEQ3N" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="BkASqP34G" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 2.5 L 2.333 5 L 7 0" fill="transparent" id="zmUNotVlH" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 8) rotate(360 3.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2330263925" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="m_7BCXUc9" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 4 M 0 4 L 4 4" fill="transparent" id="l5vGPS0a0" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="673751299" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="f94NMRDup" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(12 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="FeRO9ZKVf" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Gy68xnuPv" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="587222984" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.501 0 C 13.196 0 17.001 3.806 17.001 8.501 C 17.001 13.196 13.195 17.001 8.5 17.001 C 3.805 17.001 0 13.195 0 8.5 C 0 3.805 3.806 0 8.501 0 Z M 2.001 8.5 C 2.001 11.215 3.689 13.645 6.233 14.593 C 5.479 13.126 5.001 10.941 5.001 8.5 C 5.001 6.059 5.479 3.874 6.233 2.407 C 3.689 3.355 2.001 5.785 2.001 8.5 Z M 15.001 8.5 C 15.001 5.785 13.313 3.355 10.769 2.407 C 11.523 3.874 12.001 6.059 12.001 8.5 C 12.001 10.941 11.523 13.126 10.769 14.593 C 13.313 13.645 15.001 11.215 15.001 8.5 Z M 6.501 8.5 C 6.501 12.09 7.396 15 8.501 15 C 9.606 15 10.501 12.09 10.501 8.5 C 10.501 4.91 9.606 2 8.501 2 C 7.396 2 6.501 4.91 6.501 8.5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="i4i8H9Zao" transform="translate(1.5 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 0 C 4.277 0.987 8.723 0.987 13 0 L 13 0" fill="transparent" id="lTo6Obt5s" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 9.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="bNnSt6Y2K" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="734873119" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 6.034 14 3.267 14 3.267 14 L 2 14 C 0.895 14 0 13.105 0 12 L 0 10.267 C 0 10.267 0 7.966 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="FwpLe_zxq" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3.793) rotate(135 7 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-0.707107, 0.707107, -0.707107, -0.707107, 19.8995, 10.793)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3983927620" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 7 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TJgu9bozd" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 5 L 8 4 C 8 1.791 6.209 0 4 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 5" fill="transparent" id="WUdG9cSLB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1142937281" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7.952 C 0 6.9 0.483 5.906 1.31 5.256 L 6.588 1.11 C 7.417 0.458 8.583 0.458 9.412 1.11 L 14.69 5.256 C 15.517 5.906 16 6.9 16 7.952 L 16 13.143 C 16 15.036 14.465 16.571 12.571 16.571 L 3.429 16.571 C 1.535 16.571 0 15.036 0 13.143 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="G9b2Z7Cdx" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 1.46)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 1.46)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 1 0 C 1.552 0 2 0.448 2 1 L 2 7 C 2 7.552 1.552 8 1 8 L 1 8 C 0.448 8 0 7.552 0 7 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="PfMaDa8BH" transform="translate(9 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3788105446" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4.5 0 C 6.624 0 8.112 1.472 8.5 3.451 C 8.888 1.472 10.376 0 12.5 0 C 14.986 0 17 2.015 17 4.5 C 17 11.985 8.5 15.5 8.5 15.5 L 8.5 15.5 L 8.5 15.5 C 8.5 15.5 0 11.985 0 4.5 C 0 2.015 2.015 0 4.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="wAsIjRFry" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1312992605" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="tq7KJh3dd" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="xSuCcKEbe" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 8.56 0 L 11.205 5.359 L 17.119 6.219 L 12.839 10.391 L 13.85 16.281 L 8.56 13.5 L 3.269 16.281 L 4.28 10.391 L 0 6.219 L 5.914 5.359 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="BLvUYOyFL" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.44 1.859)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.44, 1.859)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="4111896214" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="CYaQwZbzZ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="PrXejxNaf" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(11 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 11, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 0 L 0 0" fill="transparent" id="d6zlxg5W4" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(9 5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 0 L 0 0" fill="transparent" id="NPLFDpU23" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 15)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 15)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2458882080" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.609 L 0.303 3.061 C 1.35 1.172 3.34 0 5.5 0 L 5.5 0 C 7.66 0 9.65 1.172 10.697 3.061 L 11 3.609" fill="transparent" id="ZJ3NhD5NK" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4.5 14)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4.5, 14)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="PMrgT3meu" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2313243780" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="PepNG7kzP" transform="translate(1 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 3.665 C 0.304 2.947 0.743 2.3 1.286 1.757 C 2.372 0.672 3.872 0 5.528 0 C 7.185 0 8.685 0.672 9.771 1.757 C 10.314 2.3 10.753 2.947 11.057 3.665" fill="transparent" id="wgUabV51_" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 10.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 10.5)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 0 C 0.391 0.08 0.767 0.198 1.126 0.35 C 1.844 0.653 2.491 1.093 3.033 1.635 C 3.576 2.178 4.016 2.825 4.319 3.543" fill="transparent" id="E8ylNNXOe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(13.209 10.622)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 13.209, 10.622)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="dg3d1hpbO" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 0 C 1.933 0 3.5 1.567 3.5 3.5 C 3.5 5.433 1.933 7 0 7" fill="transparent" id="p7NIlbP8y" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(12 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="919011021" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.393 1.496 C 7.453 0.653 8.155 0 9 0 L 9 0 C 9.845 0 10.547 0.653 10.607 1.496 L 10.615 1.615 C 10.836 4.706 13.294 7.164 16.385 7.385 L 16.504 7.393 C 17.347 7.453 18 8.155 18 9 L 18 9 C 18 9.845 17.347 10.547 16.504 10.607 L 16.385 10.615 C 13.294 10.836 10.836 13.294 10.615 16.385 L 10.607 16.504 C 10.547 17.347 9.845 18 9 18 L 9 18 C 8.155 18 7.453 17.347 7.393 16.504 L 7.385 16.385 C 7.164 13.294 4.706 10.836 1.615 10.615 L 1.496 10.607 C 0.653 10.547 0 9.845 0 9 L 0 9 C 0 8.155 0.653 7.453 1.496 7.393 L 1.615 7.385 C 4.706 7.164 7.164 4.706 7.385 1.615 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Yx3KDFIth" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3510397326" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="SxRbvPjEk" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 2.5 L 1.793 0.707 C 2.183 0.317 2.817 0.317 3.207 0.707 L 5 2.5" fill="transparent" id="YSKKO_cbA" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5.75 7.25) rotate(450 2.5 1.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 9.5, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1915987791" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="vEX_qhXWW" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 16 M 0 8 L 8 8" fill="transparent" id="MA2yDOaeV" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3553501619" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="J2g_sQzdi" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="qn9v4TGjc" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <g fill="transparent" id="k07xWAi3X" transform="translate(5 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5, 3)", transformOrigin: "0px 0px" } as CSSProperties}>
              <path d="M 0 5.44 L 4.264 0.801 C 4.66 0.37 5.34 0.37 5.736 0.801 L 10 5.44" fill="transparent" id="GmiaU4Xf8" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 5) rotate(180 5 2.72)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 10, 10.44)", transformOrigin: "0px 0px" } as CSSProperties} />
              <path d="M 0 9.5 L 0 0" fill="transparent" id="pFwTi47Ta" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 0) rotate(180 0.5 4.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
            </g>
            <path d="M 0 0 L 14 0" fill="transparent" id="WdxxX2Yz3" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 17)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 17)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="1825208344" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="DUPc5oIsM" transform="translate(3 3) rotate(-90 7 6.979)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 3.021, 16.979)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="Fb3UNma2k" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="xsId7KutQ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg id="1184508750" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" id="yWvBZM3cg" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6.812 6.83 C 5.25 8.391 2.718 8.39 1.157 6.828 C -0.405 5.266 -0.405 2.734 1.157 1.172 C 2.718 -0.39 5.25 -0.391 6.812 1.17" fill="transparent" id="hGfwFfnW8" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.018 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 8.018, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg11051818314" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 10 10" id="svg12431047333" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 1.75 C 0 1.336 0.336 1 0.75 1 L 9.25 1 C 9.664 1 10 1.336 10 1.75 L 10 1.75 C 10 2.164 9.664 2.5 9.25 2.5 L 0.75 2.5 C 0.336 2.5 0 2.164 0 1.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2 5.25 C 2 4.836 2.336 4.5 2.75 4.5 L 7.25 4.5 C 7.664 4.5 8 4.836 8 5.25 L 8 5.25 C 8 5.664 7.664 6 7.25 6 L 2.75 6 C 2.336 6 2 5.664 2 5.25 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2 8.75 C 2 8.336 2.336 8 2.75 8 L 7.25 8 C 7.664 8 8 8.336 8 8.75 L 8 8.75 C 8 9.164 7.664 9.5 7.25 9.5 L 2.75 9.5 C 2.336 9.5 2 9.164 2 8.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 18.772 24.222" overflow="visible" id="svg667531508_6338" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 6.406 21.562 C 5.182 20.697 4.223 19.305 3.534 17.381 L 1.425 11.446 C 1.354 11.258 1.319 11.069 1.319 10.881 C 1.318 10.658 1.407 10.443 1.567 10.288 C 1.728 10.132 1.944 10.049 2.168 10.057 C 2.559 10.057 2.854 10.292 3.051 10.763 L 4.628 14.367 C 4.738 14.642 4.874 14.83 5.035 14.932 C 5.199 15.035 5.389 15.088 5.582 15.084 C 5.797 15.09 6.003 15.002 6.148 14.844 C 6.3 14.675 6.38 14.453 6.371 14.226 L 6.371 2.25 C 6.371 1.96 6.455 1.726 6.624 1.549 C 6.798 1.37 7.04 1.274 7.289 1.285 C 7.535 1.272 7.774 1.369 7.942 1.549 C 8.104 1.726 8.184 1.96 8.184 2.25 L 8.184 10.752 C 8.181 10.922 8.247 11.087 8.367 11.209 C 8.486 11.331 8.65 11.4 8.82 11.4 C 8.994 11.404 9.161 11.337 9.283 11.215 C 9.406 11.092 9.473 10.925 9.468 10.752 L 9.468 7.666 C 9.719 7.549 9.978 7.489 10.246 7.489 C 10.559 7.489 10.809 7.59 10.993 7.79 C 11.178 7.99 11.269 8.264 11.269 8.609 L 11.269 11.2 C 11.26 11.381 11.332 11.558 11.464 11.683 C 11.587 11.797 11.749 11.86 11.918 11.858 C 12.082 11.859 12.24 11.796 12.359 11.683 C 12.491 11.558 12.563 11.381 12.554 11.2 L 12.554 8.962 C 12.804 8.853 13.06 8.797 13.318 8.797 C 13.649 8.797 13.903 8.893 14.085 9.085 C 14.265 9.277 14.355 9.551 14.355 9.904 L 14.355 11.658 C 14.347 11.836 14.418 12.009 14.55 12.129 C 14.673 12.244 14.835 12.307 15.003 12.305 C 15.167 12.305 15.326 12.242 15.445 12.129 C 15.576 12.008 15.647 11.836 15.64 11.658 L 15.64 10.246 C 16.219 10.246 16.666 10.513 16.976 11.046 C 17.286 11.581 17.441 12.341 17.441 13.331 L 17.441 15.461 C 17.441 17.056 17.166 18.401 16.616 19.501 C 16.067 20.601 15.287 21.434 14.278 22.003 C 13.271 22.572 12.083 22.856 10.717 22.856 C 9.068 22.856 7.631 22.425 6.406 21.562 Z M 14.897 23.21 C 16.113 22.534 17.064 21.556 17.747 20.272 C 18.43 18.989 18.772 17.435 18.772 15.615 L 18.772 13.153 C 18.772 11.804 18.479 10.756 17.894 10.009 C 17.309 9.264 16.481 8.887 15.415 8.88 C 15.29 8.455 15.06 8.119 14.726 7.873 C 14.392 7.625 13.982 7.502 13.496 7.502 C 13.15 7.502 12.797 7.565 12.437 7.691 C 12.295 7.235 12.047 6.876 11.694 6.613 C 11.34 6.349 10.913 6.218 10.411 6.218 C 10.119 6.218 9.821 6.262 9.515 6.348 L 9.515 2.332 C 9.515 1.618 9.304 1.051 8.885 0.63 C 8.465 0.21 7.933 0 7.289 0 C 6.637 0 6.1 0.21 5.677 0.63 C 5.252 1.051 5.04 1.618 5.04 2.332 L 5.04 12.46 C 5.04 12.529 5.009 12.564 4.946 12.564 C 4.899 12.564 4.863 12.537 4.84 12.483 L 3.911 10.186 C 3.713 9.724 3.455 9.375 3.133 9.144 C 2.811 8.913 2.45 8.797 2.049 8.797 C 1.525 8.788 1.016 8.968 0.613 9.303 C 0.204 9.641 0 10.115 0 10.728 C 0.011 11.117 0.078 11.501 0.2 11.87 L 2.308 17.816 C 3.055 19.936 4.131 21.534 5.541 22.61 C 6.95 23.684 8.659 24.222 10.67 24.222 C 12.271 24.222 13.68 23.885 14.897 23.21 Z" id="svg667531508_6338_a8112z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg667531508_6338_a8114z" filterUnits="objectBoundingBox" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="1.92" in="SourceAlpha" result="a8117z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="1.92" in="a8117z" result="a8118z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8119z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8119z" in2="a8118z" operator="in" result="a8115z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg667531508_6338_a8116z" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ width: "185.9%", height: "182.4%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" fill="white" style={{ width: "34.8971px", height: "44.1809px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg667531508_6338_a8112z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg667531508_6338_a8114z)" mask="url(#svg667531508_6338_a8116z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg667531508_6338_a8114z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg667531508_6338_a8112z" clipPath="url(#svg667531508_6338_a8113z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg667531508_6338_a8112z" fill="rgb(0,0,0)" clipPath="url(#svg667531508_6338_a8113z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 10.689 22.864 C 12.054 22.864 13.242 22.58 14.249 22.011 C 15.259 21.441 16.039 20.609 16.587 19.509 C 17.137 18.409 17.412 17.063 17.412 15.469 L 17.412 13.339 C 17.412 12.348 17.257 11.588 16.947 11.054 C 16.638 10.52 16.191 10.253 15.611 10.253 L 15.611 11.666 C 15.619 11.844 15.547 12.016 15.416 12.137 C 15.297 12.25 15.139 12.313 14.975 12.312 C 14.807 12.315 14.644 12.252 14.522 12.137 C 14.39 12.016 14.319 11.844 14.327 11.666 L 14.327 9.911 C 14.327 9.559 14.236 9.285 14.057 9.093 C 13.875 8.9 13.62 8.805 13.29 8.805 C 13.032 8.805 12.776 8.86 12.526 8.97 L 12.526 11.207 C 12.534 11.389 12.463 11.565 12.331 11.69 C 12.212 11.803 12.053 11.866 11.889 11.866 C 11.721 11.868 11.559 11.805 11.436 11.69 C 11.303 11.566 11.232 11.389 11.241 11.207 L 11.241 8.616 C 11.241 8.271 11.149 7.998 10.965 7.798 C 10.78 7.597 10.531 7.497 10.217 7.497 C 9.95 7.497 9.691 7.556 9.44 7.674 L 9.44 10.759 C 9.444 10.932 9.377 11.1 9.255 11.222 C 9.132 11.345 8.965 11.412 8.792 11.407 C 8.621 11.407 8.458 11.338 8.338 11.216 C 8.219 11.095 8.153 10.93 8.155 10.759 L 8.155 2.258 C 8.155 1.967 8.075 1.734 7.914 1.557 C 7.746 1.377 7.507 1.28 7.261 1.292 C 7.012 1.282 6.77 1.378 6.596 1.557 C 6.427 1.734 6.343 1.967 6.343 2.258 L 6.343 14.233 C 6.351 14.461 6.271 14.682 6.12 14.852 C 5.975 15.01 5.768 15.097 5.554 15.092 C 5.361 15.096 5.17 15.043 5.007 14.94 C 4.845 14.838 4.71 14.649 4.6 14.374 L 3.022 10.771 C 2.826 10.3 2.53 10.065 2.139 10.065 C 1.916 10.056 1.699 10.139 1.539 10.295 C 1.379 10.451 1.289 10.665 1.291 10.888 C 1.291 11.077 1.326 11.265 1.397 11.454 L 3.505 17.389 C 4.195 19.312 5.154 20.704 6.378 21.569 C 7.603 22.433 9.04 22.864 10.689 22.864 Z" id="svg667531508_6338_a8120z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg667531508_6338_a8122z" filterUnits="objectBoundingBox" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="0.96" in="SourceAlpha" result="a8125z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="0.96" in="a8125z" result="a8126z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8127z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8127z" in2="a8126z" operator="in" result="a8123z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg667531508_6338_a8124z" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ width: "150%", height: "146.3%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" fill="white" style={{ width: "28.158px", height: "35.4368px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg667531508_6338_a8120z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg667531508_6338_a8122z)" mask="url(#svg667531508_6338_a8124z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg667531508_6338_a8122z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg667531508_6338_a8120z" clipPath="url(#svg667531508_6338_a8121z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg667531508_6338_a8120z" fill="rgb(255,255,255)" clipPath="url(#svg667531508_6338_a8121z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
          </g>
        </svg>
        <svg viewBox="0 0 12 12" id="svg12792945165" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 L 3.939 6.061 C 4.525 5.475 4.525 4.525 3.939 3.939 L 0 0" transform="translate(3.5 1) rotate(90 2.5 5)" fill="transparent" strokeWidth="2" stroke={"var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)) /* {\"name\":\"White 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 11, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 18.772 24.222" overflow="visible" id="svg1107069997_6338" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 6.406 21.562 C 5.182 20.697 4.223 19.305 3.534 17.381 L 1.425 11.446 C 1.354 11.258 1.319 11.069 1.319 10.881 C 1.318 10.658 1.407 10.443 1.567 10.288 C 1.728 10.132 1.944 10.049 2.168 10.057 C 2.559 10.057 2.854 10.292 3.051 10.763 L 4.628 14.367 C 4.738 14.642 4.874 14.83 5.035 14.932 C 5.199 15.035 5.389 15.088 5.582 15.084 C 5.797 15.09 6.003 15.002 6.148 14.844 C 6.3 14.675 6.38 14.453 6.371 14.226 L 6.371 2.25 C 6.371 1.96 6.455 1.726 6.624 1.549 C 6.798 1.37 7.04 1.274 7.289 1.285 C 7.535 1.272 7.774 1.369 7.942 1.549 C 8.104 1.726 8.184 1.96 8.184 2.25 L 8.184 10.752 C 8.181 10.922 8.247 11.087 8.367 11.209 C 8.486 11.331 8.65 11.4 8.82 11.4 C 8.994 11.404 9.161 11.337 9.283 11.215 C 9.406 11.092 9.473 10.925 9.468 10.752 L 9.468 7.666 C 9.719 7.549 9.978 7.489 10.246 7.489 C 10.559 7.489 10.809 7.59 10.993 7.79 C 11.178 7.99 11.269 8.264 11.269 8.609 L 11.269 11.2 C 11.26 11.381 11.332 11.558 11.464 11.683 C 11.587 11.797 11.749 11.86 11.918 11.858 C 12.082 11.859 12.24 11.796 12.359 11.683 C 12.491 11.558 12.563 11.381 12.554 11.2 L 12.554 8.962 C 12.804 8.853 13.06 8.797 13.318 8.797 C 13.649 8.797 13.903 8.893 14.085 9.085 C 14.265 9.277 14.355 9.551 14.355 9.904 L 14.355 11.658 C 14.347 11.836 14.418 12.009 14.55 12.129 C 14.673 12.244 14.835 12.307 15.003 12.305 C 15.167 12.305 15.326 12.242 15.445 12.129 C 15.576 12.008 15.647 11.836 15.64 11.658 L 15.64 10.246 C 16.219 10.246 16.666 10.513 16.976 11.046 C 17.286 11.581 17.441 12.341 17.441 13.331 L 17.441 15.461 C 17.441 17.056 17.166 18.401 16.616 19.501 C 16.067 20.601 15.287 21.434 14.278 22.003 C 13.271 22.572 12.083 22.856 10.717 22.856 C 9.068 22.856 7.631 22.425 6.406 21.562 Z M 14.897 23.21 C 16.113 22.534 17.064 21.556 17.747 20.272 C 18.43 18.989 18.772 17.435 18.772 15.615 L 18.772 13.153 C 18.772 11.804 18.479 10.756 17.894 10.009 C 17.309 9.264 16.481 8.887 15.415 8.88 C 15.29 8.455 15.06 8.119 14.726 7.873 C 14.392 7.625 13.982 7.502 13.496 7.502 C 13.15 7.502 12.797 7.565 12.437 7.691 C 12.295 7.235 12.047 6.876 11.694 6.613 C 11.34 6.349 10.913 6.218 10.411 6.218 C 10.119 6.218 9.821 6.262 9.515 6.348 L 9.515 2.332 C 9.515 1.618 9.304 1.051 8.885 0.63 C 8.465 0.21 7.933 0 7.289 0 C 6.637 0 6.1 0.21 5.677 0.63 C 5.252 1.051 5.04 1.618 5.04 2.332 L 5.04 12.46 C 5.04 12.529 5.009 12.564 4.946 12.564 C 4.899 12.564 4.863 12.537 4.84 12.483 L 3.911 10.186 C 3.713 9.724 3.455 9.375 3.133 9.144 C 2.811 8.913 2.45 8.797 2.049 8.797 C 1.525 8.788 1.016 8.968 0.613 9.303 C 0.204 9.641 0 10.115 0 10.728 C 0.011 11.117 0.078 11.501 0.2 11.87 L 2.308 17.816 C 3.055 19.936 4.131 21.534 5.541 22.61 C 6.95 23.684 8.659 24.222 10.67 24.222 C 12.271 24.222 13.68 23.885 14.897 23.21 Z" id="svg1107069997_6338_a8128z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1107069997_6338_a8130z" filterUnits="objectBoundingBox" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <motion.feOffset dx="0" dy="1.92" in="SourceAlpha" result="a8133z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} />
                  <feGaussianBlur stdDeviation="1.92" in="a8133z" result="a8134z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8135z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8135z" in2="a8134z" operator="in" result="a8131z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg1107069997_6338_a8132z" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ width: "185.9%", height: "182.4%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" fill="white" style={{ width: "34.8971px", height: "44.1809px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1107069997_6338_a8128z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg1107069997_6338_a8130z)" mask="url(#svg1107069997_6338_a8132z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1107069997_6338_a8130z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1107069997_6338_a8128z" clipPath="url(#svg1107069997_6338_a8129z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1107069997_6338_a8128z" fill="rgb(0,0,0)" clipPath="url(#svg1107069997_6338_a8129z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 10.689 22.864 C 12.054 22.864 13.242 22.58 14.249 22.011 C 15.259 21.441 16.039 20.609 16.587 19.509 C 17.137 18.409 17.412 17.063 17.412 15.469 L 17.412 13.339 C 17.412 12.348 17.257 11.588 16.947 11.054 C 16.638 10.52 16.191 10.253 15.611 10.253 L 15.611 11.666 C 15.619 11.844 15.547 12.016 15.416 12.137 C 15.297 12.25 15.139 12.313 14.975 12.312 C 14.807 12.315 14.644 12.252 14.522 12.137 C 14.39 12.016 14.319 11.844 14.327 11.666 L 14.327 9.911 C 14.327 9.559 14.236 9.285 14.057 9.093 C 13.875 8.9 13.62 8.805 13.29 8.805 C 13.032 8.805 12.776 8.86 12.526 8.97 L 12.526 11.207 C 12.534 11.389 12.463 11.565 12.331 11.69 C 12.212 11.803 12.053 11.866 11.889 11.866 C 11.721 11.868 11.559 11.805 11.436 11.69 C 11.303 11.566 11.232 11.389 11.241 11.207 L 11.241 8.616 C 11.241 8.271 11.149 7.998 10.965 7.798 C 10.78 7.597 10.531 7.497 10.217 7.497 C 9.95 7.497 9.691 7.556 9.44 7.674 L 9.44 10.759 C 9.444 10.932 9.377 11.1 9.255 11.222 C 9.132 11.345 8.965 11.412 8.792 11.407 C 8.621 11.407 8.458 11.338 8.338 11.216 C 8.219 11.095 8.153 10.93 8.155 10.759 L 8.155 2.258 C 8.155 1.967 8.075 1.734 7.914 1.557 C 7.746 1.377 7.507 1.28 7.261 1.292 C 7.012 1.282 6.77 1.378 6.596 1.557 C 6.427 1.734 6.343 1.967 6.343 2.258 L 6.343 14.233 C 6.351 14.461 6.271 14.682 6.12 14.852 C 5.975 15.01 5.768 15.097 5.554 15.092 C 5.361 15.096 5.17 15.043 5.007 14.94 C 4.845 14.838 4.71 14.649 4.6 14.374 L 3.022 10.771 C 2.826 10.3 2.53 10.065 2.139 10.065 C 1.916 10.056 1.699 10.139 1.539 10.295 C 1.379 10.451 1.289 10.665 1.291 10.888 C 1.291 11.077 1.326 11.265 1.397 11.454 L 3.505 17.389 C 4.195 19.312 5.154 20.704 6.378 21.569 C 7.603 22.433 9.04 22.864 10.689 22.864 Z" id="svg1107069997_6338_a8136z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1107069997_6338_a8138z" filterUnits="objectBoundingBox" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="0.96" in="SourceAlpha" result="a8141z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="0.96" in="a8141z" result="a8142z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8143z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8143z" in2="a8142z" operator="in" result="a8139z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg1107069997_6338_a8140z" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ width: "150%", height: "146.3%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" fill="white" style={{ width: "28.158px", height: "35.4368px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1107069997_6338_a8136z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg1107069997_6338_a8138z)" mask="url(#svg1107069997_6338_a8140z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1107069997_6338_a8138z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1107069997_6338_a8136z" clipPath="url(#svg1107069997_6338_a8137z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1107069997_6338_a8136z" fill="rgb(255,255,255)" clipPath="url(#svg1107069997_6338_a8137z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
          </g>
        </svg>
        <svg viewBox="0 0 12 12" id="svg12175040578" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.25 3.25 C 1.25 2.145 2.145 1.25 3.25 1.25 L 8.75 1.25 C 9.855 1.25 10.75 2.145 10.75 3.25 L 10.75 8.75 C 10.75 9.855 9.855 10.75 8.75 10.75 L 3.25 10.75 C 2.145 10.75 1.25 9.855 1.25 8.75 Z" fill="rgba(0, 153, 255, 0.2)" strokeWidth="1.5" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 1.5 6 L 10.5 6" fill="transparent" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
      </div>
      <div id="g_id_onload" data-login_uri="https://www.framer.com/api-proxy/auth-google-one-tap-callback" data-client_id="494526493439-djlkk2cal7r0lijnrd6en51c9vo4icgp.apps.googleusercontent.com" data-state_cookie_domain="framer.com" data-auto_prompt="false" data-prompt_parent_id="__framer-flap" data-cancel_on_tap_outside="false" data-use_fedcm_for_prompt="true" data-itp_support="true" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties} />
      <div style={{ position: "static", display: "contents", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <div style={{ width: "380px", height: "143px", padding: "20px", position: "fixed", top: "757px", right: "1060px", zIndex: "10", inset: "757px 1060px 0px 0px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px", left: "0px", bottom: "0px", boxSizing: "border-box", touchAction: "none", pointerEvents: "none" } as CSSProperties} data-cs-id="2498">
          <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", pointerEvents: "none", maxWidth: "unset" } as CSSProperties}>
            <div style={{ width: "340px", height: "103px", maxHeight: "calc(-40px + 100vh)", position: "relative", zIndex: "100", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", pointerEvents: "auto", opacity: "1", transform: "none", willChange: "transform" } as CSSProperties}>
              <div className="--framer-cookie-banner-container --framer-cookie-banner-type-simple" style={{ width: "100%", height: "103px", maxWidth: "340px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", overflow: "scroll", background: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} data-gtm-vis-recent-on-screen9263478_141="5363" data-gtm-vis-first-on-screen9263478_141="5363" data-gtm-vis-total-visible-time9263478_141="100" data-gtm-vis-has-fired9263478_141="1">
                <div style={{ width: "340px", height: "103px", padding: "20px", position: "static", display: "flex", flexDirection: "row", gap: "20px" } as CSSProperties}>
                  <p style={{ width: "242.039px", height: "63px", position: "static", display: "block", flexDirection: "row", alignItems: "center", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", lineHeight: "1.5em", letterSpacing: "-0.1px", color: "rgb(34, 34, 34)", margin: "0px", padding: "0px", fontFeatureSettings: "\"cv05\", \"cv11\"", fontStyle: "normal", fontWeight: "400", flex: "1 1 0%" } as CSSProperties}>
                    {content.paragraph1}{" "}
                    <span style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                      {content.text1_2}{" "}
                      <a target="_blank" style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(0, 153, 255)", textDecoration: "none" } as CSSProperties} data-external-route="1" href={content.link1}>
                        {content.linkText1}
                      </a>
                      {content.text2_2}
                    </span>
                  </p>
                  <div style={{ width: "37.9609px", height: "63px", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" } as CSSProperties}>
                    <input className="__framer-cookie-component-button" id="__framer-cookie-component-button-dismiss" type="button" tabIndex={0} value="Ok" style={{ width: "auto", height: "auto", padding: "10px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(222, 222, 222)", borderRadius: "10px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", fontWeight: "500", lineHeight: "1em", letterSpacing: "-0.3px", textAlign: "center", whiteSpace: "pre", overflow: "clip", appearance: "none", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", background: "rgb(222, 222, 222)", color: "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))", cursor: "pointer", fontFeatureSettings: "\"cv05\", \"cv11\"", fontStyle: "normal" } as CSSProperties} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image1.src} alt={content.image1.alt} />
      <iframe height="0" width="0" style={{ position: "static", display: "none", flexDirection: "row", border: "2px inset rgb(0, 0, 0)", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", visibility: "hidden" } as CSSProperties} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image2.src} alt={content.image2.alt} />
      <div id="__framer-flap-wrapper" style={{ width: "1440px", padding: "0px 20px", position: "fixed", top: "64px", bottom: "836px", zIndex: "99", inset: "64px 0px 836px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        {" "}
        <div id="__framer-flap-container" style={{ width: "1400px", maxWidth: "1400px", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" } as CSSProperties}>
          {" "}
          <div id="__framer-flap" style={{ position: "static", display: "block", flexDirection: "row", opacity: "0", transform: "matrix(1, 0, 0, 1, 8, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          {" "}
        </div>
        {" "}
      </div>
      <img id="podscribe-request" aria-hidden="true" style={{ position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties} src={content.image3.src} alt={content.image3.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image4.src} alt={content.image4.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image5.src} alt={content.image5.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image6.src} alt={content.image6.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image7.src} alt={content.image7.alt} />
    </>
  );
}
