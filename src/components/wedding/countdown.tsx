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
    <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-6">
      {Object.entries(t).map(([label, value], i) => (
        <div
          key={label}
          className="glow-gold relative flex min-h-[7.25rem] flex-col items-center justify-center rounded-[1.75rem] border border-accent/60 bg-card/85 px-3 py-4 shadow-[0_10px_35px_rgba(155,107,29,0.12)] sm:min-h-[8.25rem]"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <span className="absolute inset-1.5 rounded-[1.4rem] border border-dashed border-accent/40" />
          <span className="font-display text-3xl text-gold sm:text-4xl lg:text-5xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-2 font-body text-[0.55rem] tracking-[0.34em] text-primary/70 uppercase sm:text-[0.6rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
