"use client";

import { motion } from "framer-motion";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const MAJOR_CLIENTS =
  "Arcelor Mittal & Nippon Steel (AMNS), Adani Logistics, Larsen & Toubro (L&T), Reliance Ltd, Godrej & Boyce, Grasim Industries, Pidilite Industries, Radisson Hotel Group, Coromandel";

export default function VerticalsRecapSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="page-container flex flex-col gap-10">
        <span className="text-small font-medium uppercase tracking-[0.14em] text-primary">
          Business Verticals
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-4">
          {BUSINESS_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="rounded-[10px] border border-black/10 p-6 flex flex-col gap-2"
            >
              <h5 className="text-h5 font-medium text-heading">{group.title}</h5>
              <p className="text-small text-ink leading-relaxed">{group.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-6 border-t border-black/10">
          <span className="text-small font-medium uppercase tracking-[0.14em] text-primary">
            Major Clients
          </span>
          <p className="text-body text-ink">{MAJOR_CLIENTS}</p>
        </div>
      </div>
    </section>
  );
}
