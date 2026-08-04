"use client";

import React from "react";
import { useEffect, useState } from "react";
import useDatasetRotation from "./useDatasetRotation";

export default function SingleCube({
  name,
  colour,
  width = 120,
  height = 120,
  depth = 60,

  rotation = {
    x: -25,
    y: -35,
  },

  floatHeight = 18,
  floatDuration = 4,

  rockAmount = 5,
  rockDuration = 8,

  glow = true,
}) {
  const faces = [
    {
      id: 1,
      title: name,
      transform: `rotateY(0deg) translateZ(${depth}px)`,
    },
    {
      id: 2,
      title: "",
      transform: `rotateY(180deg) translateZ(${depth}px)`,
    },
    {
      id: 3,
      title: "",
      transform: `rotateY(90deg) translateZ(${depth}px)`,
    },
    {
      id: 4,
      title: "",
      transform: `rotateY(-90deg) translateZ(${depth}px)`,
    },
    {
      id: 5,
      title: "",
      transform: `rotateX(90deg) translateZ(${depth}px)`,
    },
    {
      id: 6,
      title: "",
      transform: `rotateX(-90deg) translateZ(${depth}px)`,
    },
  ];

  return (
    <>
      <style>{`

      .cube-root{

        --float-height:${floatHeight}px;
        --float-duration:${floatDuration}s;

        --rock-duration:${rockDuration}s;
        --rock-amount:${rockAmount}deg;

      }

      @keyframes cubeFloat{

        0%{

          transform:translateY(0px);

        }

        50%{

          transform:translateY(calc(var(--float-height) * -1));

        }

        100%{

          transform:translateY(0px);

        }

      }

      @keyframes cubeRock{

        0%{

          transform:
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg);

        }

        25%{

          transform:
          rotateX(calc(${rotation.x}deg + var(--rock-amount)))
          rotateY(calc(${rotation.y}deg - var(--rock-amount)));

        }

        50%{

          transform:
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg);

        }

        75%{

          transform:
          rotateX(calc(${rotation.x}deg - var(--rock-amount)))
          rotateY(calc(${rotation.y}deg + var(--rock-amount)));

        }

        100%{

          transform:
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg);

        }

      }

      @keyframes shadowPulse{

        0%{

          transform:scale(1);
          opacity:.35;

        }

        50%{

          transform:scale(.78);
          opacity:.18;

        }

        100%{

          transform:scale(1);
          opacity:.35;

        }

      }

      @keyframes glowPulse{

        0%{

          opacity:.25;

        }

        50%{

          opacity:.5;

        }

        100%{

          opacity:.25;

        }

      }

      .cube-float{

        animation:cubeFloat var(--float-duration)
        ease-in-out infinite;

      }

      .cube-body{

        animation:cubeRock var(--rock-duration)
        ease-in-out infinite;

      }

      .cube-shadow{

        animation:
        shadowPulse var(--float-duration)
        ease-in-out infinite;

      }

      .cube-glow{

        animation:
        glowPulse 6s ease-in-out infinite;

      }

      `}</style>

      <div
        className="cube-root flex flex-col items-center"
        style={{
          perspective: "1200px",
        }}
      >
        <div className="cube-float">

          <div className="relative">

            {glow && (
              <div
                className={`cube-glow absolute inset-0 blur-3xl rounded-full ${colour}`}
              />
            )}

            <div
              className="cube-body relative"
              style={{
                width,
                height,
                transformStyle: "preserve-3d",
              }}
            >
              {faces.map((face) => (
                <div
                  key={face.id}
                  className={`
                  absolute
                  inset-0

                  rounded-md

                  border
                  border-white/20

                  backdrop-blur-xl

                  ${colour}

                  shadow-[inset_0_0_40px_rgba(255,255,255,.15)]
                  `}
                  style={{
                    width,
                    height,
                    transform: face.transform,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-[1px] rounded-md border border-white/10" />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-md" />

                  <div className="flex h-full w-full items-center justify-center p-4">

                    <span className="text-white font-semibold tracking-[.25em] text-center leading-relaxed">

                      {face.title}

                    </span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
          cube-shadow
          mt-2
          h-5
          w-36
          rounded-full
          bg-black/40
          blur-xl
          "
        />
      </div>
    </>
  );
}