"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

const STATS = [
  { value: "50K", suffix: "+", label: "Satisfied clients" },
  { value: "15",   suffix: "+", label: "Years experiences" },
  { value: "56",   suffix: "+",  label: "Qualty paramerters" },

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
                      paddingLeft: "0.1em",
                    }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-lg leading-relaxed text-gray-600 max-w-xs mx-auto">
                {stat.label}
              </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
