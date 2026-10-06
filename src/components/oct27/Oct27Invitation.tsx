"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27Invitation.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "You're invited" as a ticket: poster on the left, details on the right,
 * split by a perforated gold line with two notches. Stacks on mobile with
 * the perforation running horizontally.
 */
export const Oct27Invitation = () => {
  const { invitation } = COPY.oct27;

  const rows = [
    { label: "Date", value: `${invitation.dayLabel}, ${invitation.dateLabel}` },
    { label: "Time", value: invitation.timeLabel },
    { label: "Where", value: OCT27_EVENT.format },
  ];

  return (
    <Oct27Section id="oct27-invitation" theme="bg" maxWidth={1000}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: EASE }}
        className={styles.ticket}
      >
        <div className={styles.posterCol}>
          <div className={styles.poster}>
            <Image
              src="/images/events/how-to-date-like-a-pro-poster.png"
              alt="Marry Like a CEO — Dating Like a Pro, a free live event with Ariel Yankelewitz"
              fill
              sizes="(max-width: 767px) 70vw, 380px"
              className={styles.posterImg}
              priority
            />
          </div>
        </div>

        <div className={styles.details}>
          <p className={styles.script}>{invitation.eyebrow}</p>
          <h2 className={styles.title}>{invitation.headline}</h2>

          <dl className={styles.rows}>
            {rows.map((row) => (
              <div key={row.label} className={styles.row}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className={styles.body}>{invitation.body}</p>

          <a
            href={OCT27_EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {invitation.cta}
            <span aria-hidden="true">&rarr;</span>
          </a>
          <p className={styles.micro}>{invitation.micro}</p>
        </div>
      </motion.div>
    </Oct27Section>
  );
};
