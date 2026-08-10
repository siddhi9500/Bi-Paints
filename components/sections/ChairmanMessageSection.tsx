"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cardUp, viewportOnce } from "@/lib/motion";

export default function ChairmanMessageSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={cardUp}
        className="page-container flex flex-col lg:flex-row items-center"
        style={{ gap: 64, padding: 48, borderRadius: 24, background: "#f4f7fb", border: "1px solid #ede8df" }}
      >
        <div
          className="relative w-full lg:w-[360px] shrink-0 overflow-hidden"
          style={{ height: 420, borderRadius: 16, border: "1px solid #ede8df" }}
        >
          <Image src="/about-chairman.jpg" alt="Bhikam Jain, Chairman & Founder, BI Group" fill className="object-cover" sizes="(min-width: 1024px) 360px, 100vw" />
        </div>

        <div className="flex flex-col items-start flex-1" style={{ gap: 24 }}>
          <Quote size={40} className="text-brand" strokeWidth={1.5} />
          <p style={{ fontWeight: 500, fontSize: 22, lineHeight: "36px", color: "#0f1f3d", margin: 0 }}>
            &quot;At BI Group, we believe that true growth comes from building with integrity, innovating with
            purpose, and serving with commitment. Our journey from a single paint company to a diversified
            industrial group reflects our unwavering dedication to India&apos;s progress.&quot;
          </p>
          <div className="flex flex-col" style={{ gap: 4 }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d" }}>Bhikam Jain</span>
            <span
              className="uppercase"
              style={{ fontWeight: 600, fontSize: 14, letterSpacing: "1px", color: "#1a5276" }}
            >
              Chairman &amp; Founder, BI Group
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
