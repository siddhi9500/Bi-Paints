"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardUp, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: "5,000+", label: "Team Members" },
  { value: "25+", label: "Locations" },
  { value: "1,200+", label: "Dealers & Partners" },
  { value: "35+", label: "Years of Experience" },
];

export default function WhatWeDoPeopleSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100, borderBottom: "1px solid #eaeaea" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col lg:flex-row items-center"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col items-start flex-1" style={{ gap: 40 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                Our People
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
              People behind the progress.
            </h2>
            <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
              Our people bring together expertise, creativity and commitment across every part of the BI Group
              ecosystem — from engineering to interior design.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer(0.06)} className="grid grid-cols-2 w-full" style={{ gap: 24 }}>
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-start" style={{ gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 36, color: "#d9a441" }}>{s.value}</span>
                <span className="uppercase" style={{ fontWeight: 700, fontSize: 12, letterSpacing: "1px", color: "#0b1f3a" }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/careers"
              className="inline-flex items-center"
              style={{ gap: 12, background: "#0b1f3a", padding: "16px 32px", borderRadius: 4 }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Life at BI Group
              </span>
              <ArrowRight size={16} color="#ffffff" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={cardUp} className="relative w-full flex-1 overflow-hidden" style={{ height: 480, borderRadius: 8 }}>
          <Image src="/wwd-workplace.jpg" alt="BI Group workplace" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>
      </motion.div>
    </section>
  );
}
