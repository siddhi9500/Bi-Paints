import type { Transition, Variants } from "framer-motion";

// Single shared easing curve across the site — a soft, premium deceleration
// (Apple/Stripe/Linear-style), never linear.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const springSubtle: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

// Section headings / standalone copy blocks.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

// Smaller supporting elements (CTAs, captions) that shouldn't compete with fadeUp.
export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// Grid/list cards revealed on scroll.
export const cardUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
};

export const fadeScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

// Wrap a group of children in this (initial="hidden" whileInView="visible")
// so they reveal in sequence instead of all at once.
export function staggerContainer(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

// once:true so scroll reveals never replay; amount:0.2 so they fire a little
// before the element is fully on screen.
export const viewportOnce = { once: true, amount: 0.2 } as const;

// Spread into whileHover / whileTap — kept subtle, transform-only.
export const hoverLiftCard = { y: -4 };
export const hoverScaleButton = { scale: 1.03 };
export const tapScaleButton = { scale: 0.98 };
export const hoverScaleImage = { scale: 1.04 };

export const hoverTransition: Transition = { duration: 0.25, ease: EASE_OUT };
