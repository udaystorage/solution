"use client"
import React, { useState, useRef, useCallback, useEffect } from "react";
import SingleCube from "./SingleCube";

export default function Cube() {
  const [rotation, setRotation] = useState({ x: -25, y: -35 });
  const [dragging, setDragging] = useState(false);
  const [autoSpin, setAutoSpin] = useState(true);

//   useEffect(() => {
//     if (!autoSpin) return;
//     let frame;
//     const tick = () => {
//       setRotation((r) => ({ x: r.x, y: r.y + 0.2 }));
//       frame = requestAnimationFrame(tick);
//     };
//     frame = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(frame);
//   }, [autoSpin]);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center bg-transparent rounded-2xl p-8 select-none overflow-hidden">

      <SingleCube shadow={"translate-y-30 translate-x-20"} name="Stalk Market Investor" colour="bg-blue-500/50 blur-10" position="-translate-y-30 -translate-x-5" ztranslate={75} rotation={rotation} width={150} height={150} />
      <SingleCube shadow={"translate-y-18 translate-x-12"} name="Real Estate" colour="bg-cyan-500/50 blur-10" position="-translate-x-50" ztranslate={50} rotation={rotation} width={100} height={100} />
      <SingleCube shadow={"translate-y-18 translate-x-12"} name="Studen's Data" colour="bg-violet-500/50 blur-10" position="translate-x-20 translate-y-5" ztranslate={50} rotation={rotation} width={100} height={100} />
   
    </div>
  );
}
