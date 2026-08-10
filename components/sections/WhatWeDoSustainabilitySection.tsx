"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cardUp, fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

const PILLARS = [
  { title: "Responsible Manufacturing", description: "Zero-discharge advanced automated plants prioritizing water recycling and waste minimization." },
  { title: "Sustainable Solutions", description: "Pioneering low-VOC and non-toxic paint formulations certified safe for families and institutional settings." },
  { title: "Responsible Growth", description: "Investing in modern safety, fair living wages and skill training ecosystems for all active partners." },
];

export default function WhatWeDoSustainabilitySection() {
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
          <Image src="/wwd-sustainability.jpg" alt="Sustainable BI Group facility" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>

        <div className="flex flex-col items-start flex-1" style={{ gap: 40 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                Our Commitment
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
              Growing responsibly. Building for tomorrow.
            </h2>
            <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
              We believe long-term growth means creating value for our customers, people, communities and the
              environment.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer(0.06)} className="grid grid-cols-1 sm:grid-cols-3 w-full" style={{ gap: 24 }}>
            {PILLARS.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="flex flex-col items-start" style={{ gap: 12 }}>
                <span className="uppercase" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "1.5px", color: "#d9a441" }}>
                  {p.title}
                </span>
                <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "#20252b" }}>{p.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <a
              href="/sustainability"
              className="inline-flex items-center"
              style={{ gap: 12, background: "#0b1f3a", padding: "16px 32px", borderRadius: 4 }}
            >
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#ffffff" }}>
                Discover Our Commitment
              </span>
              <ChevronRight size={16} color="#ffffff" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
