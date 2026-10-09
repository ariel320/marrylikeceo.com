"use client";

import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";

import styles from "./Oct27Video.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * ─────────────────────────────────────────────────────────────
 *  INVITE VIDEO SLOT  (9:16 portrait)
 * ─────────────────────────────────────────────────────────────
 *  1. Drop the final file in /public/images/ (e.g. oct27-invite.mp4)
 *  2. Set VIDEO_SRC below to "/images/oct27-invite.mp4"
 *  3. Optionally set POSTER_SRC to a 9:16 thumbnail
 *  While VIDEO_SRC is empty, a "Coming Soon" placeholder shows.
 * ─────────────────────────────────────────────────────────────
 */
const VIDEO_SRC = "";
const POSTER_SRC = "";

export const Oct27Video = () => {
  return (
    <Oct27Section id="oct27-video" theme="bg" tone="light" maxWidth={560}>
      <motion.div {...fadeUp(0)} className={styles.wrap}>
        <p className={styles.eyebrow}>A personal invitation</p>
        <h2 className={styles.title}>Watch your invite</h2>

        <div className={styles.frame}>
          {VIDEO_SRC ? (
            <video
              key={VIDEO_SRC}
              className={styles.video}
              controls
              playsInline
              preload="metadata"
              poster={POSTER_SRC || undefined}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            <div className={styles.comingSoon}>
              <span className={styles.playIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className={styles.badge}>Coming Soon</span>
            </div>
          )}
        </div>
      </motion.div>
    </Oct27Section>
  );
};
