"use client";

import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";

import styles from "./WhyAttend.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "What you'll learn" as an open editorial list instead of three icon cards:
 * headline on the left, three lines of thinking separated by fine gold rules.
 */
export const WhyAttend = () => {
  const { whyAttend } = COPY.oct27;

  return (
    <Oct27Section theme="surface" id="why-attend" maxWidth={1100}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE }}
        className={styles.layout}
      >
        <h2 className={styles.headline}>
          {whyAttend.headline} <span className={styles.second}>{whyAttend.headlineAccent}</span>
        </h2>

        <ul className={styles.list}>
          {whyAttend.cards.map((card) => (
            <li key={card.title} className={styles.item}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.body}>{card.body}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </Oct27Section>
  );
};
