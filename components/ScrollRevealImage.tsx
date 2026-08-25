"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

interface ScrollRevealImageProps {
  children: ReactNode;
  className?: string;
}

// Wraps a card's image with a one-way, scroll-scrubbed "opening" reveal: as
// the box crosses the band from 90% to 40% of the viewport height, it wipes
// open (clip-path) while settling in from a slight scale/offset. Progress
// only ever moves forward (tracked via maxProgress), so the reveal opens
// once on the way down and stays open — scrolling back up never re-covers
// it. Drop this directly inside an existing `relative overflow-hidden`
// sized box in place of the raw <Image>; it fills that box (`absolute
// inset-0`) with zero layout impact — card size/position never change.
export default function ScrollRevealImage({ children, className }: ScrollRevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.4"] });
  const maxProgress = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxProgress.get()) maxProgress.set(latest);
  });
  const progress = useSpring(maxProgress, { stiffness: 110, damping: 26, mass: 0.7 });

  const clipPath = useTransform(progress, [0, 1], ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]);
  const scale = useTransform(progress, [0, 1], [1.16, 1]);
  const y = useTransform(progress, [0, 1], [28, 0]);

  return (
    <div ref={ref} className={`absolute inset-0${className ? ` ${className}` : ""}`}>
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <motion.div className="relative w-full h-full" style={{ scale, y }}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
