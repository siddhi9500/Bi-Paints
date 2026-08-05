"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const PARTNERS = [
  { name: "Ministry of Defence", logo: "/client-ministry-of-defence.png" },
  { name: "AM/NS India", logo: "/client-amns-india.png" },
  { name: "ElectroMech", logo: "/client-electromech.png" },
  { name: "Lohr", logo: "/client-lohr.png" },
  { name: "Godrej", logo: "/client-godrej.png" },
  { name: "Larsen & Toubro", logo: "/client-lt.png" },
];

export default function TrustedPartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="font-inter bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="page-container flex flex-col items-center">
        {/* trusted-partners-heading (3028:225) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center"
          style={{ gap: 12, paddingBottom: 20 }}
        >
          <p style={{ fontWeight: 600, fontSize: 13, letterSpacing: "3px", color: "#0b2d5b", margin: 0 }}>
            OUR PARTNERS
          </p>
          <p style={{ fontWeight: 600, fontSize: 32, color: "#222222", margin: 0 }}>
            Trusted by India&apos;s Leading Industries
          </p>
          <p style={{ fontWeight: 400, fontSize: 16, color: "#787878", margin: 0 }}>
            Partnering with top organizations across defence, steel, energy, and engineering
            sectors
          </p>
        </motion.div>

        {/* logo-row (2958:230): gap-48, each 160x64 */}
        <div className="flex flex-wrap items-center justify-center" style={{ gap: 48 }}>
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="relative shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
              style={{ width: 160, height: 64, transition: "all 0.3s ease-in-out" }}
            >
              <Image src={p.logo} alt={p.name} fill className="object-contain" sizes="160px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
