"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface TimeLeft {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const getTimeLeft = (targetISO: string): TimeLeft => {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) return ZERO;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

interface NumberCardProps {
  readonly value: number;
  readonly label: string;
}

const NumberCard = ({ value, label }: NumberCardProps) => {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex h-[76px] w-[72px] items-center justify-center overflow-hidden rounded-[4px] border border-white/10 bg-[var(--sept27-surface)] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] md:h-[96px] md:w-[92px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--sept27-gold) 12%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative font-[family-name:var(--font-cormorant-garamond)] text-[34px] font-light text-white md:text-[44px]"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--sept27-gray)]">
        {label}
      </span>
    </div>
  );
};

interface CountdownTimerProps {
  readonly targetISO: string;
  readonly labels: {
    readonly days: string;
    readonly hours: string;
    readonly minutes: string;
    readonly seconds: string;
  };
  readonly onComplete?: () => void;
}

export const CountdownTimer = ({ targetISO, labels, onComplete }: CountdownTimerProps) => {
  // Start at ZERO on the server so markup matches on hydration, then sync
  // to the real value once mounted in the browser.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const tick = () => {
      setMounted(true);
      const next = getTimeLeft(targetISO);
      setTimeLeft(next);
      if (next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        onComplete?.();
      }
    };

    // Run once on mount (deferred into a callback, not called synchronously
    // in the effect body) and then every second after.
    const initial = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [targetISO, onComplete]);

  return (
    <div
      className="flex items-center justify-center gap-3 md:gap-5"
      aria-live="polite"
      aria-label="Countdown to the event"
    >
      <NumberCard value={mounted ? timeLeft.days : 0} label={labels.days} />
      <span className="pb-6 font-[family-name:var(--font-cormorant-garamond)] text-2xl text-[var(--sept27-gold)] md:pb-8 md:text-3xl">
        :
      </span>
      <NumberCard value={mounted ? timeLeft.hours : 0} label={labels.hours} />
      <span className="pb-6 font-[family-name:var(--font-cormorant-garamond)] text-2xl text-[var(--sept27-gold)] md:pb-8 md:text-3xl">
        :
      </span>
      <NumberCard value={mounted ? timeLeft.minutes : 0} label={labels.minutes} />
      <span className="pb-6 font-[family-name:var(--font-cormorant-garamond)] text-2xl text-[var(--sept27-gold)] md:pb-8 md:text-3xl">
        :
      </span>
      <NumberCard value={mounted ? timeLeft.seconds : 0} label={labels.seconds} />
    </div>
  );
};
