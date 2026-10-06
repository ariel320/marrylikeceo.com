"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { LocalEventTime } from "@/components/oct27/LocalEventTime";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Hairline, small gold bloom, hairline: the flourish of a wedding invitation. */
const FlowerDivider = () => (
  <svg className={styles.divider} viewBox="0 0 240 28" fill="none" aria-hidden="true">
    <g stroke="var(--sept27-gold)" strokeWidth="1" strokeLinecap="round">
      <path d="M0 14H92M148 14H240" strokeOpacity="0.6" />
      <path
        d="M98 14c5-7 11-7 16 0-5 7-11 7-16 0ZM126 14c5-7 11-7 16 0-5 7-11 7-16 0Z"
        fill="var(--sept27-gold)"
        fillOpacity="0.2"
      />
      <g transform="translate(120 14)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="-5.5"
            rx="3"
            ry="5.5"
            fill="var(--sept27-gold)"
            fillOpacity="0.22"
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="1.8" fill="var(--sept27-gold)" stroke="none" />
      </g>
    </g>
  </svg>
);

const LEAVES = [
  { x: 28, y: 168, r: -105, s: 1.1 },
  { x: 44, y: 140, r: -5, s: 1.05 },
  { x: 60, y: 114, r: -105, s: 0.95 },
  { x: 80, y: 88, r: -5, s: 0.85 },
  { x: 100, y: 60, r: -105, s: 0.7 },
] as const;

/** Fine gold line-art sprig with a bloom at the tip (wide screens only). */
const Sprig = () => (
  <svg className={styles.sprig} viewBox="0 0 160 200" fill="none" aria-hidden="true">
    <g stroke="var(--sept27-gold)" strokeWidth="1.1" strokeLinecap="round">
      <path d="M20 192C40 132 68 84 118 30" />
      {LEAVES.map((l) => (
        <path
          key={`${l.x}-${l.y}`}
          d="M0 0C10-14 26-14 38 0 26 14 10 14 0 0Z"
          fill="var(--sept27-gold)"
          fillOpacity="0.16"
          transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}
        />
      ))}
      <g transform="translate(122 26)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="-11"
            rx="6"
            ry="11"
            fill="var(--sept27-gold)"
            fillOpacity="0.16"
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="3.2" fill="var(--sept27-gold)" stroke="none" />
      </g>
    </g>
  </svg>
);

/**
 * Wedding-invitation hero. A calm, centered column of type (kicker, two-line
 * title, flower divider, sub, details, pill CTA) beside a photo that sits on
 * the right edge and fades into the page. Plain CSS module on purpose.
 */
export const Oct27Hero = () => {
  const { hero } = COPY.oct27;
  const easternTimeLabel = OCT27_EVENT.timeDisplay.replace(/\s*ET$/i, "");
  const [firstWord, ...restWords] = hero.headlineTitle.split(" ");

  return (
    <section id="oct27-hero" className={styles.hero}>
      <Sprig />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        className={styles.photoWrap}
      >
        <Image
          src="/images/A7409435-web.jpg"
          alt={hero.imageAlt}
          fill
          priority
          quality={90}
          sizes="(max-width: 899px) 100vw, 56vw"
          className={styles.photo}
        />
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className={styles.copy}
        >
          <p className={styles.kicker}>A free live event with Ariel Yankelewitz</p>

          <h1 className={styles.headline}>
            <span className={styles.line}>{firstWord}</span>
            <span className={styles.line}>{restWords.join(" ")}</span>
          </h1>

          <FlowerDivider />

          <p className={styles.tagline}>{hero.headlineSub}</p>

          <p className={styles.subhead}>{hero.subhead}</p>

          <div className={styles.when}>
            <p className={styles.date}>
              {OCT27_EVENT.dayOfWeek}, {OCT27_EVENT.dateDisplay}
            </p>
            <p className={styles.time}>
              <LocalEventTime
                iso={OCT27_EVENT.dateISO}
                fixedLabel={easternTimeLabel}
                fallback={OCT27_EVENT.timeDisplay}
                noteClassName={styles.timeNote}
              />
            </p>
          </div>

          <a
            href={OCT27_EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {hero.cta}
          </a>
          <p className={styles.micro}>{hero.ctaMicro}</p>
        </motion.div>
      </div>
    </section>
  );
};
