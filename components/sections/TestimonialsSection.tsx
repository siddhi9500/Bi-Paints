"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, House } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;
const GAP = 24;

const TESTIMONIALS = [
  // {
  //   quote:
  //     "BI Paints has been our coating partner for years. The quality, durability, and on-time delivery are consistently outstanding across all our large-scale projects.",
  //   name: null,
  //   company: null,
  //   avatar: null,
  // },
  {
    quote:
      "The industrial coatings from BI Paints withstand our toughest environments. Exceptional product quality backed by ISO-certified processes and rigorous QC.",
    name: "Rajesh Mehta",
    company: "ARCELOR MITTAL, India",
    avatar: "/review-1.jpg",
  },
  {
    quote:
      "Working with BI Paints has been a seamless experience. Their protective coatings for our logistics infrastructure are durable, cost-effective, and reliable.",
    name: "Anita Sharma",
    company: "Adani Logistics",
    avatar: "/review-2.jpg",
  },
  {
    quote:
      "BI Group's diversified portfolio makes them a unique partner. From high-performance coatings to lifestyle products, they bring quality in everything they do.",
    name: "Suresh Patil",
    company: "Industrial Client",
    avatar: "/review-3.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const count = w < 768 ? 1 : 2;
    setVisibleCount(count);
    setCardWidth((w - GAP * (count - 1)) / count);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="page-container flex flex-col gap-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader icon={House} eyebrow="Client Testimonials" title="Trusted Partners" />
          <div className="flex items-center gap-3 shrink-0 mb-1">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-heading/20 text-heading transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={15} strokeWidth={2} />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-heading/20 text-heading transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:border-primary hover:text-primary"
            >
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -(index * (cardWidth + GAP)) }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ gap: `${GAP}px` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="shrink-0 flex flex-col justify-between gap-8 bg-white border border-black/10 rounded-[10px] p-8"
                style={{ width: cardWidth > 0 ? cardWidth : `calc(50% - ${GAP / 2}px)`, minHeight: 220 }}
              >
                <p className="text-body text-ink leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-cream">
                    {t.avatar && (
                      <Image src={t.avatar} alt={t.name ?? ""} fill className="object-cover" sizes="64px" />
                    )}
                  </div>
                  {t.name && (
                    <div className="flex flex-col">
                      <span className="text-body font-medium text-heading">{t.name}</span>
                      <span className="text-small text-ink/60">{t.company}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
