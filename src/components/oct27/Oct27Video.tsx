"use client";

import { useEffect, useRef, useState } from "react";
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
const VIDEO_SRC = "/images/oct27-invite.mp4";
const POSTER_SRC = "/images/oct27-invite-poster.jpg";

export const Oct27Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  /* Browsers only allow autoplay when the video is muted, so it starts
     muted and plays whenever it scrolls into view (pauses when it leaves).
     Visitors tap "Tap for sound" to hear Ariel. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React doesn't always render the `muted` attribute in server HTML,
    // and browsers block unmuted autoplay — so force it here.
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    video.play().catch(() => {});
  };

  return (
    <Oct27Section id="oct27-video" theme="bg" tone="light" maxWidth={560}>
      <motion.div {...fadeUp(0)} className={styles.wrap}>
        <p className={styles.eyebrow}>A personal invitation</p>
        <h2 className={styles.title}>Watch your invite</h2>

        <div className={styles.frame}>
          {VIDEO_SRC ? (
            <>
              <video
                ref={videoRef}
                key={VIDEO_SRC}
                className={styles.video}
                autoPlay
                muted={muted}
                loop
                playsInline
                controls={!muted}
                preload="auto"
                poster={POSTER_SRC || undefined}
                onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
              {muted && (
                <button type="button" className={styles.unmute} onClick={handleUnmute}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 9v6h4l5 4V5L8 9H4z" strokeLinejoin="round" />
                    <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
                  </svg>
                  Tap for sound
                </button>
              )}
            </>
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
