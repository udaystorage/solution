import React from 'react'

export default function SingleCube({
  name,
  shadow,
  position,
  ztranslate,
  rotation,
  width = 100,
  height = 100,
  colour,
  floatDuration = 3.2, // seconds
  floatDelay = 0,       // seconds
  floatHeight = 18,     // px
}) {
  const FACES = [
    { name: `${name}`, transform: `rotateY(0deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "1" },
    { name: "", transform: `rotateY(180deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "2" },
    { name: "", transform: `rotateY(90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "3" },
    { name: "", transform: `rotateY(-90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "4" },
    { name: "", transform: `rotateX(90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "5" },
    { name: "", transform: `rotateX(-90deg) translateZ(${ztranslate}px)`, from: `${colour}`, id: "6" },
  ];

  return (
    <div className={`cube-stage w-full flex justify-center ${position}`} style={{ perspective: "900px" }}>
      <style>{`
        @keyframes cube-hover-float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(calc(-1 * var(--float-h, 18px))); }
          100% { transform: translateY(0px); }
        }
        @keyframes cube-hover-shadow {
          0%   { transform: scale(1);    opacity: 0.5; }
          50%  { transform: scale(0.65); opacity: 0.25; }
          100% { transform: scale(1);    opacity: 0.5; }
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
          transform: scale(0.55);
        }
        @media (min-width: 480px) {
          .cube-responsive-scale { transform: scale(0.58); }
        }
        @media (min-width: 640px) {
          .cube-responsive-scale { transform: scale(0.75); }
        }
        @media (min-width: 1024px) {
          .cube-responsive-scale { transform: scale(1); }
        }
      `}</style>

      {/* everything below scales together as one unit, so cube geometry never distorts */}
      <div className="cube-responsive-scale flex flex-col items-center" style={{ transformOrigin: "center center" }}>
        <div
          className="cube-float-wrap"
          style={{
            "--float-dur": `${floatDuration}s`,
            "--float-delay": `${floatDelay}s`,
            "--float-h": `${floatHeight}px`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${width}px`,
              height: `${height}px`,
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
                <span className="text-white/90 text-sm text-center tracking-[0.2em] font-bold">
                  <div className="w-full h-full flex items-center justify-center p-2">
                    {face.name}
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mx-auto rounded-full bg-black/50 blur-xl cube-shadow-anim ${shadow}`}
          style={{
            width: "140px",
            height: "20px",
            marginBottom: "-20px",
            "--float-dur": `${floatDuration}s`,
            "--float-delay": `${floatDelay}s`,
            transform: `scaleX(${1 - Math.abs(rotation.x % 180) / 300})`,
          }}
        />
      </div>
    </div>
  )
}