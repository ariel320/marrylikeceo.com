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
 *  VIDEO SLOT
 * ─────────────────────────────────────────────────────────────
 *  Points at /public/images/sample.mp4. Swap VIDEO_SRC once the
 *  final event video is ready (also update POSTER_SRC to a real
 *  thumbnail if you have one).
 * ─────────────────────────────────────────────────────────────
 */
const VIDEO_SRC = ""; // e.g. "/images/oct27-invite.mp4" — leave empty to show "Coming Soon"
const POSTER_SRC = "/images/ariel-hero.jpg";

export const Oct27Video = () => {
  return (
    <Oct27Section id="oct27-video" theme="bg" padding="none-top">
      <motion.div {...fadeUp(0)} className={styles.wrap}>
        <div className={`sept27-card-aura ${styles.frame}`}>
          {VIDEO_SRC ? (
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
          ) : (
            <div className={styles.comingSoon}>
              <span className={styles.comingSoonBadge}>Coming Soon</span>
              <p className={styles.comingSoonText}>Ariel&rsquo;s invitation video</p>
            </div>
          )}
        </div>
        <p className={styles.caption}>Your invitation, from Ariel — video coming soon.</p>
      </motion.div>
    </Oct27Section>
  );
};