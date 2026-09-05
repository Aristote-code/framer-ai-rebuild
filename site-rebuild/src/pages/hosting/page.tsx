// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
//   1. "Desktop Nav" → src/sections/01-DesktopNav.tsx
//   2. "Hero" → src/sections/02-Hero.tsx
//   3. "Bento" → src/sections/03-Bento.tsx
//   4. "Companies" → src/sections/04-Companies.tsx
//   5. "Security" → src/sections/05-Security.tsx
//   6. "Bento" → src/sections/06-Bento_6.tsx
//   7. "Security" → src/sections/07-Security_7.tsx
//   8. "Related Features" → src/sections/08-RelatedFeatures.tsx
//   9. "FAQ" → src/sections/09-FAQ.tsx
//   10. "New Pivot" → src/sections/10-NewPivot.tsx
//   11. "Bottom" → src/sections/11-Bottom.tsx
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "./content/shell";
import { DesktopNav } from "./sections/01-DesktopNav";
import { Hero } from "./sections/02-Hero";
import { Bento } from "./sections/03-Bento";
import { Companies } from "./sections/04-Companies";
import { Security } from "./sections/05-Security";
import { Bento_6 } from "./sections/06-Bento_6";
import { Security_7 } from "./sections/07-Security_7";
import { RelatedFeatures } from "./sections/08-RelatedFeatures";
import { FAQ } from "./sections/09-FAQ";
import { NewPivot } from "./sections/10-NewPivot";
import { Bottom } from "./sections/11-Bottom";
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
      <div id="main" style={{ width: "1440px", height: "9917.23px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <style data-framer-html-style="">
          {content.text1}
        </style>
        <div className="framer-ykIBb framer-Grv0o framer-zprce9" data-layout-template="true" data-selection="true" style={{ width: "auto", height: "9917.23px", minHeight: "100vh", padding: "64px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "clip", "--1moyfq9": "64px 0px 0px 0px", "--1r5dcfs": "var(--overflow-clip-fallback, clip)", "--u410qi": "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" } as CSSProperties}>
          <div className="framer-1w39556-container" data-cs-id="3" style={{ width: "1440px", height: "64px", position: "fixed", bottom: "836px", zIndex: "10", inset: "0px 0px 836px", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="ssr-variant hidden-sv03hi" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <DesktopNav />
            </div>
          </div>
          <style data-framer-html-style="">
            {content.text2}
          </style>
          <div data-framer-root="" className="framer-w11fK framer-Grv0o framer-naRDe framer-QLujN framer-0k2u9 framer-Kwi81 framer-KItR8 framer-YCL6a framer-lRLSj framer-OM6Dg framer-4tto3b" style={{ height: "min-content", minHeight: "100vh", position: "relative", display: "contents", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", width: "auto" } as CSSProperties}>
            <Hero />
            <Bento />
            <Companies />
            <Security />
            <Bento_6 />
            <Security_7 />
            <RelatedFeatures />
            <FAQ />
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
        <svg viewBox="0 0 13.714 21.195" overflow="visible" id="svg-1390905761_370" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 0 0 L 13.714 0 L 13.714 7.065 L 6.857 7.065 Z M 0 7.065 L 6.857 7.065 L 13.714 14.13 L 0 14.13 Z M 0 14.13 L 6.857 14.13 L 6.857 21.195 Z" fill="var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12148588862" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 0.5 5.422 C 0.5 4.522 0.904 3.67 1.6 3.1 L 4.1 1.054 C 5.205 0.15 6.795 0.15 7.9 1.054 L 10.4 3.1 C 11.096 3.67 11.5 4.522 11.5 5.422 L 11.5 9 C 11.5 10.657 10.157 12 8.5 12 L 3.5 12 C 1.843 12 0.5 10.657 0.5 9 Z" id="a4892z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a4893z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a4892z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a4892z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} clipPath="url(#a4893z)" strokeWidth="3" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
          <path d="M 6 10.5 L 6 8" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12154967484" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 2.75 C 1.75 1.645 2.645 0.75 3.75 0.75 L 4.75 0.75 C 5.302 0.75 5.75 1.198 5.75 1.75 L 5.75 4.25 C 5.75 4.802 6.198 5.25 6.75 5.25 L 9.25 5.25 C 9.802 5.25 10.25 5.698 10.25 6.25 L 10.25 9.25 C 10.25 10.355 9.355 11.25 8.25 11.25 L 3.75 11.25 C 2.645 11.25 1.75 10.355 1.75 9.25 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 4.5 0.75 L 5.672 0.75 C 6.202 0.75 6.711 0.961 7.086 1.336 L 9.664 3.914 C 10.039 4.289 10.25 4.798 10.25 5.328 L 10.25 6.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 5 9" overflow="visible" id="svg-879261800_246" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 0 0 L 5 4.5 L 0 9" fill="transparent" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
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
        <svg display="block" id="4209924379" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 5 L 5.174 5 C 5.851 2.133 8.426 0 11.5 0 C 15.09 0 18 2.91 18 6.5 C 18 10.09 15.09 13 11.5 13 L 4 13 C 1.791 13 0 11.209 0 9 C 0 6.791 1.791 5 4 5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Pmy4ozTPP" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="587222984" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.501 0 C 13.196 0 17.001 3.806 17.001 8.501 C 17.001 13.196 13.195 17.001 8.5 17.001 C 3.805 17.001 0 13.195 0 8.5 C 0 3.805 3.806 0 8.501 0 Z M 2.001 8.5 C 2.001 11.215 3.689 13.645 6.233 14.593 C 5.479 13.126 5.001 10.941 5.001 8.5 C 5.001 6.059 5.479 3.874 6.233 2.407 C 3.689 3.355 2.001 5.785 2.001 8.5 Z M 15.001 8.5 C 15.001 5.785 13.313 3.355 10.769 2.407 C 11.523 3.874 12.001 6.059 12.001 8.5 C 12.001 10.941 11.523 13.126 10.769 14.593 C 13.313 13.645 15.001 11.215 15.001 8.5 Z M 6.501 8.5 C 6.501 12.09 7.396 15 8.501 15 C 9.606 15 10.501 12.09 10.501 8.5 C 10.501 4.91 9.606 2 8.501 2 C 7.396 2 6.501 4.91 6.501 8.5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="i4i8H9Zao" transform="translate(1.5 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 0 C 4.277 0.987 8.723 0.987 13 0 L 13 0" fill="transparent" id="lTo6Obt5s" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 9.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="bNnSt6Y2K" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3578254236" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0 C 10.866 0 14 1.791 14 4 L 14 12 C 14 14.209 10.866 16 7 16 C 3.134 16 0 14.209 0 12 L 0 4 C 0 1.791 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="aaLS5enQH" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <g fill="transparent" id="fdGgwC0DY" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 16 0 L 16 4 C 16 6.761 12.418 9 8 9 C 3.582 9 0 6.761 0 4 L 0 0 L 2 0 L 2 4 C 2 5.657 4.686 7 8 7 C 11.314 7 14 5.657 14 4 L 14 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="PZu71jGFm" transform="translate(0 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 16 0 L 16 4 C 16 6.761 12.418 9 8 9 C 3.582 9 0 6.761 0 4 L 0 0 L 2 0 L 2 4 C 2 5.657 4.686 7 8 7 C 11.314 7 14 5.657 14 4 L 14 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="oUitYhQFY" transform="translate(0 4)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 4)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 7 0 C 10.866 0 14 1.791 14 4 C 14 6.209 10.866 8 7 8 C 3.134 8 0 6.209 0 4 C 0 1.791 3.134 0 7 0 Z" fill="transparent" id="cPFaCmSEu" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="4244590461" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="rLfoQv4gJ" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="dhAsv5RsU" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 4 L 0 0" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="SIikNdKmu" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 L 7 4 C 7 5.657 5.657 7 4 7 L 0 7" fill="transparent" id="BVg_02OFJ" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(8 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 8, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="dvbJftmFL" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(12 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1825208344" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="DUPc5oIsM" transform="translate(3 3) rotate(-90 7 6.979)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 3.021, 16.979)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="Fb3UNma2k" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="xsId7KutQ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="974992432" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.25 C 0 1.455 1.455 0 3.25 0 L 10.75 0 C 12.545 0 14 1.455 14 3.25 L 14 5.86 C 14 10.192 11.419 14.106 7.437 15.813 L 7.394 15.831 C 7.142 15.939 6.858 15.939 6.606 15.831 L 6.563 15.813 C 2.581 14.106 0 10.192 0 5.86 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AhUB4ivr4" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="3510397326" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="SxRbvPjEk" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 2.5 L 1.793 0.707 C 2.183 0.317 2.817 0.317 3.207 0.707 L 5 2.5" fill="transparent" id="YSKKO_cbA" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5.75 7.25) rotate(450 2.5 1.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 9.5, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3983927620" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 7 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TJgu9bozd" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 5 L 8 4 C 8 1.791 6.209 0 4 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 5" fill="transparent" id="WUdG9cSLB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1642661144" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.316 0.282 C 7.371 0.198 7.5 0.237 7.5 0.336 L 7.5 6.5 L 14.077 6.5 C 14.474 6.5 14.713 6.941 14.496 7.273 L 7.684 17.718 C 7.629 17.802 7.5 17.763 7.5 17.664 L 7.5 11.5 L 0.923 11.5 C 0.526 11.5 0.287 11.059 0.504 10.727 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="JLnAV7wPe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3112628790" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nlSrohSU_" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="KsCrzTmH6" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1gctVLSo" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(-1.5 -1.5) rotate(-45 9 9.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, -5.4047, 7.57322)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="919011021" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.393 1.496 C 7.453 0.653 8.155 0 9 0 L 9 0 C 9.845 0 10.547 0.653 10.607 1.496 L 10.615 1.615 C 10.836 4.706 13.294 7.164 16.385 7.385 L 16.504 7.393 C 17.347 7.453 18 8.155 18 9 L 18 9 C 18 9.845 17.347 10.547 16.504 10.607 L 16.385 10.615 C 13.294 10.836 10.836 13.294 10.615 16.385 L 10.607 16.504 C 10.547 17.347 9.845 18 9 18 L 9 18 C 8.155 18 7.453 17.347 7.393 16.504 L 7.385 16.385 C 7.164 13.294 4.706 10.836 1.615 10.615 L 1.496 10.607 C 0.653 10.547 0 9.845 0 9 L 0 9 C 0 8.155 0.653 7.453 1.496 7.393 L 1.615 7.385 C 4.706 7.164 7.164 4.706 7.385 1.615 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Yx3KDFIth" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2225151273" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 5.39 0.306 C 6.032 0.042 6.732 -0.054 7.421 0.029 C 8.31 0.131 9.102 0.509 9.797 1.162 C 9.806 1.171 9.819 1.177 9.83 1.181 C 9.843 1.184 9.856 1.184 9.868 1.181 C 10.772 0.947 11.729 1.034 12.576 1.425 L 12.618 1.445 L 12.721 1.495 C 13.608 1.945 14.299 2.703 14.666 3.628 C 14.851 4.081 14.944 4.553 14.946 5.046 C 14.959 5.412 14.919 5.778 14.827 6.133 C 14.817 6.169 14.827 6.208 14.853 6.235 C 15.381 6.774 15.731 7.417 15.905 8.164 C 16.162 9.43 15.899 10.573 15.116 11.589 L 14.995 11.737 C 14.477 12.33 13.797 12.759 13.039 12.971 C 13.006 12.98 12.979 13.006 12.967 13.038 C 12.797 13.528 12.627 13.948 12.309 14.366 C 11.509 15.421 10.334 16.007 9.011 16 C 7.955 15.995 7.02 15.609 6.204 14.843 C 6.179 14.819 6.144 14.811 6.111 14.821 C 5.766 14.932 5.418 14.948 5.041 14.944 C 4.44 14.939 3.849 14.797 3.312 14.53 C 2.749 14.251 2.259 13.845 1.881 13.343 C 1.746 13.164 1.611 12.995 1.513 12.795 C 1.378 12.52 1.268 12.234 1.184 11.94 C 1.006 11.272 1.002 10.569 1.171 9.898 C 1.177 9.882 1.179 9.865 1.177 9.848 C 1.174 9.832 1.165 9.817 1.153 9.805 C 0.742 9.39 0.428 8.889 0.234 8.338 C 0.104 7.999 0.029 7.641 0.011 7.278 C -0.022 6.801 0.02 6.321 0.136 5.856 C 0.435 4.868 1.009 4.092 1.854 3.529 C 2.043 3.404 2.221 3.306 2.388 3.236 C 2.576 3.158 2.768 3.091 2.963 3.034 C 2.99 3.025 3.012 3.003 3.02 2.975 C 3.166 2.452 3.417 1.963 3.757 1.54 C 4.186 0.995 4.749 0.57 5.39 0.306 Z M 4.444 5.778 L 5.778 8 L 4.444 10.222 M 8.889 10.222 L 11.556 10.222" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="CfFbo5RBd" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="3899503700" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1xT_zB1_" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.086 L 2.793 0.293 C 3.183 -0.098 3.817 -0.098 4.207 0.293 L 7 3.086 M 3.5 1.086 L 3.5 7.086" fill="transparent" id="y6myV9DAS" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 6.414)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 6.414)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg id="1184508750" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" id="yWvBZM3cg" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6.812 6.83 C 5.25 8.391 2.718 8.39 1.157 6.828 C -0.405 5.266 -0.405 2.734 1.157 1.172 C 2.718 -0.39 5.25 -0.391 6.812 1.17" fill="transparent" id="hGfwFfnW8" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.018 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 8.018, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
      </div>
      <div id="g_id_onload" data-login_uri="https://www.framer.com/api-proxy/auth-google-one-tap-callback" data-client_id="494526493439-djlkk2cal7r0lijnrd6en51c9vo4icgp.apps.googleusercontent.com" data-state_cookie_domain="framer.com" data-auto_prompt="false" data-prompt_parent_id="__framer-flap" data-cancel_on_tap_outside="false" data-use_fedcm_for_prompt="true" data-itp_support="true" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties} />
      <div style={{ position: "static", display: "contents", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <div style={{ width: "380px", height: "143px", padding: "20px", position: "fixed", top: "757px", right: "1060px", zIndex: "10", inset: "757px 1060px 0px 0px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px", left: "0px", bottom: "0px", boxSizing: "border-box", touchAction: "none", pointerEvents: "none" } as CSSProperties} data-cs-id="1899">
          <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", pointerEvents: "none", maxWidth: "unset" } as CSSProperties}>
            <motion.div style={{ width: "340px", height: "103px", maxHeight: "calc(-40px + 100vh)", position: "relative", zIndex: "100", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", pointerEvents: "auto", opacity: "1", transform: "none", willChange: "transform" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div className="--framer-cookie-banner-container --framer-cookie-banner-type-simple" style={{ width: "100%", height: "103px", maxWidth: "340px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", overflow: "scroll", background: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} data-gtm-vis-recent-on-screen9263478_141="2660" data-gtm-vis-first-on-screen9263478_141="2660" data-gtm-vis-total-visible-time9263478_141="100" data-gtm-vis-has-fired9263478_141="1">
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
            </motion.div>
          </div>
        </div>
      </div>
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image1.src} alt={content.image1.alt} />
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
      <iframe height="0" width="0" style={{ position: "static", display: "none", flexDirection: "row", border: "2px inset rgb(0, 0, 0)", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", visibility: "hidden" } as CSSProperties} />
      <img id="podscribe-request" aria-hidden="true" style={{ position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties} src={content.image3.src} alt={content.image3.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image4.src} alt={content.image4.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image5.src} alt={content.image5.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image6.src} alt={content.image6.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image7.src} alt={content.image7.alt} />
    </>
  );
}
