"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeUpSmall,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
  EASE_OUT,
} from "@/lib/motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export default function CareerBannerSection() {
  return (
    // Figma: section.behind-coating, node 3900:336, aspect-[1440/600]
    <section className="font-inter relative overflow-hidden w-full" style={{ aspectRatio: "1819 / 563" }}>
      <Image src="/career-banner-2.jpg" alt="Career at BI Group" fill className="object-cover object-center" sizes="100vw" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0) 50%)",
        }}
      />

      {/* Content Container: pl-140 pr-40 py-80, width 760, gap-32 */}
      <div className="relative h-full flex items-center pl-6 sm:pl-10 lg:pl-35" style={{ paddingRight: 40 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="flex flex-col items-start"
          style={{ gap: 32, maxWidth: 760 }}
        >
          {/* Text Stack: gap-20 */}
          <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
            <motion.h2
              variants={slideIn}
              className="w-full"
              style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: "-1.5px", color: "#ffffff" }}
            >
              Career at BI Group
            </motion.h2>

            <motion.div
              variants={slideIn}
              style={{ fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.85)" }}
            >
              <p style={{ lineHeight: 1.7, margin: 0 }}>We believe in people who are passionate,driven and ready </p>
              <p style={{ lineHeight: 1.7, margin: 0 }}>to make a difference. </p>
              <p style={{ lineHeight: 1.7, margin: 0 }}>Explore opportunities and grow with India&apos;s</p>
              <p style={{ lineHeight: 1.7, margin: 0 }}> trusted paint company.</p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpSmall}
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center hover:bg-white/10"
              style={{
                gap: 10,
                padding: "12px 24px",
                borderRadius: 24,
                border: "1.5px solid #ffffff",
                transition: "background-color 0.25s ease-in-out",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 14, color: "#ffffff" }}>Learn more</span>
              <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* jacket-logo watermark, bottom-right */}
      <div className="absolute hidden sm:block" style={{ bottom: 143, right: 391, width: 160, mixBlendMode: "multiply", opacity: 0.85 }}>
        <Image src="/bi-paints-logo.svg" alt="" aria-hidden width={775} height={151} style={{ width: "100%", height: "auto" }} />
      </div>
    </section>
  );
}
