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
  Toran,
} from "@/components/wedding/decor";
import { Nav } from "@/components/wedding/nav";
import { Countdown } from "@/components/wedding/countdown";

import ganesha from "@/assets/ganesha.png";
import arch from "@/assets/arch.png";
import mandala from "@/assets/mandala.png";
import lotus from "@/assets/lotus.png";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

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
  { name: "Mehandi", date: "13th Aug 2026", time: "", note: "A joyful gathering of family and festive henna traditions." },
  { name: "Haldi, Nalugu", date: "14th Aug 2026", time: "", note: "A fragrant celebration with blessings, turmeric, and togetherness." },
  { name: "Reception", date: "16th Aug 2026", time: "7:00 PM onwards", note: "Blessings and dinner at Sri Balaji Kalyana Mandapam." },
  { name: "Subh Muhurtham", date: "17th Aug 2026", time: "12:21 AM to 12:33 AM", note: "The auspicious wedding ceremony. Your presence is our blessing." },
];


const gallery = [g1, g6, g2, g4, g3, g5];

const family = [
  { side: "Bride's Family", house: "Chintala", members: ["Mrs. Chintala Reddy Prasanna", "Mr. Chintala Nagarjuna Rao"], place: "Chilamathur, Garladinne Mandal" },
  { side: "Groom's Family", house: "Koppolu", members: ["Mrs. Koppolu Sujatha", "Mr. Koppolu Balaji"], place: "Garladinne Mandal" },
];

