"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Sept27Section } from "@/components/sept27/Sept27Section";
import { CountdownTimer } from "@/components/sept27/CountdownTimer";
import { COPY } from "@/constants/copy";
import { SEPT27_EVENT } from "@/config/sept27-event";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Sept27Countdown = () => {
  const { countdown } = COPY.sept27;
  const [isComplete, setIsComplete] = useState(false);

  return (
    <Sept27Section theme="bg" id="countdown" className="text-center">
      <motion.p
        {...fadeUp(0)}
        className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--sept27-gold)]"
      >
        {countdown.eyebrow}
      </motion.p>

      <motion.h2
        {...fadeUp(0.08)}
        className="mt-5 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(30px,4vw,48px)] font-light leading-[1.1] text-white"
      >
        {isComplete ? countdown.liveHeadline : countdown.headline}
      </motion.h2>

      <motion.p
        {...fadeUp(0.14)}
        className="mx-auto mt-3 max-w-[440px] font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-[var(--sept27-gray)]"
      >
        {isComplete ? countdown.liveBody : countdown.subhead}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-12">
        <CountdownTimer
          targetISO={SEPT27_EVENT.dateISO}
          labels={countdown.labels}
          onComplete={() => setIsComplete(true)}
        />
      </motion.div>
    </Sept27Section>
  );
};
