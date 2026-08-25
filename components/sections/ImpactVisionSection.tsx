"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

// Figma: section.impact-vision, node 3900:238
export default function ImpactVisionSection() {
  return (
    <section className="bg-white overflow-hidden relative" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="relative flex items-center py-8 lg:py-0 lg:h-92 px-6 sm:px-10 lg:px-35"
      >
        <div className="flex flex-col items-start" style={{ gap: 25, maxWidth: 1181 }}>
          <motion.p
            variants={fadeUp}
            className="font-inter uppercase"
            style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}
          >
            Creating Excellence
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: "1px", color: "#172645", fontWeight: 700   }}>
            From Paints to Engineering - Multiple Businesses, One Vision of Excellence
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.7, letterSpacing: "0.2px", color: "#20252b" }}>
            Our mission is to develop world-class products and services that adhere to international quality standards.
          </motion.p>
          <motion.div variants={fadeUp} whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
            <Link
              href="/about"
              className="group inline-flex items-center rounded-full"
              style={{ gap: 10, padding: "12px 24px", border: "1.5px solid #1b1b2f" }}
            >
              <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "2px", color: "#1b1b2f" }}>Read More</span>
              <ArrowRight size={16} className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="hidden lg:block absolute w-[39vw] max-w-[781px]"
          style={{ right: 81, bottom: 0, transform: "translateY(-50%)", aspectRatio: "781 / 320", mixBlendMode: "multiply" }}
        >
          <Image src="/impact-vision-skyline.png" alt="" aria-hidden fill className="object-contain object-right" sizes="781px" />
        </motion.div>
      </motion.div>
    </section>
  );
}
