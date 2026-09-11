// "use client"
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import SingleCube from "./SingleCube";

// export default function Cube() {
//   const [rotation, setRotation] = useState({ x: -25, y: -35 });

//   return (
// <div className="w-full h-full flex flex-col items-center justify-center bg-transparent rounded-2xl p-8 select-none overflow-hidden">

//   <SingleCube
//     floatDelay={1}
//     floatHeight="10"
//     floatDuration="3"
//     shadow=""
//     name="Stock Market Investor"
//     colour="bg-blue-500/50 blur-10"
//     position="
//       translate-y-20
//       md:translate-y-12
//       lg:translate-y-20
//     "
//     ztranslate={75}
//     rotation={rotation}
//     width={150}
//     height={150}
//   />

//   <SingleCube
//     floatDelay={0}
//     floatHeight="20"
//     floatDuration="2.5"
//     shadow=""
//     name="Forex Traders Data"
//     colour="bg-cyan-500/50 blur-10"
//     position="
//       -translate-x-20
//       sm:-translate-x-45
//       md:-translate-x-28 md:-translate-y-2
//       lg:-translate-x-45
//     "
//     ztranslate={50}
//     rotation={rotation}
//     width={100}
//     height={100}
//   />

//   <SingleCube
//     floatDelay={0.5}
//     floatHeight="20"
//     floatDuration="2.2"
//     shadow=""
//     name="Crypto Traders Data"
//     colour="bg-violet-500/50 blur-10"
//     position="
//       translate-x-20
//       -translate-y-20
//       sm:translate-x-40 sm:-translate-y-20
//       md:translate-x-24 md:-translate-y-14
//       lg:translate-x-40 lg:-translate-y-20
//     "
//     ztranslate={50}
//     rotation={rotation}
//     width={100}
//     height={100}
//   />

// </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import LensText from "../../ui/LensText";

const categories = ["FILTERED", "VERIFIED", "CUSTOM"];

const statuses = [
  "NEW INVESTORS",
  "CRYPTO TRADERS",
  "IPO INVESTORS",
  "HIGH VALUE INVESTORS",
];

const particles = [
  { left: "7%", top: "27%", delay: "0s" },
  { left: "15%", top: "67%", delay: "1.2s" },
  { left: "28%", top: "12%", delay: "2.4s" },
  { left: "77%", top: "10%", delay: "0.8s" },
  { left: "91%", top: "28%", delay: "2s" },
  { left: "94%", top: "70%", delay: "3.2s" },
  { left: "74%", top: "88%", delay: "1.6s" },
  { left: "20%", top: "88%", delay: "2.8s" },
];

