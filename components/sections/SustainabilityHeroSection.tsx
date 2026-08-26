"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, fadeUpSmall, staggerContainer } from "@/lib/motion";

// Figma's own "wind-streak" assets export empty (no visible path data), so
// these soft blurred diagonal bars recreate the same atmospheric effect —
// purely decorative, hidden below lg where there's no room for them.
const STREAKS = [
  { top: "8%", left: "-8%", width: 620, rotate: -12 },
  { top: "24%", left: "-4%", width: 560, rotate: -8 },
  { top: "40%", left: "0%", width: 500, rotate: -6 },
  { top: "12%", right: "-6%", width: 560, rotate: 12 },
  { top: "28%", right: "-2%", width: 500, rotate: 8 },
  { top: "44%", right: "2%", width: 460, rotate: 6 },
];

// Figma: hero-sustainability, node 4204:261
export default function SustainabilityHeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: 700 }}>
      <Image src="/sustainability-hero-bg.jpg" alt="BI Group sustainability — wind turbines at sunset" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.2) 55%, rgba(10,10,10,0.35) 100%)" }} />

      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden>
        {STREAKS.map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              width: s.width,
              height: 2,
              background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
              filter: "blur(6px)",
              transform: `rotate(${s.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12)}
        className="relative h-full flex flex-col justify-center px-6 sm:px-10 lg:left-35 lg:absolute lg:top-0"
        style={{ width: 840, maxWidth: "100%" }}
      >
        <motion.div
          variants={fadeUpSmall}
          className="w-fit"
          style={{
            backdropFilter: "blur(9px)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            padding: "8px 12px",
            marginBottom: 20,
          }}
        >
          <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#ffffff" }}>
            BI Group Sustainability
          </span>
        </motion.div>

        <motion.h1 variants={passThroughVariants} style={{ fontSize: 40, lineHeight: 1.1, color: "#ffffff", marginBottom: 20 }}>
          <TypingReveal text="Building Today. Protecting Tomorrow." split="letter" charDelay={0.014} charDuration={0.4} baseDelay={0.2} />
        </motion.h1>

        <motion.p variants={fadeUp} style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
          At BI Group, we believe sustainable growth is the only way forward. Across our paints, modular systems, and
          engineering businesses, we are committed to reducing environmental impact and empowering communities.
        </motion.p>

        <motion.a
          href="#pillars"
          variants={fadeUp}
          className="group inline-flex items-center w-fit"
          style={{ gap: 8, paddingTop: 16, color: "#ffffff" }}
        >
          <span style={{ fontWeight: 600, fontSize: 14 }}>Discover our mission</span>
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={16} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
