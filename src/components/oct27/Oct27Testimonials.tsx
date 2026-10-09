"use client";

import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";


const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Oct27Testimonials = () => {
  const { testimonials } = COPY.oct27;

  return (
    <Oct27Section theme="bg" tone="navy" id="testimonials">
      <div className="o27t-head">
        <motion.p {...fadeUp(0)} className="o27t-eyebrow">
          {testimonials.eyebrow}
        </motion.p>
        <motion.h2 {...fadeUp(0.08)} className="o27t-headline">
          {testimonials.headline}
        </motion.h2>
        <motion.p {...fadeUp(0.14)} className="o27t-note">
          {testimonials.note}
        </motion.p>
      </div>

      <div className="o27t-grid">
        {testimonials.items.map((item, i) => (
          <motion.figure key={item.name} {...fadeUp(0.2 + i * 0.1)} className="o27t-card">
            <span className="o27t-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="o27t-quote">{item.quote}</blockquote>
            <figcaption className="o27t-caption">
              <span className="o27t-rule" aria-hidden="true" />
              <div>
                <p className="o27t-name">{item.name}</p>
                <p className="o27t-role">{item.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Oct27Section>
  );
};
