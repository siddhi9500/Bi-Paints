"use client";

import { motion } from "framer-motion";
import { FlaskConical, Palette, Workflow } from "lucide-react";
import { fadeScaleIn, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: FlaskConical,
    title: "Product Innovation",
    description:
      "Improving formulations, durability and performance. We develop specialized coatings engineered to withstand extreme climates and everyday wear.",
  },
  {
    icon: Palette,
    title: "Design Innovation",
    description:
      "Creating modern colours, tactile materials and smart living solutions. Our interior systems integrate global technology with intuitive ergonomics.",
  },
  {
    icon: Workflow,
    title: "Process Innovation",
    description:
      "Building smarter systems and more efficient ways of working. From computer-automated manufacturing to optimized supply chains.",
  },
];

export default function WhatWeDoInnovationSection() {
  return (
    <section style={{ background: "#0f1a2e", paddingTop: 100, paddingBottom: 100 }}>
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
            <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#ffffff" }}>
              Innovation
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#ffffff", margin: 0 }}>
            Better ideas create better solutions.
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 800 }}>
            We continuously explore new technologies, materials, designs and processes to meet the changing needs of
            our customers.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.12)} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40 }}>
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeScaleIn}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="flex flex-col items-start"
              style={{ gap: 28, padding: 48, borderRadius: 8, background: "#122b4a" }}
            >
              <motion.div whileHover={{ scale: 1.12, rotate: -4, transition: hoverTransition }}>
                <c.icon size={40} color="#d9a441" strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col items-start" style={{ gap: 16 }}>
                <span className="font-inter uppercase" style={{ fontWeight: 800, fontSize: 18, letterSpacing: "1px", color: "#d9a441" }}>
                  {c.title}
                </span>
                <p style={{ fontWeight: 400, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}>{c.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
