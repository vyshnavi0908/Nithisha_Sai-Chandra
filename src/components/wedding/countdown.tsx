import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-17T00:21:00+05:30").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    Days: Math.floor(d / 86400000),
    Hours: Math.floor((d / 3600000) % 24),
    Minutes: Math.floor((d / 60000) % 60),
    Seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(() => diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
      {Object.entries(t).map(([label, value], i) => (
        <div
          key={label}
          className="glow-gold relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-accent/60 bg-card/85 sm:h-32 sm:w-32"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <span className="absolute inset-1.5 rounded-full border border-dashed border-accent/40" />
          <span className="font-display text-xl text-gold sm:text-3xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-body text-[0.5rem] tracking-[0.32em] text-primary/70 uppercase sm:text-[0.6rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
