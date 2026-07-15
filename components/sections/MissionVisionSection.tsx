"use client";

import { motion } from "framer-motion";
import { House, Target, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To manufacture sustainable coating solutions by constantly investing in research and development for delivering products that create value for customers and accelerate growth and diversification across our business verticals.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a market leading authority and inspire by providing high-quality, innovative, and competitive industrial and consumer products that meet their evolving needs.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="Our Blueprint" title="Purpose Driven Strategy" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
            >
              <Card className="rounded-[10px] bg-white border-0 p-8">
                <span className="flex items-center justify-center w-12 h-12 mb-5 text-primary">
                  <card.icon size={36} strokeWidth={1.25} />
                </span>
                <h4 className="text-h4 font-normal text-heading mb-3">{card.title}</h4>
                <p className="text-body text-ink leading-relaxed">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
