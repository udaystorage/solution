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
  Hotel,
  Landmark,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  Building2,
  Check,
} from "lucide-react";

import "./CardFlipAnimation.css"

// Fixed on-screen positions the cards move between. All are expressed as
// an offset from dead-center (left:50%/top:50%), so `translate(-50%,-50%)`
// is "true center" and everything else adds a px offset on top of that.
//
// FIX: every var() now has a fallback value. If CardFlipAnimation.css
// doesn't define --card-x / --card-y / --card-boundary-x for a given
// viewport width (e.g. a mobile breakpoint got missed), the transform
// used to silently resolve to an invalid value and the browser would
// just skip rendering the transform entirely — which looks exactly like
// "the animation isn't working." These fallbacks guarantee there's
// always a valid number to fall back to.
const CENTER = "translate(-50%, -50%)";

const NEAR =
  "translate(calc(-50% + var(--card-x, 90px)), calc(-50% - var(--card-y, 70px)))";

const FAR =
  "translate(calc(-50% + var(--card-x, 90px)), calc(-50% + var(--card-y, 70px)))";

const OFF_LEFT =
  "translate(calc(-50% - var(--card-boundary-x, 220px)), -50%)";

const OFF_RIGHT_FAR =
  "translate(calc(-50% + var(--card-boundary-x, 220px)), calc(-50% + var(--card-y, 70px)))";

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

function Card({ role, text, onDone }) {
  const { animationName, duration, z } = ROLE_STYLE[role];
  const Icon = text.icon;

  return (
    <div
      className={`hero-flip-card hero-flip-card--${role}`}
      onAnimationEnd={role === "center" ? onDone : undefined}
      style={{
        width: "var(--card-width, 200px)",
        height: "var(--card-height, 260px)",
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: z,
        // FIX: added -webkit- versions. iOS Safari (and Chrome on iOS,
        // which is really Safari's engine under the hood) is unreliable
        // rendering 3D transforms — preserve-3d, backface-visibility,
        // etc. — without the vendor-prefixed property alongside the
        // standard one. Desktop Chrome/Firefox don't need this, which
        // is exactly why this can look totally fine on desktop and
        // break only on a real phone.
        WebkitTransformStyle: "preserve-3d",
        transformStyle: "preserve-3d",
        animation: `${animationName} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        WebkitAnimation: `${animationName} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        willChange: "transform, opacity",
      }}
    >
      {/* FRONT */}
      <div
        className="glass-card-face glass-card-front"
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      >
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
      <div
        className="glass-card-face glass-card-back"
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      >
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
       h-77.5
  sm:h-87.5
  md:h-102.5
  lg:h-145
      overflow-hidden
      rounded-2xl
    "
    style={{
      // FIX: perspective was missing on any ancestor. Without a
      // perspective value set somewhere above the 3D-transformed cards,
      // rotateY/rotateZ have no vanishing point to render depth against
      // and the browser can flatten the transform to 2D instead — some
      // mobile browsers are stricter about this than desktop Chrome/
      // Firefox, which is another reason this can look fine on desktop
      // but break on a real phone.
      perspective: "1400px",
      WebkitPerspective: "1400px",
    }}
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