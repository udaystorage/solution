"use client";
import { useState, useRef } from "react";

// Fixed on-screen positions the cards move between. All are expressed as
// an offset from dead-center (left:50%/top:50%), so `translate(-50%,-50%)`
// is "true center" and everything else adds a px offset on top of that.
const CENTER = "translate(-50%, -50%)";
const NEAR = "translate(calc(-50% + 190px), calc(-50% - 110px))"; // top-right
const FAR = "translate(calc(-50% + 190px), calc(-50% + 110px))"; // bottom-right
const OFF_LEFT = "translate(calc(-50% - 480px), -50%)";
const OFF_RIGHT_FAR = "translate(calc(-50% + 480px), calc(-50% + 110px))";

const MAIN_DURATION = 3.9; // seconds — includes the 1.5s hold at max size
const SHIFT_DURATION = 1.3; // bottom-right waiting slot -> top-right waiting slot
const ENTER_DURATION = 1.8; // new card flies in from the right into the bottom-right slot

const CARD_KEYFRAMES = `
@keyframes cardMain {
  0%   { transform: ${NEAR} rotateY(0deg) scale(0.55); opacity: 1; }
  26%  { transform: ${CENTER} rotateY(360deg) scale(1); }
  33%  { transform: ${CENTER} rotateY(360deg) scale(0.82); }
  49%  { transform: ${CENTER} rotateY(360deg) scale(1.3); }
  87%  { transform: ${CENTER} rotateY(360deg) scale(1.3); }
  94%  { transform: ${CENTER} rotateY(360deg) scale(0.82); opacity: 1; }
  100% { transform: ${OFF_LEFT} rotateY(360deg) scale(0.6); opacity: 0; }
}
@keyframes cardShiftNear {
  0%   { transform: ${FAR} rotateY(360deg) scale(0.42); opacity: 1; }
  100% { transform: ${NEAR} rotateY(360deg) scale(0.65); opacity: 1; }
}
@keyframes cardEnterFar {
  0%   { transform: ${OFF_RIGHT_FAR} rotateY(0deg) scale(0.42); opacity: 0; }
  18%  { opacity: 1; }
  100% { transform: ${FAR} rotateY(360deg) scale(0.52); opacity: 1; }
}
`;

const CARD_TEXTS = [
  { title: "Stock Market Trader's Data", subtitle: "" },
  { title: "Credit Card Holder's Data", subtitle: "" },
  { title: "Real Estate Data", subtitle: "" },
  { title: "College/School Student's Data", subtitle: "" },
  { title: "Insurance Data", subtitle: "" },
  { title: "Doctor's Data", subtitle: "" },
  { title: "Hotel Data", subtitle: "" },
  { title: "College/School Owner's Data", subtitle: "" }, 
  { title: "Restaurant Data", subtitle: "" }, 
  { title: "Spa Data", subtitle: "" }, 
  { title: "Pincode Wise Data", subtitle: "" }, 
  { title: "Employees Data", subtitle: "" },
  { title: "International Data", subtitle: "" },
  { title: "Car Owner's Data", subtitle: "" },
  { title: "High Net Worth (HNI) Data", subtitle: "" },
  { title: "Loan  Data", subtitle: "" },
];

const ROLE_STYLE = {
  center: { animationName: "cardMain", duration: MAIN_DURATION, z: 3 },
  near: { animationName: "cardShiftNear", duration: SHIFT_DURATION, z: 2 },
  far: { animationName: "cardEnterFar", duration: ENTER_DURATION, z: 1 },
};

const CARD_GRADIENTS = [
  "linear-gradient(135deg, #ffffffb0, #15cebfb0, #15afceb0)",
  "linear-gradient(135deg, #15afceb0, #1ec2ebb0, #d163e7b0)",
  "linear-gradient(135deg, #ffffffb0, #d163e7b0, #5e1ac3b0)",
];

function Card({ role, gradient, text, onDone }) {
  const { animationName, duration, z } = ROLE_STYLE[role];
  return (
    <div
      onAnimationEnd={role === "center" ? onDone : undefined}
      style={{
        width: 280,
        height: 180,
        padding: "10px",
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: z,
        transformStyle: "preserve-3d",
        animation: `${animationName} ${duration}s cubic-bezier(0.45, 0.05, 0.25, 1) forwards`,
        willChange: "transform, opacity",
        fontsize: "4px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 18,
          backfaceVisibility: "hidden",
          background: gradient,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          color: "#fff",
          padding: "10px",
        }}
      >
        <div style={{ fontSize: 35, fontWeight: 700 , padding: "20px" }}>{text.title}</div>
        <div style={{ fontSize: 14, opacity: 0.85, marginTop: 8 }}>{text.subtitle}</div>
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 18,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background:
            "repeating-linear-gradient(45deg, #1e1e2f, #1e1e2f 10px, #2a2a40 10px, #2a2a40 20px)",
          border: "6px solid #fff",
          boxSizing: "border-box",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              padding: "10px",
        }}
      />
    </div>
  );
}

export default function CardFlipAnimation() {
  const [queue, setQueue] = useState([
    { id: 0, text: CARD_TEXTS[0], gradient: CARD_GRADIENTS[0] }, // center
    { id: 1, text: CARD_TEXTS[1], gradient: CARD_GRADIENTS[1] }, // near (top-right)
    { id: 2, text: CARD_TEXTS[2], gradient: CARD_GRADIENTS[2] }, // far (bottom-right)
  ]);
  const nextId = useRef(3);
  const nextTextIndex = useRef(3);

  // Picks a gradient that isn't currently used by any card still in the
  // queue, so the new arrival never visually matches its neighbours.
  // Falls back to "just not the same as last time" if the palette is too
  // small to guarantee full uniqueness against every card on screen.
  const pickGradient = (excluding) => {
    const pool = CARD_GRADIENTS.filter((g) => !excluding.includes(g));
    const options = pool.length > 0 ? pool : CARD_GRADIENTS.filter((g) => g !== excluding[0]);
    return options[Math.floor(Math.random() * options.length)];
  };

  const rotateQueue = () => {
    setQueue(([, near, far]) => {
      const fresh = {
        id: nextId.current++,
        text: CARD_TEXTS[nextTextIndex.current++ % CARD_TEXTS.length],
        gradient: pickGradient([near.gradient, far.gradient]),
      };
      return [near, far, fresh];
    });
  };

  const [center, near, far] = queue;

  return (
    <div
      style={{
        width: "100%",
        minHeight: 580,
        background: "transparent",
        borderRadius: 16,
        position: "relative",
        overflow: "hidden",
        perspective: 800,
        fontFamily: "system-ui, sans-serif",
       padding: 0,
      }}
    >
      <style>{CARD_KEYFRAMES}</style>

      <Card key={`center-${center.id}`} role="center" gradient={center.gradient} text={center.text} onDone={rotateQueue} />
      <Card key={`near-${near.id}`} role="near" gradient={near.gradient} text={near.text} />
      <Card key={`far-${far.id}`} role="far" gradient={far.gradient} text={far.text} />
    </div>
  );

}