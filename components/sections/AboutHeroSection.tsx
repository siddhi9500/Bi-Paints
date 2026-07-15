"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function AboutHeroSection() {
  return (
    <section className="pt-16 sm:pt-20 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-5 max-w-xl pb-10"
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-cream px-4 py-1.5 text-small font-medium text-heading">
            <ShieldCheck size={14} strokeWidth={2} className="text-primary" />
            Est. 2005 · ISO 9001:2015 Certified
          </span>
          <h1 className="text-h1 font-normal text-heading">About BI Group</h1>
          <p className="text-body text-ink">
            From industrial coatings to homeopathy and industrial solutions — BI Group
            delivers quality across every vertical.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 50vh, 560px)" }}
      >
        <Image
          src="/about-hero-office.png"
          alt="BI Group Head Office, Surat, Gujarat"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/45 to-black/20" />
        <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 flex flex-col gap-1.5 rounded-[10px] bg-white/90 px-5 py-4">
          <p className="text-body font-medium text-heading">BI Group Head Office</p>
          <p className="text-small text-ink">Surat, Gujarat, India</p>
        </div>
      </motion.div>
    </section>
  );
}
