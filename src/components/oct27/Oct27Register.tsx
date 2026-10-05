"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/** Luma's own registration embed for this event, framed in the page's gold theme. */
export const Oct27Register = () => {
  const { register } = COPY.oct27;
  const [loaded, setLoaded] = useState(false);

  return (
    <Oct27Section theme="surface" id="register" className="text-center">
      <motion.p
        {...fadeUp(0)}
        className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]"
      >
        {register.eyebrow}
      </motion.p>

      <motion.h2
        {...fadeUp(0.08)}
        className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(30px,4vw,48px)] font-light leading-[1.1] text-white"
      >
        {register.headline}
      </motion.h2>

      <motion.p
        {...fadeUp(0.14)}
        className="mx-auto mt-3 max-w-[440px] font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-[var(--sept27-gray)]"
      >
        {register.subhead}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mx-auto mt-10 max-w-[600px]">
        <div className="sept27-card-aura rounded-[6px] bg-[var(--sept27-bg)]">
          <div className="relative overflow-hidden rounded-[6px]">
            {!loaded && (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]/70"
              >
                Loading
              </div>
            )}
            <iframe
              src={OCT27_EVENT.embedUrl}
              title={register.iframeTitle}
              onLoad={() => setLoaded(true)}
              loading="lazy"
              allow="fullscreen; payment"
              className="block h-[450px] w-full max-w-full border-0"
            />
          </div>
        </div>

        <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-xs font-light text-[var(--sept27-gray)]">
          {register.fallbackPrefix}{" "}
          <a
            href={OCT27_EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--sept27-gold)] underline-offset-4 hover:underline"
          >
            {register.fallbackLink}
          </a>
        </p>
      </motion.div>
    </Oct27Section>
  );
};
