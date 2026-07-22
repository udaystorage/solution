"use client";
import { useState, useRef } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  CarFront,
  CreditCard,
  Gem,
  Globe2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  Utensils,
  Building2,
  Check,
} from "lucide-react";

import "./CardFlipAnimation.css"

// Fixed on-screen positions the cards move between. All are expressed as
// an offset from dead-center (left:50%/top:50%), so `translate(-50%,-50%)`
// is "true center" and everything else adds a px offset on top of that.
const CENTER = "translate(-50%, -50%)";

const NEAR =
  "translate(calc(-50% + var(--card-x)), calc(-50% - var(--card-y)))";

const FAR =
  "translate(calc(-50% + var(--card-x)), calc(-50% + var(--card-y)))";

const OFF_LEFT =
  "translate(calc(-50% - var(--card-boundary-x)), -50%)";

const OFF_RIGHT_FAR =
  "translate(calc(-50% + var(--card-boundary-x)), calc(-50% + var(--card-y)))";

const MAIN_DURATION = 3.9; // seconds — includes the 1.5s hold at max size
const SHIFT_DURATION = 1.3; // bottom-right waiting slot -> top-right waiting slot
const ENTER_DURATION = 1.8; // new card flies in from the right into the bottom-right slot

const CARD_KEYFRAMES = `
@keyframes cardMain {
  /*
   * Must exactly match the final state of cardShiftNear.
   * This prevents a visual jump when near becomes center.
   */
  0% {
    transform:
      ${NEAR}
      rotateY(360deg)
      rotateZ(-2deg)
      scale(0.65);

    opacity: 1;
  }

  /*
   * ONE continuous movement into the hero position.
   * Do not reach CENTER before this point.
   */
  30% {
    transform:
      ${CENTER}
      rotateY(720deg)
      rotateZ(0deg)
      scale(1.3);

    opacity: 1;
  }

  /*
   * Identical transform = completely calm readable hold.
   */
  82% {
    transform:
      ${CENTER}
      rotateY(720deg)
      rotateZ(0deg)
      scale(1.3);

    opacity: 1;
  }

  /*
   * Exit begins directly from the resting position.
   */
  100% {
    transform:
      ${OFF_LEFT}
      rotateY(755deg)
      rotateZ(-3deg)
      scale(0.58);

    opacity: 0;
  }
}


@keyframes cardShiftNear {
  /*
   * Starts exactly where cardEnterFar ends.
   */
  0% {
    transform:
      ${FAR}
      rotateY(360deg)
      rotateZ(3deg)
      scale(0.52);

    opacity: 0.82;
  }

  /*
   * Must exactly match cardMain 0%.
   */
  100% {
    transform:
      ${NEAR}
      rotateY(360deg)
      rotateZ(-2deg)
      scale(0.65);

    opacity: 1;
  }
}


@keyframes cardEnterFar {
  0% {
    transform:
      ${OFF_RIGHT_FAR}
      rotateY(325deg)
      rotateZ(6deg)
      scale(0.38);

    opacity: 0;
  }

  20% {
    opacity: 0.35;
  }

  /*
   * Must exactly match cardShiftNear 0%.
   */
  100% {
    transform:
      ${FAR}
      rotateY(360deg)
      rotateZ(3deg)
      scale(0.52);

    opacity: 0.82;
  }
}
`;


// vexhgwxh
const ROLE_STYLE = {
  center: { animationName: "cardMain", duration: MAIN_DURATION, z: 3 },
  near: { animationName: "cardShiftNear", duration: SHIFT_DURATION, z: 2 },
  far: { animationName: "cardEnterFar", duration: ENTER_DURATION, z: 1 },
};

const CARD_TEXTS = [
  {
    category: "FINANCE",
    title: "Stock Market Traders",
    icon: BarChart3,
  },
  {
    category: "FINANCE",
    title: "Credit Card Holders",
    icon: CreditCard,
  },
  {
    category: "REAL ESTATE",
    title: "Real Estate Data",
    icon: Building2,
  },
  {
    category: "EDUCATION",
    title: "College & School Students",
    icon: GraduationCap,
  },
  {
    category: "INSURANCE",
    title: "Insurance Data",
    icon: ShieldCheck,
  },
  {
    category: "HEALTHCARE",
    title: "Doctors",
    icon: Stethoscope,
  },
  {
    category: "HOSPITALITY",
    title: "Hotel Data",
    icon: Hotel,
  },
  {
    category: "EDUCATION",
    title: "College & School Owners",
    icon: School,
  },
  {
    category: "HOSPITALITY",
    title: "Restaurant Data",
    icon: Utensils,
  },
  {
    category: "WELLNESS",
    title: "Spa Data",
    icon: Sparkles,
  },
  {
    category: "LOCATION",
    title: "Pincode-Wise Data",
    icon: MapPin,
  },
  {
    category: "WORKFORCE",
    title: "Employees Data",
    icon: BriefcaseBusiness,
  },
  {
    category: "GLOBAL",
    title: "International Data",
    icon: Globe2,
  },
  {
    category: "AUTOMOTIVE",
    title: "Car Owners",
    icon: CarFront,
  },
  {
    category: "PREMIUM SEGMENT",
    title: "High-Net-Worth Individuals",
    icon: Gem,
  },
  {
    category: "FINANCE",
    title: "Loan Data",
    icon: Landmark,
  },
];
// const CARD_GRADIENTS = [
//   "linear-gradient(135deg, #ffffffb0, #15cebfb0, #15afceb0)",
//   "linear-gradient(135deg, #15afceb0, #1ec2ebb0, #d163e7b0)",
//   "linear-gradient(135deg, #ffffffb0, #d163e7b0, #5e1ac3b0)",
// ];

