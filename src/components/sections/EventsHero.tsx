"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const EventsHero = () => {
  const { events } = COPY;

  return (
    <Section
      theme="dark"
      className="overflow-hidden bg-transparent! pt-32! pb-16! lg:pt-[220px]! lg:pb-24!"
    >
      <div className="mx-auto max-w-[820px] text-center">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center gap-4"
        >
          <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
          <Eyebrow>{events.eyebrow}</Eyebrow>
          <span
            className="h-px w-10 flex-none"
            style={{
              background:
                "linear-gradient(to left, var(--gold) 0%, color-mix(in srgb, var(--gold) 25%, transparent) 100%)",
            }}
            aria-hidden="true"
          />
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-7 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(48px,8vw,96px)] font-light leading-[1.02] tracking-[0.01em] text-[var(--text-light)]"
        >
          {events.headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(20px,2.4vw,28px)] font-light italic text-[var(--gold)]"
        >
          {events.subhead}
        </motion.p>

        <motion.p
          {...fadeUp(0.26)}
          className="mx-auto mt-8 max-w-[560px] font-[family-name:var(--font-dm-sans)] text-[16px] font-light leading-relaxed text-[var(--text-secondary)]"
        >
          {events.intro}
        </motion.p>

        <motion.div {...fadeUp(0.34)} className="mt-14 flex justify-center">
          <span className="hairline-gold w-full max-w-[520px]" aria-hidden="true" />
        </motion.div>
      </div>
    </Section>
  );
};
