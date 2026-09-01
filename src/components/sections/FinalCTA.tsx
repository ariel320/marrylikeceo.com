"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const FinalCTA = () => {
  const { finalCta } = COPY;

  return (
    <Section
      theme="dark"
      className="relative overflow-hidden py-[140px]! lg:py-[190px]!"
    >
      {/* Quiet crimson atmosphere — no photography, just presence */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(193,39,45,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[760px] text-center">
        <motion.div
          {...fadeUp(0)}
          className="mx-auto mb-12 flex max-w-[280px] items-center gap-4"
          aria-hidden="true"
        >
          <span className="hairline-gold flex-1" />
          <span className="h-1 w-1 rotate-45 bg-[var(--gold)]" />
          <span
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, var(--gold) 0%, color-mix(in srgb, var(--gold) 25%, transparent) 100%)",
            }}
          />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(38px,5.8vw,76px)] leading-[1.08]"
        >
          {finalCta.headline}
          <br />
          <em className="text-[var(--gold)]">{finalCta.headlineAccent}</em>
        </motion.h2>

        <motion.p
          {...fadeUp(0.22)}
          className="mt-7 font-[family-name:var(--font-dm-sans)] font-light text-lg text-[var(--text-secondary)]"
        >
          {finalCta.subhead}
        </motion.p>

        <motion.div {...fadeUp(0.34)} className="mx-auto mt-11 max-w-[440px]">
          <EmailCapture source="final" variant="inline" ctaText={finalCta.cta} />
          <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
            {finalCta.micro}
          </p>
        </motion.div>

        <motion.p
          {...fadeUp(0.46)}
          className="mt-16 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-[0.25em] text-[var(--gold)]/70"
        >
          {finalCta.hashtag}
        </motion.p>
      </div>
    </Section>
  );
};
