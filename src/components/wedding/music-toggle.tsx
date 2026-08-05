import { useEffect, useRef, useState } from "react";
import { Music4, VolumeX } from "lucide-react";

/**
 * Soft instrumental ambience (flute / veena style drone) generated in-browser
 * with the Web Audio API, so no external audio file is required.
 */
export function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; stop: () => void } | null>(null);

  useEffect(() => () => nodesRef.current?.stop(), []);

  const start = async () => {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = ctxRef.current ?? new AC();
    ctxRef.current = ctx;
    await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Sa - Pa drone (veena) + breathy flute melody tones
    const freqs = [146.83, 220, 293.66, 440];
    const oscs = freqs.map((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i > 1 ? "sine" : "triangle";
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = i > 1 ? 0.05 : 0.12;

      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.06 + i * 0.035;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = i > 1 ? 0.045 : 0.03;
      lfo.connect(lfoGain).connect(g.gain);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1100;

      osc.connect(g).connect(filter).connect(master);
      osc.start();
      lfo.start();
      return () => {
        osc.stop();
        lfo.stop();
      };
    });

    master.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 3);
    nodesRef.current = {
      gain: master,
      stop: () => {
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
        setTimeout(() => oscs.forEach((s) => s()), 1400);
      },
    };
  };

  const toggle = async () => {
    if (on) {
      nodesRef.current?.stop();
      nodesRef.current = null;
      setOn(false);
    } else {
      await start();
      setOn(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Pause wedding music" : "Play wedding music"}
      className="glow-gold flex h-10 w-10 items-center justify-center rounded-full border border-accent/70 bg-card/80 text-accent-foreground backdrop-blur transition-transform hover:scale-105"
    >
      {on ? <Music4 className="h-4 w-4 animate-pulse" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
