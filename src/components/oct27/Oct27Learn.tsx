"use client";

import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/** "What you'll learn" — the five session takeaways as numbered editorial rows.
 *  Styles live in app/free-live-event/sections.css (o27l- prefix). */
export const Oct27Learn = () => {
  const { learn } = COPY.oct27;

  return (
    <Oct27Section id="what-youll-learn" theme="surface" tone="navy" maxWidth={820}>
      <div className="o27l-head">
        <motion.div {...fadeUp(0)} className="o27l-eyebrowRow">
          <span className="o27l-hair" aria-hidden="true" />
          <p className="o27l-eyebrow">{learn.eyebrow}</p>
          <span className="o27l-hair" aria-hidden="true" />
        </motion.div>
        <motion.h2 {...fadeUp(0.08)} className="o27l-headline">
          {learn.headline} <em>{learn.headlineAccent}</em>
        </motion.h2>
      </div>

      <ol className="o27l-list">
        {learn.items.map((item, i) => (
          <motion.li key={item.title} {...fadeUp(0.12 + i * 0.08)} className="o27l-row">
            <span className="o27l-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="o27l-text">{item.title}</span>
          </motion.li>
        ))}
      </ol>

      <motion.div {...fadeUp(0.2)} className="o27l-ctaWrap">
        <a href={OCT27_EVENT.lumaUrl} target="_blank" rel="noopener noreferrer" className="o27l-cta">
          {learn.cta} <span aria-hidden="true">&rarr;</span>
        </a>
      </motion.div>
    </Oct27Section>
  );
};
