"use client";

import { motion } from "motion/react";
import { Target, MessageCircle, Users, type LucideIcon } from "lucide-react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const iconMap: Record<string, LucideIcon> = {
  Target,
  MessageCircle,
  Users,
};

export const WhyAttend = () => {
  const { whyAttend } = COPY.sept27;

  return (
    <Sept27Section theme="surface" id="why-attend">
      <div className="mx-auto max-w-[680px] text-center">
        <motion.div {...fadeUp(0)}>
          <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]">
            {whyAttend.eyebrow}
          </p>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(32px,4.4vw,56px)] font-light leading-[1.08] text-white"
        >
          {whyAttend.headline}{" "}
          <em className="text-[var(--sept27-gold)] not-italic">{whyAttend.headlineAccent}</em>
        </motion.h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {whyAttend.cards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <motion.div
              key={card.title}
              {...fadeUp(0.16 + i * 0.1)}
              className="group relative overflow-hidden rounded-[6px] border border-white/10 bg-[var(--sept27-bg)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--sept27-gold)]/50 hover:shadow-[0_30px_60px_-24px_color-mix(in_srgb,var(--sept27-gold)_35%,transparent)]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--sept27-gold) 25%, transparent) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sept27-gold)]/40 text-[var(--sept27-gold)] transition-transform duration-500 group-hover:scale-110">
                {Icon && <Icon size={20} strokeWidth={1.5} />}
              </div>

              <h3 className="relative mt-6 font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-normal text-white">
                {card.title}
              </h3>

              <p className="relative mt-3 font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-relaxed text-[var(--sept27-gray)]">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Sept27Section>
  );
};
