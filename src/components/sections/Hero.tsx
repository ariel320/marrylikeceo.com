"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
});

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--bg-dark)] text-[var(--text-light)]"
    >
      <div className="flex min-h-svh flex-col lg:block">
        {/* Photo — top on mobile, right panel on desktop */}
        <div className="relative order-1 h-[56svh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[44%]">
          <motion.div
            initial={{ scale: 1.08, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: EASE }}
            className="absolute inset-0"
          >
            <DuotoneImage
              srcColor="/images/ariel-hero.jpg"
              srcBW="/images/ariel-hero-bw.jpg"
              alt={COPY.hero.imageAlt}
              className="object-cover object-[50%_18%]"
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              revealOnLoad
              revealDelay={1.1}
            />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 md:h-40"
            style={{
              background:
                "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--bg-dark) 96%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-56 lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 lg:block"
            style={{
              background:
                "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Copy panel — overlaps onto the photo on desktop */}
        <div className="relative z-10 order-2 flex flex-1 flex-col justify-center px-6 pb-16 pt-4 lg:min-h-svh lg:justify-center lg:px-12 lg:pb-28 lg:pt-28 xl:pl-24">
          <div className="w-full lg:max-w-[76%]">
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-4">
              <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
              <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)] md:text-xs">
                {COPY.hero.eyebrow}
              </p>
            </motion.div>

            <motion.h1
              {...fadeUp(0.25)}
              className="mt-8 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(52px,9vw,128px)] font-light leading-[0.98] tracking-[-0.015em]"
            >
              {COPY.hero.headline}
              <br />
              <em className="text-[var(--gold)]">{COPY.hero.headlineAccent}</em>
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-8 max-w-[460px] font-[family-name:var(--font-dm-sans)] text-[16px] font-light leading-relaxed text-[var(--text-secondary)] md:text-[17px]"
            >
              {COPY.hero.subhead}
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-11 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="flex flex-col gap-2">
                <Button
                  variant="primary"
                  href={COPY.hero.whatsappLink}
                  className="!px-10 !py-4"
                >
                  {COPY.hero.cta}
                </Button>
                <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                  {COPY.hero.ctaMicro}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="secondary"
                  href="#experience"
                  className="!px-10 !py-4"
                >
                  {COPY.hero.experienceCta}
                </Button>
                <p className="max-w-[260px] font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                  {COPY.hero.experienceMicro}
                </p>
              </div>
            </motion.div>

            <motion.p
              {...fadeUp(0.68)}
              className="mt-10 font-[family-name:var(--font-cormorant-garamond)] text-sm italic text-[var(--text-secondary)] md:text-base"
            >
              {COPY.hero.eyebrowByline}
            </motion.p>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: EASE }}
          className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 lg:flex lg:left-12 xl:left-24"
          aria-hidden="true"
        >
          <span className="block h-px w-12 bg-[var(--divider-dark)]" />
          <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
};
