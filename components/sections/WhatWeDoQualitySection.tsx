"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  { num: "01", title: "Research & Development", description: "Rigorous testing of molecular formulations in controlled laboratory environments." },
  { num: "02", title: "Raw Material Selection", description: "Sourcing certified, premium ingredients that comply with international environmental standards." },
  { num: "03", title: "Manufacturing", description: "High-precision, state-of-the-art automated plants ensure absolute batch consistency." },
  { num: "04", title: "Quality Testing", description: "Every production batch undergoes multi-point chemical and physical endurance checks." },
  { num: "05", title: "Distribution", description: "Optimized, weather-controlled logistical handling safeguards product integrity." },
  { num: "06", title: "Customer", description: "Delivering unmatched performance, seamless service, and lasting aesthetic value." },
];

export default function WhatWeDoQualitySection() {
  return (
    <section style={{ background: "#f5f3ee", paddingTop: 100, paddingBottom: 100 }}>
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
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Our Approach to Quality
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Quality isn&apos;t a step. It&apos;s our standard.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center" style={{ gap: 80 }}>
          <motion.div variants={staggerContainer(0.06)} className="flex flex-col flex-1" style={{ gap: 32 }}>
            {STEPS.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="flex items-start" style={{ gap: 24 }}>
                <span
                  className="flex items-center justify-center shrink-0 bg-white"
                  style={{ width: 48, height: 48, borderRadius: 24, border: "1px solid #d9a441" }}
                >
                  <span style={{ fontWeight: 800, fontSize: 14, color: "#0b1f3a" }}>{s.num}</span>
                </span>
                <div className="flex flex-col items-start" style={{ gap: 4 }}>
                  <span className="uppercase" style={{ fontWeight: 800, fontSize: 15, letterSpacing: "1px", color: "#0b1f3a" }}>
                    {s.title}
                  </span>
                  <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "#555" }}>{s.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={cardUp} className="relative w-full flex-1 overflow-hidden" style={{ height: 600, borderRadius: 8 }}>
            <Image src="/wwd-quality-lab.jpg" alt="Quality testing laboratory" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
