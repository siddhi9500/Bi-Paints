"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, LayoutGrid, SlidersHorizontal } from "lucide-react";
import {
  cardUp,
  fadeScaleIn,
  fadeUp,
  fadeUpSmall,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
} from "@/lib/motion";

const STYLES = [
  { label: "L-Shape", image: "/kitchen-lshape.jpg" },
  { label: "Island", image: "/kitchen-island.jpg" },
  { label: "Modern", image: "/kitchen-modern.jpg" },
];

const FEATURES = [
  { icon: Layers, title: "Premium Materials", description: "High-grade hardware and finishes built to last" },
  { icon: LayoutGrid, title: "Smart Storage", description: "Intelligent space utilization with modular accessories" },
  { icon: SlidersHorizontal, title: "Custom Design", description: "Tailored to your space, lifestyle, and taste" },
];

export default function KitchenShowcaseSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 80 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center w-full"
          style={{ gap: 24 }}
        >
          <span className="uppercase" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            Our Kitchens
          </span>
          <h2 className="mx-auto" style={{ fontWeight: 700, fontSize: 36, maxWidth: 900 }}>
            BI Modular Kitchens for Modern Living
          </h2>
          <p className="mx-auto" style={{ fontWeight: 400, fontSize: 18, lineHeight: "30px", color: "#555", maxWidth: 760 }}>
            Designed for the modern Indian home - premium finishes, smart storage solutions, and
            lifetime warranty. From contemporary minimalist to classic elegant styles.
          </p>
        </motion.div>

        <div className="flex flex-col w-full" style={{ gap: 24 }}>
          <motion.div
            variants={fadeScaleIn}
            className="relative w-full overflow-hidden"
            style={{ height: 560, borderRadius: 24, boxShadow: "0px 18px 40px -12px rgba(0,0,0,0.08)" }}
          >
            <Image src="/kitchen-hero.jpg" alt="BI Modular Kitchen" fill className="object-cover" sizes="100vw" />
          </motion.div>

          <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 24 }}>
            {STYLES.map((s) => (
              <motion.div
                key={s.label}
                variants={cardUp}
                className="group relative overflow-hidden"
                style={{ height: 260, borderRadius: 20, boxShadow: "0px 14px 30px -10px rgba(0,0,0,0.07)" }}
              >
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <span
                  className="absolute"
                  style={{
                    bottom: 16,
                    left: 16,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(8px)",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#0f1f3d",
                  }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 sm:grid-cols-3 w-full" style={{ gap: 24 }}>
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{
                gap: 16,
                padding: 24,
                borderRadius: 20,
                border: "1px solid #ede8df",
                boxShadow: "0px 10px 12px rgba(0,0,0,0.06)",
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{ width: 48, height: 48, borderRadius: 16, background: "#fef9e7", color: "#c8963e" }}
              >
                <f.icon size={24} strokeWidth={2} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 15 }}>{f.title}</h3>
              <p style={{ fontWeight: 400, fontSize: 13, lineHeight: "22px", color: "#555" }}>{f.description}</p>
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
            className="group flex items-center hover:bg-[#1b1b2f]/5"
            style={{
              gap: 10,
              border: "1.5px solid #1b1b2f",
              padding: "12px 24px",
              borderRadius: 999,
              boxShadow: "0px 14px 15px rgba(26,82,118,0.2)",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 14, color: "#1b1b2f" }}>Explore Kitchen Collections</span>
            <ArrowRight size={16} className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
