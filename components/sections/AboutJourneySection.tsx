"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { EASE_OUT, staggerContainer, viewportOnce } from "@/lib/motion";

// Local variants tuned to this component's spec — kept here rather than in
// the shared lib since the exact durations (0.5s heading / 0.4s body /
// 0.6-0.8s image) are specific to this brief, not the site-wide rhythm.
const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

const bodyVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const hoverTap = { duration: 0.18, ease: EASE_OUT };

export default function AboutJourneySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="w-full flex flex-col lg:flex-row items-stretch"
      style={{ minHeight: 570 }}
    >
      <motion.div variants={imageVariant} className="relative w-full lg:flex-1 overflow-hidden" style={{ height: 570 }}>
        <ScrollRevealImage>
          <Image src="/about-journey-building.jpg" alt="BI Group headquarters building" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </ScrollRevealImage>
      </motion.div>

      <div className="bg-white flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-18" style={{ gap: 32, paddingTop: 64, paddingBottom: 64 }}>
        <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
          <motion.p variants={passThroughVariants} className="uppercase" style={{ fontSize: 32, lineHeight: 1.15, letterSpacing: "2px", color: "#0a1b3f", margin: 0 }}>
            <TypingReveal text="Our Journey" split="letter" charDelay={0.03} charDuration={0.35} baseDelay={0} />
          </motion.p>
          <motion.p variants={bodyVariant} style={{ fontWeight: 400, fontSize: 15, lineHeight: "24px", color: "#4b5563", margin: 0 }}>
            Dive into the journey of how a commodity trading firm became one of the most dynamic industrial
            conglomerates in India.
          </motion.p>
        </div>

        <motion.div variants={bodyVariant} className="flex flex-col items-start w-full" style={{ gap: 16 }}>
          <div className="flex flex-col items-start w-full" style={{ gap: 10 }}>
            <div className="flex items-center w-full" style={{ height: 16 }}>
              <span className="shrink-0" style={{ width: 12, height: 12, borderRadius: 6, background: "#d97706" }} />
              <span className="flex-1" style={{ height: 2, background: "#d97706" }} />
              <span className="shrink-0" style={{ width: 12, height: 12, borderRadius: 6, border: "2px solid #d97706", background: "#fff" }} />
            </div>
            <div className="flex items-center justify-between w-full">
              <span style={{ fontWeight: 700, fontSize: 14, color: "#d97706" }}>2012</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#d97706" }}>2026</span>
            </div>
          </div>

          <motion.div
            className="self-end"
            whileHover={{ scale: 1.03, transition: hoverTap }}
            whileTap={{ scale: 0.97, transition: hoverTap }}
          >
            <Link
              href="/about/journey"
              className="group inline-flex items-center rounded-full"
              style={{
                gap: 10,
                padding: "12px 24px",
                border: "1.5px solid #1b1b2f",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 14, color: "#1b1b2f" }}>View Timeline</span>
              <ArrowRight size={16} className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
