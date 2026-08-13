"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { EASE_OUT, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

export default function WhatWeDoFinalCtaSection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <Image src="/wwd2-final-cta.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "rgba(11,31,58,0.9)" }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container relative flex flex-col items-center text-center"
        style={{ gap: 32 }}
      >
        <motion.div variants={fadeUp} className="flex items-center" style={{ gap: 8 }}>
          <span style={{ width: 12, height: 2, background: "#ffffff" }} />
          <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#ffffff" }}>
            Partner With Us
          </span>
        </motion.div>
        <motion.h2 variants={fadeUp} style={{ fontWeight: 800, fontSize: 56, lineHeight: 1.15, color: "#ffffff", margin: 0, maxWidth: 800 }}>
          Let&apos;s build what&apos;s next.
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.7)", maxWidth: 700 }}>
          Whether you&apos;re looking for the right solution, planning a project or exploring a partnership, BI
          Group is ready to work with you.
        </motion.p>

        <motion.div variants={staggerContainer(0.06)} className="flex flex-col sm:flex-row items-center" style={{ gap: 24 }}>
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
                Talk to BI Group
              </span>
              <ChevronRight size={16} color="#0b1f3a" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/products"
              className="inline-flex items-center"
              style={{ gap: 12, background: "transparent", padding: "16px 32px", borderRadius: 4, border: "1px solid #ffffff" }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Explore Our Businesses
              </span>
              <ChevronRight size={16} color="#ffffff" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
