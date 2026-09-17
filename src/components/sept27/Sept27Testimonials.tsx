"use client";

import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Sept27Testimonials = () => {
  const { testimonials } = COPY.sept27;

  return (
    <Sept27Section theme="bg" id="testimonials">
      <div className="mx-auto max-w-[640px] text-center">
        <motion.p
          {...fadeUp(0)}
          className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]"
        >
          {testimonials.eyebrow}
        </motion.p>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(30px,4vw,50px)] font-light leading-[1.08] text-white"
        >
          {testimonials.headline}
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-4 font-[family-name:var(--font-dm-sans)] text-sm font-light text-[var(--sept27-gray)]"
        >
          {testimonials.note}
        </motion.p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <motion.figure
            key={item.name}
            {...fadeUp(0.2 + i * 0.1)}
            className="group flex flex-col rounded-[6px] border border-white/10 bg-[var(--sept27-surface)] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--sept27-gold)]/40"
          >
            <span
              className="font-[family-name:var(--font-cormorant-garamond)] text-5xl leading-none text-[var(--sept27-gold)]/60"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 font-[family-name:var(--font-cormorant-garamond)] text-[19px] font-light italic leading-snug text-white">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="sept27-hairline-gold w-8 flex-none" aria-hidden="true" />
              <div>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white">
                  {item.name}
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--sept27-gray)]">
                  {item.role}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Sept27Section>
  );
};
