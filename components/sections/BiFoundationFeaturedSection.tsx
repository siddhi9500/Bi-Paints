"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

// Figma: Featured Initiative, node 4445:282
export default function BiFoundationFeaturedSection() {
  return (
    <section style={{ background: "#f9fafb", paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <motion.div variants={fadeUp} className="relative flex-1 w-full overflow-hidden" style={{ height: 420, borderRadius: 16 }}>
          <Image src="/bi-foundation-featured.jpg" alt="Volunteers planting trees as part of a BI Foundation environmental initiative" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-1 flex-col items-start" style={{ gap: 24 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}>
            Featured Initiative
          </p>
          <h2 style={{ fontWeight: 700, fontSize: 32, color: "#0f1f3d" }}>Creating Change Where It Matters</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#20252b" }}>
            From supporting education to contributing to greener communities, BI Foundation focuses on initiatives
            that create meaningful and lasting change. We partner with local schools and environmental agencies to
            ensure every contribution counts.
          </p>

          <motion.div
            whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
            whileTap={{ ...tapScaleButton, transition: hoverTransition }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center"
              style={{ background: "#0f1f3d", padding: "12px 24px", borderRadius: 24 }}
            >
              <span style={{ fontWeight: 600, fontSize: 14, color: "#ffffff" }}>Explore Our Initiatives →</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
