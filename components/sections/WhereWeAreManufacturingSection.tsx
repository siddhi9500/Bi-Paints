"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cardUp, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

const FEATURES = [
  "Modern manufacturing infrastructure",
  "Quality-focused production",
  "Scalable capacity",
  "Efficient supply network",
  "Consistent product standards",
];

export default function WhereWeAreManufacturingSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100, borderBottom: "1px solid #eaeaea" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col lg:flex-row items-center"
        style={{ gap: 80 }}
      >
        <motion.div variants={cardUp} className="relative w-full flex-1 overflow-hidden" style={{ height: 480, borderRadius: 8 }}>
          <Image src="/about-warehouse.png" alt="BI Group manufacturing facility" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>

        <div className="flex flex-col items-start flex-1" style={{ gap: 32 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                Manufacturing
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
              Built to deliver.
            </h2>
            <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
              Our manufacturing infrastructure is designed to support consistent quality, efficient production and
              reliable supply across the markets we serve.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer(0.06)} className="flex flex-col items-start w-full" style={{ gap: 14 }}>
            {FEATURES.map((feature) => (
              <motion.div key={feature} variants={fadeUp} className="flex items-center" style={{ gap: 12 }}>
                <CheckCircle2 size={18} color="#d9a441" strokeWidth={2} />
                <span style={{ fontSize: 15, color: "#20252b" }}>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/about"
              className="inline-flex items-center"
              style={{ gap: 12, background: "#0b1f3a", padding: "16px 32px", borderRadius: 4 }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Explore Our Manufacturing
              </span>
              <ArrowRight size={16} color="#ffffff" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
