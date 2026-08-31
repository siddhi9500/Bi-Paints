"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardUp, hoverLiftCard, staggerContainer, viewportOnce } from "@/lib/motion";

const DIVISIONS = [
  {
    title: "BI Painting Solution",
    description:
      "Premium interior and exterior decorative paints, textured finishes, and protective coatings crafted for longevity and timeless beauty.",
    image: "/category-painting.jpg",
    href: "/products/paints",
  },
  {
    title: "BI Modular Kitchen",
    description:
      "State-of-the-art modular kitchens and bespoke interior cabinets combining intelligent space efficiency with premium materials.",
    image: "/category-kitchen.jpg",
    href: "/products",
  },
  {
    title: "BI Electronics",
    description:
      "Smart consumer electronics, energy-efficient air conditioning systems, and automation hardware built for modern living.",
    image: "/category-electronics.jpg",
    href: "/products",
  },
  {
    title: "BI Homeopathic",
    description:
      "Natural, holistic healthcare and wellness products crafted under rigorous quality standards, trusted by families nationwide.",
    image: "/category-homeopathic.jpg",
    href: "/products/homeopathy",
  },
  {
    title: "BI Agriculture",
    description:
      "Innovative bio-fertilizers, soil health solutions, and sustainable farming inputs engineered to boost crop yields.",
    image: "/category-agriculture.jpg",
    href: "/products",
  },
  {
    title: "BI Engineering",
    description:
      "Heavy engineering fabrication, infrastructural painting services, and custom structural solutions powering industrial progress.",
    image: "/category-engineering.jpg",
    href: "/products",
  },
  {
    title: "BI Coil Coating",
    description:
      "Advanced prepainted steel and aluminum coils with durable protective paint barriers designed to withstand extreme coastal weathering.",
    image: "/category-coil-coating.jpg",
    href: "/products",
  },
  {
    title: "BI Foundation",
    description:
      "Our philanthropic arm directing key social impact initiatives across primary healthcare, rural education, and clean water access.",
    image: "/category-foundation.jpg",
    href: "/bi-foundation",
  },
  {
    title: "BI Air Conditioner",
    description:
      "Reliable and energy-efficient air conditioning solutions for homes, offices, and commercial spaces — engineered for comfort in every climate.",
    image: "/category-air-conditioner.jpg",
    href: "/products",
  },
];

// Figma: All Businesses directory grid, node 4475:217
export default function BusinessesDirectoryGridSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 lg:px-35"
        style={{ gap: 32 }}
      >
        {DIVISIONS.map((division) => (
          <motion.div key={division.title} variants={cardUp} whileHover={hoverLiftCard}>
            <Link
              href={division.href}
              className="group flex flex-col h-full overflow-hidden bg-white"
              style={{ border: "1px solid rgba(13,25,48,0.1)", borderRadius: 16, boxShadow: "0px 12px 32px rgba(0,0,0,0.04)" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col items-start" style={{ gap: 12, padding: 28 }}>
                <div className="flex items-center justify-between w-full">
                  <h3 className="truncate" style={{ fontWeight: 700, fontSize: 16, color: "#0f1f3d" }}>
                    {division.title}
                  </h3>
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 32, height: 32, borderRadius: 16, background: "rgba(200,150,62,0.08)" }}
                  >
                    <ArrowRight size={14} className="text-[#c8963e] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#20252b" }}>{division.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
