"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: Our Purpose, node 4445:220
export default function BiFoundationPurposeSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <motion.div variants={fadeUp} className="flex flex-1 flex-col items-start" style={{ gap: 24 }}>
          <div className="flex items-center" style={{ gap: 16 }}>
            <span style={{ width: 4, height: 40, borderRadius: 2, background: "#c8963e" }} />
            <motion.h2 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 34, color: "#0f1f3d" }}>
              <TypingReveal text="Our Purpose" split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
            </motion.h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#20252b" }}>
            We believe that meaningful growth goes beyond business. Through BI Foundation, we work towards creating
            opportunities, supporting communities, and contributing to a healthier and more sustainable future.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="relative flex-1 w-full overflow-hidden" style={{ height: 380, borderRadius: 16 }}>
          <Image src="/bi-foundation-purpose.jpg" alt="Children in a classroom supported by BI Foundation's education initiatives" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </motion.div>
      </motion.div>
    </section>
  );
}
