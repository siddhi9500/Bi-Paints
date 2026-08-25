"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { fadeScaleIn, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const TABS = ["For Homes", "For Businesses", "For Industries", "For Projects"];

const SOLUTIONS = [
  { title: "Interior Paints", description: "Vibrant, low-VOC finishes for luxury aesthetics and healthy home air quality.", image: "/wwd2-solution-0.jpg" },
  { title: "Exterior Paints", description: "All-weather extreme shield protection to prevent cracking and dampness.", image: "/wwd2-solution-1.jpg" },
  { title: "Waterproofing", description: "Multi-layered advanced dynamic protection systems for roof and concrete slabs.", image: "/wwd2-solution-2.jpg" },
  { title: "Modular Kitchens", description: "Bespoke high-end kitchen installations equipped with soft-close global hardware.", image: "/wwd2-solution-3.jpg" },
  { title: "Interior Solutions", description: "Integrated wardrobes, custom partitions, and modern architectural solutions.", image: "/wwd2-solution-4.jpg" },
];

export default function WhatWeDoTabbedSolutionsSection() {
  return (
    <section style={{ background: "#f4f7fb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="page-container flex flex-col items-center"
        style={{ gap: 40 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Our Solutions
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 36, lineHeight: 1.15, letterSpacing: "-1px", color: "#0b1f3a", margin: 0 }}>
            From everyday spaces to demanding environments.
          </h2>
        </motion.div>

        {/* Figma exports only the "For Homes" tab's content — the other tabs have
            no underlying data, so they're shown as inert labels rather than
            fabricating card content that isn't in the design. */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center w-full" style={{ gap: 32, borderBottom: "1px solid #eaeaea", paddingBottom: 16 }}>
          {TABS.map((t, i) => (
            <div key={t} className="flex flex-col items-center" style={{ gap: 12, paddingBottom: 12 }}>
              <span
                className="uppercase"
                style={{ fontWeight: 700, fontSize: 14, letterSpacing: "2px", color: i === 0 ? "#d9a441" : "#20252b" }}
              >
                {t}
              </span>
              {i === 0 && <span style={{ width: 40, height: 2, background: "#d9a441" }} />}
            </div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer(0.07)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full" style={{ gap: 24 }}>
          {SOLUTIONS.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeScaleIn}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="group flex flex-col items-start bg-white overflow-hidden"
              style={{ border: "1px solid #eaeaea" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
                <ScrollRevealImage>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  />
                </ScrollRevealImage>
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: 8, padding: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0b1f3a", margin: 0 }}>{s.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: "#20252b" }}>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
