"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeUp, hoverLiftCard, staggerContainer, viewportOnce } from "@/lib/motion";

const PARTNERS = Array.from({ length: 8 }, (_, i) => i);

export default function WhatWeDoPartnershipsSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100, borderBottom: "1px solid #eaeaea" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Our Partnerships
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Trusted partnerships. Certified standards.
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555", maxWidth: 640 }}>
            Every BI Group vertical is backed by verified quality certifications and long-standing supplier and
            trade partnerships built on consistency and trust.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.05)} className="grid grid-cols-2 sm:grid-cols-4 w-full" style={{ gap: 24 }}>
          {PARTNERS.map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={hoverLiftCard}
              className="flex flex-col items-center justify-center"
              style={{ gap: 12, height: 140, borderRadius: 8, border: "1px solid #eaeaea", background: "#f5f3ee" }}
            >
              <ShieldCheck size={28} color="#d9a441" strokeWidth={1.5} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", color: "#0b1f3a" }}>
                Verified Seal
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