export default function Cube() {
  const wrapperRef = useRef(null);
  const coreRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [activeSignal, setActiveSignal] = useState(false);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  /* -------------------------------------------------------
     ENTRANCE
  ------------------------------------------------------- */

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     CATEGORY
  ------------------------------------------------------- */

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setCategoryIndex((current) => {
        return (current + 1) % categories.length;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [visible]);

  /* -------------------------------------------------------
     VERIFICATION STATUS
  ------------------------------------------------------- */

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setStatusIndex((current) => {
        const next = (current + 1) % statuses.length;

        if (next === 2) {
          setActiveSignal(true);

          window.setTimeout(() => {
            setActiveSignal(false);
          }, 1000);
        }

        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [visible]);

  /* -------------------------------------------------------
     CURSOR TILT
  ------------------------------------------------------- */

  const handleMouseMove = (event) => {
    const element = coreRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const px = (event.clientX - rect.left) / rect.width;

    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - py) * 3,
      y: (px - 0.5) * 3,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-full w-full items-center justify-center overflow-visible"
    >
      {/* =====================================================
          AMBIENT FIELD
      ====================================================== */}

      <div
        className={`absolute left-1/2 top-1/2 h-112 w-md
        -translate-x-1/2 -translate-y-1/2 rounded-full
        transition-all duration-1600
        ${visible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.20) 0%, rgba(124,58,237,0.11) 32%, rgba(59,130,246,0.06) 52%, transparent 72%)",
          filter: "blur(28px)",
        }}
      />

      <div
        className={`absolute left-1/2 top-1/2 h-76 w-76
        -translate-x-1/2 -translate-y-1/2 rounded-full
        transition-all duration-1800
        ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12), transparent 68%)",
          filter: "blur(30px)",
        }}
      />

      {/* =====================================================
          AMBIENT PARTICLES
      ====================================================== */}

      {particles.map((particle, index) => (
        <span
          key={index}
          className={`data-core-particle absolute h-0.75 w-0.75
          rounded-full bg-cyan-400 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            transition: `opacity 700ms ease ${index * 80}ms`,
          }}
        />
      ))}

      {/* =====================================================
          CATEGORY LABEL
      ====================================================== */}

      <div
        className={`absolute left-1/2 top-[5%]
        -translate-x-1/2 transition-all duration-1000
        ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-linear-to-r from-transparent to-violet-500/40" />

          <div className="relative h-4 w-28 overflow-hidden text-center">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`absolute inset-0 text-[8px]
                font-semibold tracking-[0.32em]
                text-violet-600/70 transition-all duration-700
                ${
                  categoryIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <span className="h-px w-9 bg-linear-to-l from-transparent to-cyan-500/40" />
        </div>
      </div>

      {/* =====================================================
          MAIN OBJECT
      ====================================================== */}

      <div
        ref={coreRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative aspect-square w-[min(82vw,31rem)]
        transition-all duration-[1400ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-[0.88] opacity-0"
        } `}
        style={{
          transform: `
            perspective(1200px)
            rotateX(${tilt.x}deg)
            rotateY(${tilt.y}deg)
          `,
        }}
      >
        {/* =================================================
            LARGE SOFT SHADOW
        ================================================== */}

        <div
          className="absolute left-1/2 top-1/2
          h-[68%] w-[68%]
          -translate-x-1/2 -translate-y-1/2
          rounded-[3rem]"
          style={{
            background: "rgba(76,29,149,0.30)",
            filter: "blur(45px)",
          }}
        />

        {/* =================================================
            BACK DATA FRAME
        ================================================== */}

        <div
          className="absolute inset-[8%] rounded-[3rem]"
          style={{
            border: "1px solid rgba(124,58,237,0.18)",
            transform: "rotate(5deg)",
          }}
        />

        <div
          className="absolute inset-[11%] rounded-[3rem]"
          style={{
            border: "1px solid rgba(34,211,238,0.12)",
            transform: "rotate(-4deg)",
          }}
        />

        {/* =================================================
            DATA ORBIT PATH
        ================================================== */}

        <div className="data-core-orbit absolute inset-[12%] rounded-full">
          <span className="data-core-orbit-dot" />
        </div>

        {/* =================================================
            GLASS CORE
        ================================================== */}

        <div
          className="absolute left-1/2 top-1/2
  aspect-square w-[63%]
  -translate-x-1/2 -translate-y-1/2"
        >
          {/* ROTATING CARD BACKGROUND */}
          <div
            className={`data-core-glass data-core-card-rotate
    absolute inset-0
    overflow-hidden rounded-[3rem]
    ${activeSignal ? "data-core-glass-active" : ""}`}
          >
            {/* Glass reflection */}
            <div
              className="absolute left-[-25%] top-[-30%]
      h-[75%] w-[70%] rotate-[-35deg]
      rounded-full bg-white/10 blur-[22px]"
            />

            {/* Violet internal light */}
            <div
              className="absolute left-1/2 top-1/2
      h-[75%] w-[75%]
      -translate-x-1/2 -translate-y-1/2
      rounded-full bg-violet-500/40 blur-[42px]"
            />

            {/* Cyan internal light */}
            <div
              className="absolute right-[-20%] top-[20%]
      h-[55%] w-[35%]
      rounded-full bg-cyan-400/30 blur-[35px]"
            />

            {/* Inner border */}
            <div
              className="absolute inset-[3%]
      rounded-[2.7rem]
      border border-white/13"
            />

            {/* Scanning light */}
            {/* <div className="data-core-scan absolute left-0 top-0 h-px w-full" /> */}
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            {/* TOP STATUS */}

            <div className="mb-5 flex items-center gap-2">
              <span className="data-core-status-dot" />

              <span className="text-[9px] font-semibold tracking-[0.34em] text-cyan-200/75">
                WEBLEADS
              </span>

              <span className="data-core-status-dot violet" />
            </div>

            {/* PRICE */}

            <div className="relative select-none">
              <span
                aria-hidden="true"
                className="absolute inset-0
                bg-linear-to-r from-violet-300
                via-white to-cyan-300
                bg-clip-text text-transparent
                text-[clamp(5.5rem,10vw,8rem)]
                font-semibold leading-[0.8]
                tracking-[-0.1em]
                opacity-70 blur-[18px]"
              >
                ₹25
              </span>

              <span
                className="relative
                pr-1
                bg-linear-to-br from-white
                via-violet-100 to-cyan-200
                bg-clip-text text-transparent
                text-[clamp(5.5rem,10vw,8rem)]
                font-semibold leading-[0.8]
                tracking-[-0.1em]
                drop-shadow-[0_0_24px_rgba(139,92,246,0.45)]"
              >
                ₹25
              </span>
            </div>

            {/* LEAD LABEL */}

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-7 bg-violet-300/50" />

              <span className="text-[10px] font-semibold tracking-[0.30em] text-white/90">
                PER VERIFIED LEAD
              </span>

              <span className="h-px w-7 bg-cyan-300/50" />
            </div>

            {/* STATUS */}

            <div className="relative mt-7 h-5 w-48 overflow-hidden">
              {statuses.map((status, index) => (
                <div
                  key={status}
                  className={`absolute inset-0 flex items-center
                  justify-center gap-2 transition-all duration-700
                  ${
                    statusIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-[8px] text-cyan-200">
                    ✓
                  </span>

                  <span className="text-[8px] font-medium tracking-[0.22em] text-white/75">
                    {status}
                  </span>
                </div>
              ))}
            </div>

            {/* BOTTOM DETAIL */}

            <div className="mt-4 text-[7px] tracking-[0.18em] text-cyan-200">
              FRESH . ACTIVE . ACCURATE
            </div>
          </div>

          {/* =================================================
              SCANNING LIGHT
          ================================================== */}

          <div className="data-core-scan absolute left-0 top-0 h-px w-full" />
        </div>

        {/* =================================================
            LEFT DATA LABEL
        ================================================== */}

        <div
          className={`absolute left-[2%] top-[38%]
          transition-all duration-1000 delay-700
          ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
          }`}
        >
          <div className="data-core-line mb-2 w-10" />

          <p className="text-[7px] font-semibold tracking-[0.24em] text-violet-600/75">
            DATA
          </p>

          <p className="mt-1 text-[7px] tracking-[0.16em] text-slate-500">
            MATCHED
          </p>
        </div>

        {/* =================================================
            RIGHT DATA LABEL
        ================================================== */}

        <div
          className={`absolute right-[1%] top-[57%] text-right
          transition-all duration-1000 delay-900
          ${visible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
        >
          <div className="data-core-line mb-2 ml-auto w-10" />

          <p className="text-[8px] font-semibold tracking-[0.24em] text-cyan-600">
            VERIFIED
          </p>

          <p className="mt-1 text-[8px] tracking-[0.16em] text-slate-600">
            READY
          </p>
        </div>

        {/* =================================================
            CHECKPOINTS
        ================================================== */}

        <div className="data-core-check absolute right-[13%] top-[22%]">✓</div>

        <div className="data-core-check violet absolute bottom-[19%] left-[13%]">
          ✓
        </div>

        {/* =================================================
            DATA NODES
        ================================================== */}

        <span className="data-core-node absolute left-[18%] top-[29%]" />

        <span className="data-core-node cyan absolute bottom-[28%] right-[18%]" />
      </div>

      {/* =====================================================
          BOTTOM MESSAGE
      ====================================================== */}

      <div
        className={`absolute bottom-[3%] left-1/2
        -translate-x-1/2 whitespace-nowrap
        transition-all duration-1000 delay-[1100ms]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      >
        {/* <span
          className="
    relative inline-block
    text-slate-600
    drop-shadow-[0_0_6px_rgba(99,102,241,0.22)]
bg-[linear-gradient(110deg,#334155_0%,#334155_40%,#ffffff_50%,#6366f1_54%,#334155_64%,#334155_100%)]    bg-[length:250%_100%]
    bg-clip-text
    text-transparent
    animate-[shimmer_4s_ease-in-out_infinite]
  "
        >
          For advisory, brokerage, stock-market training courses & financial
          services
        </span> */}
        <LensText/>
      </div>
    </div>
  );
}
