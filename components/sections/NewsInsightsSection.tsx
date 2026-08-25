"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const NEWS = [
  {
    date: "March 2024",
    title: "ElectroMech Crane Coatings — Pune",
    description:
      "BI Paints delivers high-performance industrial coatings for ElectroMech's cranes, ensuring corrosion resistance in harsh environments.",
    image: "/news-electromech.jpg",
  },
  {
    date: "February 2024",
    title: "AM/NS India — Steel Plant Coatings",
    description:
      "Partnering with ArcelorMittal Nippon Steel India to provide advanced protective coating systems for steel plant infrastructure.",
    image: "/news-amns.jpg",
  },
  {
    date: "January 2024",
    title: "Adani Logistics — Port Infrastructure",
    description:
      "BI Paints supplies marine-grade protective coatings for port infrastructure, withstanding saltwater and extreme weather.",
    image: "/news-adani.jpg",
  },
];

// Figma: section-news-insights, node 4101:196
export default function NewsInsightsSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 40 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 8 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            News &amp; Insights
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 700 }}>Latest from BI Group</h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {NEWS.map((item) => (
            <motion.div key={item.title} variants={cardUp} className="flex flex-col items-start" style={{ gap: 12 }}>
              <div className="relative w-full overflow-hidden" style={{ height: 300, borderRadius: 8 }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p style={{ fontSize: 12, color: "#c8963e" }}>{item.date}</p>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: "20px", color: "#787878" }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
