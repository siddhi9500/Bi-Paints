"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

const EASE = [0.52, 1, 0.36, 1] as const;

const HEADLINE_LINES = ["A Decade Of", "Quality & Trust"];

const HEADLINE_STYLE = {
  fontSize: "clamp(2rem, 5vw, 4rem)",
  fontFamily: "var(--font-playfair), Georgia, serif",
  fontWeight: 500,
  color: "#ffffff",
  textShadow: "0 2px 24px rgba(0,0,0,0.25)",
};

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(500px, 78vh, 860px)", background: "#0a1628" }}
    >
      {/* ── Background photo — slow Ken Burns zoom ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <Image
          src="/banner4.jpg"
          alt="BI Group – engineering solutions built to last"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,16,32,0.35) 0%, rgba(8,16,32,0.05) 30%, rgba(8,16,32,0.55) 78%, rgba(8,16,32,0.82) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Label + headline — centered in the flex-1 space below the navbar */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 mx-auto w-full"
          style={{
            maxWidth: 1600,
            paddingTop: "calc(var(--header-height) + clamp(0.75rem, 3vh, 3rem))",
            paddingBottom: "clamp(0.5rem, 2vh, 2rem)",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-semibold uppercase mb-4 sm:mb-6"
            style={{ color: "#f5a200", fontSize: 12, letterSpacing: "0.32em" }}
          >
            BI Group of Companies
          </motion.span>
          <h1 className="text-white leading-[1.1] w-full">
            <GradualSpacing
              text={HEADLINE_LINES[0]}
              containerClassName="flex flex-wrap justify-center"
              className="leading-[1.1]"
              style={HEADLINE_STYLE}
              startDelay={0.4}
            />
            <GradualSpacing
              text={HEADLINE_LINES[1]}
              containerClassName="flex flex-wrap justify-center mt-1 sm:mt-2"
              className="leading-[1.1]"
              style={HEADLINE_STYLE}
              startDelay={0.4 + HEADLINE_LINES[0].length * 0.1 + 0.25}
            />
          </h1>
        </div>

        {/* Bottom row — description (left) + highlight card (right) */}
        <div className="px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12">
          <div className="page-container flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6">

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
              whileHover={{ scale: 1.02 }}
              className="max-w-md rounded-md p-5 sm:p-6 hover:shadow-2xl"
              style={{ background: "rgba(10,22,45,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)", transition: "box-shadow 0.25s ease-out" }}
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
              whileHover={{ scale: 1.04 }}
              style={{ transition: "box-shadow 0.25s ease-out" }}
              className="rounded-md"
            >
              <Link
                href="/products"
                className="group flex items-center gap-4 rounded-md p-3.5 sm:p-4 w-full sm:w-72 hover:shadow-2xl"
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.18)", transition: "background 0.25s ease-out, box-shadow 0.25s ease-out" }}
              >
                <span
                  className="shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
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
