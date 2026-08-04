import React from 'react';

export default function SingleCube({
  name,
  position = "",
  size = 120, // default cubic dimension in px
  colorTheme = "blue", // "blue" | "cyan" | "violet"
  rotation = { x: -25, y: -35 },
  floatDuration = 3.2,
  floatDelay = 0,
  floatHeight = 16,
}) {
  const halfSize = size / 2;

  // Theme configuration for DaaS glow aesthetics
  const themes = {
    blue: {
      front: "bg-gradient-to-tr from-blue-600/70 via-blue-500/50 to-indigo-400/60 border-blue-300/40 shadow-[inset_0_0_25px_rgba(59,130,246,0.3)]",
      top: "bg-gradient-to-tr from-blue-400/80 to-indigo-300/70 border-white/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]",
      right: "bg-gradient-to-tr from-blue-800/80 to-indigo-900/70 border-blue-500/30 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]",
      glow: "bg-blue-500/30",
    },
    cyan: {
      front: "bg-gradient-to-tr from-cyan-600/70 via-teal-500/50 to-cyan-400/60 border-cyan-300/40 shadow-[inset_0_0_25px_rgba(6,182,212,0.3)]",
      top: "bg-gradient-to-tr from-cyan-300/80 to-teal-200/70 border-white/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]",
      right: "bg-gradient-to-tr from-cyan-900/80 to-teal-950/70 border-cyan-500/30 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]",
      glow: "bg-cyan-400/30",
    },
    violet: {
      front: "bg-gradient-to-tr from-violet-600/70 via-purple-500/50 to-fuchsia-400/60 border-violet-300/40 shadow-[inset_0_0_25px_rgba(139,92,246,0.3)]",
      top: "bg-gradient-to-tr from-violet-300/80 to-fuchsia-200/70 border-white/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]",
      right: "bg-gradient-to-tr from-violet-900/80 to-purple-950/70 border-violet-500/30 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]",
      glow: "bg-violet-500/30",
    },
  };

  const currentTheme = themes[colorTheme] || themes.blue;

  // Face definition with volumetric shading
  const FACES = [
    { id: "front", transform: `rotateY(0deg) translateZ(${halfSize}px)`, style: currentTheme.front, showName: true },
    { id: "back", transform: `rotateY(180deg) translateZ(${halfSize}px)`, style: currentTheme.right, showName: false },
    { id: "right", transform: `rotateY(90deg) translateZ(${halfSize}px)`, style: currentTheme.right, showName: false },
    { id: "left", transform: `rotateY(-90deg) translateZ(${halfSize}px)`, style: currentTheme.front, showName: false },
    { id: "top", transform: `rotateX(90deg) translateZ(${halfSize}px)`, style: currentTheme.top, showName: false },
    { id: "bottom", transform: `rotateX(-90deg) translateZ(${halfSize}px)`, style: currentTheme.right, showName: false },
  ];

  return (
    <div className={`cube-stage flex justify-center items-center ${position}`} style={{ perspective: "1000px" }}>
      <div className="cube-responsive-scale flex flex-col items-center" style={{ transformOrigin: "center center" }}>
        
        {/* Floating Wrapper */}
        <div
          className="cube-float-wrap relative"
          style={{
            "--float-dur": `${floatDuration}s`,
            "--float-delay": `${floatDelay}s`,
            "--float-h": `${floatHeight}px`,
          }}
        >
          {/* Ambient Glow behind Cube */}
          <div className={`absolute -inset-4 rounded-full blur-2xl opacity-60 pointer-events-none ${currentTheme.glow}`} />

          {/* 3D Cube Container */}
          <div
            className="relative transition-transform duration-100 ease-out"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {FACES.map((face) => (
              <div
                key={face.id}
                className={`absolute inset-0 flex items-center justify-center rounded-lg border backdrop-blur-md transition-all duration-300 ${face.style}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: face.transform,
                  backfaceVisibility: "hidden",
                }}
              >
                {face.showName && name && (
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wider text-center p-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Shadow */}
        <div
          className="mx-auto rounded-full bg-black/60 blur-xl cube-shadow-anim mt-6 pointer-events-none"
          style={{
            width: `${size * 0.9}px`,
            height: `${size * 0.2}px`,
            "--float-dur": `${floatDuration}s`,
            "--float-delay": `${floatDelay}s`,
          }}
        />
      </div>
    </div>
  );
}