function Card({ role, text, onDone }) {
  const { animationName, duration, z } = ROLE_STYLE[role];
  const Icon = text.icon;

  return (
    <div
      className={`hero-flip-card hero-flip-card--${role}`}
      onAnimationEnd={role === "center" ? onDone : undefined}
      style={{
        width: "var(--card-width)",
        height: "var(--card-height)",
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: z,
        transformStyle: "preserve-3d",
        animation: `${animationName} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        willChange: "transform, opacity",
      }}
    >
      {/* FRONT */}
      <div className="glass-card-face glass-card-front">
        {/* Soft internal refraction */}
        <div className="glass-refraction" />

        {/* Very subtle ambient glow */}
        <div className="glass-ambient-glow" />

        {/* Fine technical line */}
        <svg
          className="glass-data-line"
          viewBox="0 0 280 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-15 65 C 40 42, 75 92, 130 67 S 220 35, 300 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />

          <circle cx="72" cy="73" r="2" fill="currentColor" />
          <circle cx="185" cy="52" r="2" fill="currentColor" />
        </svg>

        {/* Main content */}
        <div className="glass-card-content">
          <div className="glass-icon-wrap">
            <Icon
              className="glass-card-icon"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </div>

          <div className="glass-card-copy">
            <p className="glass-category">
              {text.category}
            </p>

            <h3 className="glass-title">
              {text.title}
            </h3>
          </div>

          <div className="glass-card-footer">
            <div className="verified-label">
              <span className="verified-dot">
                <Check strokeWidth={2.2} />
              </span>

              <span>VERIFIED DATA</span>
            </div>

            {/* <span className="data-mark">
              LW / DATA
            </span> */}
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="glass-card-face glass-card-back">
        <div className="glass-refraction" />

        <div className="back-watermark">
          <span>LW</span>
        </div>

        <div className="back-detail">
          <span>CURATED</span>
          <span>•</span>
          <span>VERIFIED</span>
          <span>•</span>
          <span>STRUCTURED</span>
        </div>
      </div>
    </div>
  );
}

export default function CardFlipAnimation() {
 const [queue, setQueue] = useState([
  { id: 0, text: CARD_TEXTS[0] },
  { id: 1, text: CARD_TEXTS[1] },
  { id: 2, text: CARD_TEXTS[2] },
]);
  const nextId = useRef(3);
  const nextTextIndex = useRef(3);

  // Picks a gradient that isn't currently used by any card still in the
  // queue, so the new arrival never visually matches its neighbours.
  // Falls back to "just not the same as last time" if the palette is too
  // small to guarantee full uniqueness against every card on screen.
  // const pickGradient = (excluding) => {
  //   const pool = CARD_GRADIENTS.filter((g) => !excluding.includes(g));
  //   const options = pool.length > 0 ? pool : CARD_GRADIENTS.filter((g) => g !== excluding[0]);
  //   return options[Math.floor(Math.random() * options.length)];
  // };

const rotateQueue = () => {
  setQueue(([, near, far]) => {
    const fresh = {
      id: nextId.current++,
      text: CARD_TEXTS[nextTextIndex.current++ % CARD_TEXTS.length],
    };

    return [near, far, fresh];
  });
};

  const [center, near, far] = queue;

 return (
  <div
    className="
      card-animation-stage
      relative w-full
       h-[310px]
  sm:h-[350px]
  md:h-[410px]
  lg:h-[580px]
      overflow-hidden
      rounded-2xl
    "
  >

<style>{CARD_KEYFRAMES}</style>

<Card
  key={`center-${center.id}`}
  role="center"
  text={center.text}
  onDone={rotateQueue}
/>

<Card
  key={`near-${near.id}`}
  role="near"
  text={near.text}
/>

<Card
  key={`far-${far.id}`}
  role="far"
  text={far.text}
/>
  </div>
);

}