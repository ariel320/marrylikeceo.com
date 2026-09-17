"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { COPY } from "@/constants/copy";
import { SEPT27_EVENT } from "@/config/sept27-event";

import styles from "./Sept27FloatingCTA.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sticky reserve-seat bar. Appears once the visitor scrolls past the hero
 * and stays pinned to the bottom of the viewport for the rest of the page.
 * Intentionally has no close/dismiss control — it's meant to stay
 * available the whole time someone is reading the page.
 */
export const Sept27FloatingCTA = () => {
  const { hero } = COPY.sept27;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("sept27-hero");
    if (!heroEl) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={styles.bar}
          role="complementary"
          aria-label="Reserve your seat"
        >
          <div className={styles.inner}>
            <div className={styles.copy}>
              <p className={styles.label}>{hero.freeBadge}</p>
              <p className={styles.sub}>
                {SEPT27_EVENT.dateDisplay} &middot; {SEPT27_EVENT.timeDisplay}
              </p>
            </div>
            <a
              href={SEPT27_EVENT.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {hero.cta}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
