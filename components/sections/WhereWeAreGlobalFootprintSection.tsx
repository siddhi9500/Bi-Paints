"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Globe2, MapPin, Warehouse } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
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
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
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
                    <span className="uppercase" style={{ fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", color: "#d9a441" }}>
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
