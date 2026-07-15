"use client";

/* ────────────────────────────────────────────────────────────────────────
 * LEGACY — superseded by the Figma redesign below (node 19:293,
 * "section.hero" — html.to.design Brixon import). Kept commented out for
 * reference/rollback rather than deleted.
 * ────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section style={{ paddingTop: "var(--header-height)" }}>
      {/* Hero image with accent color block — full-bleed, edge to edge *}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute -top-2 left-0 sm:-top-4 z-10"
        >
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 bg-white ml-9 -mt-5 sm:ml-14 sm:-mt-7" />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 50vh, 560px)" }}
        >
          <Image
            src="/6836b1d6d99cb6abd6c9c72d_hero-02.jpg"
            alt="BI Group teams at work on-site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </section>
  );
}

 * ──────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_AVATARS = ["/hero-avatar-1.jpg", "/hero-avatar-2.jpg", "/hero-avatar-3.jpg"];

export default function HeroSection() {
  return (
    <section style={{ paddingTop: "var(--header-height)" }}>
      <div className="page-container">
        <div className="max-w-[1296px] mx-auto flex flex-col pt-10 sm:pt-14 lg:pt-[60px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-medium text-heading"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)", lineHeight: 1.3 }}
          >
            Innovative Solutions
            <br />
            Across Six Industries
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10 border-t border-black/10 mt-10 pt-8 pb-12"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5 shrink-0" aria-hidden>
              {HERO_AVATARS.map((src, i) => (
                <span
                  key={src}
                  className="relative w-[46px] h-[46px] rounded-full overflow-hidden bg-cream"
                  style={{ zIndex: HERO_AVATARS.length - i }}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="46px" />
                </span>
              ))}
            </div>

            {/* Business group blurbs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 flex-1">
              {BUSINESS_GROUPS.map((group) => (
                <div key={group.title} className="flex flex-col gap-2.5">
                  <h6 className="text-h6 font-medium text-heading">{group.title}</h6>
                  <p className="text-small leading-relaxed text-ink">{group.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero image with geometric accent pattern — full-bleed, edge to edge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 z-10 grid grid-cols-2 grid-rows-2 w-20 h-20 sm:w-28 sm:h-28"
        >
          <div className="bg-primary" />
          <div className="bg-white/15 backdrop-blur-[2.5px]" />
          <div className="bg-white/15 backdrop-blur-[2.5px]" />
          <div className="bg-[#11120f]" />
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 right-0 z-10 grid grid-cols-2 grid-rows-2 w-20 h-20 sm:w-28 sm:h-28"
        >
          <div className="bg-white/15 backdrop-blur-[2.5px]" />
          <div />
          <div />
          <div className="bg-white/15 backdrop-blur-[2.5px]" />
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 50vh, 600px)" }}
        >
          <Image
            src="/b50366e8-eb3b-4a51-91b7-0562eb68f53b.png"
            alt="BI Group teams at work on-site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
