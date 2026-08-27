"use client";

import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const PARTNERS = [
  "Tata Infrastructure",
  "Reliance Heavy",
  "L&T Construction",
  "Adani Ports",
  "Shapoorji Group",
  "JSW Steel",
  "GMR Aviation",
  "DLF Luxury",
  "Godrej Properties",
  "IRCTC Projects",
];

export default function PartnersSection() {
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
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#1a5276" }} />
            <span
              className="font-inter uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#1a5276" }}
            >
              Industry Alliances
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#0f1f3d" }}>Trusted by Leading Industries</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.05)}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full"
          style={{ gap: 20 }}
        >
          {PARTNERS.map((name) => (
            <motion.div
              key={name}
              variants={cardUp}
              className="flex items-center justify-center bg-white text-center"
              style={{ padding: "32px 24px", borderRadius: 12, border: "1px solid #ede8df" }}
            >
              <span style={{ fontWeight: 700, fontSize: 17, color: "#6b7280" }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
