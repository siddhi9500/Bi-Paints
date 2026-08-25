"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeUp,
  fadeUpSmall,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
} from "@/lib/motion";

export default function SustainabilityBannerSection() {
  return (
    // Figma: bi-sustainability-banner, node 3900:462, px-140 py-64
    <section className="relative overflow-hidden w-full flex flex-col justify-center" style={{ padding: "64px 140px", minHeight: 560 }}>
      <Image src="/sustainability-banner-2.jpg" alt="BI Group sustainability" fill className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(11,45,91,0.8) 0%, rgba(11,45,91,0.7) 40%, rgba(11,45,91,0) 75%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="relative flex flex-col items-start"
        style={{ gap: 24, width: 640, maxWidth: "100%" }}
      >
        <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
          <motion.span
            variants={fadeUpSmall}
            className="uppercase w-full"
            style={{ fontWeight: 700, fontSize: 11, letterSpacing: "2px", color: "rgba(255,255,255,0.8)" }}
          >
            At BI Group, we are driven by a purpose to build and protect India&apos;s future
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="w-full"
            style={{ fontFamily: "var(--font-pt-serif)", fontWeight: 700, fontSize: 28, letterSpacing: "-1.5px", color: "#ffffff" }}
          >
            <p style={{ lineHeight: 1.2, margin: 0 }}>Protecting Surfaces,</p>
            <p style={{ lineHeight: 1.2, margin: 0 }}>Preserving the Future</p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="w-full"
            style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}
          >
            Together with our partners and customers, we are committed to delivering
            world-class coatings and solutions that protect infrastructure, empower
            industries, and contribute to a sustainable tomorrow.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUpSmall}
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
        >
          <Link
            href="/sustainability"
            className="group inline-flex items-center justify-center text-white hover:bg-white hover:text-ink-dark"
            style={{
              gap: 10,
              border: "1px solid #ffffff",
              padding: "14px 28px",
              borderRadius: 999,
              transition: "all 0.25s ease-in-out",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 13 }}>Read more about Sustainability</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
