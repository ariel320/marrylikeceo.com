"use client";

import { useEffect, useState } from "react";

/**
 * Formats a fixed event instant (given as an ISO string WITH a UTC offset,
 * e.g. "2026-09-27T12:00:00-04:00") into the visitor's own local timezone.
 *
 * Why this shape:
 * - The ISO string is the single source of truth for *when* the event is.
 *   As long as it includes an offset (-04:00, Z, etc.) it represents one
 *   unambiguous instant in time — every visitor's browser can convert that
 *   instant into their own local wall-clock time correctly.
 * - `Intl.DateTimeFormat(undefined, ...)` with no explicit `timeZone` uses
 *   the browser's own timezone automatically — no geo-IP lookup, no extra
 *   dependency, no manual offset math.
 * - Formatting only happens inside `useEffect`, and `label` starts out
 *   `null`. That matters because the server has no idea what timezone the
 *   visitor is in, so the server-rendered markup and the first client
 *   render must match (both show the fallback) or React will throw a
 *   hydration mismatch warning. The real localized string swaps in a beat
 *   later, once mounted in the browser. This mirrors the same
 *   server/client split already used in CountdownTimer.tsx.
 *
 * @param iso        Event instant, WITH a UTC offset. e.g. "2026-09-27T12:00:00-04:00"
 * @param options     Optional Intl.DateTimeFormatOptions overrides.
 * @returns           null until mounted, then the localized, formatted string.
 */
export function useLocalEventTime(
  iso: string,
  options?: Intl.DateTimeFormatOptions,
): string | null {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date(iso);

    if (Number.isNaN(date.getTime())) {
      // Defensive: bad ISO string in config shouldn't crash the page.
      return;
    }

    const formatted = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
      ...options,
    }).format(date);

    const timeout = window.setTimeout(() => setLabel(formatted), 0);

    return () => window.clearTimeout(timeout);
  }, [iso, options]);

  return label;
}