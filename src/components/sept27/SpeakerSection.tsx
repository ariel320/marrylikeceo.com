"use client";

import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const SpeakerSection = () => {
  const { speaker } = COPY.sept27;

  return (
    <Sept27Section theme="surface" id="speaker" maxWidth={1100}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <motion.div
          {...fadeUp(0)}
          className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-[6px] lg:col-span-5"
        >
          <DuotoneImage
            srcColor="/images/ariel-band.jpg"
            srcBW="/images/ariel-band-bw.jpg"
            alt={speaker.imageAlt}
            className="object-cover object-[50%_22%]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(244,180,0,0.25)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{
              background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Copy */}
        <div className="order-2 lg:col-span-7">
          <motion.p
            {...fadeUp(0.1)}
            className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]"
          >
            {speaker.eyebrow}
          </motion.p>

          <motion.h2
            {...fadeUp(0.18)}
            className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(34px,4.6vw,58px)] font-light leading-[1.06] text-white"
          >
            {speaker.headline}
          </motion.h2>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium uppercase tracking-[0.15em] text-[var(--sept27-gray)]"
          >
            {speaker.headlineAccent}
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.32)}
            className="mt-8 border-l border-[var(--sept27-gold)]/50 pl-6 font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-light italic leading-snug text-white md:text-[26px]"
          >
            &ldquo;{speaker.quote}&rdquo;
          </motion.blockquote>

          <div className="mt-8 flex flex-col gap-4">
            {speaker.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.4 + i * 0.08)}
                className="font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-relaxed text-[var(--sept27-gray)]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </Sept27Section>
  );
};
