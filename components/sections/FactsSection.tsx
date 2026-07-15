"use client";

import { motion } from "framer-motion";
import { House } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const FACTS = [
  {
    value: "50,000+",
    label: "Litres Daily (Paints)",
    description:
      "Delivering high-performance industrial and decorative coatings to builders, contractors, and homeowners nationwide.",
  },
  {
    value: "500+",
    label: "Products (All Categories)",
    description:
      "Across paints, homeopathy, and industrial solutions — designed for modern Indian living.",
  },
  {
    value: "3",
    label: "Business Verticals",
    description:
      "Paints & Coatings, Homeopathy, and Industrial Solutions — operating with focused excellence.",
  },
  {
    value: "15+",
    label: "Years of Excellence",
    description: "Building trust across every vertical since our founding in 2005.",
  },
];

export default function FactsSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="page-container flex flex-col gap-10">
        <span className="inline-flex items-center gap-2 text-small font-medium uppercase tracking-[0.14em] text-white">
          <House size={14} strokeWidth={2} />
          BI Group by the Numbers
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {FACTS.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-3"
            >
              <span className="text-h1 font-normal text-white">{fact.value}</span>
              <span className="text-h6 font-medium text-white">{fact.label}</span>
              <p className="text-small text-white/80 leading-relaxed">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
