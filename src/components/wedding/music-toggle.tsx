import { useEffect, useRef, useState } from "react";
import { Music4, VolumeX } from "lucide-react";

export function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/songks.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.6;
    audioRef.current = audio;

    const handleError = () => {
      audio.pause();
      setOn(false);
    };

    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (on) {
      audio.pause();
      setOn(false);
      return;
    }

    try {
      await audio.play();
      setOn(true);
    } catch {
      setOn(false);
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
