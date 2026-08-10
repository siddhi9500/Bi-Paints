"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    tag: "Homes & Living",
    description: "Creating beautiful, comfortable and functional spaces with our consumer paints and premium custom kitchens.",
    image: "/wwd-impact-0.jpg",
  },
  {
    tag: "Commercial Spaces",
    description: "Solutions for offices, retail, hospitality and demanding commercial environments requiring heavy duty wear protection.",
    // Figma's source asset for this card was the Government of India Ministry of
    // Defence emblem (an unrelated placeholder mix-up) — reusing the "BI Services"
    // office photo from this same design instead.
    image: "/wwd-intro-services.jpg",
  },
  {
    tag: "Infrastructure",
    description: "High performance protective coatings that extend the life and safety of national assets, bridges, and transport hubs.",
    image: "/wwd-impact-2.jpg",
  },
  {
    tag: "Industrial",
    description: "Chemical, heat and extreme weather resistance solutions engineered for major manufacturing and petrochemical pipelines.",
    image: "/wwd-impact-3.jpg",
  },
  {
    tag: "Architecture & Design",
    description: "Enabling premium high-end specifications by pairing aesthetic textures with world-class product durability.",
    image: "/wwd-impact-4.jpg",
  },
  {
    tag: "Institutional",
    description: "Certified low-emission, highly durable solutions built for schools, healthcare hubs, and public spaces.",
    image: "/wwd-impact-5.jpg",
  },
];

export default function WhatWeDoImpactGridSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
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
              Where We Make An Impact
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-1px", color: "#0b1f3a", margin: 0 }}>
            Solutions for every space. Built for every possibility.
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.06)} className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 24 }}>
          {CARDS.map((c) => (
            <motion.div
              key={c.tag}
              variants={cardUp}
              className="flex items-center"
              style={{ gap: 24, padding: 24, border: "1px solid #eaeaea" }}
            >
              <div className="relative shrink-0 overflow-hidden" style={{ width: 140, height: 100, borderRadius: 4 }}>
                <Image src={c.image} alt={c.tag} fill className="object-cover" sizes="140px" />
              </div>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <span className="uppercase" style={{ fontWeight: 700, fontSize: 12, letterSpacing: "2px", color: "#d9a441" }}>
                  {c.tag}
                </span>
                <p style={{ fontWeight: 400, fontSize: 15, lineHeight: 1.5, color: "#20252b" }}>{c.description}</p>
                <Link href="/products" className="group inline-flex items-center" style={{ gap: 6, paddingTop: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 12, color: "#0b1f3a" }}>Learn More</span>
                  <ArrowRight size={12} color="#0b1f3a" className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
