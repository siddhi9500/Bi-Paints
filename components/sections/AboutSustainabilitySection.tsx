"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { cardUp, fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "@/lib/motion";

const FEATURES = [
  {
    title: "Eco-Friendly Manufacturing",
    description: "Formulating low-VOC water-based protective finishes.",
  },
  {
    title: "Energy Efficiency",
    description: "Solar-powered plants cutting overall operational emissions.",
  },
  {
    title: "Responsible Sourcing",
    description: "100% trace-monitored raw inputs from certified ethical farms.",
  },
  {
    title: "Waste Reduction",
    description: "Zero-landfill corporate mandates with high local circularity.",
  },
];

export default function AboutSustainabilitySection() {
  return (
    <section style={{ background: "#f4f7fb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col lg:flex-row items-center"
        style={{ gap: 64 }}
      >
        <motion.div
          variants={cardUp}
          className="relative w-full lg:flex-1 overflow-hidden shrink-0"
          style={{ height: 420, borderRadius: 24, border: "1px solid #ede8df" }}
        >
          <Image src="/about-eco-factory.jpg" alt="BI Group sustainable manufacturing" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>

        <div className="flex flex-col items-start flex-1" style={{ gap: 32 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start w-full" style={{ gap: 16 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 16, height: 2, background: "#1a5276" }} />
              <span
                className="uppercase"
                style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#1a5276" }}
              >
                Green Future
              </span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: 36, lineHeight: "44px", color: "#0f1f3d" }}>
              Commitment to Sustainability
            </h2>
            <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
          </motion.div>

          <motion.p variants={fadeUpSmall} style={{ fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#4b5563" }}>
            At BI Group, we actively design our processes to minimize footprint. Our manufacturing campuses employ
            advanced wastewater recycling and green-energy infrastructure to construct self-reliant ecosystem units.
          </motion.p>

          <motion.div variants={staggerContainer(0.1)} className="flex flex-col items-start w-full" style={{ gap: 20 }}>
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={fadeUpSmall} className="flex items-start w-full" style={{ gap: 16 }}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 44, height: 44, borderRadius: 12, background: "#e8f5e9" }}
                >
                  <Leaf size={20} className="text-[#2e7d32]" />
                </span>
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#0f1f3d" }}>{f.title}</span>
                  <span style={{ fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#4b5563" }}>
                    {f.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
