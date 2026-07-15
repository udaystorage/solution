"use client"; 
import { useRef, useState, useCallback, useEffect } from "react";

const CARD_W = 240;
const CARD_H = 120;
const STRIDE = 4; // particle grain size in px — smaller = finer dust, more particles
const GRAVITY = 260; // px/s^2, lighter than a rigid object since it's dust
const TURBULENCE = 70; // px/s^2 of random horizontal drift

const ENTER_MS = 700; // time for the card to fall into place
const HOLD_MS = 1200; // time it sits still before dusting
const GAP_MS = 700; // blank pause after dust settles, before it falls in again
const DROP_FROM = CARD_H + 120; // how far above the resting spot it starts

// The dust canvas is deliberately much bigger than the card itself so
// particles can fly past the card's original edges without being clipped
// by the canvas boundary (which is what a same-sized canvas would do).
const PAD_SIDE = 170;
const PAD_TOP = 90;
const PAD_BOTTOM = 340; // extra room below since gravity pulls particles down
const DUST_W = CARD_W + PAD_SIDE * 2;
const DUST_H = CARD_H + PAD_TOP + PAD_BOTTOM;

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawCard(ctx) {
  ctx.clearRect(0, 0, CARD_W, CARD_H);
  ctx.save();
  roundRectPath(ctx, 0, 0, CARD_W, CARD_H, 20);
  ctx.clip();

  const grad = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
  grad.addColorStop(0, "#1b1035");
  grad.addColorStop(0.45, "#4c1d95");
  grad.addColorStop(0.75, "#7c2d92");
  grad.addColorStop(1, "#c026d3");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const glow = ctx.createRadialGradient(
    CARD_W - 30, 30, 0,
    CARD_W - 30, 30, 110
  );
  glow.addColorStop(0, "rgba(240,171,252,0.35)");
  glow.addColorStop(1, "rgba(240,171,252,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  roundRectPath(ctx, 24, 24, 84, 26, 13);
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fill();
  ctx.fillStyle = "#fae8ff";
  ctx.font = "600 11px system-ui, sans-serif";
  ctx.textBaseline = "middle";
  ctx.fillText("FRAGILE", 36, 38);

  ctx.strokeStyle = "#f5d0fe";
  ctx.lineWidth = 1.6;
  ctx.save();
  ctx.translate(CARD_W - 42, 36);
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 === 0 ? 11 : 4.5;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = "#ffffff";
  ctx.font = "500 22px Georgia, serif";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Handle with care", 24, 150);

  ctx.fillStyle = "rgba(250,232,255,0.8)";
  ctx.font = "400 13px system-ui, sans-serif";
  ctx.fillText("One touch turns this to dust.", 24, 174);

  ctx.restore();
}

export default function DustCard() {
  const staticCanvasRef = useRef(null);
  const dustCanvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const timeoutsRef = useRef([]);

  // phase: falling | holding | dusting | gap
  const [phase, setPhase] = useState("falling");
  const [dropped, setDropped] = useState(false); // false = parked above, true = animated into place
  const [transitionOn, setTransitionOn] = useState(false);

  const clearTimers = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const after = useCallback((ms, fn) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
  }, []);

  useEffect(() => {
    drawCard(staticCanvasRef.current.getContext("2d"));
  }, []);

  const stopRaf = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTsRef.current = 0;
  }, []);

  const tick = useCallback((ts) => {
    if (!lastTsRef.current) lastTsRef.current = ts;
    const dt = Math.min((ts - lastTsRef.current) / 1000, 0.032);
    lastTsRef.current = ts;

    const ctx = dustCanvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, DUST_W, DUST_H);

    let anyAlive = false;

    for (const p of particlesRef.current) {
      if (p.alpha <= 0.02) continue;
      anyAlive = true;

      p.vx += (Math.random() - 0.5) * TURBULENCE * dt;
      p.vy += GRAVITY * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha -= p.decay * dt;
      p.size *= 1 - 0.35 * dt;

      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.globalAlpha = 1;

    if (!anyAlive) {
      stopRaf();
      setPhase("gap");
      after(GAP_MS, startFallCycle);
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopRaf, after]);

  const turnToDust = useCallback(() => {
    stopRaf();
    const ctx = staticCanvasRef.current.getContext("2d");
    const { data } = ctx.getImageData(0, 0, CARD_W, CARD_H);
    const cx = CARD_W / 2;
    const cy = CARD_H / 2;
    const particles = [];

    for (let y = 0; y < CARD_H; y += STRIDE) {
      for (let x = 0; x < CARD_W; x += STRIDE) {
        const idx = (y * CARD_W + x) * 4;
        const alpha = data[idx + 3];
        if (alpha < 20) continue;

        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.max(Math.hypot(dx, dy), 1);

        particles.push({
          x: x + PAD_SIDE,
          y: y + PAD_TOP,
          color: `rgb(${r},${g},${b})`,
          size: STRIDE * (0.6 + Math.random() * 0.7),
          vx: (dx / dist) * (20 + Math.random() * 60),
          vy: (dy / dist) * (10 + Math.random() * 40) - (40 + Math.random() * 60),
          alpha: 1,
          decay: 0.35 + Math.random() * 0.5,
        });
      }
    }

    particlesRef.current = particles;
    setPhase("dusting");
    rafRef.current = requestAnimationFrame(tick);
  }, [stopRaf, tick]);

  const startFallCycle = useCallback(() => {
    // redraw the intact card and clear any leftover dust
    dustCanvasRef.current.getContext("2d").clearRect(0, 0, DUST_W, DUST_H);
    drawCard(staticCanvasRef.current.getContext("2d"));

    // snap the card back above the frame with no transition
    setTransitionOn(false);
    setDropped(false);
    setPhase("falling");

    // next paint: enable the transition and animate it down into place
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionOn(true);
        setDropped(true);
      });
    });

    after(ENTER_MS, () => {
      setPhase("holding");
      after(HOLD_MS, turnToDust);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [after, turnToDust]);

  useEffect(() => {
    startFallCycle();
    return () => {
      clearTimers();
      stopRaf();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDusting = phase === "dusting";
  const cardVisible = phase === "falling" || phase === "holding";

  return (
    <div
      className="flex items-center justify-center"
      style={{ paddingTop: PAD_TOP + 40, paddingBottom: PAD_BOTTOM + 40, overflow: "visible" }}
    >
      <div
        className="relative"
        style={{
          width: CARD_W,
          height: CARD_H,
          overflow: "visible",
          transform: dropped ? "translateY(0)" : `translateY(-${DROP_FROM}px)`,
          transition: transitionOn
            ? `transform ${ENTER_MS}ms cubic-bezier(0.32, 1.4, 0.44, 1)`
            : "none",
        }}
      >
        <canvas
          ref={staticCanvasRef}
          width={CARD_W}
          height={CARD_H}
          className="absolute inset-0 rounded-[20px] transition-opacity duration-150"
          style={{ opacity: cardVisible ? 1 : 0 }}
        />
        <canvas
          ref={dustCanvasRef}
          width={DUST_W}
          height={DUST_H}
          className="absolute pointer-events-none"
          style={{
            left: -PAD_SIDE,
            top: -PAD_TOP,
            opacity: isDusting ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}