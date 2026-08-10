"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "@/lib/motion";

export default function JourneyHeroSection() {
  return (
    <section style={{ background: "#f9fafb", paddingTop: 100, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="page-container flex flex-col"
        style={{ gap: 40, paddingTop: "var(--header-height)" }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 24 }}>
          <h1 style={{ fontWeight: 500, fontSize: 56, lineHeight: "64px", color: "#1b1b2f", margin: 0 }}>
            Our Journey
          </h1>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: "30.6px", color: "#4b5563", maxWidth: 900, margin: 0 }}>
            From a ₹100 paint shop in Surat to building one of India&apos;s most ambitious paint manufacturing
            companies — a story of relentless growth, bold vision, and unwavering commitment.
          </p>
        </motion.div>

        <motion.div
          variants={cardUp}
          className="relative w-full overflow-hidden"
          style={{ height: 420, borderRadius: 16 }}
        >
          <Image src="/journey-hero.jpg" alt="BI Paints manufacturing" fill priority className="object-cover" sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.13) 100%)" }}
          />
          <motion.div
            variants={fadeUpSmall}
            className="absolute flex flex-col items-start"
            style={{
              left: 40,
              bottom: 40,
              gap: 8,
              padding: 20,
              borderRadius: 10,
              background: "rgba(255,255,255,0.9)",
              border: "1px solid #e5e7eb",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: 16, color: "#1b1b2f" }}>Since 2008 · Surat, India</span>
            <span style={{ fontWeight: 400, fontSize: 14, color: "#4b5563" }}>BI Paints India Pvt. Ltd.</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
