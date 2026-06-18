"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const VIEW = { once: true, margin: "-40px" } as const;

/* ─── sub-components ─── */

function CircleTile({
  label, image, href, delay,
}: {
  label: string; image: string; href: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex flex-col items-center justify-between bg-white overflow-hidden h-full"
        style={{ border: "1px solid #e8edf4" }}
      >
        {/* Circular image */}
        <div className="flex items-center justify-center flex-1 py-4 px-4">
          <div
            className="relative rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
            style={{ width: 105, height: 105, flexShrink: 0 }}
          >
            <Image src={image} alt={label} fill className="object-cover" sizes="105px" />
          </div>
        </div>

        {/* Label bar */}
        <div
          className="w-full px-3 py-2.5 text-center transition-colors duration-300 group-hover:bg-[#1b4676] flex-shrink-0"
          style={{ background: "#f0f4fa", borderTop: "1px solid #e8edf4" }}
        >
          <span
            className="text-xs font-bold leading-snug transition-colors duration-300 group-hover:text-white"
            style={{ color: "#1b3a5e", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
          >
            {label}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function ImageTile({
  label, image, href, delay,
}: {
  label: string; image: string; href: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEW}
      transition={{ duration: 0.48, delay, ease: "easeOut" }}
      className="relative overflow-hidden group h-full"
    >
      <Link href={href} className="block w-full h-full">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover"
          style={{ transition: "transform 0.6s ease" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,28,55,0.72) 0%, rgba(10,28,55,0.05) 55%, transparent 100%)",
          }}
        />
        {/* Hover tint */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 block"
          style={{ background: "rgba(27,70,118,0.3)", transition: "opacity 0.35s ease" }}
        />
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <span
            className="text-white font-bold text-xs leading-snug"
            style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
          >
            {label}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── main ─── */
export default function ServicesSection() {
  const ROW = 230; // px per row on desktop

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Desktop bento (lg+) ── */}
        <div
          className="hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: `${ROW}px ${ROW}px`,
          }}
        >
          {/* 1 — Info card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center p-6"
            style={{ background: "#1b4676", gridColumn: "1", gridRow: "1" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Wrench size={26} strokeWidth={1.5} className="text-white" />
            </div>
            <p className="text-white/55 text-xs uppercase tracking-widest mb-1">What We Offer</p>
            <h2
              className="text-white font-extrabold leading-tight mb-2"
              style={{
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "1.3rem",
              }}
            >
              Our{" "}
              <span style={{ fontSize: "1.55rem", display: "block" }}>Services</span>
            </h2>
            <p className="text-white/55 text-xs leading-relaxed">
              End-to-end solutions across every product category
            </p>
          </motion.div>

          {/* 2 — HVAC (circle) */}
          <div style={{ gridColumn: "2", gridRow: "1" }}>
            <CircleTile
              label="Design and Build Solutions for HVAC System"
              image="/product-img2.jpg"
              href="/services/hvac"
              delay={0.1}
            />
          </div>

          {/* 3 — Kitchen (full bleed, 2 cols wide) */}
          <div style={{ gridColumn: "3 / 5", gridRow: "1" }}>
            <ImageTile
              label="Design and Build Solutions for Premium Modular Kitchens"
              image="/product-slider0.jpg"
              href="/services/kitchen"
              delay={0.17}
            />
          </div>

          {/* 4 — AMC (full bleed) */}
          <div style={{ gridColumn: "1", gridRow: "2" }}>
            <ImageTile
              label="AMC Services"
              image="/product-img.jpg"
              href="/services/amc"
              delay={0.22}
            />
          </div>

          {/* 5 — Fabrication (circle) */}
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <CircleTile
              label="Design and Build Solutions in Fabrication"
              image="/product-img0.jpg"
              href="/services/fabrication"
              delay={0.28}
            />
          </div>

          {/* 6 — Painting (full bleed) */}
          <div style={{ gridColumn: "3", gridRow: "2" }}>
            <ImageTile
              label="All type of Painting Solutions"
              image="/product-img3.jpg"
              href="/services/painting"
              delay={0.34}
            />
          </div>

          {/* 7 — View all */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEW}
            transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
            style={{ gridColumn: "4", gridRow: "2" }}
          >
            <Link
              href="/services"
              className="group flex flex-col items-center justify-center gap-3 h-full"
              style={{ background: "#1a9fd4" }}
            >
              <div
                className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center text-center px-2 transition-transform duration-300 group-hover:scale-105"
              >
                <span
                  className="text-xs font-bold leading-snug"
                  style={{ color: "#1a9fd4", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
                >
                  View all<br />Services
                </span>
              </div>
              <ArrowRight
                size={18}
                className="text-white/70 group-hover:text-white transition-colors duration-300"
              />
            </Link>
          </motion.div>
        </div>

        {/* ── Mobile / tablet fallback (< lg) ── */}
        <div className="lg:hidden space-y-3">

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex items-center gap-4 p-5"
            style={{ background: "#1b4676" }}
          >
            <div
              className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <Wrench size={20} strokeWidth={1.5} className="text-white" />
            </div>
            <div>
              <h2
                className="text-white font-extrabold text-xl"
                style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
              >
                Our Services
              </h2>
              <p className="text-white/55 text-xs mt-0.5">
                End-to-end solutions across every product category
              </p>
            </div>
          </motion.div>

          {/* Service tiles 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Design and Build Solutions for HVAC System",     image: "/product-img2.jpg",   href: "/services/hvac" },
              { label: "Modular Kitchens",                                image: "/product-slider0.jpg", href: "/services/kitchen" },
              { label: "AMC Services",                                    image: "/product-img.jpg",    href: "/services/amc" },
              { label: "Design and Build Solutions in Fabrication",       image: "/product-img0.jpg",   href: "/services/fabrication" },
              { label: "All type of Painting Solutions",                  image: "/product-img3.jpg",   href: "/services/painting" },
            ].map((t, i) => (
              <div key={t.href} style={{ height: 160 }}>
                <ImageTile label={t.label} image={t.image} href={t.href} delay={i * 0.07} />
              </div>
            ))}
          </div>

          {/* View all */}
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 py-4 font-bold text-white text-sm"
            style={{ background: "#1a9fd4" }}
          >
            View all Services <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
