"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, fadeUpSmall, staggerContainer } from "@/lib/motion";

// Figma: All Businesses hero banner, node 4485:296
export default function BusinessesHeroBannerSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: "var(--header-height)", height: 600 }}>
      <Image src="/business-hero-banner.jpg" alt="BI Group teams collaborating across businesses" fill priority className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,10,26,0.65) 0%, rgba(10,10,26,0.35) 50%, rgba(10,10,26,0.2) 100%)" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="relative h-full flex flex-col justify-end items-start px-6 sm:px-10 lg:px-35"
        style={{ gap: 16, paddingBottom: 64 }}
      >
        <motion.p variants={fadeUpSmall} className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}>
          Our Businesses
        </motion.p>
        <motion.div variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.15, color: "#ffffff", maxWidth: 760 }}>
          <div>
            <TypingReveal text="Strength in Diversity." split="word" charDelay={0.04} charDuration={0.4} baseDelay={0.1} />
          </div>
          <div>
            <TypingReveal text="United in Purpose." split="word" charDelay={0.04} charDuration={0.4} baseDelay={0.45} />
          </div>
        </motion.div>
        <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 700 }}>
          From paints and coatings to engineering, agriculture, and homeopathic care — a diverse portfolio united by
          a commitment to quality, innovation, and long-term impact.
        </motion.p>
      </motion.div>
    </section>
  );
}
