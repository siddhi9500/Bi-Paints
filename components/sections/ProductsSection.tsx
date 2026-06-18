"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const PRODUCTS = [
  {
    title: "Paints",
    features: ["Oil Paint", "Enamel Paint", "Emulsion Paint", "Cement Paint", "Bituminous Paint"],
    image: "/product-img3.jpg",
    href: "/products/paints",
  },
  {
    title: "HVAC Systems",
    features: ["Dx Airconditioning System", "VRF System", "Chiller System (Air Cooled and Water Cooled)"],
    image: "/product-img2.jpg",
    href: "/products/hvac",
  },
  {
    title: "Electronics & Appliances",
    features: ["Refrigerators", "Washing Machines", "Televisions", "Water Purifiers", "Microwave Ovens"],
    image: "/product-img1.jpg",
    href: "/products/electronics",
  },
  {
    title: "Modular Kitchen",
    features: ["Fully Fitted Modular Kitchens", "Customised Cabinet Solutions", "Premium Hardware & Accessories"],
    image: "/product-img0.jpg",
    href: "/products/kitchen",
  },
  {
    title: "Steels",
    features: ["TMT Re-bars", "Plates", "MS Pipes", "Round Pipes", "Square Pipes"],
    image: "/product-img.jpg",
    href: "/products/steels",
  },
  {
    title: "Cement",
    features: ["All types used in Construction Industry"],
    image: "/product-slider0.jpg",
    href: "/products/cement",
  },
  {
    title: "Chemicals",
    features: ["All Civil Construction Related Chemicals"],
    image: "/product-slider.jpg",
    href: "/products/chemicals",
  },
  {
    title: "Power Tools",
    features: ["Drilling Machines", "Angle Grinders", "Electric Screwdrivers", "Cutting Tools"],
    image: "/product-img1.jpg",
    href: "/products/power-tools",
  },
  {
    title: "Hardware",
    features: ["Door & Window Fittings", "Fasteners & Anchors", "Locks & Handles"],
    image: "/product-img0.jpg",
    href: "/products/hardware",
  },
  {
    title: "Fabrication",
    features: ["Structural Steel Fabrication", "Custom Metal Works", "Site Fabrication Services"],
    image: "/product-img2.jpg",
    href: "/products/fabrication",
  },
];

function ProductCard({ product, index }: { product: (typeof PRODUCTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.08, ease: "easeOut" }}
      className="group bg-white rounded-lg overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
    >
      {/* Image with gradient overlay */}
      <div className="relative overflow-hidden" style={{ height: 160 }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(27,70,118,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
        />
        <h3
          className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 text-white font-bold text-sm leading-tight"
          style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
        >
          {product.title}
        </h3>
      </div>

      {/* Features list */}
      <div className="p-3 flex flex-col flex-1">
        <ul className="space-y-1 mb-3 flex-1">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600 leading-snug">
              <span
                className="mt-1 flex-shrink-0 rounded-full"
                style={{ width: 5, height: 5, background: "#1b4676", marginTop: 4 }}
              />
              {f}
            </li>
          ))}
          {product.features.length > 4 && (
            <li className="text-xs text-gray-400 pl-3">+{product.features.length - 4} more</li>
          )}
        </ul>

        <Link
          href={product.href}
          className="inline-flex items-center gap-1 text-xs font-semibold text-white rounded px-3 py-1.5 self-start transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
          style={{ background: "#1b4676" }}
        >
          Know More &rarr;
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-14" style={{ background: "#f0f0f0" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h2
            className="text-2xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
          >
            Our Products
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            A comprehensive range of quality products for every construction &amp; home need.
          </p>
          <div className="mt-3 h-0.5 w-12 rounded" style={{ background: "#1b4676" }} />
        </motion.div>

        {/* 5-column grid — all 10 products, 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
