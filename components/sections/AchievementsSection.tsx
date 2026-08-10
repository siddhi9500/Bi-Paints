"use client";

import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: "14+", label: "Years Experience" },
  { value: "500+", label: "Dealer Network" },
  { value: "1M+", label: "Litres Production" },
  { value: "100%", label: "Quality Commitment" },
];

export default function AchievementsSection() {
  return (
    <section style={{ background: "#0b2d5b", paddingTop: "calc(var(--header-height) + 100px)", paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#ffc72c" }} />
            <span
              className="uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#ffc72c" }}
            >
              Milestones of Trust
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#ffffff" }}>Our Achievements</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 24 }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={cardUp}
              className="flex flex-col items-center text-center"
              style={{
                gap: 16,
                padding: 40,
                borderRadius: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{ fontWeight: 800, fontSize: 48, lineHeight: "56px", color: "#ffc72c", margin: 0 }}>
                {s.value}
              </p>
              <p style={{ fontWeight: 600, fontSize: 16, color: "#ffffff", margin: 0 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
