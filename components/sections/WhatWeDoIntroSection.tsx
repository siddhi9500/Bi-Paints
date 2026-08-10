"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardUp, fadeUp, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    tag: "BI Paints",
    title: "Colour. Protection. Performance.",
    description:
      "Paint and coating solutions designed to bring durability, protection and visual appeal to residential, commercial and industrial spaces.",
    cta: "Explore BI Paints",
    href: "/products/paints",
    image: "/wwd-intro-paints.jpg",
  },
  {
    tag: "BI Modular",
    title: "Designed Around Your Life.",
    description: "Modern modular kitchen and interior solutions combining functionality, design and everyday convenience.",
    cta: "Explore BI Modular",
    href: "/products",
    image: "/wwd-intro-modular.jpg",
  },
  {
    tag: "BI Services",
    title: "Solutions Beyond Products.",
    description: "Customer-focused services and solutions that help businesses and projects move from ideas to successful outcomes.",
    cta: "Explore Services",
    href: "/products",
    image: "/wwd-intro-services.jpg",
  },
];

export default function WhatWeDoIntroSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 64 }}
      >
        <div className="flex flex-col lg:flex-row items-center" style={{ gap: 64 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start flex-1" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 2, background: "#d9a441" }} />
              <span className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#d9a441" }}>
                One Group. Multiple Possibilities.
              </span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 36, lineHeight: 1.2, color: "#0b1f3a", margin: 0 }}>
              Different businesses. One shared purpose.
            </h2>
            <p style={{ fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "#20252b" }}>
              BI Group brings together businesses that help people build, improve and protect the spaces around them.
              From paints and coatings to modular interiors and specialized services, we combine quality, innovation
              and customer-focused solutions.
            </p>
          </motion.div>
          <motion.div variants={cardUp} className="relative flex-1 w-full overflow-hidden" style={{ height: 340, borderLeft: "8px solid #d9a441" }}>
            <Image src="/wwd-intro-arch.jpg" alt="Modern architecture" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        </div>

        <motion.div variants={staggerContainer(0.1)} className="flex flex-col" style={{ gap: 32 }}>
          {CARDS.map((c) => (
            <motion.div
              key={c.tag}
              variants={cardUp}
              className="flex flex-col-reverse lg:flex-row items-stretch overflow-hidden"
              style={{ background: "#f5f3ee", minHeight: 280 }}
            >
              <div className="flex flex-1 flex-col justify-center items-start" style={{ gap: 12, padding: 48 }}>
                <span className="uppercase" style={{ fontWeight: 800, fontSize: 14, letterSpacing: "2px", color: "#d9a441" }}>
                  {c.tag}
                </span>
                <h3 style={{ fontWeight: 700, fontSize: 26, color: "#0b1f3a", margin: 0 }}>{c.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 15, lineHeight: 1.5, color: "#20252b" }}>{c.description}</p>
                <motion.div whileHover={{ x: 4, transition: hoverTransition }}>
                  <Link href={c.href} className="inline-flex items-center" style={{ gap: 8, marginTop: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#0b1f3a" }}>{c.cta}</span>
                    <ArrowRight size={16} color="#0b1f3a" />
                  </Link>
                </motion.div>
              </div>
              <div className="relative w-full lg:w-[420px] shrink-0" style={{ height: 220 }}>
                <Image src={c.image} alt={c.tag} fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
