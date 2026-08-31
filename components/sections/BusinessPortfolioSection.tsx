"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { cardUp, fadeUp, hoverLiftCard, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "@/lib/motion";

// Images pulled directly from Figma's Category Cards Grid (node 3920:265),
// one dedicated photo per business.
const BUSINESSES = [
  {
    title: "BI Painting Solution",
    description:
      "BI Group has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.",
    image: "/category-painting.jpg",
    href: "/products/paints",
  },
  {
    title: "BI Modular Kitchen",
    description:
      "Modern modular kitchen and interior solutions combining functionality, design, and everyday convenience for your dream home.",
    image: "/category-kitchen.jpg",
    href: "/products",
  },
  {
    title: "BI Electronics",
    description:
      "Innovative electronic components, air conditioning systems, and smart technology solutions for modern living and industrial automation.",
    image: "/category-electronics.jpg",
    href: "/products",
  },
  {
    title: "BI Homeopathic",
    description:
      "Natural and holistic homeopathic healthcare products, remedies, and wellness solutions trusted by families across India.",
    image: "/category-homeopathic.jpg",
    href: "/products",
  },
  {
    title: "BI Agriculture",
    description:
      "Explore innovative agricultural solutions, advanced farming techniques, and sustainable practices—designed to boost productivity and nurture growth.",
    image: "/category-agriculture.jpg",
    href: "/products",
  },
  {
    title: "BI Engineering",
    description:
      "Delivering precision engineering services, industrial solutions, and infrastructure development—built to power progress and drive innovation.",
    image: "/category-engineering.jpg",
    href: "/products",
  },
];

function BusinessCard({ business }: { business: (typeof BUSINESSES)[number] }) {
  return (
    <motion.div variants={cardUp} whileHover={hoverLiftCard}>
      <Link
        href={business.href}
        className="group flex flex-col h-full overflow-hidden bg-white"
        style={{ border: "1px solid #eaeaea", borderRadius: 12, boxShadow: "0px 4px 12px rgba(15,31,61,0.05)" }}
      >
        <div className="relative w-full overflow-hidden" style={{ height: 240 }}>
          <ScrollRevealImage>
            <Image
              src={business.image}
              alt={business.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </ScrollRevealImage>
        </div>
        <div className="flex flex-col items-start justify-center bg-white" style={{ gap: 12, padding: 20, height: 140 }}>
          <div className="flex items-center justify-between w-full">
            <h3 style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>{business.title}</h3>
            <ArrowRight size={16} className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <p style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: "#666", margin: 0 }}>{business.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BusinessPortfolioSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center w-full" style={{ gap: 14, maxWidth: 960 }}>
          <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#c8963e" }}>
            One Group. Multiple Possibilities.
          </span>
          <h2 style={{ fontSize: 37, fontWeight: 700 }}>Different businesses. One shared purpose.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#555" }}>
            BI Group brings together businesses that help people build, improve and protect the spaces around
            them. From paints and coatings to modular interiors and specialized services, we combine quality,
            innovation and customer-focused solutions.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full" style={{ gap: 24 }}>
          {BUSINESSES.map((b) => (
            <BusinessCard key={b.title} business={b} />
          ))}
        </motion.div>

        <motion.div variants={fadeUp} whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
          <Link
            href="/businesses"
            className="inline-flex items-center rounded-full"
            style={{ gap: 10, padding: "14px 28px", border: "1.5px solid #1b1b2f" }}
          >
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1b1b2f" }}>View All Businesses</span>
            <ArrowRight size={16} className="text-[#1b1b2f]" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
