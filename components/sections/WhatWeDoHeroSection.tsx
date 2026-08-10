"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_OUT, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton } from "@/lib/motion";

export default function WhatWeDoHeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch" style={{ paddingTop: "var(--header-height)", minHeight: 640 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12)}
        className="flex flex-1 flex-col justify-center"
        style={{ background: "#f5f3ee", gap: 32, padding: "80px 100px" }}
      >
        <motion.div variants={fadeUp} className="flex items-center" style={{ gap: 8 }}>
          <span style={{ width: 12, height: 2, background: "#0b1f3a" }} />
          <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#0b1f3a" }}>
            What We Do
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          style={{ fontWeight: 800, fontSize: 48, lineHeight: 1.1, letterSpacing: "-1px", color: "#0b1f3a", margin: 0 }}
        >
          Building Better. Protecting Better. Living Better.
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "rgba(11,31,58,0.85)" }}>
          BI Group brings together products, solutions and services that create lasting value across homes, businesses
          and infrastructure.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center" style={{ gap: 16 }}>
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/products"
              className="inline-flex items-center"
              style={{
                gap: 12,
                background: "#d9a441",
                padding: "16px 32px",
                borderRadius: 999,
                boxShadow: "0px 10px 12px rgba(0,0,0,0.08)",
              }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#0b1f3a" }}>
                Explore Our Businesses
              </span>
              <ArrowRight size={16} color="#0b1f3a" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/about"
              className="inline-flex items-center bg-white"
              style={{ gap: 12, padding: "16px 32px", borderRadius: 999, border: "1px solid #0b1f3a" }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#0b1f3a" }}>
                Discover BI Group
              </span>
              <ArrowRight size={16} color="#0b1f3a" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: EASE_OUT }}
        className="relative flex-1"
        style={{ minHeight: 420 }}
      >
        <Image src="/wwd-hero.jpg" alt="BI Group building" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </motion.div>
    </section>
  );
}
