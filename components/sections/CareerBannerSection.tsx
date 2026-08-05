"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CareerBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    // Figma: section.behind-coating (2276:440), aspect-[1440/600]
    <section ref={ref} className="font-inter relative overflow-hidden w-full" style={{ aspectRatio: "1440 / 600" }}>
      <Image src="/career-banner.jpg" alt="Career at BI Group" fill className="object-cover object-center" sizes="100vw" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0) 50%)",
        }}
      />

      {/* Content Container: pl-100 pr-40 py-120, width 1230, gap-32 */}
      <div className="relative h-full flex items-center" style={{ paddingLeft: 100, paddingRight: 40 }}>
        <div className="flex flex-col items-start" style={{ gap: 32, maxWidth: 1230 }}>
          {/* Text Stack: gap-20 */}
          <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="w-full"
              style={{ fontWeight: 700, fontSize: 52, lineHeight: 1.15, letterSpacing: "-1.5px", color: "#ffffff" }}
            >
              Career at BI Group
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              style={{ fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.85)" }}
            >
              <p style={{ lineHeight: 1.7, margin: 0 }}>We believe in people who are passionate,</p>
              <p style={{ lineHeight: 1.7, margin: 0 }}>driven and ready to make a difference.</p>
              <p style={{ lineHeight: 1.7, margin: 0 }}>Explore opportunities and grow with</p>
              <p style={{ lineHeight: 1.7, margin: 0 }}>India&apos;s trusted paint company.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
          >
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center hover:opacity-90"
              style={{
                gap: 10,
                background: "#005c8a",
                padding: "14px 28px",
                borderRadius: 4,
                transition: "opacity 0.25s ease-in-out",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 16, color: "#ffffff" }}>Learn more</span>
              <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
