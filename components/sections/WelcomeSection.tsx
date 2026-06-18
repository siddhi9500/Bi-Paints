"use client";

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Left: Welcome text — 2 out of 5 columns */}
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

          {/* Right: Stats — 3 out of 5 columns, matching reference layout */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-4">

            {/* Stat 1 — blue box */}
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

            {/* Stat 2 — blue box */}
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

            {/* Stat 3 — circular badge matching "10 Years" in reference */}
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
