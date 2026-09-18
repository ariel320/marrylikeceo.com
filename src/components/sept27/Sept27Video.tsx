"use client";

import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";

import styles from "./Sept27Video.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * ─────────────────────────────────────────────────────────────
 *  VIDEO SLOT
 * ─────────────────────────────────────────────────────────────
 *  Points at /public/images/sample.mp4. Swap VIDEO_SRC once the
 *  final event video is ready (also update POSTER_SRC to a real
 *  thumbnail if you have one).
 * ─────────────────────────────────────────────────────────────
 */
const VIDEO_SRC = "/images/sample.mov";
const POSTER_SRC = "/images/ariel-hero.jpg";

export const Sept27Video = () => {
  return (
    <Sept27Section id="sept27-video" theme="bg" padding="none-top">
      <motion.div {...fadeUp(0)} className={styles.wrap}>
        <div className={`sept27-card-aura ${styles.frame}`}>
          <div className={styles.player}>
            <video
              key={VIDEO_SRC}
              controls
              autoPlay
              muted
              playsInline
              loop
              poster={POSTER_SRC}
              preload="auto"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
        </div>
        <p className={styles.caption}>Your invitation, from Ariel.</p>
      </motion.div>
    </Sept27Section>
  );
};