"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { House } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="page-container flex flex-col gap-8">
        <SectionHeader icon={House} eyebrow="Management Team" title="Our Executive Leadership" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Card className="rounded-2xl bg-white border-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative w-full aspect-4/3 lg:aspect-auto">
                <Image
                  src="/about-team-devendra.png"
                  alt="Devendra Singhania, Managing Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
                <div className="flex flex-col gap-1">
                  <h3 className="text-h3 font-normal text-heading">Devendra Singhania</h3>
                  <p className="text-body font-medium text-primary">Managing Director</p>
                </div>
                <p className="text-body text-ink leading-relaxed">
                  With 15+ years in the coatings industry, Devendra leads BI Group&apos;s
                  vision of becoming India&apos;s most trusted name in paints, homeopathy,
                  and industrial solutions.
                </p>
                <span className="w-16 h-1 bg-primary rounded-full" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
