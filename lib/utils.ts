import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge doesn't know about our custom @theme font-size tokens
// (text-h1…text-h6, text-body, text-body-lg, text-small) — without this it
// buckets them in the text-color group and silently drops text-white/etc.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-h5",
        "text-h6",
        "text-body-lg",
        "text-body",
        "text-small",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
