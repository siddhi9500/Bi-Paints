"use client";

/* ────────────────────────────────────────────────────────────────────────
 * LEGACY — superseded by the Figma redesign below (node 19:356,
 * "div.about-wrap" — html.to.design Brixon import). Kept commented out
 * for reference/rollback rather than deleted.
 * ────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 60;
    const step = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(eased * value));
      if (frame < totalFrames) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { value: 300, suffix: "K+", label: "Products Distributed Across India" },
  { value: 500, suffix: "+", label: "Projects Delivered Across India" },
  { value: 10, suffix: "", label: "Years of Industry Excellence", circle: true },
];

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Left: Welcome text — 2 out of 5 columns *}
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-lg font-light mb-1">Welcome to</p>
            <h2
              className="font-extrabold text-navy leading-tight mb-5"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
              }}
            >
              BI Group<br />
              <span style={{ color: "#1b4676" }}>of Companies</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
              Established over a decade ago, BI Group of Companies has grown into one
              of India's most trusted multi-sector conglomerates — bringing together an
              expansive portfolio across construction materials, home solutions, and
              industrial supplies, so our clients can source everything from a single,
              reliable partner.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
              Our commitment to quality, innovation, and customer satisfaction drives
              every decision we make. With certified manufacturing facilities, a robust
              nationwide supply chain, and dedicated after-sales support, BI Group sets
              the benchmark for reliability across residential, commercial, and
              industrial markets.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white text-sm font-bold px-6 py-2.5 rounded"
              style={{ transition: "all 0.5s ease-in-out" }}
            >
              Know More →
            </Link>
          </div>

          {/* Right: Stats — 3 out of 5 columns, matching reference layout *}
          <div className="lg:col-span-3 grid grid-cols-3 gap-4">

            {/* Stat 1 — blue box *}
            <div
              className="col-span-1 flex flex-col items-center justify-center py-10 px-4 text-center text-white rounded"
              style={{ background: "#1b4676" }}
            >
              <span
                className="font-black leading-none mb-2"
                style={{ fontSize: "3rem", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
              >
                <AnimatedCounter value={STATS[0].value} suffix={STATS[0].suffix} />
              </span>
              <p className="text-sm font-medium text-white/90 leading-snug">
                {STATS[0].label}
              </p>
            </div>

            {/* Stat 2 — blue box *}
            <div
              className="col-span-1 flex flex-col items-center justify-center py-10 px-4 text-center text-white rounded"
              style={{ background: "#1b4676" }}
            >
              <span
                className="font-black leading-none mb-2"
                style={{ fontSize: "3rem", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
              >
                <AnimatedCounter value={STATS[1].value} suffix={STATS[1].suffix} />
              </span>
              <p className="text-sm font-medium text-white/90 leading-snug">
                {STATS[1].label}
              </p>
            </div>

            {/* Stat 3 — circular badge matching "10 Years" in reference *}
            <div className="col-span-1 flex items-center justify-center">
              <div
                className="w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center text-center"
                style={{ borderColor: "#1b4676" }}
              >
                <span
                  className="font-black text-navy leading-none"
                  style={{ fontSize: "3.5rem", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
                >
                  <AnimatedCounter value={STATS[2].value} suffix={STATS[2].suffix} />
                </span>
                <p className="text-xs font-semibold text-gray-500 mt-1 leading-tight px-2">
                  {STATS[2].label}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

 * ──────────────────────────────────────────────────────────────────────── */

import { useRef } from "react";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ShieldCheck, Factory, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, amount: 0.25 } as const;

const CREDENTIALS = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Certified",
    description:
      "Our state-of-the-art manufacturing and QC infrastructure meets ISO 9001:2015 & ISO 14001:2015 standards — rigorous testing ensures every product exceeds global quality benchmarks.",
  },
  {
    icon: Factory,
    title: "3,00,000 Litres Daily",
    description:
      "BI Paints India, our flagship division, operates at 3,00,000 litres daily production capacity — one of India's largest paint & protective coating facilities, supplying across industrial, defence, and commercial sectors.",
  },
];

const HEADING_LINES = [
  "Uncompromising Quality,",
  "Engineered to Perform —",
  "Trusted by Reliance, Adani, Godrej & Boyce, and the Indian Air Force.",
];

