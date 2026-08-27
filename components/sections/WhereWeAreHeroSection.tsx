"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE_OUT, hoverScaleButton, hoverTransition, tapScaleButton } from "@/lib/motion";

export default function WhereWeAreHeroSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: 680 }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <Image src="/wwa2-hero.jpg" alt="BI Group presence across markets" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE_OUT }}
        className="absolute inset-0"
        style={{ background: "rgba(13,20,38,0.55)" }}
      />

      <div className="page-container relative flex flex-col items-center text-center" style={{ gap: 32, paddingTop: 140, paddingBottom: 140 }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 0.35 }}
            style={{ fontWeight: 700, fontSize: 56, lineHeight: 1.15, color: "#ffffff", margin: 0 }}
          >
            Where We Are
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.75 }}
          style={{ fontWeight: 600, fontSize: 24, lineHeight: 1.35, color: "rgba(255,255,255,0.9)" }}
        >
          Growing our presence. Connecting markets. Delivering solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 1 }}
          className="flex flex-wrap items-center justify-center"
          style={{ gap: 16, paddingTop: 16 }}
        >
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="#global-footprint"
              className="inline-flex items-center justify-center"
              style={{ background: "#0a1628", padding: "14px 28px", borderRadius: 24 }}
            >
              <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Explore Our Presence
              </span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center"
              style={{ padding: "14px 28px", borderRadius: 24, border: "1.5px solid #ffffff" }}
            >
              <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Contact Us
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute left-1/2"
        style={{ bottom: 28, transform: "translateX(-50%)" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} color="rgba(255,255,255,0.75)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
