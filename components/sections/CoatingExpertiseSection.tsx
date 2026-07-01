"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const VIEW = { once: true, margin: "-80px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function CoatingExpertiseSection() {
  return (
    <section className="bg-white overflow-hidden py-16">
      {/* page-container is the bounding box — navy absolute div stays within its right edge */}
      <div className="page-container relative py-14 sm:py-36">

        {/* Navy background — right ~62%, bounded by page-container so it has the same margin as content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute top-0 bottom-0 right-0 w-full lg:w-[62%] pointer-events-none rounded-3xl"
          style={{ background: "linear-gradient(135deg, #0d2240 0%, #1b4676 100%)" }}
        >
          {/* glow accent */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: "#0e9aa7" }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-0">

            {/* LEFT — image column, negative margin so it spills above & below (video-py-60 equivalent) */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={VIEW}
              transition={{ duration: 0.85, delay: 0.05, ease: EASE }}
              className="w-full lg:w-[46%] shrink-0 relative z-20 -my-14 sm:-my-20"
            >
              <div
                className="relative w-full h-full min-h-100 sm:min-h-125 rounded-3xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: "0 32px 64px -16px rgba(13,34,64,0.5)" }}
              >
                <Image
                  src="/coating-advisors.jpg"
                  alt="Coating advisors on site"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
                <div className="absolute inset-0" style={{ background: "rgba(8,18,38,0.12)" }} />

                {/* Play button with pulse ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="absolute rounded-full"
                    style={{ width: 68, height: 68, background: "#f5a200" }}
                    animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />
                  <span
                    className="relative flex items-center justify-center rounded-full"
                    style={{ width: 68, height: 68, background: "#f5a200" }}
                  >
                    <Play size={24} fill="#ffffff" strokeWidth={0} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — text content, sits on top of the navy background */}
            <div className="w-full lg:w-[54%] flex flex-col justify-center py-12 lg:py-0 lg:pl-14 xl:pl-20">

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
                className="font-extrabold text-white leading-tight mb-6"
                style={{
                  fontSize: "clamp(1.9rem, 3.6vw, 3rem)",
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                }}
              >
                Behind Every Great Coating
              </motion.h2>

              {/* Large typographic quote */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
                className="mb-4 leading-none select-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f5a200", fontFamily: "Georgia, serif", lineHeight: 1 }}
              >
                &ldquo;
              </motion.div>

              {/* Amber subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
                className="font-bold uppercase text-xs sm:text-sm mb-7"
                style={{ color: "#f5a200", letterSpacing: "0.18em" }}
              >
                People Behind the Performance
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
                className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-4 max-w-lg"
              >
                Every day, our coating advisors and engineers can be found on
                construction sites, drydock facilities and production lines —
                helping our customers improve application quality and lower costs.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-10 max-w-lg"
              >
                More than{" "}
                <span className="font-bold" style={{ color: "#f5a200" }}>
                  90 per cent
                </span>{" "}
                of premature coating failures trace back to surface preparation
                or application error — so we stay with every project from prep
                to final touch-up, for protection that performs as promised.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.6, delay: 0.58, ease: EASE }}
              >
                <Link
                  href="/products/paints"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm border-b-2 pb-1 hover:gap-3 transition-all duration-300"
                  style={{ borderColor: "#f5a200" }}
                >
                  Know More <ArrowRight size={15} style={{ color: "#f5a200" }} />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
