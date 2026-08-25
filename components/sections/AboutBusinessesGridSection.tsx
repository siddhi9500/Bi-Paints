"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { cardUp, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

const BUSINESSES = [
  { title: "BI Paints",           description: "Premium protective coatings and colors.", image: "/about-biz-0.jpg" },
  { title: "BI Modular Kitchen",  description: "Smart high-end kitchen cabinets.", image: "/about-biz-1.jpg" },
  { title: "BI Agriculture",      description: "Sustainable organic farming inputs.", image: "/about-biz-2.jpg" },
  { title: "BI Homeopathy",       description: "Holistic, traditional wellness formulas.", image: "/about-biz-3.jpg" },
  { title: "BI Clothes",          description: "Contemporary lifestyle fashion brand.", image: "/about-biz-4.jpg" },
  { title: "BI Electronics",      description: "Smart appliances built for comfort.", image: "/about-biz-5.jpg" },
  { title: "BI Air Conditioner",  description: "Advanced HVAC systems for heavy cooling.", image: "/about-biz-6.jpg" },
  { title: "BI Painting Solution",   description: "End-to-end master commercial service.", image: "/about-biz-7.jpg" },
  { title: "BI Engineering",      description: "Heavy mechanical and industrial works.", image: "/about-biz-8.jpg" },
  { title: "BI E-commerce",       description: "Unified direct corporate retail portal.", image: "/about-biz-9.jpg" },
];

export default function AboutBusinessesGridSection() {
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
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <span
            className="uppercase"
            style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}
          >
            Our Portfolio
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#0f1f3d" }}>Our Businesses</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full"
          style={{ gap: 24 }}
        >
          {BUSINESSES.map((b) => (
            <motion.div
              key={b.title}
              variants={cardUp}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="group flex flex-col items-start overflow-hidden bg-white"
              style={{ borderRadius: 16, border: "1px solid #ede8df", boxShadow: "0px 4px 12px rgba(15,31,61,0.02)" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 160 }}>
                <ScrollRevealImage>
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </ScrollRevealImage>
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: 8, padding: 20 }}>
                <h3 className="truncate w-full" style={{ fontWeight: 700, fontSize: 16, color: "#0f1f3d" }}>
                  {b.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: 13, lineHeight: "18px", color: "#4b5563" }}>{b.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
