"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VIEW = { once: true, margin: "-60px" } as const;

// Pin centers as % of the 1400×773 map image, read off the actual artwork.
const PINS = [
  { label: "Dubai", left: 41.1, top: 22.0, size: 9, isHQ: false },
  { label: "Gujarat (HQ)", left: 63.9, top: 44.0, size: 14, isHQ: true },
  { label: "Maldives", left: 92.1, top: 35.6, size: 9, isHQ: false },
  { label: "Bangladesh", left: 79.3, top: 54.6, size: 9, isHQ: false },
  { label: "Thailand", left: 76.4, top: 67.0, size: 9, isHQ: false },
  { label: "Sri Lanka", left: 71.4, top: 75.7, size: 9, isHQ: false },
];

const EXPORT_COUNTRIES = [
  { name: "Dubai", color: "#1b4676" },
  { name: "Thailand", color: "#0e9aa7" },
  { name: "Bangladesh", color: "#3f9142" },
  { name: "Sri Lanka", color: "#d6488f" },
  { name: "Maldives", color: "#f5a200" },
];

function PulsePin({
  left,
  top,
  size,
  delay,
  isHQ,
}: {
  left: number;
  top: number;
  size: number;
  delay: number;
  isHQ: boolean;
}) {
  const color = isHQ ? "#0e9aa7" : "#f5a200";
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
          background: color,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: delay + 0.4 }}
      />
      <span
        className="block rounded-full"
        style={{ width: size, height: size, background: color, boxShadow: "0 0 0 2px rgba(255,255,255,0.9)" }}
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
          className="max-w-3xl mb-8"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#f5a200" }}>
            At A Glance
          </p>
          <h2
            className="leading-tight font-extrabold mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1b4676", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
          >
            Our Global Footprint
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed" style={{ maxWidth: 640 }}>
            BI Paints has achieved a continuous trend of growth, reaching in the domestic
            and international scenarios, a leading position in Paint and Coating
            Technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative w-full rounded-2xl p-3 sm:p-5"
          style={{
            background: "linear-gradient(135deg, #f7f9fc 0%, #eef1f6 100%)",
            border: "1px solid rgba(27,70,118,0.08)",
            boxShadow: "0 25px 60px -30px rgba(27,70,118,0.35)",
          }}
        >
          <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "1400 / 773" }}>
            <Image
              src="/global-footprint-map.png"
              alt="BI Paints global footprint — headquartered in Gujarat, exporting to Dubai, Thailand, Bangladesh, Sri Lanka and Maldives"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            {PINS.map((pin, i) => (
              <PulsePin key={pin.label} left={pin.left} top={pin.top} size={pin.size} isHQ={pin.isHQ} delay={0.4 + i * 0.15} />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-5 px-2 pt-4 pb-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600">
              <span className="block rounded-full" style={{ width: 9, height: 9, background: "#0e9aa7" }} />
              Headquarters — Gujarat
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600">
              <span className="block rounded-full" style={{ width: 9, height: 9, background: "#f5a200" }} />
              Export Markets
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
