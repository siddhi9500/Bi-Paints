"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const MILESTONES = [
  { year: "1991", title: "Foundation", description: "Established as a quality-focused industrial solutions partner." },
  { year: "2002", title: "BI Paints", description: "Launched dedicated premium architectural paint division." },
  { year: "2010", title: "Market Expansion", description: "Scaled distribution networks across key tier-1 metro hubs." },
  { year: "2018", title: "New Verticals", description: "Diversified portfolio into modular kitchens and turnkey interiors." },
  { year: "2024", title: "Growing Network", description: "Surpassed 1,200 active dealer touchpoints nationwide." },
  { year: "2026+", title: "The Future", description: "Pioneering smart, sustainable space solutions for tomorrow." },
];

export default function WhatWeDoJourneyTimelineSection() {
  return (
    <section style={{ background: "#0b1f3a", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 64 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#ffffff" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#ffffff" }}>
              Our Journey
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#ffffff", margin: 0 }}>
            From one vision to a growing group.
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="relative flex flex-col sm:flex-row items-start sm:justify-between w-full" style={{ gap: 32 }}>
          <span className="hidden sm:block absolute" style={{ left: 0, right: 0, top: 15, height: 1, background: "#d9a441" }} />
          {MILESTONES.map((m) => (
            <motion.div key={m.year} variants={fadeUp} className="relative flex flex-col items-start" style={{ gap: 16, minWidth: 160 }}>
              <span
                className="flex items-center justify-center"
                style={{ background: "#d9a441", padding: "6px 16px", borderRadius: 4 }}
              >
                <span style={{ fontWeight: 800, fontSize: 14, color: "#0b1f3a" }}>{m.year}</span>
              </span>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <span className="uppercase" style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1px", color: "#ffffff" }}>
                  {m.title}
                </span>
                <p style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", maxWidth: 220 }}>
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
