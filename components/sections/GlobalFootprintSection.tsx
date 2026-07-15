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

const FOOTPRINT_STATS = [
  { value: "6", label: "Countries" },
  { value: "500+", label: "Products" },
  { value: "18+", label: "Years" },
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
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="page-container flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <Image src="/bi-logo.svg" alt="BI Group" width={3305} height={650} style={{ height: 20, width: "auto" }} />
            <span className="w-px h-6 bg-black/10" />
            <span className="text-small font-medium uppercase tracking-[0.14em] text-primary">
              At a Glance
            </span>
          </div>
          <p className="text-body text-ink max-w-2xl">
            BI Paints has achieved a continuous trend of growth, reaching in the domestic
            and international scenarios, a leading position in Paint and Coating
            Technologies.
          </p>
          <div className="rounded-[10px] bg-heading px-6 py-5">
            <p className="text-small font-medium uppercase tracking-wide text-white/60 mb-1.5">
              We also Export Our Products to
            </p>
            <p className="text-body font-medium uppercase tracking-wide text-primary">
              Dubai · Thailand · Bangladesh · Sri Lanka · Maldives
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative w-full rounded-2xl p-3 sm:p-5 bg-cream"
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
            <span className="inline-flex items-center gap-2 text-small font-medium text-ink">
              <span className="block rounded-full" style={{ width: 9, height: 9, background: "#0e9aa7" }} />
              Headquarters — Gujarat
            </span>
            <span className="inline-flex items-center gap-2 text-small font-medium text-ink">
              <span className="block rounded-full" style={{ width: 9, height: 9, background: "#f5a200" }} />
              Export Markets
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-4 border-t border-black/10"
        >
          <div className="flex items-center gap-3 max-w-2xl">
            <span className="w-1 h-6 bg-primary rounded-full shrink-0" />
            <p className="text-small text-ink">
              Decorative, Protective, Automobile &amp; Marine for Powder Coating and Paint
              Supplier
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-10">
            {FOOTPRINT_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                {i > 0 && <span className="w-px h-10 bg-black/10 shrink-0" />}
                <div className="flex flex-col items-center">
                  <span className="text-h3 font-medium text-heading">{stat.value}</span>
                  <span className="text-small text-ink">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
