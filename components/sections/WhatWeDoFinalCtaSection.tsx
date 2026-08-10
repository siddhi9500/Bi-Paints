"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

export default function WhatWeDoFinalCtaSection() {
  return (
    <section style={{ background: "#0b1f3a", paddingTop: 120, paddingBottom: 120 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center text-center"
        style={{ gap: 32 }}
      >
        <motion.h2 variants={fadeUp} style={{ fontWeight: 800, fontSize: 42, lineHeight: 1.15, color: "#ffffff", margin: 0, maxWidth: 720 }}>
          Let&apos;s build something lasting, together.
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: 560 }}>
          Whether you&apos;re a homeowner, architect, or business partner — BI Group is ready to bring your vision
          to life.
        </motion.p>

        <motion.div variants={staggerContainer(0.06)} className="flex flex-col sm:flex-row items-center" style={{ gap: 20 }}>
          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center"
              style={{ gap: 12, background: "#d9a441", padding: "16px 32px", borderRadius: 4 }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#0b1f3a" }}>
                Get In Touch
              </span>
              <ArrowRight size={16} color="#0b1f3a" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/about"
              className="inline-flex items-center"
              style={{ gap: 12, background: "transparent", padding: "16px 32px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.4)" }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Learn About Us
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
