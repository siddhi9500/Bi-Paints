"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, fadeUpSmall, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton } from "@/lib/motion";

// Figma: BI Foundation hero, node 4445:211
export default function BiFoundationHeroSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center" style={{ paddingTop: "var(--header-height)", height: 640 }}>
      <Image src="/bi-foundation-hero.jpg" alt="Children learning in a classroom supported by BI Foundation" fill priority className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,10,26,0.65) 0%, rgba(10,10,26,0.35) 55%, #0f1f3d 100%)" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="relative flex flex-col items-start px-6 sm:px-10 lg:px-35"
        style={{ gap: 24 }}
      >
        <motion.p variants={fadeUpSmall} className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "3px", color: "#c8963e" }}>
          BI Foundation
        </motion.p>
        <motion.h1 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 48, lineHeight: 1.2, color: "#ffffff", maxWidth: 800 }}>
          <TypingReveal text="Building a Better Tomorrow, Together." split="word" charDelay={0.05} charDuration={0.5} baseDelay={0.15} />
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", maxWidth: 620 }}>
          At BI Foundation, we believe growth is meaningful when it creates a positive impact on people, communities, and the environment.
        </motion.p>

        <motion.div
          variants={fadeUpSmall}
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
        >
          <Link
            href="#focus"
            className="inline-flex items-center"
            style={{ background: "#c8963e", padding: "14px 32px", borderRadius: 24 }}
          >
            <span className="font-inter" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
              Discover Our Impact →
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ChevronDown size={20} color="#ffffff" />
      </motion.div>
    </section>
  );
}
