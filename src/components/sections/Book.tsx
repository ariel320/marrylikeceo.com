"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Book = () => {
  const { book } = COPY;

  return (
    <Section theme="dark" id="book" className="overflow-hidden">
      <div className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Book plate */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mx-auto w-full max-w-[320px] lg:col-span-5 lg:max-w-[360px]"
        >
          <div className="group relative aspect-[2/3] bg-[var(--bg-elevated)] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:-translate-y-2">
            {/* Spine highlight */}
            <span
              className="absolute inset-y-0 left-0 w-[6px] bg-gradient-to-r from-black/50 to-transparent"
              aria-hidden="true"
            />
            {/* Gold frame inset */}
            <span
              className="pointer-events-none absolute inset-4 border border-[var(--gold)]/40"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col items-center justify-between px-8 py-12 text-center">
              <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
                {book.eyebrow}
              </p>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[34px] font-light leading-[1.15] text-[var(--text-light)]">
                  {book.title}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-[15px] italic leading-snug text-[var(--gold)]">
                  {book.subtitle}
                </p>
              </div>

              <Image
                src="/images/logo-icon.png"
                width={44}
                height={44}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 opacity-90"
              />
            </div>
          </div>

          <p className="mt-5 text-center font-[family-name:var(--font-dm-sans)] text-xs italic text-[var(--text-secondary)]">
            {book.coverNote}
          </p>
        </motion.div>

        {/* Content */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <motion.div {...fadeUp(0.1)}>
            <Eyebrow color="gold">{book.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp(0.2)}
            className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(36px,4.8vw,64px)] leading-[1.06]"
          >
            {book.headline}
            <br />
            <em className="text-[var(--gold)]">{book.headlineAccent}</em>
          </motion.h2>

          <motion.p
            {...fadeUp(0.36)}
            className="mx-auto mt-7 max-w-[520px] font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[var(--text-secondary)] lg:mx-0"
          >
            {book.body}
          </motion.p>

          <motion.div
            {...fadeUp(0.46)}
            className="mx-auto mt-10 max-w-[440px] lg:mx-0"
          >
            <EmailCapture
              source="book"
              variant="inline"
              showName={false}
              ctaText={book.cta}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
