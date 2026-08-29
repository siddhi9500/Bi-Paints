"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { fadeScaleIn, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const CATEGORIES = [
  {
    title: "Beautiful homes",
    description: "BI Group has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.",
    image: "/wwd2-cat-homes.jpg",
  },
  {
    title: "Shipping",
    description: "We help to protect your vessels and increase your hull performance with our broad range of marine coatings.",
    image: "/wwd2-cat-shipping.jpg",
  },
  {
    title: "Energy",
    description: "Powder and protective coatings to keep your onshore and offshore oil, gas, petrochemical, and refining facilities in the best shape for a long time.",
    image: "/wwd2-cat-energy.jpg",
  },
  {
    title: "Natural wellness",
    description: "Natural and holistic homeopathic healthcare products, remedies, and wellness solutions trusted by families across India.",
    image: "/wwd2-cat-wellness.jpg",
  },
  {
    title: "Dream kitchens",
    description: "Modern modular kitchen and interior solutions combining functionality, design, and everyday convenience for your dream home.",
    image: "/wwd2-cat-kitchens.jpg",
  },
  {
    title: "Smart living",
    description: "Innovative electronic components, air conditioning systems, and smart technology solutions for modern living and industrial automation.",
    image: "/wwd2-cat-smartliving.jpg",
  },
];

export default function WhatWeDoIntroSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        //initial=""
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="px-6 sm:px-10 lg:px-35 flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center mx-auto" style={{ gap: 20, maxWidth: 910 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#c8963e" }} />
            <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
              One Group. Multiple Possibilities.
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 40, lineHeight: 1.15, color: "#0a1b3f", margin: 0 }}>
            Different businesses. One shared purpose.
          </h2>
          <p style={{ fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "#20252b" }}>
            BI Group brings together businesses that help people build, improve and protect the spaces around them.
            From paints and coatings to modular interiors and specialized services, we combine quality, innovation
            and customer-focused solutions.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
          {CATEGORIES.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeScaleIn}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="group flex flex-col items-start bg-white overflow-hidden"
              style={{ border: "1px solid #e5e7eb", borderRadius: 16, height: 380 }}
            >
              <div className="relative w-full shrink-0 overflow-hidden" style={{ height: 240 }}>
                <ScrollRevealImage>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </ScrollRevealImage>
              </div>
              <div className="flex flex-col items-start w-full flex-1" style={{ gap: 10, padding: 20 }}>
                <div className="flex items-center justify-between w-full">
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0b1f3a", margin: 0 }}>{c.title}</h3>
                  <ArrowRight size={16} color="#0b1f3a" className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "#20252b" }}>{c.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
