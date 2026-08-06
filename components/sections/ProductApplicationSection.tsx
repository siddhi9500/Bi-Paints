"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SEGMENTS = [
  { num: "01", title: "Industrial Coating", description: "Heavy-duty protection for steel & infrastructure", image: "/business-industrial.jpg" },
  { num: "02", title: "Marine Coating", description: "Antifouling & anti-corrosion for vessels", image: "/business-marine.jpg" },
  { num: "03", title: "Automotive Paint", description: "Premium automotive finish systems", image: "/business-automotive.jpg" },
  { num: "04", title: "Aerospace Coatings", description: "Trusted by the Indian Air Force", image: "/business-aerospace.jpg" },
  { num: "05", title: "Yacht & Boat Coating", description: "Advanced hull protection for leisure craft", image: "/business-yacht.jpg" },
  { num: "06", title: "Decorative Paints", description: "Premium interior & exterior paint solutions", image: "/business-decorative.jpg" },
  { num: "07", title: "Protective Coatings", description: "Chemical & fire-resistant barrier coatings", image: "/business-protective.jpg" },
  { num: "08", title: "Container Coating", description: "Durable protection for global shipping", image: "/business-container.jpg" },
];

export default function ProductApplicationSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 56 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center w-full"
          style={{ gap: 16 }}
        >
          <span className="uppercase" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}>
            What We Offer
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 52, color: "#0f1f3d" }}>Product Application Segments</h2>
          <p className="mx-auto" style={{ fontWeight: 400, fontSize: 18, lineHeight: "30px", color: "#555", maxWidth: 700 }}>
            From bridges to yachts, from factories to homes - BI Paints delivers world-class
            coating solutions across every industry.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 24 }}
        >
          {SEGMENTS.map((s) => (
            <motion.div
              key={s.title}
              variants={cardUp}
              className="group overflow-hidden"
              style={{ borderRadius: 16, boxShadow: "0px 4px 8px rgba(15,31,61,0.06)" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col bg-white w-full" style={{ gap: 6, padding: 20 }}>
                <span
                  className="inline-flex items-center w-fit"
                  style={{ background: "#e0f2fe", color: "#1a5276", fontWeight: 700, fontSize: 11, padding: "3px 8px", borderRadius: 6 }}
                >
                  {s.num}
                </span>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0f1f3d" }}>{s.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 13, lineHeight: "21px", color: "#777" }}>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
