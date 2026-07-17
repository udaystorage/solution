import { Home } from 'lucide-react';
import React from 'react'


export default function SingleCube({name, shadow , position, ztranslate, rotation, width = 100, height = 100, colour }) {
    const FACES = [
      { name: `${name}`, transform: `rotateY(0deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "1" },
      { name: "", transform: `rotateY(180deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "2" },
      { name: "", transform: `rotateY(90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "3" },
      { name: "", transform: `rotateY(-90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "4" },
      { name: "", transform: `rotateX(90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "5" },
      { name: "", transform: `rotateX(-90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "6" },
    ];
    return (
      <div
        className={`cube-stage ${position}`}
        style={{ perspective: "900px" }}
      >
        <div
          className={`relative w-[${width}px] h-[${height}px]`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {FACES.map((face) => (
            <div
              key={face.id}
              className={`absolute inset-0 flex items-center justify-center rounded-sm border border-white/20 ${face.from} shadow-[inset_0_0_40px_rgba(255,255,255,0.15)]`}
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: face.transform,
                backfaceVisibility: "hidden",
              }}
            >
              <span className="text-white/90 inset-shadow-gray-500  text-sm text-center tracking-[0.2em] font-bold ">
                
                <div className="w-full h-full flex items-center justify-center p-2">
                  {face.name}
                </div>
              </span>
            </div>
          ))}
        </div>
        <div
  className={`mx-auto rounded-full bg-black/50 blur-xl ${shadow}`}
  style={{
    width: "140px",
    height: "20px",
    marginBottom: "-20px",
    transform: `scaleX(${1 - Math.abs(rotation.x % 180) / 300})`,
  }}
/>
      </div>
  )
}
