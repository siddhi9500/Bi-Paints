"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number | null;
  suffix?: string;
  placeholder?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Counts up to `value` once it scrolls into view. When `value` is null
// (figure not yet confirmed), renders `placeholder` as static text instead —
// no animation to fake precision that doesn't exist yet.
export default function AnimatedCounter({
  value,
  suffix = "",
  placeholder = "XX+",
  duration = 1.4,
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value === null ? placeholder : `${display}${suffix}`}
    </span>
  );
}
