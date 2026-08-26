"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: section-commitment, node 4204:330
export default function SustainabilityCommitmentSection() {
  return (
    <section style={{ background: "#f5f5f5", paddingTop: 60, paddingBottom: 60 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <div className="flex flex-col items-start" style={{ gap: 24, maxWidth: 1000 }}>
          <motion.p
            variants={fadeUp}
            className="font-inter uppercase"
            style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}
          >
            Our Long-Term Vision
          </motion.p>
          <motion.h2 variants={passThroughVariants} style={{ fontSize: 32, lineHeight: 1.2 }}>
            <TypingReveal text="Our Commitment to a Sustainable Future" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.7, color: "#20252b" }}>
            BI Group stands at the intersection of progress and protection. As we build spaces, modular kitchens, and
            paint applications across India, we adhere to strict international quality and sustainability parameters.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.7, color: "#20252b" }}>
            We choose truth over quick claims. Every milestone we share is backed by scientific color laboratory
            audits, sustainable coating certifications, and empirical community metrics. Our drive is simple:
            creating lasting excellence that honors the environment.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative w-full shrink-0 overflow-hidden"
          style={{ height: 340, maxWidth: 640, borderRadius: 16, mixBlendMode: "multiply" }}
        >
          <ScrollRevealImage>
            <Image src="/sustainability-commitment.jpg" alt="Hands holding soil with a young seedling" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </ScrollRevealImage>
        </motion.div>
      </motion.div>
    </section>
  );
}
