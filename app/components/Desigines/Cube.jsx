"use client";
import React, { useState, useCallback } from "react";
import SingleCube from "./SingleCube";

export default function Cube() {
  const BASE_ROTATION = { x: -22, y: -32 };
  const [rotation, setRotation] = useState(BASE_ROTATION);

  // Smooth mouse move interaction
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate normalized offset (-0.5 to 0.5)
    const offsetX = (clientX / innerWidth) - 0.5;
    const offsetY = (clientY / innerHeight) - 0.5;

    // Subtle tilt response
    setRotation({
      x: BASE_ROTATION.x - offsetY * 15,
      y: BASE_ROTATION.y + offsetX * 20,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation(BASE_ROTATION);
  }, []);

  return (
    <div 
      className="w-full h-full min-h-[420px] flex items-center justify-center bg-transparent select-none overflow-visible relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Global CSS keyframes for floating animation */}
      <style>{`
        @keyframes cube-hover-float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(calc(-1 * var(--float-h, 18px))); }
        }
        @keyframes cube-hover-shadow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%      { transform: scale(0.65); opacity: 0.2; }
        }
        .cube-float-wrap {
          animation: cube-hover-float var(--float-dur, 3.2s) ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }
        .cube-shadow-anim {
          animation: cube-hover-shadow var(--float-dur, 3.2s) ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }
        .cube-responsive-scale {
          transform: scale(0.65);
        }
        @media (min-width: 640px) {
          .cube-responsive-scale { transform: scale(0.85); }
        }
        @media (min-width: 1024px) {
          .cube-responsive-scale { transform: scale(1); }
        }
      `}</style>

      {/* Main Container Layout */}
      <div className="relative flex items-center justify-center w-full max-w-2xl h-full">
        {/* Central / Main Block */}
        <SingleCube
          name="Stock Market Investor"
          colorTheme="blue"
          size={140}
          rotation={rotation}
          floatDuration={3.6}
          floatDelay={0}
          floatHeight={20}
          position="z-20 relative"
        />

        {/* Left Block */}
        <SingleCube
          name="Real Estate"
          colorTheme="cyan"
          size={100}
          rotation={rotation}
          floatDuration={3.0}
          floatDelay={0.6}
          floatHeight={14}
          position="z-10 absolute -translate-x-32 sm:-translate-x-44 translate-y-6"
        />

        {/* Right Block */}
        <SingleCube
          name="Student's Data"
          colorTheme="violet"
          size={100}
          rotation={rotation}
          floatDuration={3.2}
          floatDelay={1.2}
          floatHeight={16}
          position="z-10 absolute translate-x-32 sm:translate-x-44 -translate-y-6"
        />
      </div>
    </div>
  );
}