"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, fadeUpSmall, staggerContainer } from "@/lib/motion";

// Figma: Career hero, node 4374:431
export default function CareerHeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: "var(--header-height)" }}>
      <div className="relative w-full" style={{ height: 580 }}>
        <Image src="/career-hero.jpg" alt="BI Group team collaborating" fill priority className="object-cover" sizes="100vw" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(6, 31, 64, 0.96) 0%, rgb(42 55 70 / 78%) 14.4%, rgb(220 223 227 / 34%) 100%)",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15)}
          className="relative h-full flex flex-col justify-end items-start px-6 sm:px-10 lg:pl-35"
          style={{ gap: 20, paddingTop: 60, paddingBottom: 58 }}
        >
          <motion.p variants={fadeUpSmall} className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}>
            Build What Matters
          </motion.p>
          <motion.h1 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 36, lineHeight: 1.08, color: "#ffffff", maxWidth: 700 }}>
            <TypingReveal text="Create impact. Grow with BI Group." split="letter" charDelay={0.014} charDuration={0.4} baseDelay={0.2} />
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 590 }}>
            Join a team that turns ambitious ideas into enduring products, spaces and infrastructure across India.
          </motion.p>


        </motion.div>
      </div>
    </section>
  );
}
