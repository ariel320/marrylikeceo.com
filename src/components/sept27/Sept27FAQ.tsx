"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { AccordionItem } from "@/components/ui/Accordion";
import { COPY } from "@/constants/copy";
import { SEPT27_FAQ_DATA } from "@/lib/sept27-faq-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Sept27FAQ = () => {
  const { faq } = COPY.sept27;
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handleToggle = useCallback((slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <Sept27Section theme="surface" id="faq" maxWidth={760}>
      <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-4">
        <span className="sept27-hairline-gold w-10 flex-none" aria-hidden="true" />
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]">
          {faq.eyebrow}
        </p>
        <span
          className="h-px w-10 flex-none"
          style={{
            background:
              "linear-gradient(to left, var(--sept27-gold) 0%, color-mix(in srgb, var(--sept27-gold) 20%, transparent) 100%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      <motion.h2
        {...fadeUp(0.1)}
        className="mt-6 text-center font-[family-name:var(--font-cormorant-garamond)] text-[clamp(28px,3.6vw,44px)] font-light leading-[1.1] text-white"
      >
        {faq.headline}
      </motion.h2>

      <motion.div {...fadeUp(0.18)} className="mt-12">
        {SEPT27_FAQ_DATA.map((item) => (
          <AccordionItem
            key={item.slug}
            id={`sept27-faq-${item.slug}`}
            question={item.question}
            theme="dark"
            isOpen={openSlug === item.slug}
            onToggle={() => handleToggle(item.slug)}
          >
            <div className="flex flex-col gap-3">
              {item.answer.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="font-[family-name:var(--font-dm-sans)] font-light text-[15px] leading-relaxed text-[var(--sept27-gray)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AccordionItem>
        ))}
      </motion.div>
    </Sept27Section>
  );
};
