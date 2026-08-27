"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import { cardUp, fadeUp, hoverLiftCard, hoverTransition, staggerContainer, viewportOnce } from "@/lib/motion";

// lucide-react ships no brand/social icons — mirrors Footer.tsx's inline SvgLinkedin.
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const LEADERS = [
  {
    name: "B.I. Sharma",
    title: "Founder & Chairman",
    bio: "A visionary entrepreneur leading BI Group's diverse expansion from a single coatings startup to a national industrial conglomerate.",
    image: "/about-leader-0.jpg",
  },
  {
    name: "Amit Sharma",
    title: "Managing Director",
    bio: "Directs technology and modern modular divisions, implementing automated European workflows across our heavy manufacturing bases.",
    image: "/about-leader-1.jpg",
  },
  {
    name: "Priya Patel",
    title: "Executive Director",
    bio: "Manages nationwide logistics, institutional dealer relations, and leads the strategic roll-out of direct-to-consumer digital commerce.",
    image: "/about-leader-2.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="page-container flex flex-col items-center"
        style={{ gap: 56 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 16 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: 16, height: 2, background: "#1a5276" }} />
            <span
              className="font-inter uppercase"
              style={{ fontWeight: 700, fontSize: 13, letterSpacing: "2px", color: "#1a5276" }}
            >
              Board of Directors
            </span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 40, color: "#0f1f3d" }}>Our Leadership</h2>
          <span style={{ width: 40, height: 4, borderRadius: 2, background: "#c59b27" }} />
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {LEADERS.map((l) => (
            <motion.div
              key={l.name}
              variants={cardUp}
              whileHover={{ ...hoverLiftCard, transition: hoverTransition }}
              className="flex flex-col items-start"
              style={{ gap: 24, padding: 24, borderRadius: 20, background: "#f4f7fb", border: "1px solid #ede8df" }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: 360, borderRadius: 12 }}>
                <ScrollRevealImage>
                  <Image src={l.image} alt={l.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </ScrollRevealImage>
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: 12 }}>
                <div className="flex items-center justify-between w-full">
                  <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>{l.name}</h3>
                  <span
                    aria-label={`${l.name} on LinkedIn`}
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 32, height: 32, borderRadius: 6, background: "#0a66c2" }}
                  >
                    <span className="text-white">
                      <LinkedinIcon />
                    </span>
                  </span>
                </div>
                <span
                  className="font-inter uppercase"
                  style={{ fontWeight: 600, fontSize: 14, letterSpacing: "1px", color: "#1a5276" }}
                >
                  {l.title}
                </span>
                <p style={{ fontWeight: 400, fontSize: 15, lineHeight: "24px", color: "#4b5563" }}>{l.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
