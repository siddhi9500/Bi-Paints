"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: chairmans-message-section, node 3117:287
export default function ChairmanMessageSection() {
  return (
    <section style={{ background: "#f9fafb", padding: "120px 0" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 80 }}
      >
        <div className="flex flex-col items-start flex-1" style={{ gap: 38 }}>
          <motion.div variants={fadeUp}>
            <Quote size={48} className="text-[#d97706]" strokeWidth={1.5} />
          </motion.div>
          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-pt-serif)", fontWeight: 500, fontSize: 22, lineHeight: "40px", color: "#1b1b2f", margin: 0 }}>
            &quot;At BI Group, we believe that true growth comes from building with integrity, innovating with
            purpose, and serving with commitment. Our journey from a single paint company to a diversified
            industrial group reflects our unwavering dedication to India&apos;s progress.&quot;
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#1b1b2f" }}>Bhikam Jain</span>
            <span
              className="font-inter uppercase"
              style={{ fontWeight: 600, fontSize: 14, letterSpacing: "1px", color: "#d97706" }}
            >
              Chairman &amp; Founder, BI Group
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative w-full shrink-0 overflow-hidden"
          style={{ maxWidth: 386, height: 430, borderRadius: 16, border: "1px solid #ede8df" }}
        >
          <ScrollRevealImage>
            <Image src="/about-chairman.jpg" alt="Bhikam Jain, Chairman & Founder, BI Group" fill className="object-cover" sizes="(min-width: 1024px) 386px, 100vw" />
          </ScrollRevealImage>
        </motion.div>
      </motion.div>
    </section>
  );
}
