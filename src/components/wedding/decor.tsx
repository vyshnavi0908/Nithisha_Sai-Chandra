import { useEffect, useRef, useState, type ReactNode } from "react";
import mandala from "@/assets/mandala.png";
import lotus from "@/assets/lotus.png";
import lamp from "@/assets/lamp.png";
import toran from "@/assets/toran.png";

/* -------- falling petals + golden sparkles (page-wide ambience) -------- */
export function Ambience() {
  const sparks = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      
      {sparks.map((_, i) => (
        <span
          key={`s${i}`}
          className="spark"
          style={{
            left: `${(i * 6.1 + 4) % 100}%`,
            animationDuration: `${20 + (i % 5) * 4}s`,
            animationDelay: `${-i * 2.3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* -------- scroll reveal wrapper -------- */
export function Reveal({
  children,
  className = "",
  zoom = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  zoom?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${zoom ? "reveal-zoom" : "reveal"} ${seen ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* -------- ornamental divider: mandala flanked by gold rules -------- */
export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2 sm:gap-4">
      <span className="rule-gold h-px w-10 opacity-70 sm:w-28" />
      <span className="rule-gold h-1.5 w-1.5 rotate-45" />
      {label ? (
        <span className="font-display text-[0.55rem] tracking-[0.34em] text-gold uppercase sm:text-xs">
          {label}
        </span>
      ) : (
        <img src={mandala} alt="" width={40} height={40} loading="lazy" className="h-8 w-8 opacity-80 sm:h-10 sm:w-10" />
      )}
      <span className="rule-gold h-1.5 w-1.5 rotate-45" />
      <span className="rule-gold h-px w-10 opacity-70 sm:w-28" />
    </div>
  );
}

/* -------- symmetric hanging brass lamps -------- */
export function HangingLamps({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between ${className}`}>
      {[0, 1].map((i) => (
        <div key={i} className="lamp-swing" style={{ animationDelay: `${i * 1.6}s` }}>
          <img
            src={lamp}
            alt=""
            width={512}
            height={1024}
            loading="lazy"
            className={`h-32 w-auto opacity-90 sm:h-48 lg:h-60 ${i ? "-scale-x-100" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

/* -------- symmetric lotus corner clusters -------- */
export function LotusCorners({ bottom = true }: { bottom?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1].map((i) => (
        <img
          key={i}
          src={lotus}
          alt=""
          width={700}
          height={1200}
          loading="lazy"
          className={`absolute w-28 opacity-70 sm:w-40 lg:w-52 ${
            bottom ? "bottom-0" : "top-0"
          } ${i ? "right-0 -scale-x-100" : "left-0"} float-slow`}
          style={{ animationDelay: `${i * 2.5}s` }}
        />
      ))}
    </div>
  );
}

/* -------- faint mandala watermarks behind a section -------- */
export function MandalaWash() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={mandala}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="spin-slow absolute -top-40 left-1/2 w-[38rem] -translate-x-1/2 opacity-[0.13]"
      />
      <img
        src={mandala}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="spin-slow absolute -bottom-52 left-1/2 w-[34rem] -translate-x-1/2 opacity-[0.1]"
      />
    </div>
  );
}

export function Toran({ className = "" }: { className?: string }) {
  return (
    <img
      src={toran}
      alt=""
      width={1536}
      height={640}
      loading="lazy"
      aria-hidden
      className={`lamp-swing pointer-events-none mx-auto w-full max-w-3xl opacity-95 ${className}`}
    />
  );
}

/* -------- one "page" of the invitation -------- */
export function InvitePage({
  id,
  kicker,
  title,
  children,
  className = "",
}: {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="relative px-2 py-3 sm:px-6 sm:py-6">
      <div
        className={`frame-page paper-grain relative mx-auto max-w-6xl overflow-hidden bg-card/70 px-3 py-6 sm:px-8 sm:py-8 lg:px-12 ${className}`}
      >
        <MandalaWash />
        <div className="relative z-10">
          {(kicker || title) && (
            <Reveal className="mb-3 text-center sm:mb-4">
              {kicker && (
                <p className="font-body text-[0.6rem] tracking-[0.5em] text-primary/70 uppercase sm:text-xs">
                  {kicker}
                </p>
              )}
              {title && (
                <h2 className="mt-2 font-display text-2xl text-gold sm:mt-3 sm:text-4xl">{title}</h2>
              )}
              <div className="mt-2 sm:mt-3">
                <Divider />
              </div>
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
