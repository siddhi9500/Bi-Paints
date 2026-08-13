"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { STATES_COVERAGE_OPEN_ENDED, STATES_COVERED, WHERE_WE_ARE_LOCATIONS } from "@/lib/data/whereWeAre";

// Position tuned against /wwd-india-map.jpg (1536x672) — roughly where the
// existing Gujarat-area pin sits on that map.
const HQ_POSITION = { xPct: 41.5, yPct: 52.5 };
const SURAT_LOCATIONS = WHERE_WE_ARE_LOCATIONS.filter((l) => l.id === "surat-hq" || l.id === "surat-manufacturing");

export default function WhereWeAreIndiaPresenceSection() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section style={{ background: "#f4f7fb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20, maxWidth: 720 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              India Presence
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Strong roots. Wider reach.
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#555" }}>
            With a strong foundation in India, BI Group continues to expand its market presence through
            manufacturing capabilities, distribution networks and strategic partnerships.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center" style={{ gap: 40 }}>
          <motion.div
            variants={fadeUp}
            className="relative w-full flex-1 overflow-hidden bg-white"
            style={{ height: 440, borderRadius: 8, border: "1px solid #eaeaea" }}
          >
            <Image src="/wwd-india-map.jpg" alt="BI Group presence across India" fill className="object-contain p-6" sizes="(min-width: 1024px) 55vw, 100vw" />

            <button
              type="button"
              aria-label="Surat, Gujarat — Head Office & Manufacturing"
              onClick={() => setHoveredState((v) => (v === "surat" ? null : "surat"))}
              onMouseEnter={() => setHoveredState("surat")}
              onMouseLeave={() => setHoveredState((v) => (v === "surat" ? null : v))}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ left: `${HQ_POSITION.xPct}%`, top: `${HQ_POSITION.yPct}%`, width: 34, height: 34 }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full"
                style={{ width: 16, height: 16, background: "#d9a441", border: "2px solid #0b1f3a" }}
              />
            </button>

            {hoveredState === "surat" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-white"
                style={{
                  left: `${HQ_POSITION.xPct}%`,
                  top: `${HQ_POSITION.yPct}%`,
                  transform: "translate(-50%, -140%)",
                  width: 220,
                  padding: 14,
                  borderRadius: 6,
                  border: "1px solid #eaeaea",
                  boxShadow: "0 12px 24px -8px rgba(15,31,61,0.25)",
                }}
              >
                <span className="uppercase block" style={{ fontWeight: 800, fontSize: 12, letterSpacing: "1px", color: "#0b1f3a" }}>
                  Surat, Gujarat
                </span>
                <span className="block" style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
                  Head Office & Manufacturing
                </span>
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={staggerContainer(0.06)} className="flex flex-col items-start flex-1" style={{ gap: 28 }}>
            <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 12 }}>
              <span className="uppercase" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "1.5px", color: "#0b1f3a" }}>
                Manufacturing &amp; Head Office
              </span>
              {SURAT_LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex items-center" style={{ gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: "#d9a441" }} />
                  <span style={{ fontSize: 15, color: "#333" }}>
                    {loc.name}, {loc.region} — {loc.type === "office" ? "Head Office" : "Manufacturing Facility"}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 12 }}>
              <span className="uppercase" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "1.5px", color: "#0b1f3a" }}>
                States Covered
              </span>
              <div className="flex flex-wrap" style={{ gap: 10 }}>
                {STATES_COVERED.map((state) => (
                  <span
                    key={state}
                    className="uppercase"
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.5px",
                      color: "#0b1f3a",
                      padding: "8px 16px",
                      borderRadius: 4,
                      background: "#ffffff",
                      border: "1px solid #e0dcd0",
                    }}
                  >
                    {state}
                  </span>
                ))}
                {STATES_COVERAGE_OPEN_ENDED && (
                  <span
                    className="uppercase"
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.5px",
                      color: "#777",
                      padding: "8px 16px",
                      borderRadius: 4,
                      border: "1px dashed #cfc9ba",
                    }}
                  >
                    + More States
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
