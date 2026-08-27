"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "@/components/TypingReveal";
import { fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

// Positions are percentages of the kitchen photo's own box (1100x560 in
// Figma), so they track the image responsively at any rendered size.
const HOTSPOTS = [
  { left: "69.1%", top: "14.3%" },
  { left: "56.4%", top: "64.3%" },
  { left: "83.6%", top: "17.9%" },
];

const TOOLTIP_HOTSPOT = { left: "41.8%", top: "73.6%", label: "Shutter Finish" };

// Figma: section.personalise-kitchen, node 3900:347
export default function KitchenShowcaseSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:pl-35"
        style={{ gap: 80 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center w-full" style={{ gap: 12, maxWidth: 900 }}>
          <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d97706" }}>
            Our Kitchens
          </span>
          <motion.h2 variants={passThroughVariants} style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: "1px", color: "#1b1b2f", fontWeight: 700  }}>
            <TypingReveal text="BI Modular Kitchens for Modern Living" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, letterSpacing: "0.2px", color: "#6b7280" }}>
            Premium kitchen solutions designed for real homes - crafted with attention to detail and built to last.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center w-full" style={{ gap: 80 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start shrink-0 w-full" style={{ gap: 32, maxWidth: 400 }}>
            <div className="flex flex-col items-start" style={{ gap: 16 }}>
              <h3 style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: "-1.5px", color: "#1b1b2f" }}>
                Personalise your kitchen
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>Choose finishes, colours and details.</p>
            </div>

            <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
              <Link
                href="/products"
                className="group inline-flex items-center rounded-full"
                style={{ gap: 10, padding: "12px 24px", border: "1.5px solid #1b1b2f" }}
              >
                <span style={{ fontWeight: 600, fontSize: 14, color: "#1b1b2f" }}>Customise now</span>
                <ArrowRight size={16} className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full" style={{ maxWidth: 1100 }}>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1100 / 560", borderRadius: 32 }}>
              <ScrollRevealImage>
                <Image src="/kitchen-personalise.jpg" alt="Personalise your kitchen" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
              </ScrollRevealImage>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
