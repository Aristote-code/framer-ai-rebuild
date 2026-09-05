// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
//   1. "Desktop Nav" → src/sections/01-DesktopNav.tsx
//   2. "Body" → src/sections/02-Body.tsx
//   3. "Default" → src/sections/03-Default.tsx
//   4. "Desktop" → src/sections/04-Desktop.tsx
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "./content/shell";
import { DesktopNav } from "./sections/01-DesktopNav";
import { Body } from "./sections/02-Body";
import { Default } from "./sections/03-Default";
import { Desktop } from "./sections/04-Desktop";
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
      <div id="main" style={{ width: "1440px", height: "4686.32px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <style data-framer-html-style="">
          {content.text1}
        </style>
        <div className="framer-oNqtL framer-hs2j7u" data-layout-template="true" data-selection="true" style={{ width: "auto", height: "4686.32px", minHeight: "100vh", padding: "64px 0px 711px 160px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "clip", "--1r5dcfs": "var(--overflow-clip-fallback, clip)" } as CSSProperties}>
          <div className="framer-173ub25-container" style={{ width: "1440px", height: "64px", position: "fixed", bottom: "836px", zIndex: "9", inset: "0px 0px 836px", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="ssr-variant hidden-1xa5qd5" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <DesktopNav />
            </div>
          </div>
          <style data-framer-html-style="">
            {content.text2}
          </style>
          <div data-framer-root="" className="framer-wNreY framer-Grv0o framer-iDiLn framer-0k2u9 framer-Kwi81 framer-QLujN framer-1sz0wx" style={{ height: "min-content", minHeight: "100vh", position: "relative", display: "contents", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", width: "auto" } as CSSProperties}>
            <Body />
          </div>
          <div id="overlay" style={{ position: "static", display: "block", flexDirection: "row" } as CSSProperties} />
          <div className="framer-14fxkek" style={{ position: "relative", display: "block", flexDirection: "row" } as CSSProperties} />
          <motion.div className="framer-65ox2l" data-framer-layout-hint-center-x="true" style={{ width: "1240px", height: "343.203px", maxWidth: "1240px", padding: "30px 20px 0px", position: "fixed", top: "64px", right: "-520px", bottom: "492.797px", left: "720px", zIndex: "1", inset: "64px -520px 492.797px 720px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start", gap: "10px", transform: "translateX(-50%)", transformOrigin: "620px 171.602px" } as CSSProperties} initial={{ x: "-50%" }} whileInView={{ x: "-50%" }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="ssr-variant hidden-1xa5qd5 hidden-1rtcwa5" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <div className="framer-6qe9tf-container" style={{ width: "180px", height: "313.203px", position: "sticky", top: "94px", zIndex: "9", inset: "94px auto auto", display: "block", flexDirection: "row" } as CSSProperties}>
                <Default />
              </div>
            </div>
          </motion.div>
          <div className="ssr-variant hidden-1xa5qd5" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
            <div className="framer-b9c02u-container" data-framer-layout-hint-center-x="true" style={{ width: "1200px", height: "728px", maxWidth: "1200px", position: "absolute", top: "3958.32px", right: "-480px", left: "720px", zIndex: "3", inset: "3958.32px -480px 0px 720px", display: "block", flexDirection: "row", transform: "matrix(1, 0, 0, 1, -600, 0)", transformOrigin: "600px 364px" } as CSSProperties}>
              <div className="ssr-variant hidden-1rtcwa5" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
                <Desktop />
              </div>
            </div>
          </div>
        </div>
        <div id="template-overlay" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row" } as CSSProperties} />
      </div>
      <div id="svg-templates" style={{ position: "absolute", top: "900px", right: "1440px", zIndex: "0", inset: "900px 1440px 0px 0px", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", contain: "strict" } as CSSProperties} aria-hidden="true">
        {" "}
        <svg display="block" id="367334708" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7 L 6.293 0.707 C 6.683 0.317 7.317 0.317 7.707 0.707 L 14 7" fill="transparent" id="aD_3Sblea" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6.5) rotate(540 7 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 17, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3797874707" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z M 13 13 L 16 16" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Uo84kFvT9" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="4290634540" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="MjRrmzIjk" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="Gn3kAthqr" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="jZTFs0P0O" transform="translate(1 18)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 18)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 14.172 C 6 14.702 5.789 15.211 5.414 15.586 L 3.707 17.293 C 3.317 17.683 2.683 17.683 2.293 17.293 L 0.586 15.586 C 0.211 15.211 0 14.702 0 14.172 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="kImnoC2SX" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5.5 -0.5) rotate(45 3 9)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, 0.707107, -0.707107, 0.707107, 12.7426, 0.0147186)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
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
        <svg display="block" id="587222984" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.501 0 C 13.196 0 17.001 3.806 17.001 8.501 C 17.001 13.196 13.195 17.001 8.5 17.001 C 3.805 17.001 0 13.195 0 8.5 C 0 3.805 3.806 0 8.501 0 Z M 2.001 8.5 C 2.001 11.215 3.689 13.645 6.233 14.593 C 5.479 13.126 5.001 10.941 5.001 8.5 C 5.001 6.059 5.479 3.874 6.233 2.407 C 3.689 3.355 2.001 5.785 2.001 8.5 Z M 15.001 8.5 C 15.001 5.785 13.313 3.355 10.769 2.407 C 11.523 3.874 12.001 6.059 12.001 8.5 C 12.001 10.941 11.523 13.126 10.769 14.593 C 13.313 13.645 15.001 11.215 15.001 8.5 Z M 6.501 8.5 C 6.501 12.09 7.396 15 8.501 15 C 9.606 15 10.501 12.09 10.501 8.5 C 10.501 4.91 9.606 2 8.501 2 C 7.396 2 6.501 4.91 6.501 8.5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="i4i8H9Zao" transform="translate(1.5 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 0 C 4.277 0.987 8.723 0.987 13 0 L 13 0" fill="transparent" id="lTo6Obt5s" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 9.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="bNnSt6Y2K" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3093666766" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1 0 L 11 0 C 11.552 0 12 0.448 12 1 L 12 11 M 11 1 L 0 12" fill="transparent" id="eO4UoQGwI" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 4)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4, 4)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="1142937281" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7.952 C 0 6.9 0.483 5.906 1.31 5.256 L 6.588 1.11 C 7.417 0.458 8.583 0.458 9.412 1.11 L 14.69 5.256 C 15.517 5.906 16 6.9 16 7.952 L 16 13.143 C 16 15.036 14.465 16.571 12.571 16.571 L 3.429 16.571 C 1.535 16.571 0 15.036 0 13.143 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="G9b2Z7Cdx" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 1.46)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 1.46)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 1 0 C 1.552 0 2 0.448 2 1 L 2 7 C 2 7.552 1.552 8 1 8 L 1 8 C 0.448 8 0 7.552 0 7 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="PfMaDa8BH" transform="translate(9 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3725031690" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.696 0.344 C 7.035 0.133 7.465 0.133 7.804 0.344 L 14.004 4.192 C 14.312 4.384 14.5 4.721 14.5 5.084 L 14.5 11.909 C 14.5 12.276 14.308 12.616 13.995 12.807 L 7.795 16.569 C 7.46 16.773 7.04 16.773 6.705 16.569 L 0.505 12.807 C 0.192 12.616 0 12.276 0 11.909 L 0 5.084 C 0 4.721 0.188 4.384 0.496 4.192 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="odIny5xAj" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.75 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.75, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 7 4 L 13.5 0" fill="transparent" id="UTPwZytmj" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 7.5" fill="transparent" id="ADRuiX0GT" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="102597446" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.726 1.636 C 1.526 0.916 0 1.78 0 3.179 L 0 14.821 C 0 16.22 1.526 17.084 2.726 16.364 L 12.428 10.543 C 13.593 9.844 13.593 8.156 12.428 7.457 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="jwhVgqsrf" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1635548955" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AdeKayc7d" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 10 3.5 L 10 3 C 10 1.343 8.657 0 7 0 L 3 0 C 1.343 0 0 1.343 0 3 L 0 7" fill="transparent" id="Ax6FRJvk6" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3821279934" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="OIB3s6ONK" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 2.5 L 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5" fill="transparent" id="Xdzaa0evS" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(7.5 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 7.5, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 1 0 C 1.552 0 2 0.448 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="jqXpAQdSx" transform="translate(9 13)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 13)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3500918179" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="RxA5u2sRg" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
      </div>
      <div id="g_id_onload" data-login_uri="https://www.framer.com/api-proxy/auth-google-one-tap-callback" data-client_id="494526493439-djlkk2cal7r0lijnrd6en51c9vo4icgp.apps.googleusercontent.com" data-state_cookie_domain="framer.com" data-auto_prompt="false" data-prompt_parent_id="__framer-flap" data-cancel_on_tap_outside="false" data-use_fedcm_for_prompt="true" data-itp_support="true" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties} />
      <div style={{ position: "static", display: "contents", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <div style={{ width: "380px", height: "143px", padding: "20px", position: "fixed", top: "757px", right: "1060px", zIndex: "10", inset: "757px 1060px 0px 0px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px", left: "0px", bottom: "0px", boxSizing: "border-box", touchAction: "none", pointerEvents: "none" } as CSSProperties}>
          <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", pointerEvents: "none", maxWidth: "unset" } as CSSProperties}>
            <div style={{ width: "340px", height: "103px", maxHeight: "calc(-40px + 100vh)", position: "relative", zIndex: "100", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", pointerEvents: "auto", opacity: "1", transform: "none", willChange: "transform" } as CSSProperties}>
              <div className="--framer-cookie-banner-container --framer-cookie-banner-type-simple" style={{ width: "100%", height: "103px", maxWidth: "340px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", overflow: "scroll", background: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} data-gtm-vis-recent-on-screen9263478_141="6160" data-gtm-vis-first-on-screen9263478_141="6160" data-gtm-vis-total-visible-time9263478_141="100" data-gtm-vis-has-fired9263478_141="1">
                <div style={{ width: "340px", height: "103px", padding: "20px", position: "static", display: "flex", flexDirection: "row", gap: "20px" } as CSSProperties}>
                  <motion.p style={{ width: "242.039px", height: "63px", position: "static", display: "block", flexDirection: "row", alignItems: "center", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", lineHeight: "1.5em", letterSpacing: "-0.1px", color: "rgb(34, 34, 34)", margin: "0px", padding: "0px", fontFeatureSettings: "\"cv05\", \"cv11\"", fontStyle: "normal", fontWeight: "400", flex: "1 1 0%" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    {content.paragraph1}{" "}
                    <span style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                      {content.text1_2}{" "}
                      <a target="_blank" style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(0, 153, 255)", textDecoration: "none" } as CSSProperties} data-external-route="1" href={content.link1}>
                        {content.linkText1}
                      </a>
                      {content.text2_2}
                    </span>
                  </motion.p>
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
