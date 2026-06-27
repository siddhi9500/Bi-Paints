"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE_LINES = [
  ["A", "Decade", "Of"],
  ["Quality", "&", "Trust"],
];

const headlineContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.45 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(440px, 62vh, 600px)", background: "#0a1628" }}
    >
      {/* ── Background photo ── */}
      <Image
        src="/banner4.jpg"
        alt="BI Group – engineering solutions built to last"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Gradient overlay — light at top, deep at the bottom for text legibility ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,16,32,0.35) 0%, rgba(8,16,32,0.05) 30%, rgba(8,16,32,0.55) 78%, rgba(8,16,32,0.82) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Headline — upper, centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-semibold uppercase mb-5"
            style={{ color: "#f5a200", fontSize: 12, letterSpacing: "0.32em" }}
          >
            BI Group of Companies
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={headlineContainer}
            className="text-white leading-[1.08]"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 500,
              textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            }}
          >
            {HEADLINE_LINES.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => (
                  <motion.span
                    key={word + wordIndex}
                    variants={wordVariant}
                    className="inline-block mr-[0.28em] last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Bottom row — text panel (left) + highlight card (right) */}
        <div className="px-6 sm:px-10 lg:px-14 pb-9 sm:pb-12">
          <div className="page-container flex flex-col sm:flex-row sm:items-end justify-between gap-6">

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
              className="max-w-md rounded-md p-5 sm:p-6"
              style={{ background: "rgba(10,22,45,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                For over a decade, BI Group has shaped homes, industries, and
                infrastructure across India with paints, coatings, and end-to-end
                solutions built to last — from a single trusted partner to a
                multi-sector group serving clients nationwide.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/40 hover:border-accent hover:text-accent pb-0.5"
              >
                Get In Touch <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5, ease: EASE }}
            >
              <Link
                href="/products"
                className="group flex items-center gap-4 rounded-md p-3.5 sm:p-4 w-full sm:w-72"
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ width: 44, height: 44, background: "#f5a200" }}
                >
                  <ArrowRight size={18} className="text-navy" />
                </span>
                <span>
                  <span className="block text-white/60 text-xs uppercase tracking-wider mb-0.5">
                    Discover
                  </span>
                  <span
                    className="block text-white font-semibold"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Our Products
                  </span>
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
