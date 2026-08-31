"use client";

import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: All Businesses intro, node 4475:213
export default function BusinessesIntroSection() {
  return (
    <section className="bg-white" style={{ borderBottom: "1px solid rgba(13,25,48,0.1)", paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center text-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 20 }}
      >
        <motion.p variants={fadeUp} className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "3px", color: "#c8963e" }}>
          Explore Our Businesses
        </motion.p>
        <motion.h2 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.2, color: "#0f1f3d", maxWidth: 800 }}>
          <TypingReveal text="All Businesses Under One Roof" split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: 16, lineHeight: 1.6, color: "#20252b", maxWidth: 760 }}>
          From high-performance protective paints and modern modular interiors to precision infrastructure
          engineering, BI Group&apos;s diverse verticals are united by a singular commitment to international quality
          and excellence.
        </motion.p>
      </motion.div>
    </section>
  );
}
