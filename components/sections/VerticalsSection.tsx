"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  cardUp,
  fadeUp,
  fadeUpSmall,
  hoverLiftCard,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
} from "@/lib/motion";

const VERTICALS = [
  {
    borderColor: "#e8e0ce",
    tag: "Primary Business",
    tagBg: "#e0f2fe",
    tagColor: "#1a5276",
    title: "BI Paints India",
    subtitle: "Paints & Coatings",
    subtitleColor: "#1a5276",
    description:
      "World-class protective, decorative, marine, and industrial coatings trusted by India's top enterprises.",
    image: "/vertical-paints-card.jpg",
    href: "/products/paints",
  },
  {
    borderColor: "#e8e8e8",
    tag: "Wellness",
    tagBg: "#e0f2fe",
    tagColor: "#1b2d4f",
    title: "Wellness Solutions",
    subtitle: "Homeopathy",
    subtitleColor: "#1b2d4f",
    description:
      "Holistic homeopathic formulations rooted in traditional science, crafted for the modern Indian lifestyle.",
    image: "/vertical-wellness-card.jpg",
    href: "/products/homeopathy",
  },
  {
    borderColor: "#e8e8e8",
    tag: "Lifestyle",
    tagBg: "#ffe7e0",
    tagColor: "#e63928",
    title: "Fashion & Lifestyle",
    subtitle: "Lifestyle Brand",
    subtitleColor: "#1a5276",
    description:
      "Contemporary collections that blend timeless aesthetics with modern functionality for the discerning consumer.",
    image: "/vertical-fashion-card.jpg",
    href: "/products/textile",
  },
];

export default function VerticalsSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-end"
        style={{ gap: 56 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center w-full"
          style={{ gap: 16 }}
        >
          <span
            className="uppercase"
            style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}
          >
            Our Businesses
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 48, color: "#0f1f3d" }}>Our Verticals</h2>
          <p
            className="mx-auto"
            style={{ fontWeight: 400, fontSize: 18, lineHeight: "30px", color: "#555", maxWidth: 680 }}
          >
            A diversified conglomerate spanning paints &amp; coatings, wellness, and lifestyle -
            built on decades of excellence and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-3 w-full"
          style={{ gap: 32 }}
        >
          {VERTICALS.map((v) => (
            <motion.div
              key={v.title}
              variants={cardUp}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
            >
              <Link
                href={v.href}
                className="group flex flex-col h-full overflow-hidden bg-white"
                style={{
                  border: `1px solid ${v.borderColor}`,
                  borderRadius: 20,
                  boxShadow: "0px 8px 32px 0px rgba(15,31,61,0.08)",
                }}
              >
                <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-col items-start bg-white" style={{ gap: 12, padding: 28 }}>
                  <span
                    className="inline-flex items-center w-fit"
                    style={{
                      background: v.tagBg,
                      color: v.tagColor,
                      fontWeight: 600,
                      fontSize: 12,
                      padding: "4px 12px",
                      borderRadius: 20,
                    }}
                  >
                    {v.tag}
                  </span>
                  <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>{v.title}</h3>
                  <span style={{ fontWeight: 500, fontSize: 14, color: v.subtitleColor }}>{v.subtitle}</span>
                  <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "24px", color: "#555" }}>
                    {v.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpSmall}
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center hover:opacity-90"
            style={{
              gap: 10,
              background: "#1a5276",
              padding: "16px 40px",
              borderRadius: 12,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 16, color: "#ffffff" }}>View All Businesses</span>
            <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
