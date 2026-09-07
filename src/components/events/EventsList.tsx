"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";
import { LUMA } from "@/config/luma";
import { EVENTS, getGroupedEvents, type EventItem } from "@/config/events";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const UserIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 flex-none" aria-hidden="true">
    <circle cx="8" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M2.8 13.4c0-2.65 2.33-4.4 5.2-4.4s5.2 1.75 5.2 4.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 flex-none" aria-hidden="true">
    <path
      d="M8 14.4s4.6-4.06 4.6-7.6A4.6 4.6 0 1 0 3.4 6.8c0 3.54 4.6 7.6 4.6 7.6Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6.8" r="1.6" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 flex-none" aria-hidden="true">
    <rect x="1.6" y="4.4" width="8.4" height="7.2" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M10 7.1l3.6-2.1a.6.6 0 0 1 .9.52v5.16a.6.6 0 0 1-.9.52L10 8.9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

/** Single event row — time, title, host, location, format badge, and a poster thumbnail.
 *  Content (photo, host avatar, attendee strip) mirrors the live Luma event as closely as
 *  possible; only the card frame gets the site's gold-accented treatment. */
const EventCard = ({ event, delay }: { readonly event: EventItem; readonly delay: number }) => {
  const isVideoLocation = /zoom|online|video/i.test(event.location);

  // Touch devices have no :hover — the gold aura instead appears only while
  // the card itself is being pressed, via this class, so scrolling past the
  // card on a phone never triggers it.
  const [touched, setTouched] = useState(false);
  const touchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTouchTimeout = () => {
    if (touchTimeout.current) {
      clearTimeout(touchTimeout.current);
      touchTimeout.current = null;
    }
  };

  const handleTouchStart = () => {
    clearTouchTimeout();
    setTouched(true);
  };

  const handleTouchEnd = () => {
    // Small hold so the aura is still visible for a tap, not just a long-press.
    clearTouchTimeout();
    touchTimeout.current = setTimeout(() => setTouched(false), 500);
  };

  return (
    <motion.a
      {...fadeUp(delay)}
      href={event.lumaUrl}
      target="_blank"
      rel="noopener noreferrer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={cn(
        "event-card-luma group flex flex-col-reverse gap-5 rounded-2xl border border-[var(--divider-dark)] bg-[var(--bg-dark)]/70 p-4 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5",
        "hover:border-[var(--gold)]/45 hover:bg-[var(--bg-dark)]",
        touched && "is-touched border-[var(--gold)]/45 bg-[var(--bg-dark)]",
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          {event.time}
        </p>

        <h3 className="mt-1.5 truncate font-[family-name:var(--font-cormorant-garamond)] text-2xl font-semibold text-[var(--text-light)] sm:text-lg sm:font-[family-name:var(--font-dm-sans)]">
          {event.title}
        </h3>

        <div className="mt-2.5 flex flex-col gap-1.5 text-[13px] text-[var(--text-secondary)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
          <span className="flex items-center gap-1.5">
            {event.hostAvatar ? (
              <span className="relative h-[18px] w-[18px] flex-none overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src={event.hostAvatar.src}
                  alt={event.hostAvatar.alt}
                  fill
                  sizes="18px"
                  className="object-cover"
                />
              </span>
            ) : (
              <UserIcon />
            )}
            By {event.host}
          </span>
          <span className="flex items-center gap-1.5">
            {isVideoLocation ? <VideoIcon /> : <PinIcon />}
            {event.location}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 font-[family-name:var(--font-dm-sans)] text-[11px] font-semibold",
              event.mode === "Online"
                ? "bg-[#3A1D2B] text-[#F98DBE]"
                : "border border-[var(--gold)]/50 text-[var(--gold)]",
            )}
          >
            {event.mode}
          </span>

          {event.attendees && (
            <span className="relative h-[26px] w-[102px] flex-none opacity-95">
              <Image
                src={event.attendees.src}
                alt={event.attendees.alt}
                fill
                sizes="102px"
                className="object-contain object-left"
              />
            </span>
          )}
        </div>
      </div>

      <div className="relative aspect-[4/5] w-full flex-none overflow-hidden rounded-xl ring-1 ring-[var(--gold)]/25 sm:aspect-auto sm:h-28 sm:w-24">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(max-width: 639px) 100vw, 120px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </motion.a>
  );
};

/** Empty state shown when EVENTS is empty — sends people to the live calendar instead. */
const EmptyState = () => {
  const { events } = COPY;
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <span className="hairline-gold w-16" aria-hidden="true" />
      <p className="max-w-[440px] font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-light italic text-[var(--text-light)]">
        {events.embed.fallbackHeadline}
      </p>
      <p className="max-w-[420px] font-[family-name:var(--font-dm-sans)] text-[14px] font-light leading-relaxed text-[var(--text-secondary)]">
        {events.embed.fallbackBody}
      </p>
      <Button variant="secondary" href={LUMA.calendarUrl} target="_blank" className="!px-8">
        {events.embed.fallbackCta}
      </Button>
    </div>
  );
};

export const EventsList = () => {
  const groups = getGroupedEvents(EVENTS);

  return (
    <div>
      {/* Framed panel — the "device" bezel around the schedule */}
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-4 rounded-[32px] opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, color-mix(in srgb, var(--gold) 14%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--gold)]/15 bg-[var(--bg-elevated)] p-4 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)] sm:p-6 lg:p-8">
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/[0.04]"
            aria-hidden="true"
          />

          {groups.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-9">
              {groups.map((group, gi) => (
                <div key={group.dateISO}>
                  <div className="mb-4 flex items-center gap-3 px-1">
                    <span
                      className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]"
                      aria-hidden="true"
                    />
                    <span className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[var(--text-light)]">
                      {group.monthDay}
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--text-secondary)]">
                      {group.weekday}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {group.events.map((event, ei) => (
                      <EventCard key={event.id} event={event} delay={0.05 * (gi + ei)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Divider + "more coming soon" — mirrors the hero's editorial divider treatment */}
      <motion.div
        {...fadeUp(0.1)}
        className="mx-auto mt-14 flex max-w-[280px] items-center gap-4"
        aria-hidden="true"
      >
        <span className="hairline-gold flex-1" />
        <span className="h-1 w-1 rotate-45 bg-[var(--gold)]" />
        <span
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to left, var(--gold) 0%, color-mix(in srgb, var(--gold) 25%, transparent) 100%)",
          }}
        />
      </motion.div>

      <motion.p
        {...fadeUp(0.16)}
        className="mt-6 text-center font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.3em] text-[var(--gold)]/80"
      >
        {COPY.events.moreComingSoon}
      </motion.p>

      {groups.length > 0 && (
        <p className="mt-5 text-center font-[family-name:var(--font-dm-sans)] text-xs font-light text-[var(--text-secondary)]">
          {COPY.events.viewAll.prefix}{" "}
          <a
            href={LUMA.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] underline-offset-4 transition-colors duration-200 hover:underline"
          >
            {COPY.events.viewAll.linkText}
          </a>
        </p>
      )}
    </div>
  );
};
