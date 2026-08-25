"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const MILESTONES = [
  {
    year: "2008",
    title: "The Beginning — ₹100 Valuation",
    description:
      "Started in Surat with just ₹100 in hand. Began with driver and labour-related work to earn initial capital. Opened a mini paint hardware and cement shop — the very first step of an extraordinary entrepreneurial journey that would transform the Indian paint industry.",
    image: "/journey-2008.jpg",
  },
  {
    year: "2009",
    title: "Expanding the Product Line",
    description:
      "Added paints, cement, and pipe fittings to the growing shop. Set a bold goal to cover a bigger market across Surat. Focused relentlessly on commitment, quality, building strong supplier relationships, and sustainable business growth.",
    image: "/journey-2009.jpg",
  },
  {
    year: "2010",
    title: "Paint Dealership & Market Expansion",
    description:
      "Secured official paint dealerships with major brands including Asian Paints and Anchor. Drove aggressive sales growth and expanded coverage across the full local market, building a robust new dealer network.",
    image: "/journey-2010.jpg",
  },
  {
    year: "2011–2012",
    title: "Diversification & Residential Projects",
    description:
      "Made multiple strategic business decisions and expanded operations significantly. Entered paint supply for major residential projects including Green City and Bharati Residency developments.",
    image: "/journey-2011.jpg",
  },
  {
    year: "2013",
    title: "Distribution & Industrial Clients",
    description:
      "Developed an ambitious new business plan focused on paint distribution at scale. Expanded operations to serve industrial customers including Essar — the pivotal transition from local retailer to serious paint distributor.",
    image: "/journey-2013.jpg",
  },
  {
    year: "2014–2015",
    title: "Modular Kitchen Business Launch",
    description:
      "Launched a premium modular kitchen business offering end-to-end kitchen solutions — from design consultation to installation, partnering with top hardware and accessory brands.",
    image: "/journey-2014.jpg",
  },
  {
    year: "2016–2017",
    title: "Electronics & AC Business",
    description:
      "Entered the air conditioning and electronics market with strategic partnerships with Samsung, Daikin, Toshiba, and Mitsubishi, running a thriving supply business alongside paint operations.",
    image: "/journey-2016.jpg",
  },
  {
    year: "2018–2019",
    title: "BI Group Foundation & National Vision",
    description:
      "Embraced a bold 'New India' vision for self-reliant industrial growth. Founded and formally expanded BI Group and BI Paints as registered corporate entities, venturing into agro-related business lines.",
    image: "/journey-2018.jpg",
  },
  {
    year: "2021–2022",
    title: "Becoming a National Paint Brand",
    description:
      "BI Paints emerged as a strong, recognized Indian brand across industrial, marine, protective, and decorative segments. Secured prestigious industrial clients including AM/NS India and L&T.",
    image: "/journey-2021.jpg",
  },
  {
    year: "2024",
    title: "India's Largest Paint Manufacturing Vision",
    description:
      "Announced the ambitious vision to build one of India's largest paint manufacturing facilities. Broke ground at Bardoli, Surat, and launched expansion toward Mumbai, Ahmedabad, and Pune.",
    image: "/journey-2024.jpg",
  },
];

function MilestoneCard({ m }: { m: (typeof MILESTONES)[number] }) {
  return (
    <motion.div
      variants={cardUp}
      className="flex flex-col items-start bg-white w-full"
      style={{ gap: 20, padding: 32, borderRadius: 16, border: "1px solid #e5e7eb", maxWidth: 640, boxShadow: "0px 4px 8px rgba(0,0,0,0.04)" }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: 220, borderRadius: 8 }}>
        <ScrollRevealImage>
          <Image src={m.image} alt={m.title} fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
        </ScrollRevealImage>
      </div>
      <div className="flex flex-col items-start" style={{ gap: 6 }}>
        <span style={{ fontWeight: 700, fontSize: 28, color: "#f5a623" }}>{m.year}</span>
        <span style={{ fontWeight: 500, fontSize: 18, lineHeight: "27px", color: "#1b1b2f" }}>{m.title}</span>
      </div>
      <p style={{ fontWeight: 400, fontSize: 14, lineHeight: "21px", color: "#4b5563" }}>{m.description}</p>
    </motion.div>
  );
}

export default function JourneyTimelineSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 64 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#f5a623" }} />
            <span
              className="uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#f5a623" }}
            >
              A Journey of Growth
            </span>
          </div>
          <h2 style={{ fontWeight: 500, fontSize: 34, lineHeight: "42px", color: "#1b1b2f" }}>
            Milestones &amp; Achievements
          </h2>
        </motion.div>

        {/* Mobile / tablet: simple stacked list. */}
        <motion.div variants={staggerContainer(0.08)} className="flex flex-col items-stretch w-full lg:hidden" style={{ gap: 24 }}>
          {MILESTONES.map((m) => (
            <MilestoneCard key={m.year} m={m} />
          ))}
        </motion.div>

        {/* Desktop: zigzag timeline with a central spine. */}
        <motion.div variants={staggerContainer(0.08)} className="hidden lg:flex flex-col items-stretch w-full">
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="flex items-stretch w-full">
              <div className="flex flex-1 justify-end" style={{ paddingRight: 80 }}>
                {i % 2 === 0 && <MilestoneCard m={m} />}
              </div>
              <div className="flex flex-col items-center shrink-0" style={{ width: 40 }}>
                <span className="flex-1" style={{ width: 2, background: "#e5e7eb" }} />
                <span className="shrink-0" style={{ width: 16, height: 16, borderRadius: 8, background: "#f5a623", border: "3px solid #ffffff", boxShadow: "0 0 0 1px #e5e7eb" }} />
                <span className="flex-1" style={{ width: 2, background: "#e5e7eb" }} />
              </div>
              <div className="flex flex-1 justify-start" style={{ paddingLeft: 80 }}>
                {i % 2 === 1 && <MilestoneCard m={m} />}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
