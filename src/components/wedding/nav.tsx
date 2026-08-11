import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MusicToggle } from "./music-toggle";

const links = [
  ["Home", "#home"],
  ["Couple", "#couple"],
  ["Our Story", "#story"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Venue", "#venue"],
  ["RSVP", "#rsvp"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "bg-background/85 shadow-[0_1px_0_0_var(--gold)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-8">
        <a href="#home" className="font-script text-[1.55rem] text-gold sm:text-3xl">
          N&nbsp;&amp;&nbsp;S
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="font-body text-[0.65rem] tracking-[0.28em] text-primary/80 uppercase transition-colors hover:text-accent-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <MusicToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/70 bg-card/80 text-primary lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="animate-fade-in max-h-[70vh] overflow-auto border-t border-accent/40 bg-background/95 px-4 pb-6 pt-2 backdrop-blur lg:hidden">
          {links.map(([label, href]) => (
            <li key={href} className="border-b border-accent/20 last:border-0">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-[0.7rem] tracking-[0.3em] text-primary uppercase"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
