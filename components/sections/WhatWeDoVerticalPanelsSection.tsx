"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardUp, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const PANELS = [
  {
    tag: "BI Paints",
    description: "Transforming surfaces with colour, protection and performance. Premium coatings engineered for the toughest environments.",
    cta: "Explore Coatings",
    href: "/products/paints",
    image: "/wwd-panel-paints.jpg",
    imageHeight: 340,
  },
  {
    tag: "BI Modular",
    description: "Creating functional and beautiful spaces for modern living. Tailored modular kitchens and storage systems with global hardware.",
    cta: "Explore Interiors",
    href: "/products",
    image: "/wwd-panel-modular.jpg",
    imageHeight: 280,
  },
  {
    tag: "BI Services",
    description: "Supporting customers with expertise, execution and solutions. Comprehensive project execution and technical consulting.",
    cta: "Explore Services",
    href: "/products",
    image: "/wwd-panel-services.jpg",
    imageHeight: 320,
  },
];

export default function WhatWeDoVerticalPanelsSection() {
  return (
    <section style={{ background: "#0b1f3a", paddingTop: 100, paddingBottom: 100 }}>
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
            <span style={{ width: 12, height: 2, background: "#ffffff" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#ffffff" }}>
              Our Businesses
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-1px", color: "#ffffff", margin: 0 }}>
            Businesses Built Around Real Needs
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", maxWidth: 720 }}>
            Our businesses operate across different categories, but share the same commitment to quality, reliability
            and long-term value.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
          {PANELS.map((p) => (
            <motion.div
              key={p.tag}
              variants={cardUp}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="flex flex-col items-start overflow-hidden"
              style={{ background: "#20252b" }}
            >
              <div className="relative w-full" style={{ height: p.imageHeight }}>
                <Image src={p.image} alt={p.tag} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: 16, padding: 32 }}>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#ffffff", margin: 0 }}>{p.tag}</h3>
                <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.75)" }}>{p.description}</p>
                <Link href={p.href} className="group inline-flex items-center" style={{ gap: 8, paddingTop: 4 }}>
                  <span className="uppercase" style={{ fontWeight: 700, fontSize: 12, letterSpacing: "1px", color: "#d9a441" }}>
                    {p.cta}
                  </span>
                  <ArrowRight size={13} color="#d9a441" className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
