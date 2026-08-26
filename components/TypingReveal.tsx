"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

// Pass-through variant for wrapper tags (h1/h2/p) that hold TypingReveal
// spans — no visual change of their own, just propagates the ancestor's
// "hidden"/"visible" state down to each letter/word span.
export const passThroughVariants: Variants = { hidden: {}, visible: {} };

// A slow, GPU-only (opacity + y) cascade text reveal — split "letter" for
// short display text, "word" for longer copy so a full sentence doesn't
// take too long. Must be nested under an ancestor motion component that
// declares "hidden"/"visible" states (initial/animate or whileInView) —
// each span inherits that state and applies its own per-character delay.
export function TypingReveal({
  text,
  split,
  charDelay,
  charDuration,
  baseDelay,
}: {
  text: string;
  split: "letter" | "word";
  charDelay: number;
  charDuration: number;
  baseDelay: number;
}) {
  const letterSpan = (key: number, char: string, delayIndex: number) => (
    <motion.span
      key={key}
      variants={{
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: charDuration, ease: EASE_OUT, delay: baseDelay + delayIndex * charDelay },
        },
      }}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  );

  if (split === "word") {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, i) => (
          <Fragment key={i}>
            {letterSpan(i, word, i)}
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </>
    );
  }

  // Letter mode: each atomic inline-block letter is a valid line-break point
  // to the browser, so wrap every word's letters in a nowrap group — the
  // (unanimated, plain-text) space between groups stays the only break point.
  const words = text.split(" ");
  const wordStartIndexes = words.reduce<number[]>((acc, _word, wi) => {
    acc.push(wi === 0 ? 0 : acc[wi - 1] + words[wi - 1].length);
    return acc;
  }, []);
  return (
    <>
      {words.map((word, wi) => {
        const startIndex = wordStartIndexes[wi];
        return (
          <Fragment key={wi}>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {Array.from(word).map((letter, li) => letterSpan(li, letter, startIndex + li))}
            </span>
            {wi < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </>
  );
}
