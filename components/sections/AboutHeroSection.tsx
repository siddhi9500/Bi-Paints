"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { EASE_OUT, fadeScaleIn, fadeUp } from "@/lib/motion";

export default function AboutHeroSection() {
  return (
    <section className="font-inter" style={{ paddingTop: "var(--header-height)" }}>
      {/* Figma: hero-section, node 3117:195 — height 650px */}
      <div className="relative w-full overflow-hidden" style={{ height: 578 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeScaleIn}
          className="absolute inset-0"
        >
          <Image src="/about-hero.jpg" alt="BI Group infrastructure" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(11,45,91,0.55)" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          className="relative h-full flex items-center justify-center text-center"
          style={{ fontWeight: 800, fontSize: 64, lineHeight: "76px", color: "#ffffff" }}
        >
          About BI Group
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="absolute flex items-center bg-white"
          style={{
            left: 60,
            bottom: 40,
            gap: 12,
            paddingLeft: 20,
            paddingRight: 24,
            paddingTop: 16,
            paddingBottom: 16,
            borderRadius: 8,
            boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
          }}
        >
          <span
            className="flex items-center justify-center shrink-0"
            style={{ width: 36, height: 36, borderRadius: 18, background: "#0b2d5b" }}
          >
            <MapPin size={18} className="text-white" />
          </span>
          <span className="flex flex-col" style={{ gap: 4 }}>
            <span style={{ fontWeight: 700, fontSize: 14, lineHeight: "18px", color: "#0b2d5b" }}>
              BI Group Head Office
            </span>
            <span style={{ fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#6b7280" }}>
              Surat, Gujarat, India
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
