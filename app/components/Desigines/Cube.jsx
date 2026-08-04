"use client";

import React, { useState, useCallback } from "react";
import SingleCube from "./SingleCube";

export default function Cube() {
  const BASE_ROTATION = { x: -22, y: -32 };
  const [rotation, setRotation] = useState(BASE_ROTATION);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const offsetX = clientX / innerWidth - 0.5;
    const offsetY = clientY / innerHeight - 0.5;

    setRotation({
      x: BASE_ROTATION.x - offsetY * 10,
      y: BASE_ROTATION.y + offsetX * 14,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation(BASE_ROTATION);
  }, []);

  return (
    <div
      className="relative flex min-h-[420px] w-full items-center justify-center overflow-visible select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes groupFloat {
          0%,
          100%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-3px);
          }
        }

        .cube-group{
          animation:groupFloat 12s ease-in-out infinite;
        }

        .cube-responsive{
          transform:scale(.68);
        }

        @media(min-width:640px){
          .cube-responsive{
            transform:scale(.86);
          }
        }

        @media(min-width:1024px){
          .cube-responsive{
            transform:scale(1);
          }
        }
      `}</style>

      <div className="cube-group cube-responsive relative h-[340px] w-[420px]">

        {/* Main Cube */}

        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20">
          <SingleCube
            name="Stock Market Investor"
            colorTheme="blue"
            size={140}
            rotation={rotation}
            floatDuration={6}
            floatDelay={0}
            floatHeight={10}
          />
        </div>

        {/* Left Cube */}

        <div className="absolute left-[62px] top-[155px] z-10">
          <SingleCube
            name="Real Estate"
            colorTheme="cyan"
            size={118}
            rotation={rotation}
            floatDuration={6}
            floatDelay={0.8}
            floatHeight={10}
          />
        </div>

        {/* Right Cube */}

        <div className="absolute right-[62px] top-[145px] z-10">
          <SingleCube
            name="Student's Data"
            colorTheme="violet"
            size={118}
            rotation={rotation}
            floatDuration={6}
            floatDelay={1.6}
            floatHeight={10}
          />
        </div>

      </div>
    </div>
  );
} 