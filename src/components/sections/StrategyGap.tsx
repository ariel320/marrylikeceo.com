"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const StrategyGap = () => (
  <Section theme="light" className="overflow-hidden py-20 lg:py-28 xl:py-32">
    <div className="relative max-w-[900px]">
      <motion.div {...fadeUp(0)} className="flex items-center gap-4">
        <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
        <Eyebrow color="gold">{COPY.strategyGap.eyebrow}</Eyebrow>
      </motion.div>

      <motion.h2
        {...fadeUp(0.1)}
        className="mt-9 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(38px,6vw,80px)] leading-[1.04] tracking-[-0.01em] text-[var(--text-dark)]"
      >
        {COPY.strategyGap.headline}
        <br />
        <em>{COPY.strategyGap.headlineAccent}</em>
      </motion.h2>
    </div>

    {/* The Pivot — the heel stands between business and love */}
    <div className="relative mt-14 grid items-center gap-10 md:grid-cols-[1fr_260px_1fr] md:gap-12 lg:mt-20 lg:grid-cols-[1fr_300px_1fr] lg:gap-14">
      <motion.div {...fadeUp(0.15)}>
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--text-dark)]">
          {COPY.strategyGap.labelBusiness}
        </p>
        <p className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[#555]">
          {COPY.strategyGap.paragraphs[0]}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="order-first mx-auto w-[200px] md:order-none md:w-full"
        aria-hidden="true"
      >
        <Image
          src="/images/heel-illustration.png"
          alt=""
          width={880}
          height={787}
          className="h-auto w-full"
          sizes="(max-width: 768px) 200px, 300px"
        />
      </motion.div>

      <motion.div {...fadeUp(0.45)}>
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--crimson)]">
          {COPY.strategyGap.labelLove}
        </p>
        <p className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[#555]">
          {COPY.strategyGap.paragraphs[1]}
        </p>
      </motion.div>
    </div>

    <motion.p
      {...fadeUp(0.55)}
      className="mt-14 text-center font-[family-name:var(--font-cormorant-garamond)] text-[clamp(24px,3.2vw,36px)] font-light leading-snug text-[var(--text-dark)] lg:mt-20"
    >
      {COPY.strategyGap.closingBold}{" "}
      <em className="text-[var(--gold)]">{COPY.strategyGap.closingAccent}</em>
    </motion.p>
  </Section>
);
