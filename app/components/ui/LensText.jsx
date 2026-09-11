
"use client";

const text =
  "For advisory, brokerage, demat, investment & financial services";

export default function LensText() {
  return (
    <>
      <span className="lens-text" aria-label={text}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="lens-letter"
            style={{ "--i": index }}
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      <style jsx>{`
        .lens-text {
          display: inline-block;
          color: #475569;
          white-space: nowrap;
        }

        .lens-letter {
          display: inline-block;
          transform: scale(1);
          transform-origin: center bottom;

          animation: letterPop 6s infinite;
          animation-delay: calc(var(--i) * 0.065s);

          will-change: transform, text-shadow;
        }

        @keyframes letterPop {
          0%,
          5% {
            transform: scale(1) translateY(0);
            text-shadow: none;
          }

          /* Quick cartoon-like pop */
          7% {
            transform: scale(1.18) translateY(-2px);
            text-shadow:
              0 0 5px rgba(99, 102, 241, 0.35),
              0 0 9px rgba(56, 189, 248, 0.2);
          }

          /* Tiny overshoot */
          8.5% {
            transform: scale(0.96) translateY(1px);
          }

          /* Settle */
          10% {
            transform: scale(1.04) translateY(0);
          }

          12% {
            transform: scale(1) translateY(0);
            text-shadow: none;
          }

          /* Long pause */
          100% {
            transform: scale(1) translateY(0);
            text-shadow: none;
          }
        }

        /*
         * MOBILE + TABLET
         * Allow the letters to wrap into two lines.
         */
        @media (max-width: 1023px) {
          .lens-text {
            white-space: normal;
            width: min(90vw, 520px);
            text-align: center;
          }
        }

        /*
         * SMALL MOBILE
         * Slightly narrower so the break happens cleanly.
         */
        @media (max-width: 639px) {
          .lens-text {
            width: min(92vw, 390px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lens-letter {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

