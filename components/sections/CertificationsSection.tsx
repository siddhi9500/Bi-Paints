"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CERTIFICATIONS = [
  {
    title: "ISO 9001:2015",
    tag: "Quality Management",
    description: "Certified adherence to global manufacturing, rigorous inspection pipelines, and client feedback frameworks.",
  },
  {
    title: "BIS Compliant",
    tag: "National Assurance",
    description: "Perfect alignment with Bureau of Indian Standards, ensuring trusted domestic products.",
  },
  {
    title: "OHSAS 18001",
    tag: "Safety Certified",
    description: "Industry-leading protective standards for floor-workers and sustainable plant personnel welfare.",
  },
  {
    title: "ISO 14001:2015",
    tag: "Environmental System",
    description: "Continuous environmental monitoring and strict emission safety benchmarks across facilities.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#1a5276" }} />
            <span
              className="font-inter uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#1a5276" }}
            >
              Standards &amp; Assurance
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#0f1f3d" }}>Certifications &amp; Quality</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 24 }}
        >
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.title}
              variants={cardUp}
              className="flex flex-col items-start"
              style={{ gap: 16, padding: 32, borderRadius: 16, background: "#f4f7fb", border: "1px solid #ede8df" }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 48, height: 48, borderRadius: 12, background: "#e0f2fe" }}
              >
                <BadgeCheck size={24} className="text-brand" strokeWidth={2} />
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: "#0f1f3d" }}>{c.title}</h3>
              <span
                className="font-inter uppercase"
                style={{ fontWeight: 700, fontSize: 12, letterSpacing: "1px", color: "#1a5276" }}
              >
                {c.tag}
              </span>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "#4b5563" }}>{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
