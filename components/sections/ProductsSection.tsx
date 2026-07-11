"use client";

/* ────────────────────────────────────────────────────────────────────────
 * LEGACY — superseded by the Figma redesign below (node 19:463,
 * "div.w-layout-blockcontainer" / "Our Business Verticals" — html.to.design
 * Brixon import). Kept commented out for reference/rollback rather than
 * deleted.
 * ────────────────────────────────────────────────────────────────────────

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
    title: "Homeopathy",
    badge: "BI  Homeopathy",
    features: ["Drilling & Cutting Tools", "Fasteners & Anchors", "Safety Equipment"],
    image: "/homeopathy.jpg",
    href: "/products/homeopathy",
  },
  {
    title: "Fashion & Lifestyle",
    badge: "BI Fashion & Lifestyle",
    features: ["Structural Fashion", "Stainless Steel Work", "Architectural Metalwork"],
    image: "/fashion.jpg",
    href: "/products/fashion",
  },
  {
    title: "HVAC Systems",
    badge: "BI HVAC",
    features: ["Split & Cassette AC Units", "Duct & VRF Systems", "Ventilation & Exhaust"],
    image: "/photo-1637035640133-5f7f6dc20131.avif",
    href: "/products/hvac",
  },
  {
    title: "Modular Kitchens",
    badge: "BI Interiors",
    features: ["Cabinets & Shutters", "Countertops & Sinks", "Kitchen Accessories"],
    image: "/photo-1722605090433-41d1183a792d.avif",
    href: "/products/kitchen",
  },
  {
    title: "Electronics & Home Appliances",
    badge: "Electronics",
    features: ["Fans & Lighting", "Kitchen Appliances", "Electrical Fittings"],
    image: "/photo-1698479603408-1a66a6d9e80f.avif",
    href: "/products/electronics",
  }
];

function ProductCard({ product, index }: { product: (typeof PRODUCTS)[0]; index: number }) {
  const delay = (index % 3) * 0.2 + Math.floor(index / 3) * 0.6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 96 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.25, delay, ease: [0.2, 1, 0.36, 1] }}
      className="group relative bg-white rounded-lg overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 10px rgba(15,30,60,0.08)" }}
      whileHover={{ y: -4 }}
    >
      {/* Image *}
      <div className="relative overflow-hidden" style={{ height: 300 }}>
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
        {/* Badge *}
        <span
          className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded"
          style={{ background: "#f5a200" }}
        >
          {product.badge}
        </span>
        {/* Title *}
        <h3
          className="absolute bottom-0 left-0 right-0 px-4 pb-3 text-white font-bold text-lg leading-tight"
          style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
        >
          {product.title}
        </h3>
      </div>

      {/* Body *}
      <div className="p-5 flex flex-col flex-1">
        <ul className="space-y-2 mb-4">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
              <Check size={15} strokeWidth={2.5} className="mt-0.5" style={{ color: "#f5a200" }} />
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

      {/* Curtain reveal — covers the whole card, then rises away top-anchored so it unveils smoothly from bottom to top *}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "#ffffff", transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={VIEW}
        transition={{ duration: 2.4, delay: delay + 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section className="py-16">
      <div className="page-container">

        {/* Section header *}
        <FadeInSection className="my-4 xl:mb-10">
           <h4
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-3xl"
          >
            Explore Our Business Areas
          </h4>
          <div className="w-12 h-1 bg-accent mt-4 rounded" />
        </FadeInSection>
        {/* 3-column grid *}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

 * ──────────────────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";
import { House, Paintbrush, FlaskConical, Wind, ChefHat } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const VIEW = { once: true, margin: "-60px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const VERTICALS = [
  {
    icon: Paintbrush,
    title: "Paints",
    description: "High-performance industrial & decorative coatings",
  },
  {
    icon: FlaskConical,
    title: "Homeopathy",
    description: "Natural wellness products for everyday health",
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Smart climate control for homes & businesses",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchens",
    description: "Elegant, functional kitchen design solutions",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="What We Offer" title="Our Business Verticals" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10 border-y border-black/10">
          {VERTICALS.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col items-center text-center gap-3.5 px-6 py-10"
            >
              <span className="flex items-center justify-center w-12.5 h-12.5 text-heading">
                <v.icon size={36} strokeWidth={1.25} />
              </span>
              <div className="flex flex-col gap-1">
                <h5 className="text-h5 font-medium text-heading">{v.title}</h5>
                <p className="text-small text-ink">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button href="/services">Explore Our Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
