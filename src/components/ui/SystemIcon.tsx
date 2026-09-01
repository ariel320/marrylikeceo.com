"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fine-line gold icons for the four methodology stages.
 * 0 Product-Market Fit — interlocking circles, the overlap is the fit
 * 1 Pricing & Standards — diamond, know your value
 * 2 The Discovery Process — compass, run the roadmap
 * 3 Conversion & Commitment — solitaire ring
 */

interface SystemIconProps {
  readonly index: 0 | 1 | 2 | 3;
  readonly className?: string;
  readonly delay?: number;
}

const ICON_PATHS: ReadonlyArray<ReadonlyArray<string>> = [
  // Interlocking circles (Venn)
  [
    "M 40 32 A 15 15 0 1 1 10 32 A 15 15 0 1 1 40 32",
    "M 54 32 A 15 15 0 1 1 24 32 A 15 15 0 1 1 54 32",
  ],
  // Diamond
  [
    "M 22 16 L 42 16 L 51 28 L 32 52 L 13 28 Z",
    "M 13 28 L 51 28",
    "M 22 16 L 27 28 L 32 52",
    "M 42 16 L 37 28 L 32 52",
  ],
  // Compass
  [
    "M 49 32 A 17 17 0 1 1 15 32 A 17 17 0 1 1 49 32",
    "M 32 20 L 36.5 32 L 32 44 L 27.5 32 Z",
    "M 36.5 32 L 27.5 32",
    "M 32 11 L 32 15",
    "M 32 49 L 32 53",
    "M 11 32 L 15 32",
    "M 49 32 L 53 32",
  ],
  // Solitaire ring
  [
    "M 44.5 40 A 12.5 12.5 0 1 1 19.5 40 A 12.5 12.5 0 1 1 44.5 40",
    "M 32 13 L 38.5 20 L 32 27.5 L 25.5 20 Z",
    "M 25.5 20 L 38.5 20",
    "M 18 10 L 20 14",
    "M 46 10 L 44 14",
  ],
];

/** Venn intersection accent — the only filled element in the set */
const VennAccent = ({ delay }: { readonly delay: number }) => (
  <motion.path
    d="M 32 29 L 34.5 32 L 32 35 L 29.5 32 Z"
    fill="var(--gold)"
    stroke="none"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5, delay: delay + 0.9, ease: EASE }}
    style={{ transformOrigin: "32px 32px" }}
  />
);

export const SystemIcon = ({ index, className, delay = 0 }: SystemIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {ICON_PATHS[index].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            pathLength: { duration: 0.9, delay: delay + i * 0.12, ease: EASE },
            opacity: { duration: 0.01, delay: delay + i * 0.12 },
          }}
        />
      ))}
      {index === 0 && <VennAccent delay={delay} />}
    </svg>
  );
};
