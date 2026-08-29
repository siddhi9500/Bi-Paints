"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Heart } from "lucide-react";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const REASONS = [
  {
    icon: Briefcase,
    title: "Diverse roles across businesses",
    description: "Explore opportunities in paints, coatings, modular interiors, engineering services and more.",
  },
  {
    icon: Award,
    title: "Recognition for your impact",
    description: "Your contributions are visible and valued across teams, customers and communities.",
  },
  {
    icon: Heart,
    title: "A culture that cares",
    description: "We support your well-being, learning and long-term growth with a people-first approach.",
  },
];

// Figma: Why BI Group, node 4385:186
export default function CareerWhyBiGroupSection() {
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
            Why BI Group
          </p>
          <motion.h2 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 34, color: "#0f1f3d" }}>
            <TypingReveal text="Why build your career with us" split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6b7280" }}>
            From learning across businesses to making a visible impact, here&apos;s what makes BI Group a rewarding
            place to grow.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{ gap: 20, padding: 32, borderRadius: 8, border: "1px solid #e5e7eb" }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 48, height: 48, borderRadius: 8, background: "#edf4f7" }}
              >
                <r.icon size={23} className="text-[#1a5276]" strokeWidth={1.75} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>{r.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6b7280" }}>{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
