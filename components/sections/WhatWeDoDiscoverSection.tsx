"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { fadeScaleIn, fadeUp, hoverLiftCard, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  { tag: "Who We Are", title: "Discover our story, vision and businesses.", href: "/about", image: "/wwd2-editorial-who.jpg" },
  { tag: "Our Journey", title: "Explore the milestones that shaped BI Group.", href: "/about/journey", image: "/wwd2-editorial-journey.jpg" },
  { tag: "Our Values", title: "Understand the principles behind everything we do.", href: "/about", image: "/wwd2-editorial-values.jpg" },
  { tag: "Where We Operate", title: "Explore our growing presence across India.", href: "/about/achievements", image: "/wwd2-editorial-where.jpg" },
];

export default function WhatWeDoDiscoverSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="px-6 sm:px-10 lg:px-35 flex flex-col"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 12, height: 2, background: "#d9a441" }} />
            <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
              Learn More
            </span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 44, lineHeight: 1.15, color: "#0b1f3a", margin: 0 }}>
            Deepen your connection with BI Group
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full" style={{ gap: 24 }}>
          {CARDS.map((c) => (
            <motion.div key={c.tag} variants={fadeScaleIn} whileHover={hoverLiftCard} className="group">
              <Link
                href={c.href}
                className="relative flex flex-col justify-end overflow-hidden"
                style={{ gap: 12, height: 440, padding: 32, borderRadius: 8 }}
              >
                <ScrollRevealImage>
                  <Image
                    src={c.image}
                    alt={c.tag}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </ScrollRevealImage>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(131deg, rgba(0,0,0,0) 45%, rgba(11,31,58,0.8) 65%, rgb(11,31,58) 75%)",
                  }}
                />
                <div className="relative flex flex-col items-start" style={{ gap: 8 }}>
                  <span className="font-inter uppercase" style={{ fontWeight: 800, fontSize: 12, letterSpacing: "2px", color: "#d9a441" }}>
                    {c.tag}
                  </span>
                  <p style={{ fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: "#ffffff", margin: 0 }}>{c.title}</p>
                </div>
                <span className="relative inline-flex items-center" style={{ gap: 6 }}>
                  <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "1px", color: "#d9a441" }}>
                    Explore
                  </span>
                  <ChevronRight size={14} color="#d9a441" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
