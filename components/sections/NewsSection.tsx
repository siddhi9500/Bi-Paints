"use client";

/* ────────────────────────────────────────────────────────────────────────
 * LEGACY — superseded by the Figma redesign below (node 19:678,
 * "div.w-layout-blockcontainer" / "BI Group News" — html.to.design Brixon
 * import). Kept commented out for reference/rollback rather than deleted.
 * ────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "June 10, 2025",
    category: "Product Launch",
    title: "BI Paints Launches New Eco-Friendly Interior Range",
    excerpt:
      "Our latest line of low-VOC interior paints combines exceptional coverage with environmental responsibility, setting new standards in sustainable coatings technology.",
    image: "/product-slider.jpg",
  },
  {
    date: "May 28, 2025",
    category: "Company News",
    title: "Expanding Operations: New Manufacturing Plant in Gujarat",
    excerpt:
      "BI Paints inaugurates a state-of-the-art manufacturing facility that increases production capacity to meet growing domestic and export demand.",
    image: "/product-slider0.jpg",
  },
  {
    date: "May 15, 2025",
    category: "Awards",
    title: "BI Paints Wins Best Industrial Coating Brand Award 2025",
    excerpt:
      "We are proud to be recognised with the prestigious Best Industrial Coating Brand Award at the National Paint Industry Summit held in New Delhi.",
    image: "/product-img0.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="page-container">

        <FadeInSection className="text-center mb-14">
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            News &amp; Blogs
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded" />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.15}>
              <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">

                {/* News image *}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Category badge *}
                  <span
                    className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                    style={{ background: "#f5a200" }}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Calendar size={12} />
                    <time>{item.date}</time>
                  </div>

                  <h3 className="text-base font-extrabold text-navy leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {item.excerpt}
                  </p>

                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1 text-accent font-bold text-sm hover:gap-2 transition-all duration-200"
                  >
                    Read More <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center mt-12">
          <Link
            href="/news"
            className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-10 py-3.5 rounded text-sm uppercase tracking-widest"
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            View All News
          </Link>
        </FadeInSection>

      </div>
    </section>
  );
}

 * ──────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import { motion } from "framer-motion";
import { House, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const VIEW = { once: true, margin: "-60px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

interface NewsItem {
  date: string;
  category: string;
  title: string;
  image: string;
  href: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "Jun 10, 2026",
    category: "Paint Industry",
    title: "How BI Paints is setting new benchmarks in industrial protective coatings across India",
    image: "/blog-paints.png",
    href: "/news/industrial-protective-coatings",
  },
  {
    date: "Jun 10, 2026",
    category: "Wellness",
    title: "Natural homeopathy in the modern age — BI Group's approach to everyday wellness",
    image: "/blog-wellness.png",
    href: "/news/homeopathy-modern-wellness",
  },
  {
    date: "Jun 10, 2026",
    category: "Lifestyle",
    title: "Fashion forward: How BI Group's lifestyle brand is redefining contemporary Indian style",
    image: "/blog-fashion.png",
    href: "/news/fashion-forward",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="Industry Insights" title="BI Group News" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
              className="group flex flex-col border border-black/10 rounded-[10px] overflow-hidden"
            >
              <div className="flex flex-col gap-3 p-5 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  <span className="bg-cream text-small text-ink px-2.5 py-1 rounded-[10px]">
                    {item.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-black/10" />
                  <span className="text-small text-ink">{item.date}</span>
                </div>
                <div className="relative w-full aspect-370/289 rounded-[10px] overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h5 className="text-h5 font-normal text-heading leading-snug">{item.title}</h5>
              </div>
              <div className="flex items-center gap-2 px-5 py-4 text-small text-ink group-hover:text-primary transition-colors duration-300">
                Read Articles
                <span className="flex items-center justify-center w-6 h-4 rounded-full border border-heading group-hover:border-primary transition-colors duration-300">
                  <ArrowRight size={11} strokeWidth={2} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-end">
          <Button href="/news">View All Insights</Button>
        </div>
      </div>
    </section>
  );
}
