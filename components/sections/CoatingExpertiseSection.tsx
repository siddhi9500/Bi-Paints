"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Play, ArrowRight } from "lucide-react";

const VIEW = { once: true, margin: "-80px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function CoatingExpertiseSection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="page-container">
        <div className="relative max-w-8xl mx-auto">

          {/* Navy panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.85, ease: EASE }}
            className="relative z-0 rounded-3xl px-8 sm:pl-26 sm:pr-12 lg:pl-30 lg:pr-14 py-16 sm:py-22 lg:py-26 sm:ml-[36%] lg:ml-[37%] flex flex-col justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #102a4c 0%, #1b4676 100%)" }}
          >
            {/* decorative glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: "#0e9aa7" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            >
              <Quote size={40} style={{ color: "#f5a200" }} fill="#f5a200" strokeWidth={0} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
              className="font-extrabold text-white leading-tight mt-4 mb-5"
              style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
            >
              Behind Every Great Coating
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="font-bold uppercase tracking-wide text-sm sm:text-base mb-6"
              style={{ color: "#f5a200" }}
            >
              People Behind the Performance
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
              className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-3 max-w-xl"
            >
              Every day, our coating advisors and engineers can be found on
              construction sites, drydock facilities and production lines —
              helping our customers improve application quality and lower costs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.46, ease: EASE }}
              className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl"
            >
              More than{" "}
              <span className="font-bold" style={{ color: "#f5a200" }}>
                90 per cent
              </span>{" "}
              of premature coating failures trace back to surface preparation
              or application error — so we stay with every project from
              prep to final touch-up, for protection that performs as promised.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.54, ease: EASE }}
            >
              <Link
                href="/products/paints"
                className="inline-flex items-center gap-2 text-white font-bold text-sm border-b-2 pb-1 hover:gap-3 transition-all duration-300"
                style={{ borderColor: "#f5a200" }}
              >
                Know More <ArrowRight size={15} style={{ color: "#f5a200" }} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Overlapping image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={VIEW}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="relative sm:absolute z-10 -mb-8 sm:mb-0 w-full sm:w-[47%] lg:w-[48%] aspect-16/10 sm:aspect-7/5 sm:left-0 sm:top-1/2 sm:-translate-y-1/2 rounded-2xl overflow-hidden cursor-pointer"
            style={{ boxShadow: "0 25px 50px -12px rgba(16,42,76,0.45)" }}
          >
            <Image
              src="/coating-advisors.jpg"
              alt="Coating advisors on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(8,18,38,0.18)" }} />

            {/* Play button with pulsing ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="absolute rounded-full"
                style={{ width: 56, height: 56, background: "#f5a200" }}
                animate={{ scale: [1, 1.8], opacity: [0.55, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <span
                className="relative flex items-center justify-center rounded-full"
                style={{ width: 56, height: 56, background: "#f5a200" }}
              >
                <Play size={20} fill="#ffffff" strokeWidth={0} className="ml-0.5" />
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
