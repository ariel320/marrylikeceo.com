"use client";

import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Sept27FinalCTA = () => {
  const { finalCta } = COPY.sept27;

  return (
    <Sept27Section
      theme="surface"
      id="sept27-final-cta"
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Quiet gold atmosphere, no photography, just presence */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--sept27-gold) 10%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[720px] text-center">
        <motion.p
          {...fadeUp(0)}
          className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]"
        >
          {finalCta.eyebrow}
        </motion.p>

        <motion.div
          {...fadeUp(0.08)}
          className="mx-auto mt-8 mb-8 flex max-w-[280px] items-center gap-4"
          aria-hidden="true"
        >
          <span className="sept27-hairline-gold flex-1" />
          <span className="h-1 w-1 rotate-45 bg-[var(--sept27-gold)]" />
          <span
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, var(--sept27-gold) 0%, color-mix(in srgb, var(--sept27-gold) 20%, transparent) 100%)",
            }}
          />
        </motion.div>

        <motion.h2
          {...fadeUp(0.16)}
          className="font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(36px,5.6vw,72px)] leading-[1.08] text-white"
        >
          {finalCta.headline}
          <br />
          <em className="text-[var(--sept27-gold)] not-italic">{finalCta.headlineAccent}</em>
        </motion.h2>

        <motion.p
          {...fadeUp(0.26)}
          className="mt-7 font-[family-name:var(--font-dm-sans)] font-light text-lg text-[var(--sept27-gray)]"
        >
          {finalCta.subhead}
        </motion.p>

        <motion.div {...fadeUp(0.36)} className="mx-auto mt-11 max-w-[440px]">
          <EmailCapture
            source="event"
            variant="inline"
            theme="dark"
            ctaText={finalCta.cta}
            buttonClassName="!bg-[var(--sept27-gold)] !text-black hover:!bg-white !rounded-full"
            fieldClassName="!border-white/15 !bg-white/[0.04] !text-white focus:!border-[var(--sept27-gold)]"
          />
          <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--sept27-gray)]">
            {finalCta.micro}
          </p>
        </motion.div>

        <motion.p
          {...fadeUp(0.46)}
          className="mt-16 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-[0.25em] text-[var(--sept27-gold)]/70"
        >
          {finalCta.hashtag}
        </motion.p>
      </div>
    </Sept27Section>
  );
};
