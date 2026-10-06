"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { LocalEventTime } from "@/components/oct27/LocalEventTime";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const Sparkle = ({ className }: { readonly className: string }) => (
  <svg className={`${styles.sparkle} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12C7 11.2 11.2 7 12 0Z" />
  </svg>
);

const LEAVES = [
  { x: 28, y: 168, r: -105, s: 1.1 },
  { x: 44, y: 140, r: -5, s: 1.05 },
  { x: 60, y: 114, r: -105, s: 0.95 },
  { x: 80, y: 88, r: -5, s: 0.85 },
  { x: 100, y: 60, r: -105, s: 0.7 },
] as const;

/** Fine gold line-art sprig with a bloom at the tip. */
const Botanical = ({ className }: { readonly className: string }) => (
  <svg className={`${styles.botanical} ${className}`} viewBox="0 0 160 200" fill="none" aria-hidden="true">
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
 * Invitation hero. Copy block on the left (title, sub between two gold
 * hairlines, details, pill CTA), arch-framed photo on the right with a fine
 * gold frame, plus a few quiet sparkles and edge rails. Plain CSS module.
 */
export const Oct27Hero = () => {
  const { hero } = COPY.oct27;
  const easternTimeLabel = OCT27_EVENT.timeDisplay.replace(/\s*ET$/i, "");

  return (
    <section id="oct27-hero" className={styles.hero}>
      <span className={`${styles.rail} ${styles.railLeft}`} aria-hidden="true" />
      <span className={`${styles.rail} ${styles.railRight}`} aria-hidden="true" />
      <Botanical className={styles.botanicalTop} />
      <Botanical className={styles.botanicalBottom} />
      <Sparkle className={styles.sparkleA} />
      <Sparkle className={styles.sparkleB} />
      <Sparkle className={styles.sparkleC} />

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className={styles.archWrap}
        >
          <div className={styles.frame}>
            <div className={styles.arch}>
              <Image
                src="/images/A7409435-web.jpg"
                alt={hero.imageAlt}
                fill
                priority
                quality={90}
                sizes="(max-width: 899px) 80vw, 440px"
                className={styles.photo}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className={styles.copy}
        >
          <p className={styles.kicker}>A free live event with Ariel Yankelewitz</p>

          <h1 className={styles.headline}>{hero.headlineTitle}</h1>

          <p className={styles.tagline}>{hero.headlineSub}</p>

          <p className={styles.subhead}>{hero.subhead}</p>

          <p className={styles.when}>
            <span>
              {OCT27_EVENT.dayOfWeek}, {OCT27_EVENT.dateDisplay}
            </span>
            <span className={styles.whenTime}>
              <LocalEventTime
                iso={OCT27_EVENT.dateISO}
                fixedLabel={easternTimeLabel}
                fallback={OCT27_EVENT.timeDisplay}
                noteClassName={styles.whenNote}
              />
            </span>
          </p>

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
