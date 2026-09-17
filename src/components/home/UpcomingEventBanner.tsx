"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { EVENTS, getNextUpcomingEvent, type EventItem } from "@/config/events";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Floating "upcoming Experience" banner, shown on the homepage only.
 *
 * Fully driven by `src/config/events.ts`:
 *  - Shows itself the moment the site is opened, if `getNextUpcomingEvent`
 *    finds an event that hasn't happened yet.
 *  - Disappears on its own the day after that event, with no manual step.
 *  - Reappears the moment a new future-dated event is added to `EVENTS`.
 *
 * The ✕ only dismisses it for the current page view — it is NOT remembered
 * across reloads, so refreshing (or opening the page again) always shows
 * it again as long as an event is still upcoming.
 *
 * Computed client-side (on mount) rather than at build/render time, so the
 * "today" it checks against is always the visitor's actual current date —
 * not whenever the page happened to last be built or cached.
 */
export const UpcomingEventBanner = () => {
  const [event, setEvent] = useState<EventItem | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Deferred into a callback (not called synchronously in the effect
    // body) — same pattern as CountdownTimer's mount-only sync.
    const timeout = setTimeout(() => {
      setEvent(getNextUpcomingEvent(EVENTS));
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const handleDismiss = () => setDismissed(true);

  const visible = Boolean(event) && !dismissed;

  return (
    <AnimatePresence>
      {visible && event && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="fixed inset-x-4 bottom-4 z-40 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px]"
        >
          <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-[var(--bg-elevated)] p-3 pr-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:p-4 sm:pr-11">
            <span
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 15% 30%, color-mix(in srgb, var(--gold) 20%, transparent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Poster thumbnail */}
            <div className="relative h-[72px] w-[58px] flex-none overflow-hidden rounded-lg ring-1 ring-[var(--gold)]/25 sm:h-20 sm:w-16">
              <Image
                src={event.image.src}
                alt={event.image.alt}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {COPY.homeEventBanner.eyebrow}
              </p>
              <p className="mt-1 truncate font-[family-name:var(--font-cormorant-garamond)] text-[17px] font-semibold leading-tight text-[var(--text-light)]">
                {event.title}
              </p>
              <p className="mt-0.5 truncate font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                {event.time} &middot; {event.location}
              </p>

              {event.detailsHref ? (
                <Link
                  href={event.detailsHref}
                  className="mt-1.5 inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[var(--gold)] underline-offset-4 hover:underline"
                >
                  {COPY.homeEventBanner.cta}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <a
                  href={event.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[var(--gold)] underline-offset-4 hover:underline"
                >
                  {COPY.homeEventBanner.cta}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label={COPY.homeEventBanner.dismissLabel}
              className="absolute right-2.5 top-2.5 text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--gold)]"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
