"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { COPY } from "@/constants/copy";
import { SEPT27_EVENT } from "@/config/sept27-event";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * The invitation card doubles as a static "video end screen": logo mark,
 * headline, date, and a single CTA, all inside one self-contained gold
 * frame — so a screenshot of just the card works on its own.
 */
export const Sept27Invitation = () => {
  const { invitation } = COPY.sept27;

  return (
    <Sept27Section id="sept27-invitation" theme="bg" className="overflow-hidden">
      <motion.div {...fadeUp(0)} className="mx-auto flex items-center justify-center gap-4">
        <span className="sept27-hairline-gold w-10 flex-none" aria-hidden="true" />
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]">
          {invitation.eyebrow}
        </p>
        <span
          className="h-px w-10 flex-none"
          style={{
            background:
              "linear-gradient(to left, var(--sept27-gold) 0%, color-mix(in srgb, var(--sept27-gold) 20%, transparent) 100%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        {...fadeUp(0.1)}
        className="sept27-card-aura mx-auto mt-10 max-w-[560px] rounded-[6px] bg-[var(--sept27-surface)]"
      >
        <div className="flex flex-col items-center gap-8 px-8 py-14 text-center md:px-14 md:py-16">
          <div className="relative h-[170px] w-[136px] flex-none overflow-hidden rounded-[10px] ring-1 ring-[var(--sept27-gold)]/40 shadow-[0_25px_60px_-20px_rgba(244,180,0,0.35)] sm:h-[192px] sm:w-[154px]">
            <Image
              src="/images/events/the-dating-code-poster.png"
              alt="Marry Like a CEO — The Dating Code, a free live Experience with Ariel Yankelewitz"
              fill
              sizes="160px"
              className="object-cover object-top"
              priority
            />
          </div>

          <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--sept27-gold)]">
            Marry Like a CEO
          </span>

          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(30px,4.4vw,46px)] font-light leading-[1.1] text-white">
            {invitation.headline}
          </h2>

          <div className="flex w-full max-w-[380px] items-center gap-4" aria-hidden="true">
            <span className="sept27-hairline-gold flex-1" />
            <span className="h-1 w-1 rotate-45 bg-[var(--sept27-gold)]" />
            <span
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to left, var(--sept27-gold) 0%, color-mix(in srgb, var(--sept27-gold) 20%, transparent) 100%)",
              }}
            />
          </div>

          <dl className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <dt className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--sept27-gray)]">
                Date
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white">
                {invitation.dayLabel}, {invitation.dateLabel}
              </dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--sept27-gray)]">
                Time
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white">
                {invitation.timeLabel}
              </dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--sept27-gray)]">
                Format
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white">
                {SEPT27_EVENT.format}
              </dd>
            </div>
          </dl>

          <p className="max-w-[400px] font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-relaxed text-[var(--sept27-gray)]">
            {invitation.body}
          </p>

          <div className="flex w-full max-w-[380px] flex-col items-center gap-4">
            <a
              href={SEPT27_EVENT.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--sept27-gold)] px-10 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_50px_-12px_color-mix(in_srgb,var(--sept27-gold)_65%,transparent)]"
            >
              {invitation.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--sept27-gray)]">
              {invitation.micro}
            </p>
          </div>
        </div>
      </motion.div>
    </Sept27Section>
  );
};
