"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
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
];

// Figma: sustainability-section, node 3147:259
export default function AboutSustainabilitySection() {
  return (
    <section className="bg-white" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 80 }}
      >
        <motion.div
          variants={cardUp}
          className="relative w-full lg:flex-1 overflow-hidden shrink-0"
          style={{ height: 408, maxWidth: 631, borderRadius: 24, border: "1px solid #ede8df" }}
        >
          <ScrollRevealImage>
            <Image src="/about-eco-factory.jpg" alt="BI Group sustainable manufacturing" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </ScrollRevealImage>
        </motion.div>

        <div className="flex flex-col items-start flex-1" style={{ gap: 32 }}>
          <div className="flex flex-col items-start w-full" style={{ gap: 16 }}>
            <motion.div variants={fadeUp} className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 16, height: 2, background: "#d97706" }} />
              <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#d97706" }}>
                Green Future
              </span>
            </motion.div>
            <motion.h2 variants={passThroughVariants} style={{ fontSize: 32, lineHeight: 1.15, color: "#1b1b2f", fontWeight: 700 }}>
              <TypingReveal text="Commitment to Sustainability" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
            </motion.h2>
            <motion.span variants={fadeUp} style={{ width: 40, height: 4, borderRadius: 2, background: "#d97706" }} />
          </div>

          <motion.p variants={fadeUpSmall} style={{ fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#4b5563" }}>
            At BI Group, we actively design our processes to minimize footprint. Our manufacturing campuses employ
            advanced wastewater recycling and green-energy infrastructure to construct self-reliant ecosystem units.
          </motion.p>

          <motion.div variants={staggerContainer(0.1)} className="flex flex-col items-start w-full" style={{ gap: 20 }}>
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={fadeUpSmall} className="flex items-start w-full" style={{ gap: 16 }}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 44, height: 44, borderRadius: 12, background: "#fef9e7" }}
                >
                  <Leaf size={20} className="text-[#d97706]" />
                </span>
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#1b1b2f" }}>{f.title}</span>
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
