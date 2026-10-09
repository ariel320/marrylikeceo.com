"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";
import { OCT27_FAQ_DATA } from "@/lib/oct27-faq-data";


const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Oct27FAQ = () => {
  const { faq } = COPY.oct27;
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handleToggle = useCallback((slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <Oct27Section theme="surface" tone="navy" id="faq" maxWidth={760}>
      <motion.div {...fadeUp(0)} className="o27f-eyebrowRow">
        <span className="o27f-hair" aria-hidden="true" />
        <p className="o27f-eyebrow">{faq.eyebrow}</p>
        <span className="o27f-hair" aria-hidden="true" />
      </motion.div>

      <motion.h2 {...fadeUp(0.1)} className="o27f-headline">
        {faq.headline}
      </motion.h2>

      <motion.div {...fadeUp(0.18)} className="o27f-list">
        {OCT27_FAQ_DATA.map((item) => {
          const isOpen = openSlug === item.slug;
          const id = `oct27-faq-${item.slug}`;
          return (
            <div key={item.slug} className={`o27f-item${isOpen ? " o27f-open" : ""}`}>
              <button
                type="button"
                className="o27f-question"
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                onClick={() => handleToggle(item.slug)}
              >
                <span>{item.question}</span>
                <span className="o27f-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div id={`${id}-content`} role="region" className="o27f-panel">
                <div className="o27f-panelInner">
                  <div className="o27f-answer">
                    {item.answer.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Oct27Section>
  );
};
