/**
 * ─────────────────────────────────────────────────────────────
 *  OCT 27 EXPERIENCE — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *
 *  The /october-27 landing page (hero, invitation card, countdown) all read from here. Change the event
 *  date/time/links only in this file.
 */

export const OCT27_EVENT = {
  /** ISO datetime with timezone offset — the countdown target. (Oct 27 is still daylight time: -04:00.) */
  dateISO: "2026-10-27T19:00:00-04:00",
  dateDisplay: "October 27, 2026",
  dayOfWeek: "Tuesday",
  timeDisplay: "7:00 PM ET",
  format: "Live Virtual Experience",
  seatNote: "Free to attend. Register on Luma to get your link.",
  /** Direct link to this Experience's registration page on Luma. */
  lumaUrl: "https://luma.com/zaqwa2gr",
} as const;
