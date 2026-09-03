"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const EventsCTA = () => {
  const { cta } = COPY.events;

  return (
    <Section
      theme="dark"
      className="overflow-hidden border-t border-[var(--divider-dark)] py-24! lg:py-[140px]!"
    >
      <div className="mx-auto max-w-[680px] text-center">
        <motion.h2
          {...fadeUp(0)}
          className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(34px,5vw,62px)] font-light leading-[1.06] text-[var(--text-light)]"
        >
          {cta.headline}
          <br />
          <em className="text-[var(--gold)]">{cta.subhead}</em>
        </motion.h2>

        <motion.div {...fadeUp(0.14)} className="mt-10">
          <Button
            variant="primary"
            href={cta.href}
            target="_blank"
            className="!px-10 !py-4"
          >
            {cta.button}
          </Button>
          <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
            {cta.micro}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
