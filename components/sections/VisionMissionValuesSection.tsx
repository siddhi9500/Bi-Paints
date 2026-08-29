"use client";

import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck } from "lucide-react";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: Eye,
    iconBg: "#fef9e7",
    iconColor: "#d97706",
    title: "Vision",
    description:
      "To manufacture sustainable coating solutions by constantly investing in research and development for delivering products that create value for customers and accelerate growth and diversification across paints, modular kitchens, and electronics.",
  },
  {
    icon: Target,
    iconBg: "#fef3c7",
    iconColor: "#b45309",
    title: "Mission",
    description:
      "To become a market leading authority and inspire by providing high-quality, innovative, and competitive industrial and consumer products that meet their evolving needs.",
  },
  {
    icon: ShieldCheck,
    iconBg: "#d1fae5",
    iconColor: "#047857",
    title: "Values",
    description: "Innovation, Quality, Integrity, Sustainability, Customer First.",
  },
];

// Figma: vision-mission-values-section, node 3117:299
export default function VisionMissionValuesSection() {
  return (
    <section style={{ background: "#f9fafb", paddingTop: 120, paddingBottom: 120 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <motion.span variants={fadeUp} className="font-inter uppercase" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#d97706" }}>
            Our Foundation
          </motion.span>
          <motion.h2 variants={passThroughVariants} style={{ fontSize: 32, lineHeight: 1.15, color: "#1b1b2f", fontWeight: 700 }}>
            <TypingReveal text="Vision, Mission & Values" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <motion.span variants={fadeUp} style={{ width: 40, height: 4, borderRadius: 2, background: "#d97706" }} />
        </div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 24 }}>
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white h-full"
              style={{ gap: 24, padding: 40, borderRadius: 16, boxShadow: "0px 6px 12px rgba(15,31,61,0.04)", fontWeight: 700 }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 52, height: 52, borderRadius: 12, background: c.iconBg }}
              >
                <c.icon size={28} color={c.iconColor} strokeWidth={2} />
              </span>
              <h3 style={{ fontSize: 22, color: "#1b1b2f" }}>{c.title}</h3>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "24px", color: "#4b5563" }}>{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
