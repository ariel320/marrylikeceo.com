"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1.4, ease: EASE },
};

const curtainUp = {
  initial: { scaleY: 1 },
  whileInView: { scaleY: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1.1, ease: EASE },
};

export const Story = () => {
  const { story } = COPY;
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const offsetY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Section theme="dark" id="story" className="overflow-hidden">
      <div className="relative grid items-center gap-16 lg:grid-cols-12 lg:gap-16">
        {/* Editorial image pair */}
        <div
          ref={imgRef}
          className="relative mx-auto w-full max-w-[520px] pb-14 lg:col-span-6 lg:max-w-none lg:pb-0"
        >
          <div className="relative aspect-[3/4] w-[88%] overflow-hidden">
            <motion.div {...imageZoom} className="absolute inset-0">
              <DuotoneImage
                srcColor="/images/ariel-story.jpg"
                srcBW="/images/ariel-story-bw.jpg"
                alt={story.imageAlt}
                className="object-cover"
                sizes="(max-width: 1024px) 88vw, 42vw"
              />
            </motion.div>
            <motion.div
              {...curtainUp}
              className="absolute inset-0 origin-top bg-[var(--bg-dark)]"
              aria-hidden="true"
            />
          </div>

          <motion.div
            style={{ y: offsetY }}
            className="absolute bottom-0 right-0 w-[44%] border-[6px] border-[var(--bg-dark)] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] lg:-right-4"
          >
            <motion.div {...fadeUp(0.3)} className="relative aspect-[3/4]">
              <DuotoneImage
                srcColor="/images/ariel-study.jpg"
                srcBW="/images/ariel-study-bw.jpg"
                alt={story.imageAltSecondary}
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center pb-2 pt-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                }}
              >
                <p className="text-center font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.25em] text-white">
                  {story.imageCaption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Narrative column */}
        <div className="lg:col-span-6 lg:pl-6">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4">
            <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
            <Eyebrow color="gold">{story.eyebrow}</Eyebrow>
          </motion.div>

          <motion.blockquote
            {...fadeUp(0.12)}
            className="mt-8 font-[family-name:var(--font-cormorant-garamond)] font-light italic text-[clamp(30px,3.6vw,46px)] leading-[1.2] text-[var(--text-light)]"
          >
            <span className="text-[1.3em] leading-none text-[var(--gold)]">&ldquo;</span>
            {story.quote}
            <span className="text-[1.3em] leading-none text-[var(--gold)]">&rdquo;</span>
          </motion.blockquote>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-10 max-w-[540px] font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[var(--text-secondary)]"
          >
            {story.paragraphs[0]}
          </motion.p>

          <motion.p
            {...fadeUp(0.34)}
            className="mt-9 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(24px,2.8vw,34px)] font-light italic text-[var(--text-light)]"
          >
            {story.beat}
          </motion.p>

          <motion.p
            {...fadeUp(0.44)}
            className="mt-9 max-w-[540px] font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[var(--text-secondary)]"
          >
            {story.paragraphs[1]}
          </motion.p>

          <motion.p
            {...fadeUp(0.54)}
            className="mt-6 max-w-[540px] font-[family-name:var(--font-dm-sans)] text-[17px] leading-relaxed text-[var(--text-light)]"
          >
            {story.paragraphs[2]}{" "}
            <span className="text-[var(--gold)]">{story.closing}</span>
          </motion.p>
        </div>
      </div>
    </Section>
  );
};
