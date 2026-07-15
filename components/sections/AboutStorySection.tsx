"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { House } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function AboutStorySection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-6"
        >
          <SectionHeader icon={House} eyebrow="Pioneering Excellence" title="Our Story" />
          <p className="text-body text-ink leading-relaxed">
            Founded with a vision to be the most trusted name in coatings, BI Paints has
            been earning trust for more than 10 years. Starting as a specialist in
            industrial and decorative coatings, we expanded into homeopathy and
            industrial solutions — growing from a single product line into a
            diversified group serving clients across India, Dubai, Thailand,
            Bangladesh, Sri Lanka, and Maldives.
          </p>
          <div className="inline-flex items-center gap-4 self-start rounded-[10px] bg-cream px-6 py-4">
            <span className="text-h5 font-medium text-primary whitespace-nowrap">EST. 2005</span>
            <span className="w-10 h-px bg-black/15" />
            <span className="text-body text-heading whitespace-nowrap">Over 18 Years of Legacy</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative w-full aspect-590/500 rounded-2xl overflow-hidden bg-cream"
        >
          <Image
            src="/about-story.png"
            alt="BI Paints product range"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
