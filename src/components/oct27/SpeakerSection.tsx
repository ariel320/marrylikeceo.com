"use client";

import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";

import styles from "./SpeakerSection.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const SpeakerSection = () => {
  const { speaker } = COPY.oct27;

  return (
    <Oct27Section theme="surface" tone="navy" id="speaker" maxWidth={1100}>
      <div className={styles.grid}>
        <motion.div {...fadeUp(0)} className={styles.portrait}>
          <DuotoneImage
            srcColor="/images/ariel-band.jpg"
            srcBW="/images/ariel-band-bw.jpg"
            alt={speaker.imageAlt}
            className="object-cover object-[50%_22%]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </motion.div>

        <div>
          <motion.p {...fadeUp(0.1)} className={styles.eyebrow}>
            {speaker.eyebrow}
          </motion.p>
          <motion.h2 {...fadeUp(0.18)} className={styles.headline}>
            {speaker.headline}
          </motion.h2>
          <motion.p {...fadeUp(0.24)} className={styles.accent}>
            {speaker.headlineAccent}
          </motion.p>
          <motion.blockquote {...fadeUp(0.32)} className={styles.quote}>
            &ldquo;{speaker.quote}&rdquo;
          </motion.blockquote>
          <div className={styles.bio}>
            {speaker.bio.map((paragraph, i) => (
              <motion.p key={i} {...fadeUp(0.4 + i * 0.08)}>
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </Oct27Section>
  );
};