// ── Reusable entrance variants ──────────────────────────────────────────
const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -80, rotate: -3, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE },
  },
};

const headingContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const headingLineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.65 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE, delay: 0.9 } },
};

const middleImageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.2 } },
};

export default function WelcomeSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // ── Scroll parallax: whole section drifts translateY(0 → -40px) ──
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -40]);

  // ── Mouse parallax ──
  const mouseY = useMotionValue(0);
  const leftParallaxY = useTransform(mouseY, (v) => v * 6);
  const middleParallaxY = useTransform(mouseY, (v) => v * 12);
  const headingParallaxY = useTransform(mouseY, (v) => v * 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseY.set(relY);
  };
  const handleMouseLeave = () => mouseY.set(0);

  // When reduced motion is preferred, elements start already in their
  // "visible" state — whileInView still fires later but is a no-op, so
  // nothing ever animates in (no risk of a mid-transition freeze from
  // swapping variant objects reactively).
  const initialState = shouldReduceMotion ? "visible" : "hidden";

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={sectionRef}
        className="py-16 sm:py-20 bg-white overflow-hidden"
        style={{ y: sectionY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: image pair + caption + CTA */}
            <div className="flex gap-5 items-stretch">
              <m.div style={{ y: leftParallaxY }} className="flex flex-col gap-6 w-[42%] shrink-0">
                <m.div
                  initial={initialState}
                  whileInView="visible"
                  viewport={VIEW}
                  variants={leftCardVariants}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-253/352 rounded-[10px] overflow-hidden bg-cream transform-gpu"
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src="/about-lab.png"
                    alt="BI Paints quality-control laboratory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </m.div>
                <p className="text-body text-ink">
                  From formulation to final finish, we ensure consistent quality and
                  seamless delivery.
                </p>
                <m.div
                  initial={initialState}
                  whileInView="visible"
                  viewport={VIEW}
                  variants={buttonVariants}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  className="self-start"
                >
                  <a
                    href="/about"
                    className="group/cta inline-flex items-center gap-2.5 rounded-[10px] bg-primary text-white font-medium px-5 py-2.5 text-small transition-colors duration-300 hover:bg-primary-dark"
                  >
                    About us
                    <m.span
                      className="flex items-center justify-center"
                      whileHover={shouldReduceMotion ? undefined : { x: [0, 5, 0] }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <ArrowRight size={14} strokeWidth={2.25} />
                    </m.span>
                  </a>
                </m.div>
              </m.div>

              <m.div
                initial={initialState}
                whileInView="visible"
                viewport={VIEW}
                variants={middleImageVariants}
                style={{ y: middleParallaxY }}
                className="relative flex-1 rounded-[10px] overflow-hidden bg-cream"
              >
                <Image
                  src="/about-factory.png"
                  alt="BI Paints warehouse with stacked coil hardening ink cans"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </m.div>
            </div>

            {/* Right: heading + credential cards */}
            <div className="flex flex-col gap-20">
              <m.h2
                initial={initialState}
                whileInView="visible"
                viewport={VIEW}
                variants={headingContainerVariants}
                style={{ y: headingParallaxY }}
                className="text-h3 font-normal text-heading"
              >
                {HEADING_LINES.map((line) => (
                  <m.span key={line} variants={headingLineVariants} className="block">
                    {line}
                  </m.span>
                ))}
              </m.h2>

              <m.div
                initial={initialState}
                whileInView="visible"
                viewport={VIEW}
                variants={cardsContainerVariants}
                className="flex flex-col gap-8"
              >
                {CREDENTIALS.map((item) => (
                  <m.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <Card className="rounded-[10px] bg-cream p-4 border-0 hover:shadow-none">
                      <div className="flex items-center gap-2.5 mb-3.5">
                        <span className="flex items-center justify-center shrink-0 text-primary">
                          <item.icon size={52} strokeWidth={1.5} />
                        </span>
                        <h5 className="text-h5 font-medium text-heading">{item.title}</h5>
                      </div>
                      <p className="text-sm leading-relaxed text-ink">{item.description}</p>
                    </Card>
                  </m.div>
                ))}
              </m.div>
            </div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
