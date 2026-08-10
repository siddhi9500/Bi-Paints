"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: "14+ Years", label: "Of Excellence" },
  { value: "10", label: "Business Verticals" },
  { value: "500+", label: "Dealer Network" },
  { value: "20+", label: "States Presence" },
];

export default function AboutOverviewSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 80 }}
      >
        <div className="flex flex-col lg:flex-row items-start" style={{ gap: 56 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start flex-1" style={{ gap: 24 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 16, height: 2, background: "#1a5276" }} />
              <span
                className="uppercase"
                style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#1a5276" }}
              >
                Who We Are
              </span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: 40, lineHeight: "48px", color: "#0f1f3d" }}>About BI Group</h2>
            <p style={{ fontWeight: 600, fontSize: 18, lineHeight: "30px", color: "#0f1f3d" }}>
              Founded in 2012, BI Group is a diversified Indian industrial conglomerate built on a legacy of trust,
              quality, and commitment.
            </p>
            <p style={{ fontWeight: 400, fontSize: 15, lineHeight: "24px", color: "#4b5563" }}>
              What began as a pioneering protective coatings company has rapidly transformed into a multi-business
              enterprise spanning paints, home solutions, modular kitchens, sustainable agriculture, holistic
              homeopathy, electronics, and engineering divisions. Our core philosophy bridges deep industrial
              precision with consumer-centric innovation, ensuring every product delivers exceptional value across
              our e-commerce platforms and retail networks.
            </p>
            <p style={{ fontWeight: 400, fontSize: 15, lineHeight: "24px", color: "#4b5563" }}>
              With our national footprint growing across 20+ states, we take pride in aligning our corporate
              milestones directly with India&apos;s infrastructure development and self-reliance goals.
            </p>
          </motion.div>

          <motion.div
            variants={cardUp}
            className="relative w-full lg:flex-1 overflow-hidden shrink-0"
            style={{ height: 420, borderRadius: 24, border: "1px solid #ede8df" }}
          >
            <Image src="/about-hq.jpg" alt="BI Group headquarters" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 24 }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={cardUp}
              className="flex flex-col items-start"
              style={{ gap: 12, padding: 32, borderRadius: 16, background: "#f4f7fb", border: "1px solid #ede8df" }}
            >
              <p style={{ fontWeight: 800, fontSize: 40, lineHeight: "48px", color: "#1a5276", margin: 0 }}>
                {s.value}
              </p>
              <p style={{ fontWeight: 600, fontSize: 15, color: "#0f1f3d", margin: 0 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
