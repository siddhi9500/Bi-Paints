"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { EASE_OUT, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// Figma: Closing CTA, node 4445:291
export default function BiFoundationClosingCtaSection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <Image src="/bi-foundation-closing-cta.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,26,0.65) 0%, #0f1f3d 100%)" }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="relative flex flex-col items-center text-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 32 }}
      >
        <motion.h2 variants={passThroughVariants} style={{ fontWeight: 700, fontSize: 34, color: "#ffffff" }}>
          <TypingReveal text="Together, We Can Make a Difference." split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", maxWidth: 640 }}>
          Every contribution, every initiative, and every small step can help build a better tomorrow. Join us in
          shaping a sustainable and inclusive future.
        </motion.p>
      </motion.div>
    </section>
  );
}