function Invitation() {

  return (
    <div className="relative overflow-x-hidden">
      <Ambience />
      <Nav />

      {/* ------------------------------ HERO ------------------------------ */}
      <section id="home" className="relative px-3 pb-10 pt-4 sm:px-6 sm:pb-16">
        <div className="frame-page paper-grain relative mx-auto max-w-6xl overflow-hidden bg-card/70 px-4 pb-20 pt-24 text-center sm:px-10 sm:pb-28 sm:pt-32">
          <MandalaWash />
          <HangingLamps className="px-2 sm:px-8" />
          <LotusCorners />

          <div className="relative z-10">
            <Reveal>
              <Toran className="mb-2 max-w-md sm:max-w-xl" />
            </Reveal>

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
              <p className="font-script text-2xl text-gold sm:text-4xl">Om Shree Ganeshay Namah</p>
              <div className="mt-6">
                <Divider label="Wedding Invitation" />
              </div>
            </Reveal>

            <Reveal delay={300} className="mt-10">
              <p className="font-lora text-[0.7rem] tracking-[0.4em] text-primary/70 uppercase sm:text-xs">
                Together with their families
              </p>
              <h1 className="mt-6 font-script text-[2.6rem] leading-[1.05] text-gold sm:text-7xl lg:text-8xl">
                Nithisha
              </h1>
              <span className="my-3 inline-flex items-center gap-3 sm:my-5">
                <span className="rule-gold h-px w-10 sm:w-20" />
                <Heart className="h-5 w-5 fill-primary text-primary" />
                <span className="rule-gold h-px w-10 sm:w-20" />
              </span>
              <h1 className="font-script text-[2.6rem] leading-[1.05] text-gold sm:text-7xl lg:text-8xl">
                Sai Chand
              </h1>

              <p className="mt-10 font-display text-sm tracking-[0.32em] text-primary uppercase sm:text-lg">
                Monday · 17 August 2026
              </p>
              <p className="mt-2 font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Muhurtham 12:21 AM – 12:33 AM
              </p>

              <p className="mx-auto mt-10 max-w-xl font-lora text-sm italic leading-relaxed text-brown/90 sm:text-base">
                “Two lamps, one flame. Two families, one blessing. May this bond, lit before the
                gods, burn gently for a hundred years.”
              </p>

              <a
                href="#save-the-date"
                className="glow-gold mt-10 inline-flex items-center gap-3 border border-accent bg-primary px-8 py-4 font-display text-[0.6rem] tracking-[0.4em] text-primary-foreground uppercase transition-transform hover:scale-[1.03] sm:text-xs"
              >
                Enter Celebration
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------- SAVE THE DATE -------------------------- */}
      <InvitePage id="save-the-date" kicker="Save the Date" title="Mangalyam Muhurtham">
        <div className="flex flex-col items-center gap-14">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-body text-[0.55rem] tracking-[0.42em] text-primary/70 uppercase">
                August
              </span>
              <span className="font-display text-6xl text-gold sm:text-7xl">17</span>
              <span className="rule-gold my-2 h-px w-16" />
              <span className="font-body text-[0.55rem] tracking-[0.42em] text-primary/70 uppercase">
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
        <div className="grid gap-10 lg:grid-cols-2">
          {[
            {
              role: "The Bride",
              name: "Nithisha",
              img: g2,
              parents: family[0]!.members,
              place: "Chilamathur, Garladinne Mandal",
              note: "Daughter of the Chintala family — gentle, radiant and devoted, with a smile that lights every festival at home.",
            },
            {
              role: "The Groom",
              name: "Sai Chand",
              img: g4,
              parents: family[1]!.members,
              place: "Garladinne Mandal",
              note: "Son of the Koppolu family — warm-hearted and steadfast, raised on tradition and the values of his elders.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 160}>
              <article className="card-invite paper-grain h-full px-6 py-10 text-center sm:px-10">
                <span className="font-body text-[0.55rem] tracking-[0.44em] text-primary/70 uppercase">
                  {p.role}
                </span>
                <div className="relative mx-auto mt-6 w-44 sm:w-56">
                  <div className="glow-gold overflow-hidden rounded-t-[999px] border border-accent/70">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <img
                    src={lotus}
                    alt=""
                    aria-hidden
                    width={700}
                    height={1200}
                    loading="lazy"
                    className="absolute -bottom-4 -left-12 w-20 opacity-80"
                  />
                  <img
                    src={lotus}
                    alt=""
                    aria-hidden
                    width={700}
                    height={1200}
                    loading="lazy"
                    className="absolute -bottom-4 -right-12 w-20 -scale-x-100 opacity-80"
                  />
                </div>

                <h3 className="mt-10 font-script text-4xl text-gold sm:text-5xl">{p.name}</h3>
                <Divider />
                <p className="font-body text-[0.55rem] tracking-[0.4em] text-primary/70 uppercase">
                  {p.role === "The Bride" ? "Daughter of" : "Son of"}
                </p>
                <p className="mt-3 font-lora text-sm text-brown sm:text-base">
                  {p.parents[0]}
                  <br />
                  {p.parents[1]}
                </p>
                <p className="mt-4 font-body text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {p.place}
                </p>
                <p className="mt-6 font-lora text-sm italic leading-relaxed text-brown/85">
                  {p.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </InvitePage>

 

      {/* ------------------------------ EVENTS ------------------------------ */}
      <InvitePage id="events" kicker="Ceremonies" title="Shubh Karyam">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.name} delay={i * 110}>
              <article className="card-invite paper-grain relative h-full overflow-hidden px-6 py-10 text-center">
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
                <div className="relative z-10">
                  <img
                    src={mandala}
                    alt=""
                    aria-hidden
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="mx-auto w-14 opacity-80"
                  />
                  <h3 className="mt-4 font-script text-3xl text-gold">{ev.name}</h3>
                  <Divider />
                  <p className="font-body text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                    {ev.date}
                  </p>
                  <p className="mt-2 font-display text-sm tracking-[0.22em] text-accent-foreground">
                    {ev.time}
                  </p>
                  <p className="mt-5 font-lora text-sm italic leading-relaxed text-brown/85">
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
        <div className="columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
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
            <p className="font-lora text-base leading-relaxed text-brown">
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
              <span className="font-body text-[0.6rem] tracking-[0.3em] text-primary/70 uppercase">
                Reception 16 Aug · Muhurtham 17 Aug
              </span>
            </div>
            <div className="card-invite mt-8 overflow-hidden p-2">
              <iframe
                title="Map to Sri Balaji Kalyana Mandapam, Tiruchanoor"
                src="https://www.google.com/maps?q=Tiruchanoor%2C%20Andhra%20Pradesh%20517503&output=embed"
                loading="lazy"
                className="h-64 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sri+Balaji+Kalyana+Mandapam+Tiruchanoor+517503"
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
              <article className="card-invite paper-grain px-6 py-10 text-center">
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
      <footer className="relative px-3 pb-12 sm:px-6">
        <div className="frame-page paper-grain relative overflow-hidden mx-auto max-w-6xl bg-card/70 px-6 py-20 text-center">
          <MandalaWash />
          <LotusCorners />
          <div className="relative z-10">
            <span className="flame-flicker inline-block font-display text-5xl text-gold">ॐ</span>
            <h2 className="mt-6 font-script text-4xl text-gold sm:text-6xl">
              Nithisha <span className="text-primary">❤</span> Sai Chand
            </h2>
            <Divider label="Thank You" />
            <p className="mx-auto max-w-lg font-lora text-sm italic leading-relaxed text-brown/85">
              Your blessings are the truest ornament of this wedding. We await you at Tiruchanoor.
            </p>
            <p className="mt-8 font-body text-[0.55rem] tracking-[0.4em] text-primary/60 uppercase">
              Sathamanam Bhavati · 17 August 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
