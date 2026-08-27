"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeScaleIn } from "@/lib/motion";

export default function AboutHeroSection() {
  return (
    <section className="font-inter" style={{ paddingTop: "var(--header-height)" }}>
      {/* Figma: hero-section, node 3117:195 */}
      <div className="relative w-full overflow-hidden" style={{ height: 566 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeScaleIn}
          className="absolute inset-0"
        >
          <Image src="/about-hero-2.jpg" alt="BI Group team on the factory floor" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={passThroughVariants}
          className="relative h-full flex items-center justify-center text-center"
          style={{ fontSize: 48, lineHeight: 1.1, color: "#ffffff" }}
        >
          <TypingReveal text="About BI Group" split="letter" charDelay={0.03} charDuration={0.4} baseDelay={0.2} />
        </motion.h1>
      </div>
    </section>
  );
}
