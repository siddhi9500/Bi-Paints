"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VIEW = { once: true, margin: "-60px" } as const;

const SERVICES = [
  {
    title: "Design & Build HVAC Solutions",
    description:
      "Complete HVAC design, supply, installation, and commissioning for residential and commercial projects.",
    image: "/photo-1698479603408-1a66a6d9e80f.avif",
    href: "/services/hvac",
  },
  {
    title: "Modular Kitchen Solutions",
    description:
      "Custom modular kitchen design and installation tailored to your space and lifestyle.",
    image: "/photo-1722605090433-41d1183a792d.avif",
    href: "/services/kitchen",
  },
  {
    title: "AMC Services",
    description:
      "Annual Maintenance Contracts ensuring long-term performance and peace of mind for all installed systems.",
    image: "/photo-1637035640133-5f7f6dc20131.avif",
    href: "/services/amc",
  },
  {
    title: "Fabrication Solutions",
    description:
      "Precision steel and metal fabrication for structural, industrial, and architectural applications.",
    image: "/photo-1496247749665-49cf5b1022e9.avif",
    href: "/services/fabrication",
  },
  {
    title: "Painting Solutions",
    description:
      "End-to-end painting solutions using BI Paints — from surface preparation to finishing.",
    image: "/photo-1562259949-e8e7689d7828.avif",
    href: "/services/painting",
  },
];

export default function ServiceHighlightsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#f5a200" }}
            >
              What We Do
            </p>
            <h2
              className="leading-tight font-extrabold"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1b4676", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="mt-2 text-base text-gray-500" style={{ maxWidth: 520 }}>
              We are the best service provider for over 10 years — delivering quality,
              reliability, and expertise across every domain.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"
            style={{ color: "#f5a200" }}
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-sm transition-all"
              style={{ border: "1px solid rgba(27,70,118,0.12)", background: "#ffffff" }}
            >
              <div className="relative overflow-hidden" style={{ height: 180, background: "#e8ecf4" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(transparent 40%, rgba(13,27,62,0.4) 100%)" }}
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: "#1b4676" }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1 text-gray-500">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="flex items-center gap-1 mt-4 text-xs font-semibold transition-colors"
                  style={{ color: "#f5a200" }}
                >
                  Know More <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
