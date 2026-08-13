"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardUp, fadeUp, hoverLiftCard, staggerContainer, viewportOnce } from "@/lib/motion";

// Images are matched to each business by theme where a dedicated photo exists
// (BI Modular Kitchen, BI Painting Solution, BI Engineering). BI Agriculture,
// BI Air Conditioner and BI Electronics don't have a dedicated stock photo in
// this project yet, so they reuse the closest existing images as
// placeholders — swap these out once real photography for those businesses
// is available.
const BUSINESSES = [
  { title: "BI Modular Kitchen", description: "Smart high-end kitchen cabinets.", image: "/kitchen-hero.jpg", href: "/products" },
  { title: "BI Agriculture", description: "Sustainable organic farming inputs.", image: "/kitchen-island.jpg", href: "/products" },
  { title: "BI Electronics", description: "Smart appliances built for comfort.", image: "/business-automotive.jpg", href: "/products" },
  { title: "BI Air Conditioner", description: "Advanced HVAC systems for heavy cooling.", image: "/business-aerospace.jpg", href: "/products" },
  { title: "BI Painting Solution", description: "End-to-end master commercial service.", image: "/business-marine.jpg", href: "/products/paints" },
  { title: "BI Engineering", description: "Heavy mechanical and industrial works.", image: "/business-yacht.jpg", href: "/products" },
];

export default function BusinessPortfolioSection() {
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
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center w-full" style={{ gap: 14 }}>
          <span className="uppercase" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#1a5276" }}>
            Our Portfolio
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 44, color: "#0f1f3d", margin: 0 }}>Our Businesses</h2>
          <span style={{ width: 56, height: 3, background: "#d9a441", marginTop: 8 }} />
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full" style={{ gap: 28 }}>
          {BUSINESSES.map((b) => (
            <motion.div key={b.title} variants={cardUp} whileHover={hoverLiftCard}>
              <Link
                href={b.href}
                className="group flex flex-col h-full overflow-hidden bg-white"
                style={{ border: "1px solid #eaeaea", borderRadius: 12, boxShadow: "0px 4px 12px rgba(15,31,61,0.05)" }}
              >
                <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col items-start bg-white" style={{ gap: 6, padding: 22 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d", margin: 0 }}>{b.title}</h3>
                  <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "#666", margin: 0 }}>{b.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
