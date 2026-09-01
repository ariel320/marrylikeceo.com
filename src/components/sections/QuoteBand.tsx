"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

export const QuoteBand = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[64svh] items-center overflow-hidden bg-[var(--bg-dark)] text-[var(--text-light)] lg:min-h-[74svh]"
    >
      {/* Parallax photograph */}
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={{ y }}>
        <DuotoneImage
          srcColor="/images/ariel-band.jpg"
          srcBW="/images/ariel-band-bw.jpg"
          alt={COPY.quoteBand.imageAlt}
          className="object-cover object-[28%_30%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Veil — keeps her visible on the left, carves room for type on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(19,21,31,0.42) 0%, rgba(19,21,31,0.62) 46%, rgba(19,21,31,0.88) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-12">
        <motion.blockquote
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="ml-auto max-w-[640px] text-right font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(32px,4.6vw,58px)] leading-[1.15]"
        >
          {COPY.quoteBand.line}
          <br />
          <em className="text-[var(--gold)]">{COPY.quoteBand.accent}</em>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="mt-8 flex items-center justify-end gap-4"
        >
          <span className="hairline-gold w-12" aria-hidden="true" />
          <span className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--gold)]">
            Ariel Yankelewitz
          </span>
        </motion.div>
      </div>
    </section>
  );
};
