"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VIEW = { once: true, margin: "-60px" } as const;

export default function GlobalFootprintSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-10"
        >
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            At A Glance
          </span>
          <h2
            className="font-extrabold text-navy leading-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
            }}
          >
            Global Footprint
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
            BI Paints has achieved a continuous trend of growth, reaching in the domestic
            and international scenarios, a leading position in Paint and Coating
            Technologies.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
            We also export our products to{" "}
            <span className="font-bold text-navy">
              DUBAI, THAILAND, BANGLADESH, SRI LANKA, MALDIVES
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative w-full rounded-lg overflow-hidden"
          style={{ background: "#f7f7f8" }}
        >
          <div className="relative w-full" style={{ aspectRatio: "1400 / 773" }}>
            <Image
              src="/global-footprint-map.png"
              alt="BI Paints global footprint — headquartered in Gujarat, exporting to Dubai, Thailand, Bangladesh, Sri Lanka and Maldives"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center text-gray-500 text-xs sm:text-sm tracking-wide uppercase mt-6"
        >
          Decorative, Protective, Automobile &amp; Marine — Powder Coating and Paint Supplier
        </motion.p>

      </div>
    </section>
  );
}
