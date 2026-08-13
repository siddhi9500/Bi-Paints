"use client";

import { motion } from "framer-motion";
import { EASE_OUT, fadeUp, fadeUpSmall, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  { num: "01", title: "Paint", description: "Premium architectural coatings and colour collections." },
  { num: "02", title: "Protect", description: "Engineered shielding for harsh weather and industrial corrosion." },
  { num: "03", title: "Design", description: "Bespoke modular interior systems crafted around your lifestyle." },
  { num: "04", title: "Build", description: "Precision components integrated seamlessly into modern spaces." },
  { num: "05", title: "Support", description: "End-to-end consulting and execution for projects of any scale." },
];

export default function WhatWeDoColourJourneySection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100, borderBottom: "1px solid #eaeaea" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col lg:flex-row items-end" style={{ gap: 64 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start flex-1" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                From Colour To Complete Spaces
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 32, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
              More than products. We create possibilities.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpSmall} className="flex-1" style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
            From protecting surfaces to creating beautiful living spaces, BI Group connects products, design and
            services to deliver complete solutions.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer(0.1)} className="relative flex flex-col sm:flex-row items-start justify-between w-full" style={{ gap: 32 }}>
          <motion.span
            className="hidden sm:block absolute"
            style={{
              left: "10%",
              right: "10%",
              top: 52,
              height: 1,
              transformOrigin: "left",
              background: "repeating-linear-gradient(90deg, #d9a441 0 6px, transparent 6px 12px)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.2 }}
          />
          {STEPS.map((s) => (
            <motion.div key={s.num} variants={fadeUpSmall} className="relative flex flex-col items-center text-center" style={{ gap: 24, flex: 1 }}>
              <motion.span
                whileHover={{ scale: 1.08, transition: hoverTransition }}
                className="flex items-center justify-center shrink-0 bg-white"
                style={{ width: 104, height: 104, borderRadius: 52, border: "2px solid #d9a441" }}
              >
                <span className="flex items-center justify-center" style={{ width: 80, height: 80, borderRadius: 40, background: "#0b1f3a" }}>
                  <span style={{ fontWeight: 800, fontSize: 20, color: "#d9a441" }}>{s.num}</span>
                </span>
              </motion.span>
              <div className="flex flex-col items-center" style={{ gap: 8 }}>
                <span className="uppercase" style={{ fontWeight: 800, fontSize: 14, letterSpacing: "2px", color: "#0b1f3a" }}>
                  {s.title}
                </span>
                <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.4, color: "#555", maxWidth: 220 }}>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
