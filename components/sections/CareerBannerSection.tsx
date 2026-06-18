"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden w-full"
      style={{ height: "clamp(360px, 42vw, 520px)" }}
    >
      {/* Background image */}
      <Image
        src="/product-img2.jpg"
        alt="Career at BI Group"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />

      {/* Gradient overlay — strong on the left, fades to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,28,55,0.93) 0%, rgba(10,28,55,0.72) 42%, rgba(10,28,55,0.18) 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full">
          <div className="max-w-lg">

            {/* Overline */}
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Join Our Team
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-white font-extrabold leading-tight mb-4"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
              }}
            >
              Career at BI Group
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              We employ passionate professionals across India — engineers, technicians,
              sales leaders, and operations specialists. Find out how we support your
              growth and discover your next opportunity with BI Group.
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
            >
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white rounded-full px-7 py-3 group"
                style={{
                  background: "#1b4676",
                  boxShadow: "0 4px 20px rgba(27,70,118,0.45)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1b4676";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1b4676";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
