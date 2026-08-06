"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "@/lib/motion";

const PARTNERS = [
  { name: "Ministry of Defence", logo: "/client-ministry-of-defence.png" },
  { name: "AM/NS India", logo: "/client-amns-india.png" },
  { name: "ElectroMech", logo: "/client-electromech.png" },
  { name: "Lohr", logo: "/client-lohr.png" },
  { name: "Godrej", logo: "/client-godrej.png" },
  { name: "Larsen & Toubro", logo: "/client-lt.png" },
];

export default function TrustedPartnersSection() {
  return (
    <section className="font-inter bg-white" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
      >
        {/* trusted-partners-heading (3028:225) */}
        <motion.div
          variants={fadeUp}
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
        <motion.div variants={staggerContainer(0.08)} className="flex flex-wrap items-center justify-center pt-20" style={{ gap: 48 }}>
          {PARTNERS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUpSmall}
              className="relative shrink-0"
              style={{ width: 160, height: 64 }}
            >
              <Image src={p.logo} alt={p.name} fill className="object-contain" sizes="160px" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
