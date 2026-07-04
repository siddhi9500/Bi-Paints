"use client";

import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

const STATS = [
  { value: "300K", suffix: "+", label: "Products Distributed Across India" },
  { value: "50",   suffix: "+", label: "Countries we export to — Dubai, Thailand, Bangladesh, Sri Lanka & Maldives" },
  { value: "10",   suffix: "",  label: "Years of Industry Excellence" },
];

export default function BusinessAreasSection() {
  return (
    <section className="pt-20 bg-white">
      {/* Stats row */}
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-center">
          {STATS.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.5}>
              <div className="flex items-baseline justify-center gap-0 mb-3">
                <GradualSpacing
                  text={stat.value}
                  containerClassName="flex"
                  className="leading-none font-semibold"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(2.4rem, 4vw, 4.4rem)",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                />
                {stat.suffix && (
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "clamp(2.4rem, 4vw, 4.4rem)",
                      fontWeight: 600,
                      color: "#f5a200",
                      lineHeight: 1,
                    }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-gray-500 max-w-xs mx-auto">
                {stat.label}
              </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
