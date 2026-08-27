"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Globe2, MapPin, Warehouse } from "lucide-react";
import { EASE_OUT, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { LOCATION_TYPE_LABEL, WHERE_WE_ARE_LOCATIONS, type LocationType } from "@/lib/data/whereWeAre";

const TYPE_ICON: Record<LocationType, typeof Factory> = {
  manufacturing: Factory,
  office: Warehouse,
  distribution: MapPin,
  export: Globe2,
};

// One marker per unique map position — "surat-hq" and "surat-manufacturing"
// share a spot, so they're combined into a single clickable pin.
const MARKERS = [
  { key: "surat", mapPosition: { xPct: 61.2, yPct: 43 }, locationIds: ["surat-hq", "surat-manufacturing"] },
  { key: "export-dubai", mapPosition: { xPct: 41.5, yPct: 23.2 }, locationIds: ["export-dubai"] },
  { key: "export-thailand", mapPosition: { xPct: 76.6, yPct: 65.3 }, locationIds: ["export-thailand"] },
  { key: "export-bangladesh", mapPosition: { xPct: 79.1, yPct: 55.4 }, locationIds: ["export-bangladesh"] },
  { key: "export-srilanka", mapPosition: { xPct: 72.2, yPct: 70.2 }, locationIds: ["export-srilanka"] },
  { key: "export-maldives", mapPosition: { xPct: 89.5, yPct: 35.2 }, locationIds: ["export-maldives"] },
];

// Map image is locked to this aspect ratio (see the container's `aspectRatio`
// style below), so a matching viewBox lets these coordinates line up exactly
// with the percentage-positioned marker buttons with zero distortion.
const MAP_VIEWBOX = { w: 1400, h: 773 };
const HQ_MARKER = MARKERS.find((m) => m.key === "surat")!;

// Flight-path connections from HQ to every export market, arced upward like a
// route line on a network map. Computed once at module scope since the
// marker positions never change at runtime.
const ROUTES = MARKERS.filter((m) => m.key !== "surat").map((marker) => {
  const x1 = (HQ_MARKER.mapPosition.xPct / 100) * MAP_VIEWBOX.w;
  const y1 = (HQ_MARKER.mapPosition.yPct / 100) * MAP_VIEWBOX.h;
  const x2 = (marker.mapPosition.xPct / 100) * MAP_VIEWBOX.w;
  const y2 = (marker.mapPosition.yPct / 100) * MAP_VIEWBOX.h;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * 0.22;
  return { key: marker.key, d: `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}` };
});

export default function WhereWeAreGlobalFootprintSection() {
  const [activeKey, setActiveKey] = useState("surat");
  const activeMarker = MARKERS.find((m) => m.key === activeKey)!;
  const activeLocations = activeMarker.locationIds.map((id) => WHERE_WE_ARE_LOCATIONS.find((l) => l.id === id)!);

  return (
    <section id="global-footprint" className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center mx-auto" style={{ gap: 20, maxWidth: 720 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Global Footprint
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Our Global Footprint
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
            From our home in India to growing international markets, BI Group is building a connected network that
            brings quality products and solutions closer to customers.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col lg:flex-row" style={{ gap: 40 }}>
          <div
            className="relative w-full flex-1 overflow-hidden bg-white"
            style={{ aspectRatio: "1400 / 773", borderRadius: 8, border: "1px solid #eaeaea" }}
          >
            <Image src="/global-footprint-map.png" alt="BI Group global footprint map" fill className="object-cover" sizes="(min-width: 1024px) 65vw, 100vw" />

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${MAP_VIEWBOX.w} ${MAP_VIEWBOX.h}`}
              style={{ pointerEvents: "none" }}
              aria-hidden
            >
              {ROUTES.map((route, i) => {
                const isActive = route.key === activeKey;
                return (
                  <motion.path
                    key={route.key}
                    d={route.d}
                    fill="none"
                    stroke="#d9a441"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.4, ease: EASE_OUT, delay: i * 0.15 }}
                    style={{
                      strokeOpacity: isActive ? 0.95 : 0.28,
                      filter: isActive ? "drop-shadow(0 0 4px rgba(217,164,65,0.65))" : "none",
                      transition: "stroke-opacity 0.4s ease, filter 0.4s ease",
                    }}
                  />
                );
              })}
              {ROUTES.filter((r) => r.key === activeKey).map((route) => (
                <motion.circle
                  key={`pulse-${route.key}`}
                  r={4.5}
                  fill="#d9a441"
                  style={{
                    offsetPath: `path("${route.d}")`,
                    filter: "drop-shadow(0 0 4px rgba(217,164,65,0.8))",
                  }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 2.2, ease: "linear", repeat: Infinity, delay: 1.2 }}
                />
              ))}
            </svg>

            {MARKERS.map((marker) => {
              const isActive = marker.key === activeKey;
              return (
                <button
                  key={marker.key}
                  type="button"
                  aria-label={`Show details for ${marker.key}`}
                  onClick={() => setActiveKey(marker.key)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    left: `${marker.mapPosition.xPct}%`,
                    top: `${marker.mapPosition.yPct}%`,
                    width: 30,
                    height: 30,
                  }}
                >
                  <motion.span
                    animate={isActive ? { scale: [1, 1.35, 1] } : {}}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                    className="rounded-full"
                    style={{
                      width: isActive ? 18 : 12,
                      height: isActive ? 18 : 12,
                      background: isActive ? "#d9a441" : "#0b1f3a",
                      border: "2px solid #ffffff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col w-full lg:w-[360px] shrink-0"
            style={{ gap: 20, padding: 32, borderRadius: 8, background: "#0b1f3a" }}
          >
            {activeLocations.map((loc, i) => {
              const Icon = TYPE_ICON[loc.type];
              return (
                <div key={loc.id} className="flex flex-col" style={{ gap: 12, paddingTop: i > 0 ? 20 : 0, borderTop: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                  <div className="flex items-center" style={{ gap: 10 }}>
                    <Icon size={20} color="#d9a441" strokeWidth={1.75} />
                    <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", color: "#d9a441" }}>
                      {LOCATION_TYPE_LABEL[loc.type]}
                    </span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 22, color: "#ffffff", margin: 0 }}>
                    {loc.name}
                    {loc.placeholder ? "" : `, ${loc.country}`}
                  </h3>
                  <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>
                    {loc.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
