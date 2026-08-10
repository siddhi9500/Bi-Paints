"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, hoverLiftCard, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  { title: "About Us", description: "Get to know the story, people and purpose behind BI Group.", href: "/about" },
  { title: "Our Journey", description: "Explore the milestones that shaped three decades of growth.", href: "/about/journey" },
  { title: "Our Values", description: "The principles that guide how we build, partner and grow.", href: "/about" },
  { title: "Where We Operate", description: "See our manufacturing, branch and distribution network nationwide.", href: "/about/achievements" },
];

export default function WhatWeDoDiscoverSection() {
  return (
    <section style={{ background: "#f5f3ee", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Learn More
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Discover BI Group.
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.06)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full" style={{ gap: 24 }}>
          {CARDS.map((c) => (
            <motion.div key={c.title} variants={fadeUp} whileHover={hoverLiftCard}>
              <Link
                href={c.href}
                className="flex flex-col items-start justify-between h-full bg-white"
                style={{ gap: 24, padding: 28, borderRadius: 8, border: "1px solid #eaeaea" }}
              >
                <div className="flex flex-col items-start" style={{ gap: 10 }}>
                  <span style={{ fontWeight: 800, fontSize: 19, color: "#0b1f3a" }}>{c.title}</span>
                  <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "#555" }}>{c.description}</p>
                </div>
                <span className="inline-flex items-center" style={{ gap: 8 }}>
                  <span className="uppercase" style={{ fontWeight: 700, fontSize: 12, letterSpacing: "1px", color: "#d9a441" }}>
                    Explore
                  </span>
                  <ArrowRight size={14} color="#d9a441" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
