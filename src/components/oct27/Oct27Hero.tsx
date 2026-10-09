"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { LocalEventTime } from "@/components/oct27/LocalEventTime";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Editorial hero: copy on the left, Ariel's portrait on the right dissolving into deep navy. */
export const Oct27Hero = () => {
  const { hero } = COPY.oct27;
  const easternTimeLabel = OCT27_EVENT.timeDisplay.replace(/\s*ET$/i, "");

  const shortDate = `${OCT27_EVENT.dayOfWeek.slice(0, 3)}, ${OCT27_EVENT.dateDisplay.replace(/^([A-Za-z]{3})[A-Za-z]*/, "$1")}`;

  return (
    <section id="oct27-hero" data-tone="navy" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className={styles.photoWrap}
      >
        <Image
          src="/images/A7409435-web.jpg"
          alt={hero.imageAlt}
          fill
          priority
          quality={90}
          sizes="(max-width: 899px) 100vw, 60vw"
          className={styles.photo}
        />
        <p className={styles.signature}>
          <span className={styles.sigName}>Ariel Yankelewitz</span>
          <span className={styles.sigRole}>Founder, Marry Like a CEO</span>
        </p>
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className={styles.copy}
        >
          <p className={styles.label}>Free live event</p>

          <h1 className={styles.headline}>
            <span className={styles.ivory}>Dating Like a</span>
            <em className={styles.gold}>Pro</em>
          </h1>

          <p className={styles.sub}>{hero.headlineSub}</p>

          <p className={styles.description}>{hero.subhead}</p>

          <div className={styles.when}>
            <p className={styles.whenLine}>
              <span className={styles.part}>
                <CalendarIcon />
                <span className={styles.long}>
                  {OCT27_EVENT.dayOfWeek}, {OCT27_EVENT.dateDisplay}
                </span>
                <span className={styles.short}>{shortDate}</span>
              </span>
              <span className={styles.bar} aria-hidden="true">
                |
              </span>
              <span className={styles.part}>
                <ClockIcon />
                <span className={styles.long}>7:00 PM Eastern Time</span>
                <span className={styles.short}>{OCT27_EVENT.timeDisplay}</span>
              </span>
            </p>
            <p className={styles.local}>
              <LocalEventTime
                iso={OCT27_EVENT.dateISO}
                fixedLabel={easternTimeLabel}
                fallback=""
                noteClassName={styles.hidden}
              />
            </p>
          </div>

          <a href={OCT27_EVENT.lumaUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            {hero.cta} <span aria-hidden="true">&rarr;</span>
          </a>
          <p className={styles.micro}>{hero.ctaMicro}</p>
        </motion.div>
      </div>
    </section>
  );
};
