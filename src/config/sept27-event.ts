/**
 * ─────────────────────────────────────────────────────────────
 *  SEPT 27 EXPERIENCE — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *
 *  The /sept-27 landing page (hero, invitation card, and
 *  countdown) all read the date from here. Change the event
 *  date/time only in this file.
 */

export const SEPT27_EVENT = {
  /** ISO datetime with timezone offset — the countdown target. */
  dateISO: "2026-09-27T12:00:00-04:00",
  dateDisplay: "September 27, 2026",
  dayOfWeek: "Sunday",
  timeDisplay: "12:00 PM ET",
  format: "Live Virtual Experience",
  seatNote: "Limited seats on the live broadcast.",
  /** Direct link to this Experience's registration page on Luma. */
  lumaUrl: "https://luma.com/l2bbgm0b?lm_source=embed",
} as const;
