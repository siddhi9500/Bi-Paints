"use client";

import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: Eye,
    iconBg: "#e0f2fe",
    iconColor: "#1a5276",
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

export default function VisionMissionValuesSection() {
  return (
    <section style={{ background: "#f4f7fb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <span
            className="uppercase"
            style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}
          >
            Our Foundation
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#0f1f3d" }}>Vision, Mission &amp; Values</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 24 }}>
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white h-full"
              style={{ gap: 24, padding: 40, borderRadius: 16, boxShadow: "0px 6px 12px rgba(15,31,61,0.04)" }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 52, height: 52, borderRadius: 12, background: c.iconBg }}
              >
                <c.icon size={26} color={c.iconColor} strokeWidth={2} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>{c.title}</h3>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "21px", color: "#4b5563" }}>{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
