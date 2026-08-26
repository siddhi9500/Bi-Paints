"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const PILLARS = [
  {
    title: "People First",
    description: "Our workforce, painters, partners and the communities we operate in define our success.",
    image: "/sustainability-pillar-people.jpg",
    bullets: [
      "Employee safety & wellbeing",
      "Painter & dealer training academies",
      "Skill development programs",
      "Community empowerment initiatives",
    ],
  },
  {
    title: "Planet Preservation",
    description: "We actively reduce our environmental footprint across the production and supply chain.",
    image: "/sustainability-pillar-planet.jpg",
    bullets: [
      "Eco-friendly low-VOC products",
      "Carbon emission reduction targets",
      "Waste reduction & active recycling",
      "Responsible energy & water usage",
    ],
  },
  {
    title: "Product Responsibility",
    description: "Our portfolio is engineered to deliver excellence without compromising safety or quality.",
    image: "/sustainability-pillar-product.jpg",
    bullets: [
      "Sustainable coating solutions",
      "Long-lasting protective formulations",
      "Environment-conscious manufacturing",
      "Rigorous product safety standards",
    ],
  },
];

// Figma: section-three-pillars, node 4204:271
export default function SustainabilityPillarsSection() {
  return (
    <section id="pillars" className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 800 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            Our Core Pillars
          </p>
          <motion.h2 variants={passThroughVariants} style={{ fontSize: 36, lineHeight: 1.2 }}>
            <TypingReveal text="Three pillars of our commitment" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white overflow-hidden"
              style={{ border: "1px solid #e5e7eb", borderRadius: 16, boxShadow: "0px 12px 32px rgba(0,0,0,0.04)" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
                <ScrollRevealImage>
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </ScrollRevealImage>
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: 16, padding: 28 }}>
                <h3 style={{ fontSize: 22 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>{p.description}</p>
                <div className="flex flex-col items-start w-full" style={{ gap: 12, paddingTop: 8 }}>
                  {p.bullets.map((b) => (
                    <div key={b} className="flex items-center w-full" style={{ gap: 8 }}>
                      <span className="shrink-0" style={{ width: 6, height: 6, borderRadius: 3, background: "#c8963e" }} />
                      <span style={{ fontSize: 13, color: "#20252b" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
