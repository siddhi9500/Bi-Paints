"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_OUT, staggerContainer, viewportOnce } from "@/lib/motion";

// Local variants tuned to this component's spec — kept here rather than in
// the shared lib since the exact durations (0.5s heading / 0.4s body /
// 0.6-0.8s image) are specific to this brief, not the site-wide rhythm.
const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

const headingVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const bodyVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const hoverTap = { duration: 0.18, ease: EASE_OUT };

export default function AboutJourneySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="w-full flex flex-col lg:flex-row items-stretch"
      style={{ minHeight: 570 }}
    >
      <motion.div variants={imageVariant} className="relative w-full lg:flex-1" style={{ height: 570 }}>
        <Image src="/about-journey-building.jpg" alt="BI Group headquarters building" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </motion.div>

      <div className="bg-white flex flex-1 flex-col justify-center" style={{ gap: 32, padding: "64px 72px" }}>
        <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
          <motion.p
            variants={headingVariant}
            className="uppercase"
            style={{ fontWeight: 800, fontSize: 34, lineHeight: "42px", letterSpacing: "2px", color: "#0f1f3d", margin: 0 }}
          >
            Our Journey
          </motion.p>
          <motion.p variants={bodyVariant} style={{ fontWeight: 400, fontSize: 15, lineHeight: "24px", color: "#4b5563", margin: 0 }}>
            Dive into the journey of how a commodity trading firm became one of the most dynamic industrial
            conglomerates in India.
          </motion.p>
        </div>

        <motion.div variants={bodyVariant} className="flex flex-col items-start w-full" style={{ gap: 16 }}>
          <div className="flex flex-col items-start w-full" style={{ gap: 10 }}>
            <div className="flex items-center w-full" style={{ height: 16 }}>
              <span className="shrink-0" style={{ width: 12, height: 12, borderRadius: 6, background: "#1a5276" }} />
              <span className="flex-1" style={{ height: 2, background: "#1a5276" }} />
              <span className="shrink-0" style={{ width: 12, height: 12, borderRadius: 6, border: "2px solid #1a5276", background: "#fff" }} />
            </div>
            <div className="flex items-center justify-between w-full">
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1a5276" }}>2012</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1a5276" }}>2026</span>
            </div>
          </div>

          <motion.div
            className="self-end"
            whileHover={{ scale: 1.03, transition: hoverTap }}
            whileTap={{ scale: 0.97, transition: hoverTap }}
          >
            <Link
              href="/about/journey"
              className="group inline-flex items-center hover:opacity-90"
              style={{
                gap: 10,
                background: "#1a5276",
                padding: "12px 20px",
                borderRadius: 10,
                boxShadow: "0px 8px 10px rgba(15,31,61,0.09)",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 14, color: "#ffffff" }}>View Timeline</span>
              <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
