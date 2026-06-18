"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  { src: "/photo-1562259949-e8e7689d7828.avif",   alt: "BI Group – Paints" },
  { src: "/photo-1637035640133-5f7f6dc20131.avif", alt: "BI Group – HVAC Systems" },
  { src: "/photo-1722605090433-41d1183a792d.avif", alt: "BI Group – Modular Kitchens" },
  { src: "/banner4.jpg",                            alt: "BI Group – Steel" },
  { src: "/photo-1508450859948-4e04fabaa4ea.avif", alt: "BI Group – Cement" },
  { src: "/banner1.jpg",                            alt: "BI Group – Chemicals" },
  { src: "/photo-1698479603408-1a66a6d9e80f.avif", alt: "BI Group – Electronics & Home Appliances" },
  { src: "/photo-1496247749665-49cf5b1022e9.avif", alt: "BI Group – Power Tools & Hardware" },
  { src: "/photo-1599707254554-027aeb4deacd.avif", alt: "BI Group – Fabrication" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "52vh", minHeight: 340, background: "#0a1628" }}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* ── Sliding track ── */}
      <div
        className="flex h-full"
        style={{
          width: `${SLIDES.length * 100}%`,
          transform: `translateX(-${(current * 100) / SLIDES.length}%)`,
          transition: "transform 0.85s cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / SLIDES.length}%` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.1) 100%)" }}
      />

      {/* ── Hero text ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-14 lg:px-20">
        <p
          className="font-semibold uppercase mb-3"
          style={{ color: "#f5a200", fontSize: 11, letterSpacing: "0.3em" }}
        >
          BI GROUP OF COMPANIES
        </p>
        <h1
          className="text-white font-black leading-tight mb-4"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2rem)",
            fontFamily: "var(--font-montserrat), Arial, sans-serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Quality Products.<br />
          <span style={{ color: "#f5a200" }}>Complete Solutions.</span>
        </h1>
        <p className="text-white/80 text-sm max-w-sm mb-3 leading-relaxed">
          Paints · HVAC · Modular Kitchens · Steel · Cement · Fabrication &amp; more —
          BI Group delivers premium products and end-to-end services across every category.
        </p>
        <p className="text-white/55 text-xs mb-7 tracking-wide">
          Trusted across residential, commercial &amp; industrial sectors across India.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/products"
            className="text-white font-bold px-6 py-2.5 text-sm rounded"
            style={{ background: "#f5a200", transition: "all 0.5s ease-in-out" }}
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="text-white font-bold px-6 py-2.5 text-sm rounded border border-white/50 hover:bg-white hover:text-navy"
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width:        i === current ? 28 : 10,
              height:       10,
              borderRadius: 999,
              background:   i === current ? "#f5a200" : "rgba(255,255,255,0.5)",
              border:       "none",
              cursor:       "pointer",
              transition:   "all 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
    </section>
  );
}
