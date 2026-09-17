/**
 * ─────────────────────────────────────────────────────────────
 *  UPCOMING EXPERIENCES — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *
 *  The /events page renders this list directly (no live embed).
 *  Add, edit, or remove an entry here and the page updates.
 *
 *  `lumaUrl` should point at the specific Luma event page so the
 *  card can send people straight to registration. The full
 *  calendar link (used as an escape hatch below the list) lives
 *  in `src/config/luma.ts`.
 */

export type EventMode = "Online" | "In Person";

export interface EventItem {
  /** Stable key for React lists. */
  readonly id: string;
  /** ISO date, e.g. "2026-09-28". Used to group and sort events by day. */
  readonly dateISO: string;
  /** Display time, e.g. "12:00 PM ET". Kept as a plain string since Luma's times are locale-specific. */
  readonly time: string;
  readonly title: string;
  readonly host: string;
  readonly location: string;
  readonly mode: EventMode;
  /** Link to the specific event page on Luma. */
  readonly lumaUrl: string;
  /**
   * Internal landing page for this event (e.g. "/sept-27"), used by the
   * homepage's upcoming-event banner as the "click through" destination.
   * Falls back to `lumaUrl` when omitted.
   */
  readonly detailsHref?: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
  };
  /** Small circular host photo, shown next to "By {host}". Falls back to a generic icon when omitted. */
  readonly hostAvatar?: {
    readonly src: string;
    readonly alt: string;
  };
  /** Optional strip of attendee avatars, as pulled from the live Luma event. */
  readonly attendees?: {
    readonly src: string;
    readonly alt: string;
  };
}

export const EVENTS: readonly EventItem[] = [
  {
    id: "the-dating-code",
    dateISO: "2026-09-28",
    time: "12:00 AM",
    title: "THE DATING CODE: Change the way you date - change your life (Free Live Event)",
    host: "Ariel Yankelewitz",
    location: "Zoom",
    mode: "Online",
    lumaUrl: "https://luma.com/l2bbgm0b?lm_source=embed",
    detailsHref: "/sept-27",
    image: {
      src: "/images/events/the-dating-code-poster.png",
      alt: "Marry Like a CEO — The Dating Code, a free live Experience with Ariel Yankelewitz",
    },
    hostAvatar: {
      src: "/images/events/ariel-avatar.jpg",
      alt: "Ariel Yankelewitz",
    },
    attendees: {
      src: "/images/events/dating-code-attendees.png",
      alt: "A few of the people already registered",
    },
  },
];

/**
 * Returns the next event that hasn't happened yet, or `null` when the list
 * is empty or every event's date has passed.
 *
 * This is the single check that drives the homepage's upcoming-event
 * banner: add a future-dated entry to `EVENTS` above and the banner shows
 * itself automatically; once that date is behind "today" it disappears on
 * its own, with nothing else to update.
 *
 * An event stays "upcoming" through the end of its own calendar day (UTC,
 * matching how `dateISO` is parsed elsewhere in this file) so the banner
 * doesn't vanish mid-event — only starting the day after.
 */
export const getNextUpcomingEvent = (
  events: readonly EventItem[] = EVENTS,
  now: Date = new Date(),
): EventItem | null => {
  const todayISO = now.toISOString().slice(0, 10);

  const upcoming = [...events]
    .filter((event) => event.dateISO >= todayISO)
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  return upcoming[0] ?? null;
};

interface EventGroup {
  readonly dateISO: string;
  readonly monthDay: string;
  readonly weekday: string;
  readonly events: readonly EventItem[];
}

/** Groups events by calendar day and formats the header labels for display. */
export const getGroupedEvents = (
  events: readonly EventItem[] = EVENTS,
): readonly EventGroup[] => {
  const byDate = new Map<string, EventItem[]>();

  for (const event of events) {
    const bucket = byDate.get(event.dateISO);
    if (bucket) {
      bucket.push(event);
    } else {
      byDate.set(event.dateISO, [event]);
    }
  }

  return Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([dateISO, dayEvents]) => {
      // Parse as UTC noon so the label doesn't shift a day in negative-offset timezones.
      const date = new Date(`${dateISO}T12:00:00Z`);
      return {
        dateISO,
        monthDay: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          timeZone: "UTC",
        }),
        weekday: date.toLocaleDateString("en-US", {
          weekday: "long",
          timeZone: "UTC",
        }),
        events: dayEvents,
      };
    });
};
