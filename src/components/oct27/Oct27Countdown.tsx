"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Oct27Section } from "@/components/oct27/Oct27Section";
import { CountdownTimer } from "@/components/oct27/CountdownTimer";
import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Oct27Countdown = () => {
  const { countdown } = COPY.oct27;
  const [isComplete, setIsComplete] = useState(false);

  return (
    <Oct27Section theme="surface" tone="navy" id="countdown" className="text-center">
      <motion.p
        {...fadeUp(0)}
        className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--mlc-gold-text)]"
      >
        {countdown.eyebrow}
      </motion.p>

      <motion.h2
        {...fadeUp(0.08)}
        className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(30px,4vw,48px)] font-light leading-[1.1] text-[var(--mlc-text)]"
      >
        {isComplete ? countdown.liveHeadline : countdown.headline}
      </motion.h2>

      <motion.p
        {...fadeUp(0.14)}
        className="mx-auto mt-3 max-w-[440px] font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-[var(--mlc-muted)]"
      >
        {isComplete ? countdown.liveBody : countdown.subhead}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-12">
        <CountdownTimer
          targetISO={OCT27_EVENT.dateISO}
          labels={countdown.labels}
          onComplete={() => setIsComplete(true)}
        />
      </motion.div>
    </Oct27Section>
  );
};
