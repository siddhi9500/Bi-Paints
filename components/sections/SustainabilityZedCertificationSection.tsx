"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: section-zed-certification, node 4230:188
export default function SustainabilityZedCertificationSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <div className="flex flex-col items-start flex-1" style={{ gap: 16 }}>
          <motion.p
            variants={fadeUp}
            className="font-inter uppercase"
            style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}
          >
            Zed Certification
          </motion.p>
          <motion.h2 variants={passThroughVariants} style={{ fontSize: 32, lineHeight: "42px" }}>
            <TypingReveal text="MSME Sustainable (ZED) Certification" split="word" charDelay={0.045} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <motion.h3 variants={fadeUp} style={{ fontSize: 20, fontWeight: 700 }}>
            Committed to Zero Defect. Zero Effect.
          </motion.h3>
          <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: "26px", color: "#20252b" }}>
            Our ZED certification reflects our commitment to quality manufacturing, environmentally responsible
            processes, social responsibility, and creating a positive impact on our people, community, and planet.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative w-full shrink-0 overflow-hidden"
          style={{ width: "28vw", maxWidth: 500, aspectRatio: "676 / 806", borderRadius: 8 }}
        >
          <ScrollRevealImage>
            <Image src="/sustainability-zed-certificate.png" alt="MSME Sustainable (ZED) Certification — BI Paints India" fill className="object-contain" sizes="(min-width: 1024px) 500px, 60vw" />
          </ScrollRevealImage>
        </motion.div>
      </motion.div>
    </section>
  );
}
