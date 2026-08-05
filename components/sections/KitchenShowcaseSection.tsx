"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Layers, LayoutGrid, SlidersHorizontal } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="page-container flex flex-col items-center" style={{ gap: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center w-full"
          style={{ gap: 24 }}
        >
          <span className="uppercase" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}>
            Our Kitchens
          </span>
          <h2 className="mx-auto" style={{ fontWeight: 700, fontSize: 52, color: "#0f1f3d", maxWidth: 900 }}>
            BI Modular Kitchens for Modern Living
          </h2>
          <p className="mx-auto" style={{ fontWeight: 400, fontSize: 18, lineHeight: "30px", color: "#555", maxWidth: 760 }}>
            Designed for the modern Indian home - premium finishes, smart storage solutions, and
            lifetime warranty. From contemporary minimalist to classic elegant styles.
          </p>
        </motion.div>

        <div className="flex flex-col w-full" style={{ gap: 24 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative w-full overflow-hidden"
            style={{ height: 560, borderRadius: 24, boxShadow: "0px 18px 40px -12px rgba(0,0,0,0.08)" }}
          >
            <Image src="/kitchen-hero.jpg" alt="BI Modular Kitchen" fill className="object-cover" sizes="100vw" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 24 }}>
            {STYLES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE }}
                className="group relative overflow-hidden"
                style={{ height: 260, borderRadius: 20, boxShadow: "0px 14px 30px -10px rgba(0,0,0,0.07)" }}
              >
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full" style={{ gap: 24 }}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE }}
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
                style={{ width: 48, height: 48, borderRadius: 16, background: "#e0f2fe", color: "#1a5276" }}
              >
                <f.icon size={24} strokeWidth={2} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d" }}>{f.title}</h3>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "#555" }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
        >
          <Link
            href="/products"
            className="flex items-center justify-center hover:opacity-90"
            style={{
              background: "#1a5276",
              padding: "16px 28px",
              borderRadius: 999,
              boxShadow: "0px 14px 15px rgba(26,82,118,0.2)",
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15, color: "#ffffff" }}>Explore Kitchen Collections →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
