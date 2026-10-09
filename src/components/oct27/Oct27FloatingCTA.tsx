"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27FloatingCTA.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sticky bar so visitors always see which event this is while they scroll.
 * Shows: "Upcoming live event" label, the event name tag, date · time, and
 * the Reserve button. Appears once the hero scrolls out of view, and tucks
 * away while the final call-to-action section is on screen (it would just
 * duplicate that button and cover the footer).
 */
export const Oct27FloatingCTA = () => {
  const { hero } = COPY.oct27;
  // "October 27, 2026" -> "Oct 27" for narrow phones so the line never truncates
  const shortDate = OCT27_EVENT.dateDisplay.replace(/^([A-Za-z]{3})[A-Za-z]*\s+(\d+).*$/, "$1 $2");
  const [heroInView, setHeroInView] = useState(true);
  const [finalInView, setFinalInView] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("oct27-hero");
    const finalEl = document.getElementById("oct27-final-cta");
    if (!heroEl) {
      setHeroInView(false);
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" },
    );
    heroObserver.observe(heroEl);

    const finalObserver = new IntersectionObserver(([entry]) =>
      setFinalInView(entry.isIntersecting),
    );
    if (finalEl) finalObserver.observe(finalEl);

    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  const visible = !heroInView && !finalInView;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={styles.bar}
          data-tone="navy"
          role="complementary"
          aria-label="Reserve your seat"
        >
          <div className={styles.inner}>
            <div className={styles.copy}>
              <p className={styles.label}>Upcoming live event</p>
              <p className={styles.tag}>{hero.headlineTitle}</p>
              <p className={styles.sub}>
                <span className={styles.long}>{OCT27_EVENT.dateDisplay}</span>
                <span className={styles.short}>{shortDate}</span>
                {" "}&middot; {OCT27_EVENT.timeDisplay}
              </p>
            </div>
            <a
              href={OCT27_EVENT.lumaUrl}
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
