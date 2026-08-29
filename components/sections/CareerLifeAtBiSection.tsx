"use client";

import { motion } from "framer-motion";
import { ArrowUp, Users, Zap } from "lucide-react";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const VALUES = [
  {
    icon: ArrowUp,
    title: "Grow with purpose",
    description: "Learn across businesses, build new skills and shape a career with real momentum.",
  },
  {
    icon: Users,
    title: "Belong to one team",
    description: "Work with curious, grounded people who value trust, inclusion and shared success.",
  },
  {
    icon: Zap,
    title: "Make a visible impact",
    description: "Solve meaningful challenges for customers, communities and a more sustainable future.",
  },
];

// Figma: Life at BI Group, node 4374:438
export default function CareerLifeAtBiSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 800 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            Life at BI Group
          </p>
          <motion.h2 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 34, color: "#0f1f3d" }}>
            <TypingReveal text="A place to learn, contribute and thrive" split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6b7280" }}>
            Our people bring diverse expertise to one shared mission: creating excellence that lasts.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{ gap: 20, padding: 32, borderRadius: 8, border: "1px solid #e5e7eb" }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 48, height: 48, borderRadius: 8, background: "#edf4f7" }}
              >
                <v.icon size={23} className="text-[#1a5276]" strokeWidth={1.75} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>{v.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6b7280" }}>{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
