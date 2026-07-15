"use client";

import { motion } from "framer-motion";
import { House, ShieldCheck, Lightbulb, Users, Leaf } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality Excellence",
    description:
      "Rigorous testing across marine fouling resistance, enhanced corrosion resistance, temperature variation, and anti-lining ensures world-class products.",
  },
  {
    icon: Lightbulb,
    title: "Smart Innovation",
    description:
      "Continuous R&D capabilities in paint and coating engineering, with expert advice on materials, finishes, and design schemes.",
  },
  {
    icon: Users,
    title: "Customer Trust",
    description:
      "Trusted by Arcelor Mittal, Reliance, Adani Logistics, Godrej & Boyce, L&T, and 50+ major industrial clients.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Eco-friendly formulations and sustainable manufacturing processes across all our product verticals.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="What Guides Us" title="Core Values" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <Card className="rounded-[10px] bg-white p-6 h-full">
                <span className="flex items-center justify-center w-11 h-11 mb-5 text-primary">
                  <value.icon size={32} strokeWidth={1.25} />
                </span>
                <h5 className="text-h5 font-medium text-heading mb-3">{value.title}</h5>
                <p className="text-small text-ink leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
