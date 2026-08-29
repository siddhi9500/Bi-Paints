"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Heart, Users } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FOCUS_AREAS = [
  {
    number: "01",
    icon: BookOpen,
    title: "Education",
    description: "Creating opportunities for learning, growth, and a brighter future.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Environment",
    description: "Supporting greener communities and responsible environmental practices.",
  },
  {
    number: "03",
    icon: Users,
    title: "Community",
    description: "Contributing towards stronger, more inclusive, and empowered communities.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Well-being",
    description: "Supporting initiatives that contribute to healthier and better lives.",
  },
];

// Figma: Where We Focus, node 4445:228
export default function BiFoundationFocusSection() {
  return (
    <section id="focus" style={{ background: "#f9fafb", borderTop: "1px solid rgba(13,25,48,0.1)", borderBottom: "1px solid rgba(13,25,48,0.1)", paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 700 }}>
          <h2 style={{ fontWeight: 700, fontSize: 34, color: "#0f1f3d" }}>Where We Focus</h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Our initiatives are built around areas where we can create meaningful and lasting impact.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full" style={{ gap: 32 }}>
          {FOCUS_AREAS.map((area) => (
            <motion.div
              key={area.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{ gap: 24, padding: 32, borderRadius: 12, border: "1px solid rgba(13,25,48,0.1)", boxShadow: "0px 8px 8px rgba(0,0,0,0.02)" }}
            >
              <div className="flex items-center justify-between w-full">
                <span style={{ fontWeight: 800, fontSize: 32, color: "rgba(200,150,62,0.3)" }}>{area.number}</span>
                <area.icon size={24} className="text-[#c8963e]" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: "#0f1f3d" }}>{area.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "#20252b" }}>{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
