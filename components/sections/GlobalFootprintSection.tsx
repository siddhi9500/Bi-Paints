"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VIEW = { once: true, margin: "-60px" } as const;

// Pin centers as % of the 1400×773 map image, read off the actual artwork.
const PINS = [
  { label: "Dubai", left: 41.1, top: 22.0, size: 9 },
  { label: "Gujarat (HQ)", left: 63.9, top: 44.0, size: 13 },
  { label: "Maldives", left: 92.1, top: 35.6, size: 9 },
  { label: "Bangladesh", left: 79.3, top: 54.6, size: 9 },
  { label: "Thailand", left: 76.4, top: 67.0, size: 9 },
  { label: "Sri Lanka", left: 71.4, top: 75.7, size: 9 },
];

function PulsePin({ left, top, size, delay }: { left: number; top: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEW}
      transition={{ duration: 0.4, delay, ease: "backOut" }}
    >
      <motion.span
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          top: "50%",
          left: "50%",
          background: "#f5a200",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: delay + 0.4 }}
      />
      <span
        className="block rounded-full"
        style={{ width: size, height: size, background: "#f5a200", boxShadow: "0 0 0 2px rgba(255,255,255,0.85)" }}
      />
    </motion.div>
  );
}

export default function GlobalFootprintSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="page-container">

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
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            {PINS.map((pin, i) => (
              <PulsePin key={pin.label} left={pin.left} top={pin.top} size={pin.size} delay={0.4 + i * 0.15} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
