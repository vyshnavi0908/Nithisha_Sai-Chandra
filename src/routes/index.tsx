import { createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Navigation } from "lucide-react";

import {
  Ambience,
  Divider,
  HangingLamps,
  InvitePage,
  LotusCorners,
  MandalaWash,
  Reveal,
} from "@/components/wedding/decor";
import { Nav } from "@/components/wedding/nav";
import { Countdown } from "@/components/wedding/countdown";

import ganesha from "@/assets/ganesha.png";
import arch from "@/assets/arch.png";
import mandala from "@/assets/mandala.png";
import lotus from "@/assets/lotus.png";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import bride from "@/assets/bride.jpeg";
import groom from "@/assets/groom.jpeg";
import mehandiCone from "@/assets/mehandi-cone.jpg";
import subhMuhurtam from "@/assets/subh-muhurtham.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithisha & Sai Chand · Wedding Invitation | 17 Aug 2026" },
      {
        name: "description",
        content:
          "With the blessings of our families, Nithisha weds Sai Chand. Reception 16 August, Marriage 17 August 2026 at Sri Balaji Kalyana Mandapam, Tiruchanoor.",
      },
      { property: "og:title", content: "Nithisha & Sai Chand · Wedding Invitation | 17 Aug 2026" },
      {
        property: "og:description",
        content:
          "With the blessings of our families, Nithisha weds Sai Chand. Reception 16 August, Marriage 17 August 2026 at Sri Balaji Kalyana Mandapam, Tiruchanoor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const events = [
  {
    name: "Mehandi",
    date: "13th Aug 2026",
    time: "",
    note: "A joyful gathering of family and festive henna traditions.",
    image: mehandiCone,
  },
  {
    name: "Haldi, Nalugu",
    date: "14th Aug 2026",
    time: "",
    note: "A fragrant celebration with blessings, turmeric, and togetherness.",
    image: g1,
  },
  {
    name: "Reception",
    date: "16th Aug 2026",
    time: "7:00 PM onwards",
    note: "Blessings and dinner at Sri Balaji Kalyana Mandapam.",
    image: g5,
  },
  {
    name: "Subh Muhurtham",
    date: "17th Aug 2026",
    time: "12:21 AM to 12:33 AM",
    note: "The auspicious wedding ceremony. Your presence is our blessing.",
    image: subhMuhurtam,
  },
];


const gallery = [g1, g6, g4, g3, g5];

const family = [
  { side: "Bride's Family", house: "Chintham", members: ["Mrs. Chintham Reddy Prasanna", "Mr. Chintham Nagarjuna Rao"], place: "Chilamathur, Garladinne Mandal" },
  { side: "Groom's Family", house: "Koppolu", members: ["Mrs. Koppolu Sujatha", "Mr. Koppolu Balaji"], place: "Garladinne Mandal" },
];

