"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, MapPin, Users } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  {
    icon: Award,
    value: "14+",
    label: "Years of Excellence",
    description: "Years of building trust and delivering results across industries.",
  },
  {
    icon: Briefcase,
    value: "10",
    label: "Business Verticals",
    description: "Diverse sectors served with balanced solutions and expertise.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Dealer Network",
    description: "Strong partnerships that power distribution and local support.",
  },
  {
    icon: MapPin,
    value: "20+",
    label: "States Presence",
    description: "Nationwide reach with localized operations and consistent delivery.",
  },
];

// Figma: about-overview-section, node 3117:208
export default function AboutOverviewSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col lg:flex-row items-start" style={{ gap: 80 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start flex-1" style={{ gap: 27 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 16, height: 2, background: "#d97706" }} />
              <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d97706" }}>
                Who We Are
              </span>
            </div>
            <motion.p variants={passThroughVariants} style={{ fontSize: 22, lineHeight: "30px", color: "#1b1b2f" }}>
              <TypingReveal
                text="Founded in 2012, BI Group is a diversified Indian industrial conglomerate built on a legacy of trust, quality, and commitment."
                split="word"
                charDelay={0.02}
                charDuration={0.35}
                baseDelay={0}
              />
            </motion.p>
            <p style={{ fontSize: 15, lineHeight: "24px", color: "#4b5563" }}>
              What began as a pioneering protective coatings company has rapidly transformed into a multi-business
              enterprise spanning paints, home solutions, modular kitchens, sustainable agriculture, holistic
              homeopathy, electronics, and engineering divisions. Our core philosophy bridges deep industrial
              precision with consumer-centric innovation, ensuring every product delivers exceptional value across
              our e-commerce platforms and retail networks.
            </p>
            <p style={{ fontSize: 15, lineHeight: "24px", color: "#4b5563" }}>
              With our national footprint growing across 20+ states, we take pride in aligning our corporate
              milestones directly with India&apos;s infrastructure development and self-reliance goals.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full shrink-0" style={{ maxWidth: 720, height: 460 }}>
            <div
              className="absolute overflow-hidden"
              style={{ left: 0, top: 24, width: "63%", height: "82%", borderRadius: 16, transform: "rotate(-0.67deg)" }}
            >
              <ScrollRevealImage>
                <Image src="/about-overview-main.jpg" alt="BI Group logistics and operations" fill className="object-cover" sizes="(min-width: 1024px) 32vw, 60vw" />
              </ScrollRevealImage>
            </div>
            <div
              className="absolute overflow-hidden hidden sm:block"
              style={{ left: "53%", top: "56%", width: "41%", height: "41%", borderRadius: 14, transform: "rotate(1.33deg)" }}
            >
              <ScrollRevealImage>
                <Image src="/about-overview-secondary.jpg" alt="BI Group leadership team in a meeting" fill className="object-cover" sizes="(min-width: 1024px) 20vw, 40vw" />
              </ScrollRevealImage>
            </div>
            <div
              className="hidden sm:flex absolute flex-col items-center justify-center bg-white text-center"
              style={{
                left: "47%",
                top: "53%",
                width: 160,
                padding: "16px 20px",
                borderRadius: 12,
                gap: 4,
                boxShadow: "0px 8px 12px rgba(0,0,0,0.12)",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 40, lineHeight: 1, color: "#d97706" }}>14+</span>
              <span style={{ fontWeight: 500, fontSize: 13, color: "#6b7280" }}>Years Of Excellence</span>
            </div>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer(0.08)} className="flex flex-col sm:flex-row items-start w-full">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={cardUp}
              className="flex flex-col items-start flex-1 w-full"
              style={{ gap: 20, padding: "0 40px", borderLeft: i > 0 ? "1px solid rgba(217,119,6,0.3)" : "none" }}
            >
              <s.icon size={36} className="text-[#1b1b2f]" strokeWidth={1.5} />
              <p style={{ fontSize: 48, color: "#1b1b2f", margin: 0 }}>{s.value}</p>
              <div className="flex flex-col items-start" style={{ gap: 12 }}>
                <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 16, color: "#d97706" }}>{s.label}</span>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4b5563", margin: 0 }}>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
