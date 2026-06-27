"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import FadeInSection from "../ui/FadeInSection";

const VIEW = { once: true, margin: "-60px" } as const;

const PRODUCTS = [
  {
    title: "Paints",
    badge: "BI Paints",
    features: ["Interior & Exterior Emulsions", "Texture & Specialty Finishes", "Wood & Metal Coatings"],
    image: "/photo-1562259949-e8e7689d7828.avif",
    href: "/products/paints",
  },
  {
    title: "HVAC Systems",
    badge: "HVAC",
    features: ["Split & Cassette AC Units", "Duct & VRF Systems", "Ventilation & Exhaust"],
    image: "/photo-1637035640133-5f7f6dc20131.avif",
    href: "/products/hvac",
  },
  {
    title: "Modular Kitchens",
    badge: "Interiors",
    features: ["Cabinets & Shutters", "Countertops & Sinks", "Kitchen Accessories"],
    image: "/photo-1722605090433-41d1183a792d.avif",
    href: "/products/kitchen",
  },
  {
    title: "Steel",
    badge: "Steel",
    features: ["TMT Bars & Rods", "Structural Steel Sections", "GI & MS Sheets"],
    image: "/banner4.jpg",
    href: "/products/steels",
  },
  {
    title: "Cement",
    badge: "Cement",
    features: ["OPC & PPC Cement Grades", "Ready-Mix Concrete", "Block & Tile Adhesives"],
    image: "/photo-1508450859948-4e04fabaa4ea.avif",
    href: "/products/cement",
  },
  {
    title: "Chemicals",
    badge: "Chemicals",
    features: ["Construction Chemicals", "Waterproofing Compounds", "Epoxy & Adhesives"],
    image: "/banner1.jpg",
    href: "/products/chemicals",
  },
  {
    title: "Electronics & Home Appliances",
    badge: "Electronics",
    features: ["Fans & Lighting", "Kitchen Appliances", "Electrical Fittings"],
    image: "/photo-1698479603408-1a66a6d9e80f.avif",
    href: "/products/electronics",
  },
  {
    title: "Power Tools & Hardware",
    badge: "Hardware",
    features: ["Drilling & Cutting Tools", "Fasteners & Anchors", "Safety Equipment"],
    image: "/photo-1496247749665-49cf5b1022e9.avif",
    href: "/products/power-tools",
  },
  {
    title: "Fabrication",
    badge: "Fabrication",
    features: ["Structural Fabrication", "Stainless Steel Work", "Architectural Metalwork"],
    image: "/photo-1599707254554-027aeb4deacd.avif",
    href: "/products/fabrication",
  },
];

function ProductCard({ product, index }: { product: (typeof PRODUCTS)[0]; index: number }) {
  const delay = (index % 3) * 0.12 + Math.floor(index / 3) * 0.06;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group bg-white rounded-lg overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 10px rgba(15,30,60,0.08)" }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,28,55,0.78) 0%, rgba(10,28,55,0.05) 55%, transparent 100%)" }}
        />
        {/* Badge */}
        <span
          className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded"
          style={{ background: "#f5a200" }}
        >
          {product.badge}
        </span>
        {/* Title */}
        <h3
          className="absolute bottom-0 left-0 right-0 px-4 pb-3 text-white font-bold text-lg leading-tight"
          style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
        >
          {product.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <ul className="space-y-2 mb-4">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
              <Check size={15} strokeWidth={2.5} className="flex-shrink-0 mt-0.5" style={{ color: "#f5a200" }} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3" style={{ borderTop: "1px solid #eef1f6" }}>
          <Link
            href={product.href}
            className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-2.5"
            style={{ color: "#1b4676" }}
          >
            Know More <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section className="py-16">
      <div className="page-container">

        {/* Section header */}
        <FadeInSection className="my-4 xl:mb-10">
           <h2
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl font-semibold text-navy"
          >
            Explore Our Business Areas
          </h2>
          <div className="w-12 h-1 bg-accent mt-4 rounded" />
        </FadeInSection>
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
