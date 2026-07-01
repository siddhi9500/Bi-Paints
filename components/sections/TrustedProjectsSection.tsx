"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const GAP = 32; // px gap between cards

const PROJECTS = [
  {
    client: "Ministry of Defence",
    badge: "Defence",
    sector: "Aerospace & Defence Manufacturing",
    location: "Pan India",
    image: "/project-defence.jpg",
  },
  {
    client: "Godrej Group",
    badge: "Industrial",
    sector: "Process Equipment Division",
    location: "Mumbai, Maharashtra",
    image: "/project-godrej.jpg",
  },
  {
    client: "Larsen & Toubro",
    badge: "Industrial",
    sector: "Power Boilers, Hazira",
    location: "Hazira, Gujarat",
    image: "/project-lt.jpg",
  },
  {
    client: "AM/NS Ports",
    badge: "Marine",
    sector: "Marine & Port Infrastructure",
    location: "Gujarat Coast",
    image: "/project-amns-ports.jpg",
  },
];

export default function TrustedProjectsSection() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const count = w < 640 ? 1 : w < 1024 ? 2 : 3;
    setVisibleCount(count);
    setCardWidth((w - GAP * (count - 1)) / count);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, PROJECTS.length - visibleCount);
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="page-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-12"
        >
          <span
            className="block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#f5a200" }}
          >
            Real Projects, Real Clients
          </span>
          <h6
            className="font-extrabold text-navy mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 2.25rem)" }}
          >
            Trusted in the Field
          </h6>

          {/* Arrow navigation — simple line arrows, no circle */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              className="flex items-center gap-1.5 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed group"
              style={{ color: "#f5a200" }}
            >
              <ArrowLeft
                size={20}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              aria-label="Next"
              className="flex items-center gap-1.5 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed group"
              style={{ color: "#f5a200" }}
            >
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>

        {/* ── Carousel ── */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -(index * (cardWidth + GAP)) }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ gap: `${GAP}px` }}
          >
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.client}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="shrink-0"
                style={{ width: cardWidth > 0 ? cardWidth : `calc(${100 / 3}% - ${(GAP * 2) / 3}px)` }}
              >
                {/* Project image */}
                <div
                  className="relative overflow-hidden rounded-2xl group"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Category badge */}
                <div className="mt-5">
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold text-white uppercase tracking-wide"
                    style={{ background: "#f5a200" }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Project name */}
                <h3
                  className="font-bold text-navy mt-4 mb-1 leading-snug"
                  style={{ fontSize: "1.05rem" }}
                >
                  {project.client}
                </h3>

                {/* Sector */}
                <p className="text-gray-500 text-sm mb-1">{project.sector}</p>

                {/* Location in amber */}
                <p className="text-sm font-semibold" style={{ color: "#f5a200" }}>
                  {project.location}
                </p>

                {/* Bottom divider */}
                <div className="mt-5 border-t border-gray-200" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
