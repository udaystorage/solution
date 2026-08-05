"use client"
import React, { useState, useRef, useCallback, useEffect } from "react";
import SingleCube from "./SingleCube";

export default function Cube() {
  const [rotation, setRotation] = useState({ x: -25, y: -35 });


  return (
<div className="w-full h-full flex flex-col items-center justify-center bg-transparent rounded-2xl p-8 select-none overflow-hidden">

  <SingleCube
    floatDelay={1}
    floatHeight="10"
    floatDuration="3"
    shadow=""
    name="Stock Market Investor"
    colour="bg-blue-500/50 blur-10"
    position="
      translate-y-20
      md:translate-y-12
      lg:translate-y-20
    "
    ztranslate={75}
    rotation={rotation}
    width={150}
    height={150}
  />

  <SingleCube
    floatDelay={0}
    floatHeight="20"
    floatDuration="2.5"
    shadow=""
    name="Real Estate"
    colour="bg-cyan-500/50 blur-10"
    position="
      -translate-x-20
      sm:-translate-x-45
      md:-translate-x-28 md:-translate-y-2
      lg:-translate-x-45
    "
    ztranslate={50}
    rotation={rotation}
    width={100}
    height={100}
  />

  <SingleCube
    floatDelay={0.5}
    floatHeight="20"
    floatDuration="2.2"
    shadow=""
    name="Student's Data"
    colour="bg-violet-500/50 blur-10"
    position="
      translate-x-20
      -translate-y-20
      sm:translate-x-40 sm:-translate-y-20
      md:translate-x-24 md:-translate-y-14
      lg:translate-x-40 lg:-translate-y-20
    "
    ztranslate={50}
    rotation={rotation}
    width={100}
    height={100}
  />

</div>
  );
}