function Invitation() {

  return (
    <div className="relative overflow-x-hidden">
      <Ambience />
      <Nav />

      {/* ------------------------------ HERO ------------------------------ */}
      <section id="home" className="relative px-2 pb-4 pt-2 sm:px-6 sm:pb-10 sm:pt-3">
        <div className="paper-grain relative mx-auto max-w-6xl overflow-hidden bg-card/70 px-3 pb-10 pt-14 text-center sm:px-8 sm:pb-16 sm:pt-20">
          <MandalaWash />
          <HangingLamps className="px-2 sm:px-8" />
          <LotusCorners />

          <div className="relative z-10">
            <Reveal zoom className="relative mx-auto max-w-xl">
              <img
                src={arch}
                alt=""
                aria-hidden
                width={1200}
                height={1200}
                className="mx-auto w-full opacity-40"
              />
              <img
                src={ganesha}
                alt="Golden illustration of Lord Ganesha"
                width={1024}
                height={1024}
                className="absolute left-1/2 top-[42%] w-[54%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_30px_rgba(155,107,29,0.35)]"
              />
            </Reveal>

            <Reveal delay={150}>
              <p className="text-fade-up font-script text-xl text-gold sm:text-4xl">Om Shree Ganeshay Namah</p>
              <div className="mt-0.5 sm:mt-1">
                <Divider label="Wedding Invitation" />
              </div>
            </Reveal>

            <Reveal delay={300} className="mt-2 sm:mt-3">
              <p className="font-lora text-[0.7rem] tracking-[0.4em] text-primary/70 uppercase glow-detail sm:text-xs">
                Together with their families
              </p>
              <h1 className="text-fade-up mt-1 font-script text-[2rem] leading-[1.02] text-gold glow-text glow-gold sm:mt-2 sm:text-7xl lg:text-8xl">
                Nithisha
              </h1>
              <span className="my-1.5 inline-flex items-center gap-3 sm:my-2">
                <span className="rule-gold h-px w-10 sm:w-20" />
                <span className="heart-beat inline-flex items-center text-[2.4rem] sm:text-[3.5rem] text-primary glow-gold">❤️</span>
                <span className="rule-gold h-px w-10 sm:w-20" />
              </span>
              <h1 className="text-fade-up-delayed font-script text-[2rem] leading-[1.02] text-gold glow-text glow-gold sm:text-7xl lg:text-8xl">
                Sai Chand
              </h1>

              <p className="mt-3 font-display text-[0.74rem] tracking-[0.24em] text-primary uppercase glow-detail sm:mt-4 sm:text-lg sm:tracking-[0.32em]">
                Monday · 17 August 2026
              </p>
              <p className="mt-0.5 font-body text-[0.65rem] tracking-[0.18em] text-primary/80 uppercase glow-detail sm:text-xs sm:tracking-[0.2em]">
                Muhurtham 12:21 AM – 12:33 AM
              </p>

              <p className="mx-auto mt-3 max-w-xl px-2 font-lora text-sm italic leading-relaxed text-brown/90 glow-detail sm:mt-4 sm:px-0 sm:text-base">
                “Two lamps, one flame. Two families, one blessing. May this bond, lit before the
                gods, burn gently for a hundred years.”
              </p>

              <a
                href="#save-the-date"
                className="glow-gold mt-3 inline-flex items-center justify-center gap-3 border border-accent bg-primary px-6 py-3 font-display text-[0.56rem] tracking-[0.28em] text-primary-foreground uppercase transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] sm:mt-4 sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.4em]"
              >
                Enter Celebration
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------- SAVE THE DATE -------------------------- */}
      <InvitePage id="save-the-date" kicker="Save the Date" title="Mangalyam Muhurtham">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <Reveal zoom className="relative">
            <img
              src={mandala}
              alt=""
              aria-hidden
              width={1024}
              height={1024}
              loading="lazy"
              className="spin-slow w-72 opacity-45 sm:w-96"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 sm:gap-1.5">
              <span className="font-body text-[0.5rem] tracking-[0.38em] text-primary/70 uppercase sm:text-[0.55rem]">
                August
              </span>
              <span className="font-display text-5xl leading-none text-gold sm:text-7xl">17</span>
              <span className="rule-gold my-1 h-px w-12 sm:my-1.5 sm:w-16" />
              <span className="font-body text-[0.5rem] tracking-[0.38em] text-primary/70 uppercase sm:text-[0.55rem]">
                Monday · 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <Countdown />
          </Reveal>
        </div>
      </InvitePage>

      {/* ------------------------------ COUPLE ------------------------------ */}
      <InvitePage id="couple" kicker="The Couple" title="Vadhu & Varudu">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
          {[
            {
              role: "The Bride",
              name: "Nithisha",
              img: bride,
              parents: family[0]!.members,
              place: "Chilamathur, Garladinne Mandal",
              note: "Daughter of the Chintham family — gentle, radiant and devoted, with a smile that lights every festival at home.",
            },
            {
              role: "The Groom",
              name: "Sai Chand",
              img: groom,
              parents: family[1]!.members,
              place: "Garladinne Mandal",
              note: "Son of the Koppolu family — warm-hearted and steadfast, raised on tradition and the values of his elders.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 160}>
              <article className="paper-grain h-full overflow-hidden px-4 pb-8 pt-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(155,107,29,0.16)] sm:px-8 sm:pt-8 sm:pb-10">
                <div className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-[rgba(255,244,228,0.85)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)]">
                  {p.role === "The Bride" ? (
                    <div className="pointer-events-none absolute inset-0 bg-[rgba(255,220,175,0.26)] mix-blend-multiply" />
                  ) : null}
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-80 w-full object-cover"
                    style={
                      p.role === "The Bride"
                        ? { filter: "brightness(0.95) sepia(0.18) saturate(1.2) contrast(0.95)" }
                        : undefined
                    }
                  />
                </div>

                <h3 className="mt-6 font-script text-[2.3rem] text-gold glow-text sm:text-5xl">
                  {p.name}
                </h3>
                <p className="mt-2 font-body text-[0.75rem] tracking-[0.36em] text-primary/70 uppercase">
                  {p.role}
                </p>
                <p className="mx-auto mt-4 max-w-xs font-lora text-sm text-brown sm:text-base glow-detail">
                  {p.note}
                </p>
                <p className="mt-5 font-body text-[0.65rem] tracking-[0.24em] text-primary uppercase glow-detail">
                  {p.place}
                </p>
                <p className="mx-auto mt-4 max-w-xs font-lora text-sm italic leading-relaxed text-brown/85 glow-detail">
                  {p.parents[0]}
                  <br />
                  {p.parents[1]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </InvitePage>

 

      {/* ------------------------------ EVENTS ------------------------------ */}
      <InvitePage id="events" kicker="Ceremonies" title="Shubh Karyam">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.name} delay={i * 110}>
              <article
                className="card-invite paper-grain group relative h-full overflow-hidden px-4 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(155,107,29,0.18)] sm:px-6 sm:py-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)), url(${ev.image})`,
                  backgroundBlendMode: "lighten",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1.1) saturate(1.08)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-white/85" />
                <img
                  src={ev.image}
                  alt=""
                  aria-hidden
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-24 blur-[0.3px]"
                />
                <img
                  src={lotus}
                  alt=""
                  aria-hidden
                  width={700}
                  height={1200}
                  loading="lazy"
                  className="pointer-events-none absolute -bottom-6 -left-8 w-24 opacity-60"
                />
                <img
                  src={lotus}
                  alt=""
                  aria-hidden
                  width={700}
                  height={1200}
                  loading="lazy"
                  className="pointer-events-none absolute -bottom-6 -right-8 w-24 -scale-x-100 opacity-60"
                />
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={mandala}
                    alt=""
                    aria-hidden
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="mx-auto w-14 opacity-80"
                  />
                  <h3 className="mt-4 font-script text-[1.8rem] text-primary glow-strong sm:text-3xl">{ev.name}</h3>
                  <Divider />
                  <p className="font-body text-[0.62rem] tracking-[0.28em] text-primary uppercase glow-detail">
                    {ev.date}
                  </p>
                  <p className="mt-2 font-display text-sm tracking-[0.22em] text-primary glow-detail">
                    {ev.time}
                  </p>
                  <p className="mt-5 font-lora text-sm italic leading-relaxed text-primary glow-detail">
                    {ev.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </InvitePage>

      {/* ------------------------------ GALLERY ------------------------------ */}
      <InvitePage id="gallery" kicker="Gallery" title="Moments & Motifs">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 120} zoom>
              <figure className="group card-invite overflow-hidden p-2">
                <img
                  src={src}
                  alt="Traditional Indian wedding illustration"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </InvitePage>

      {/* ------------------------------- VENUE ------------------------------- */}
      <InvitePage id="venue" kicker="Venue" title="Sri Balaji Kalyana Mandapam">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={g5}
              alt="Illustration of a South Indian kalyana mandapam decorated with marigold garlands"
              width={800}
              height={1000}
              loading="lazy"
              className="card-invite w-full p-2"
            />
          </Reveal>
          <Reveal delay={140} className="text-center lg:text-left">
            <p className="font-lora text-base leading-relaxed text-brown glow-detail">
              Sri Balaji Kalyana Mandapam
              <br />
              Near Ayyappa Swamy Temple
              <br />
              Tiruchanoor – 517503
              <br />
              Andhra Pradesh, India
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
              <MapPin className="h-4 w-4 text-accent-foreground" />
              <span className="font-body text-[0.6rem] tracking-[0.3em] text-primary uppercase glow-detail">
                Reception 16 Aug · Muhurtham 17 Aug
              </span>
            </div>
            <div className="card-invite mt-8 overflow-hidden p-2">
              <iframe
                title="Map to Sri Balaji Kalyana Mandapam, Tiruchanoor"
                src="https://www.google.com/maps?q=UwYYVfuR8AZ4kY8x7&output=embed"
                loading="lazy"
                className="h-56 w-full sm:h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/UwYYVfuR8AZ4kY8x7"
              target="_blank"
              rel="noreferrer"
              className="glow-gold mt-8 inline-flex items-center gap-3 border border-accent bg-primary px-7 py-3.5 font-display text-[0.58rem] tracking-[0.36em] text-primary-foreground uppercase"
            >
              <Navigation className="h-3.5 w-3.5" /> Get Directions
            </a>
          </Reveal>
        </div>
      </InvitePage>

      {/* ------------------------------ FAMILY ------------------------------ */}
      <InvitePage id="family" kicker="With Blessings Of" title="Our Families">
        <div className="grid gap-10 sm:grid-cols-2">
          {family.map((f, i) => (
            <Reveal key={f.side} delay={i * 150}>
              <article className="card-invite paper-grain px-4 py-8 text-center sm:px-6 sm:py-10">
                <span className="font-body text-[0.55rem] tracking-[0.44em] text-primary/70 uppercase">
                  {f.side}
                </span>
                <h3 className="mt-4 font-script text-3xl text-gold">{f.house} Family</h3>
                <Divider />
                <ul className="space-y-2 font-lora text-sm text-brown sm:text-base">
                  {f.members.map((m) => (
                    <li key={m} className="glow-gold mx-auto max-w-xs px-4 py-2">
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-body text-[0.6rem] tracking-[0.26em] text-muted-foreground uppercase">
                  {f.place}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </InvitePage>

 
      {/* ------------------------------ FOOTER ------------------------------ */}
      <footer className="relative px-2 pb-8 sm:px-6 sm:pb-10">
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-14">
          <MandalaWash />
          <LotusCorners />
          <div className="relative z-10">
            <span className="flame-flicker inline-block font-display text-4xl text-gold sm:text-5xl">ॐ</span>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-2 font-script text-[1.5rem] text-gold sm:mt-6 sm:gap-3 sm:text-6xl">
              <span className="whitespace-nowrap">Nithisha</span>
              <span className="heart-beat inline-flex items-center text-primary glow-gold">❤️</span>
              <span className="whitespace-nowrap">Sai Chand</span>
            </p>
            <Divider label="Thank You" />
            <p className="mx-auto max-w-lg font-lora text-sm italic leading-relaxed text-brown/85">
              Your blessings are the truest ornament of this wedding. We await you at Tiruchanoor.
            </p>
            <p className="mt-6 font-body text-[0.5rem] tracking-[0.34em] text-primary/60 uppercase sm:mt-8 sm:text-[0.55rem] sm:tracking-[0.4em]">
              Sathamanam Bhavati · 17 August 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
