"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const imageZoom = {
  initial: { scale: 1.12 },
  whileInView: { scale: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1.4, ease: EASE },
};

const curtainUp = {
  initial: { scaleY: 1 },
  whileInView: { scaleY: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1.1, ease: EASE },
};

export const Experience = () => {
  const { experience } = COPY;

  useEffect(() => {
    if (window.location.hash === "#retreat") {
      history.replaceState(null, "", "#experience");
    }
  }, []);

  return (
    <Section theme="light" id="experience" className="overflow-hidden">
      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Photo column */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative h-full min-h-[620px] overflow-hidden">
            <motion.div {...imageZoom} className="absolute inset-0">
              <DuotoneImage
                srcColor="/images/ariel-walk.jpg"
                srcBW="/images/ariel-walk-bw.jpg"
                alt={experience.imageAlt}
                className="object-cover object-[50%_20%]"
                sizes="38vw"
              />
            </motion.div>
            <motion.div
              {...curtainUp}
              className="absolute inset-0 origin-top bg-[var(--bg-white)]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4">
            <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
            <Eyebrow color="crimson">{experience.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="mt-7 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(36px,4.6vw,60px)] leading-[1.06] text-[var(--text-dark)]"
          >
            {experience.headline}
            <br />
            <em>{experience.headlineAccent}</em>
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-7 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(19px,2vw,24px)] font-light italic text-[var(--text-dark)]"
          >
            {experience.intro}
          </motion.p>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-6 max-w-[600px] font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[#555]"
          >
            {experience.body}
          </motion.p>

          <motion.ul {...fadeUp(0.34)} className="mt-9 flex flex-col gap-4">
            {experience.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <span className="mt-px text-[var(--crimson)]">&rarr;</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[15px] leading-relaxed text-[var(--text-dark)]">
                  {detail}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...fadeUp(0.42)}
            className="mt-8 max-w-[560px] font-[family-name:var(--font-cormorant-garamond)] text-[18px] font-light italic text-[var(--text-secondary)]"
          >
            {experience.closing}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-9">
            <Button
              variant="primary"
              href={experience.ctaHref}
              target="_blank"
              className="!px-10 !py-4"
            >
              {experience.cta}
            </Button>
            <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
              {experience.micro}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
