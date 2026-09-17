"use client";

import { motion } from "motion/react";

import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";
import { SEPT27_EVENT } from "@/config/sept27-event";

import styles from "./Sept27Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * Full-bleed banner hero for the Sept 27 Experience.
 *
 * Layout lives in Sept27Hero.module.css rather than utility classes: the
 * spacing-scale utilities are not resolving in this build, which collapsed
 * every padding and margin and stacked the copy on itself. Scoped CSS keeps
 * the hero correct independently of that.
 */
export const Sept27Hero = () => {
  const { hero } = COPY.sept27;

  const details = [
    { label: "Date", value: SEPT27_EVENT.dateDisplay },
    { label: "Time", value: SEPT27_EVENT.timeDisplay },
  ];

  return (
    <section id="sept27-hero" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: EASE }}
          className={styles.photo}
        >
          <DuotoneImage
            srcColor="/images/b1.png"
            srcBW="/images/b1.png"
            alt={hero.imageAlt}
            priority
            sizes="100vw"
            revealOnLoad
            revealDelay={1.1}
          />
        </motion.div>
        <div className={styles.scrimHorizontal} />
        <div className={styles.scrimVertical} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.h1 {...fadeUp(0)} className={`${styles.headline} ${styles.headlineFirst}`}>
            <span className={styles.headlineLead}>{hero.headline}</span>
            <span className={styles.headlineAccent}>{hero.headlineAccent}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.12)}>
            <span className={styles.badge}>{hero.freeBadge}</span>
          </motion.div>

          <motion.p {...fadeUp(0.24)} className={styles.subhead}>
            {hero.subhead}
          </motion.p>

          <motion.div {...fadeUp(0.44)} className={styles.actions}>
            <a
              href={SEPT27_EVENT.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {hero.cta}
              <span className={styles.ctaArrow} aria-hidden="true">
                &rarr;
              </span>
            </a>

            <dl className={styles.meta}>
              {details.map((detail) => (
                <div key={detail.label} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{detail.label}</dt>
                  <dd className={styles.metaValue}>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.p {...fadeUp(0.54)} className={styles.micro}>
            {hero.ctaMicro}
          </motion.p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className={styles.poster}
        >
          <span className={styles.posterEyebrow}>{hero.posterEyebrow}</span>
          <span className={styles.posterHeadline}>{hero.posterHeadline}</span>
          <span className={styles.posterMeta}>
            {SEPT27_EVENT.dayOfWeek}, {SEPT27_EVENT.dateDisplay}
            <br />
            {SEPT27_EVENT.timeDisplay}
          </span>
        </motion.aside>
      </div>
    </section>
  );
};
