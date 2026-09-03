/**
 * ─────────────────────────────────────────────────────────────
 *  LUMA CALENDAR / EVENT EMBED — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file to touch when the Luma calendar changes.
 *  Nothing else on /events needs editing.
 *
 *  ── MOST RELIABLE SETUP ──────────────────────────────────────
 *  Luma generates the exact embed snippet for you. Use it:
 *    1. Go to https://luma.com/home/calendars
 *    2. Open the "Marry Like a CEO" calendar
 *    3. Settings → Embed
 *    4. Copy the iframe's `src` value out of the snippet
 *    5. Paste it into `embedUrlOverride` below
 *
 *  That bypasses everything else in this file and is guaranteed
 *  to match whatever URL shape Luma is currently serving.
 *
 *  ── OR, BUILD IT FROM THE CALENDAR ID ────────────────────────
 *  Leave `embedUrlOverride` empty and set `calendarId` instead.
 *  The URL is assembled as: {embedHost}/embed/calendar/{id}/events
 *
 *  NOTE ON THE HOST: Luma's embed routes are served from the
 *  original `lu.ma` domain. The newer `luma.com` domain serves
 *  the public site but returns a 404 page for /embed/ paths —
 *  if the frame shows a grey document icon with a "0", that's
 *  Luma's 404 and the host is wrong.
 *
 *  Docs: https://help.luma.com/p/embed-luma-on-your-website
 *  No Luma API. No scraping. Official embed only.
 */

export const LUMA = {
  /** Paste Luma's own iframe `src` here — takes precedence over everything below. */
  embedUrlOverride: "",

  /** Calendar ID from Luma → Settings → Embed. Starts with `cal-`. */
  calendarId: "cal-YKBmx3PQLg2lBFr",

  /** Host that serves Luma's embed routes. */
  embedHost: "https://lu.ma",

  /** Public calendar page — used as the accessibility fallback link. */
  calendarUrl: "https://luma.com/marrylikeceo",

  /** Embed frame height per breakpoint, in px. */
  height: {
    mobile: 640,
    tablet: 760,
    desktop: 860,
  },
} as const;

/** True once a real calendar ID (or a full override URL) has been set. */
export const isLumaConfigured = (): boolean => {
  if (LUMA.embedUrlOverride.startsWith("https://")) return true;
  if (LUMA.calendarId.includes("REPLACE")) return false;
  return /^cal-[A-Za-z0-9_-]{6,}$/.test(LUMA.calendarId);
};

/**
 * The iframe `src` for the calendar embed.
 *
 * Note: Luma's embed route only ever serves UPCOMING events. It ignores
 * ?period=past (verified 02-09-2026), so past Experiences can't be shown
 * through the embed — they're only visible on the public calendar page.
 */
export const getLumaEmbedUrl = (): string => {
  if (LUMA.embedUrlOverride.startsWith("https://")) return LUMA.embedUrlOverride;
  return `${LUMA.embedHost}/embed/calendar/${LUMA.calendarId}/events`;
};
