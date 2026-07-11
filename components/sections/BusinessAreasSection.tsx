"use client";

/* ────────────────────────────────────────────────────────────────────────
 * LEGACY — superseded by the Figma redesign below (node 19:396,
 * "div.w-layout-blockcontainer" / "Our Verticals" — html.to.design Brixon
 * import). Kept commented out for reference/rollback rather than deleted.
 * ────────────────────────────────────────────────────────────────────────

import FadeInSection from "@/components/ui/FadeInSection";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

const STATS = [
  {
    value: "50,000",
    suffix: "+",
    label: "Satisfied clients trust us nationwide for lasting color and finish",
  },
  {
    value: "15",
    suffix: "+",
    label: "Years of experience formulating premium paints and coatings",
  },
  {
    value: "400",
    suffix: "+",
    label: "Quality parameters tested on every batch before it reaches you",
  },
];

export default function BusinessAreasSection() {
  return (
    <section className="pt-20 bg-white">
      {/* Stats row *}
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
              <p className="text-lg leading-relaxed text-gray-600 max-w-sm mx-auto">
                {stat.label}
              </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

 * ──────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import { motion } from "framer-motion";
import { House } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

const VIEW = { once: true, margin: "-60px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function BusinessAreasSection() {



  return (
    <section className="py-16 sm:py-20 bg-white">
      
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="BI Group's Businesses" title="Our Verticals" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_GROUPS.map((group, i) => (
            <motion.a
              key={group.title}
              href={group.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="block"
            >
              <Card className="rounded-[10px] bg-cream border-0 flex flex-col h-full overflow-hidden">
                <div className="flex flex-col gap-0.5 p-5">
                  <h4 className="text-h4 font-normal text-heading">{group.title}</h4>
                  <p className="text-body text-ink">{group.subtitle}</p>
                </div>
                <div className="relative w-full aspect-412/435 rounded-[10px] overflow-hidden">
                  {group.image && (
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-end">
          <Button href="/products">View All</Button>
        </div>
      </div>
    </section>
  );
}
