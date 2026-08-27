"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardUp, fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "@/lib/motion";

export default function JourneyVisionSection() {
  return (
    <section style={{ background: "#f9fafb", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col"
        style={{ gap: 50 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-start" style={{ gap: 12 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#f5a623" }} />
            <span
              className="font-inter uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#f5a623" }}
            >
              Where We Are Headed
            </span>
          </div>
          <h2 style={{ fontWeight: 500, fontSize: 34, lineHeight: "42px", color: "#1b1b2f", margin: 0 }}>
            The Road Ahead
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center w-full" style={{ gap: 48 }}>
          <motion.div variants={fadeUpSmall} className="flex flex-col items-start flex-1" style={{ gap: 24 }}>
            <h3 style={{ fontWeight: 500, fontSize: 34, lineHeight: "44px", color: "#1b1b2f", margin: 0 }}>
              Pioneering India&apos;s Paint Revolution
            </h3>
            <span style={{ width: 80, height: 4, borderRadius: 2, background: "#f5a623" }} />
            <p style={{ fontWeight: 400, fontSize: 16, lineHeight: "27.2px", color: "#4b5563" }}>
              From a ₹100 shop in 2008 to building India&apos;s most advanced paint manufacturing plant — our
              journey is far from over. With world-class facilities at Bardoli, partnerships with global industrial
              giants like AM/NS and L&amp;T, and an unwavering commitment to quality, BI Paints is poised to
              redefine India&apos;s paint industry. The road ahead leads to new markets, new innovations, and a
              vision to make Indian manufacturing truly world-class.
            </p>
          </motion.div>

          <motion.div
            variants={cardUp}
            className="relative w-full flex-1 overflow-hidden shrink-0"
            style={{ height: 360, borderRadius: 16 }}
          >
            <Image src="/journey-vision.jpg" alt="The road ahead for BI Paints" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
