"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_OUT, hoverScaleButton, hoverTransition, tapScaleButton } from "@/lib/motion";

const AUTOPLAY_MS = 6000;

// Text-only entrance choreography for the hero copy — kept separate from the
// image's own animation. The outer group only orchestrates mount/exit;
// individual letters/words (see TypingReveal) carry the real animation.
// Defined once at module scope so identity is stable across renders.
const textGroupVariants: Variants = {
  hidden: {},
  visible: {},
  exit: { opacity: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// Pass-through variant for wrapper tags (h1/p) that hold TypingReveal spans —
// no visual change of their own, just propagates "hidden"/"visible" down.
const passThroughVariants: Variants = { hidden: {}, visible: {} };

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT, delay: 2.5 } },
};

// A slow, GPU-only (opacity + y) cascade reveal — letters for short display
// text, words for longer copy so a full sentence doesn't take 10+ seconds.
// Each piece inherits "hidden"/"visible" from the nearest ancestor that
// declares those variant states (see textGroupVariants), so it only plays
// once per slide mount and never replays while the slide stays active.
function TypingReveal({
  text,
  split,
  charDelay,
  charDuration,
  baseDelay,
}: {
  text: string;
  split: "letter" | "word";
  charDelay: number;
  charDuration: number;
  baseDelay: number;
}) {
  const letterSpan = (key: number, char: string, delayIndex: number) => (
    <motion.span
      key={key}
      variants={{
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: charDuration, ease: EASE_OUT, delay: baseDelay + delayIndex * charDelay },
        },
      }}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  );

  if (split === "word") {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, i) => (
          <Fragment key={i}>
            {letterSpan(i, word, i)}
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </>
    );
  }

  // Letter mode: each atomic inline-block letter is a valid line-break point
  // to the browser, so wrap every word's letters in a nowrap group — the
  // (unanimated, plain-text) space between groups stays the only break point.
  const words = text.split(" ");
  const wordStartIndexes = words.reduce<number[]>((acc, _word, wi) => {
    acc.push(wi === 0 ? 0 : acc[wi - 1] + words[wi - 1].length);
    return acc;
  }, []);
  return (
    <>
      {words.map((word, wi) => {
        const startIndex = wordStartIndexes[wi];
        return (
          <Fragment key={wi}>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {Array.from(word).map((letter, li) => letterSpan(li, letter, startIndex + li))}
            </span>
            {wi < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </>
  );
}

const SLIDES = [
  {
    eyebrow: "BI Group",
    title: "Your Trusted Partner in Protective Coatings",
    description:
      "From marine vessels to industrial infrastructure - engineering coatings that protect what matters most.",
    cta: "Our Services",
    href: "/products/paints",
    image: "/hero-carousel-1.jpg",
  },
];

export default function HeroCarouselSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || SLIDES.length < 2) return;
    timer.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  const slide = SLIDES[index];

  return (
    <section
      className="font-inter"
      style={{ paddingTop: "var(--header-height)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Figma: hero-carousel-banner, node 2276:237 — height 578px */}
      <div className="relative w-full overflow-hidden" style={{ height: 578 }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            {/* Figma gradient: linear-gradient(90deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,0) 55%, rgba(26,82,118,.55) 100%) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0) 55%, rgba(26,82,118,0.55) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* hero-content: px-80 py-72, width 960, gap-20 */}
        <div
          className="relative h-full flex flex-col justify-center"
          style={{ width: 960, maxWidth: "100%", padding: "72px 80px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={textGroupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col"
              style={{ gap: 20 }}
            >
              {/* copy: gap-14 */}
              <div className="flex flex-col" style={{ gap: 14 }}>
                <motion.p
                  variants={passThroughVariants}
                  className="uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "1.12px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "normal",
                  }}
                >
                  <TypingReveal text={slide.eyebrow} split="letter" charDelay={0.03} charDuration={0.35} baseDelay={0} />
                </motion.p>
                <motion.h1
                  variants={passThroughVariants}
                  style={{
                    fontWeight: 800,
                    fontSize: 40,
                    lineHeight: 1.1,
                    color: "#ffffff",
                  }}
                >
                  <TypingReveal text={slide.title} split="letter" charDelay={0.018} charDuration={0.4} baseDelay={0.35} />
                </motion.h1>
                <motion.p
                  variants={passThroughVariants}
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <TypingReveal text={slide.description} split="word" charDelay={0.06} charDuration={0.45} baseDelay={1.1} />
                </motion.p>
              </div>

              <motion.div
                variants={buttonVariants}
                whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
                whileTap={{ ...tapScaleButton, transition: hoverTransition }}
                className="w-fit"
              >
                <Link
                  href={slide.href}
                  className="group inline-flex items-center w-fit rounded-full bg-white"
                  style={{
                    gap: 12,
                    padding: "14px 18px",
                    boxShadow: "0px 10px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: 15, color: "#0a1628" }}>{slide.cta}</span>
                  <ArrowRight size={18} className="text-[#0a1628] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows — not part of the Figma spec (single-slide export), kept for usability */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/30 backdrop-blur-sm"
          style={{ transition: "background-color 0.2s ease-in-out" }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/30 backdrop-blur-sm"
          style={{ transition: "background-color 0.2s ease-in-out" }}
        >
          <ChevronRight size={20} />
        </button>

        {/* hero-dots, node 2276:247 — bottom-48, gap-8, active 24x8, inactive 8x8, rounded-4 */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center" style={{ bottom: 48, gap: 8 }}>
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                height: 8,
                width: i === index ? 24 : 8,
                borderRadius: 4,
                background: i === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease-in-out",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
