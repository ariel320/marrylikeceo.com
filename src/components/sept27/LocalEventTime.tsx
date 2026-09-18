"use client";

import { useLocalEventTime } from "./useLocalEventTime";

interface LocalEventTimeProps {
  /** Event instant WITH a UTC offset, e.g. "2026-09-27T12:00:00-04:00". */
  readonly iso: string;
  /**
   * The fixed reference time to always show alongside the localized one,
   * e.g. "12:00 PM ET". Shown as-typed so it always reads correctly
   * regardless of the visitor's timezone.
   */
  readonly fixedLabel: string;
  /**
   * Static text shown on first render (server + first client paint) before
   * the visitor's local timezone is known. Should read fine on its own,
   * since some visitors will briefly see only this.
   */
  readonly fallback: string;
  readonly className?: string;
  /** Class for the small "(12:00 PM Eastern Time)" reference line. */
  readonly noteClassName?: string;
}

/**
 * Shows the event time the way a person actually reads a time, not the
 * way a database stores one:
 *
 *   Your time: Sun, Sep 27 · 9:00 AM PDT
 *   (12:00 PM Eastern Time)
 *
 * Two lines on purpose:
 *  - Line 1 is bold/primary and answers the only question that matters —
 *    "when is this for ME" — already converted, nothing to calculate.
 *  - Line 2 is small and muted: the one fixed reference point, labeled
 *    "Eastern Time" in full (not just "ET") so it's unambiguous to anyone,
 *    including visitors unfamiliar with US timezone abbreviations.
 *
 * If the visitor's local date differs from the Eastern date (e.g. it's
 * already the next day for them), that's visible directly in line 1 —
 * nothing hidden, no separate warning needed.
 */
export const LocalEventTime = ({
  iso,
  fixedLabel,
  fallback,
  className,
  noteClassName,
}: LocalEventTimeProps) => {
  const localLabel = useLocalEventTime(iso, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  if (!localLabel) {
    // Before mount: show the plain static fallback only, no note line yet —
    // we don't know the visitor's timezone so there's nothing to compare
    // it against.
    return <span className={className}>{fallback}</span>;
  }

  return (
    <span className={className}>
      <span>Your time: {localLabel}</span>
      <br />
      <span className={noteClassName}>({fixedLabel} Eastern Time)</span>
    </span>
  );
};