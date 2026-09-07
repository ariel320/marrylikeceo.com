"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EventsList } from "@/components/events/EventsList";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const EventsCalendar = () => {
  const { events } = COPY;

  return (
    <Section
      theme="dark"
      id="upcoming"
      className="overflow-hidden bg-transparent! pt-0! pb-24! lg:pb-[140px]!"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4">
          <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
          <Eyebrow>{events.calendarEyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(32px,4.2vw,52px)] font-light leading-[1.08] text-[var(--text-light)]"
        >
          {events.calendarHeadline}
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-4 max-w-[520px] font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-relaxed text-[var(--text-secondary)]"
        >
          {events.calendarNote}
        </motion.p>

        <motion.div {...fadeUp(0.22)} className="mt-12 lg:mt-16">
          {/* Upcoming Experiences — data lives in src/config/events.ts */}
          <EventsList />
        </motion.div>
      </div>
    </Section>
  );
};
