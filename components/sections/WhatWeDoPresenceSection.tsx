"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeScaleIn, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

const DISTRIBUTION = [
  { label: "Corporate Office", value: "1" },
  { label: "Manufacturing", value: "4" },
  { label: "Branches", value: "25+" },
  { label: "Dealers & Partners", value: "1,200+" },
  { label: "Distributors", value: "80+" },
  { label: "Service Network", value: "National" },
];

export default function WhatWeDoPresenceSection() {
  return (
    <section style={{ background: "#f4f7fb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col lg:flex-row items-end" style={{ gap: 80 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start flex-1" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                Our Presence
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
              Growing across India.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="flex-1" style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
            From local markets to a growing national footprint, BI Group continues to expand its presence across
            India, bringing world-class products closer to you.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center" style={{ gap: 40 }}>
          <motion.div variants={fadeScaleIn} className="relative w-full flex-1 overflow-hidden bg-white" style={{ height: 500, borderRadius: 8, border: "1px solid #eaeaea" }}>
            <Image src="/wwd-india-map.jpg" alt="BI Group presence across India" fill className="object-contain p-8" sizes="(min-width: 1024px) 55vw, 100vw" />
          </motion.div>

          <motion.div variants={fadeScaleIn} className="flex flex-col items-start w-full lg:w-[420px] shrink-0" style={{ gap: 24, padding: 40, borderRadius: 8, background: "#0b1f3a" }}>
            <span className="uppercase" style={{ fontWeight: 800, fontSize: 18, color: "#d9a441" }}>Our Distribution</span>
            <motion.div variants={staggerContainer(0.05)} className="flex flex-col w-full">
              {DISTRIBUTION.map((d) => (
                <motion.div
                  key={d.label}
                  variants={fadeUp}
                  className="flex items-center justify-between w-full"
                  style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "1px", color: "#ffffff" }}>{d.label}</span>
                  <span style={{ fontWeight: 800, fontSize: 18, color: "#d9a441" }}>{d.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex justify-center w-full"
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          style={{ alignSelf: "center" }}
        >
          <Link
            href="/investors"
            className="inline-flex items-center"
            style={{ gap: 12, background: "#d9a441", padding: "16px 32px", borderRadius: 4 }}
          >
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#0b1f3a" }}>
              Explore Our Locations
            </span>
            <ChevronRight size={16} color="#0b1f3a" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
