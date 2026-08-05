"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 6000;

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
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col"
              style={{ gap: 20 }}
            >
              {/* copy: gap-14 */}
              <div className="flex flex-col" style={{ gap: 14 }}>
                <p
                  className="uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "1.12px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "normal",
                  }}
                >
                  {slide.eyebrow}
                </p>
                <h1
                  style={{
                    fontWeight: 800,
                    fontSize: 40,
                    lineHeight: 1.1,
                    color: "#ffffff",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {slide.description}
                </p>
              </div>

              <Link
                href={slide.href}
                className="group inline-flex items-center w-fit rounded-full bg-white"
                style={{
                  gap: 12,
                  padding: "14px 18px",
                  boxShadow: "0px 10px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.25s ease-in-out",
                }}
              >
                <span style={{ fontWeight: 800, fontSize: 15, color: "#0a1628" }}>{slide.cta}</span>
                <ArrowRight size={18} className="text-[#0a1628] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
