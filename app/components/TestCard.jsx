 "use client"
import React, { useEffect, useState } from "react";

export default function AnimatedText({
  text = "Hello, this text animates in letter by letter!",
  delay = 40, // ms between each letter
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const letters = text.split("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= letters.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className="w-full min-h-[200px] flex items-center justify-center bg-slate-900 p-8">
      <p className="text-3xl md:text-4xl font-semibold text-white max-w-2xl leading-relaxed">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-500 ease-out"
            style={{
              opacity: index < visibleCount ? 1 : 0,
              transform:
                index < visibleCount
                  ? "translateX(0)"
                  : "translateX(-20px)",
              transitionDelay: `${index * 5}ms`,
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}