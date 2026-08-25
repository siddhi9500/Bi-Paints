"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, PaintBucket, ShieldCheck } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: PaintBucket,
    title: "Explore Our Coatings",
    description:
      "Browse BI Group's comprehensive range of industrial and decorative coatings. Find the right product for your specific application needs.",
    linkText: "Find the right coating",
    href: "/products/paints",
  },
  {
    icon: ShieldCheck,
    title: "Custom Coating Solutions",
    description:
      "Get tailored coating systems designed for your unique requirements. Our experts match the optimal solution to your project specifications.",
    linkText: "Get a consultation",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Discover BI Group",
    description:
      "Your complete resource for coatings, modular interiors, and engineering services. Explore our integrated business verticals.",
    linkText: "Learn more",
    href: "/about",
  },
];

// Figma: feature-cards-section, node 4128:220
export default function FeatureCardsSection() {
  return (
    <section style={{ background: "#f5f5f5", paddingTop: 80, paddingBottom: 96 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-30"
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 800 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1.5px", color: "#c8963e" }}>
            Explore Our Solutions
          </p>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 700 }}>From products to personalised solutions</h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {CARDS.map(({ icon: Icon, title, description, linkText, href }) => (
            <motion.div
              key={title}
              variants={cardUp}
              className="flex flex-col justify-between bg-white"
              style={{ padding: 40, borderRadius: 8, boxShadow: "0px 12px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="flex flex-col items-start" style={{ gap: 24 }}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48, borderRadius: 6, background: "rgba(26,82,118,0.07)" }}
                >
                  <Icon size={24} className="text-brand" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col items-start" style={{ gap: 12 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700 }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#555" }}>{description}</p>
                </div>
              </div>

              <Link href={href} className="group inline-flex items-center" style={{ gap: 6, paddingTop: 24 }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: "#1a5276" }}>{linkText}</span>
                <ArrowRight size={16} className="text-brand transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
