"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import FadeInSection from "@/components/ui/FadeInSection";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: StatProps[] = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "Decades of expertise in paint and coatings manufacturing",
  },
  {
    value: 500,
    suffix: "+",
    label: "Clients Served",
    description: "Trusted by hundreds of businesses and homeowners nationwide",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed projects across every industry vertical",
  },
];

function AnimatedCounter({ value, suffix }: Pick<StatProps, "value" | "suffix">) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 60; // ~1 second at 60fps
    const step = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (frame < totalFrames) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-gray-100">
      <div className="page-container relative">
        <FadeInSection className="text-center mb-14">
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Numbers That Speak for Themselves
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded" />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.15}>
              <div
                className="text-center px-6 py-8 rounded-lg border border-gray-200 hover:border-accent hover:shadow-md"
                style={{ transition: "all 0.5s ease-in-out" }}
              >
                <div className="text-5xl md:text-6xl font-extrabold text-navy mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-accent font-bold text-lg mb-2">{stat.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
