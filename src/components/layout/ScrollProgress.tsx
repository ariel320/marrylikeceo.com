"use client";

import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div
      className="fixed right-8 top-1/2 z-40 hidden h-[140px] w-px -translate-y-1/2 bg-[var(--divider-dark)]/60 xl:block"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleY }}
        className="absolute inset-0 origin-top bg-[var(--gold)]"
      />
    </div>
  );
};
