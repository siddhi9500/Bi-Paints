"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_OUT, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton } from "@/lib/motion";

export default function WhatWeDoHeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: "var(--header-height)", minHeight: 640 }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <Image src="/wwd2-hero.jpg" alt="BI Group coating application" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE_OUT }}
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.75) 100%), radial-gradient(60% 60% at 50% 50%, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.25) 100%)" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15, 0.3)}
        className="relative flex flex-col items-center justify-center text-center mx-auto"
        style={{ minHeight: 560, gap: 28, maxWidth: 680 }}
      >
        <motion.h1 variants={fadeUp} style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.1, color: "#ffffff", margin: 0 }}>
          What we do
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
          BI Group brings together paints, coatings, and surface solutions that transform and protect homes,
          businesses and infrastructure.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center" style={{ gap: 16 }}>
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/products"
              className="inline-flex items-center"
              style={{ gap: 8, background: "#eda633", padding: "13px 28px", borderRadius: 24 }}
            >
              <span style={{ fontWeight: 500, fontSize: 14, color: "#ffffff" }}>Explore Our Businesses</span>
              <ArrowRight size={15} color="#ffffff" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/about"
              className="inline-flex items-center"
              style={{ gap: 8, padding: "12px 28px", borderRadius: 24, border: "1.5px solid #ffffff" }}
            >
              <span style={{ fontWeight: 500, fontSize: 14, color: "#ffffff" }}>Discover BI Group</span>
              <ArrowRight size={15} color="#ffffff" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
