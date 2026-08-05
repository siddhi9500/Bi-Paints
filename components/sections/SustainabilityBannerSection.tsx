"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SustainabilityBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    // Figma: bi-sustainability-banner (3021:150), px-120 py-80
    <section ref={ref} className="relative overflow-hidden w-full flex flex-col justify-center" style={{ padding: "80px 120px", minHeight: 640 }}>
      <Image src="/sustainability-banner.jpg" alt="BI Group sustainability" fill className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(11,45,91,0.8) 0%, rgba(11,45,91,0.7) 40%, rgba(11,45,91,0) 75%)",
        }}
      />

      <div className="relative flex flex-col items-start" style={{ gap: 32, width: 840, maxWidth: "100%" }}>
        <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="uppercase w-full"
            style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "rgba(255,255,255,0.8)" }}
          >
            At BI Group, we are driven by a purpose to build and protect India&apos;s future
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="w-full"
            style={{ fontWeight: 800, fontSize: 52, letterSpacing: "-1.5px", color: "#ffffff" }}
          >
            <p style={{ lineHeight: 1.15, margin: 0 }}>Protecting Surfaces,</p>
            <p style={{ lineHeight: 1.15, margin: 0 }}>Preserving the Future</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="w-full"
            style={{ fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}
          >
            Together with our partners and customers, we are committed to delivering
            world-class coatings and solutions that protect infrastructure, empower
            industries, and contribute to a sustainable tomorrow.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
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
            <span style={{ fontWeight: 600, fontSize: 15 }}>Read more about Sustainability</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
