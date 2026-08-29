"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ROLES = [
  {
    title: "Senior Product Development Chemist",
    team: "Paints & Coatings",
    location: "Jodhpur, Rajasthan",
    type: "Full-time",
  },
  {
    title: "Project Engineer — Industrial Solutions",
    team: "Engineering Services",
    location: "Pune, Maharashtra",
    type: "Full-time",
  },
  {
    title: "Management Trainee — Operations",
    team: "Group Operations",
    location: "Jodhpur, Rajasthan",
    type: "Graduate",
  },
];

const BUSINESSES = ["All businesses", ...Array.from(new Set(ROLES.map((r) => r.team)))];

// Figma: Open opportunities, node 4374:459
export default function CareerOpportunitiesSection() {
  const [filter, setFilter] = useState(BUSINESSES[0]);
  const roles = useMemo(() => (filter === BUSINESSES[0] ? ROLES : ROLES.filter((r) => r.team === filter)), [filter]);

  return (
    <section style={{ background: "#f6f7f8", paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-start px-6 sm:px-10 lg:px-35"
        style={{ gap: 32 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full" style={{ gap: 20 }}>
          <div className="flex flex-col items-start" style={{ gap: 12 }}>
            <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
              Open Opportunities
            </p>
            <h2 style={{ fontWeight: 700, fontSize: 34, color: "#0f1f3d" }}>Find your next role</h2>
          </div>

          <div className="relative shrink-0">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-white outline-none"
              style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 40px 12px 18px", fontSize: 13, color: "#20252b" }}
            >
              {BUSINESSES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute text-[#6b7280]" style={{ right: 16, top: "50%", transform: "translateY(-50%)" }} />
          </div>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="flex flex-col items-start w-full" style={{ gap: 12 }}>
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full bg-white"
              style={{ gap: 20, padding: "24px 28px", borderRadius: 8, border: "1px solid #e5e7eb" }}
            >
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: "#0f1f3d" }}>{role.title}</h3>
                <span style={{ fontSize: 13, color: "#c8963e" }}>{role.team}</span>
              </div>

              <div className="flex flex-wrap items-center" style={{ gap: 24 }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>{role.location}</span>
                <span style={{ fontSize: 13, color: "#6b7280" }}>{role.type}</span>
                <Link
                  href="/contact"
                  className="group inline-flex items-center shrink-0"
                  style={{ gap: 6, padding: "10px 20px", borderRadius: 999, border: "1px solid #1a5276" }}
                >
                  <span style={{ fontWeight: 600, fontSize: 13, color: "#1a5276" }}>View role</span>
                  <ArrowRight size={14} className="text-[#1a5276] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="w-full text-center" style={{ fontSize: 14, color: "#6b7280" }}>
          Don&apos;t see the right fit? Send us your profile
        </motion.p>
      </motion.div>
    </section>
  );
}
