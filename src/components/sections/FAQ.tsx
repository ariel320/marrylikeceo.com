"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_DATA } from "@/lib/faq-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const FAQ = () => {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handleToggle = useCallback((slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }, []);

  const scrollToCategory = useCallback((slug: string) => {
    document
      .getElementById(`faq-${slug}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Section theme="light" id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Sticky category rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <motion.div {...fadeUp(0)} className="flex items-center gap-4">
              <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
              <Eyebrow color="crimson">FAQ</Eyebrow>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="mt-7 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(34px,4.2vw,54px)] leading-[1.08] text-[var(--text-dark)]"
            >
              Questions,
              <br />
              <em>answered.</em>
            </motion.h2>

            <motion.nav
              {...fadeUp(0.2)}
              className="mt-10 hidden flex-col lg:flex"
              aria-label="FAQ categories"
            >
              {FAQ_DATA.map((category, i) => (
                <button
                  key={category.slug}
                  onClick={() => scrollToCategory(category.slug)}
                  className="group flex cursor-pointer items-baseline gap-4 border-t border-[var(--divider-light)] bg-transparent py-4 text-left last:border-b"
                >
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-[15px] text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-[#555] transition-colors duration-300 group-hover:text-[var(--text-dark)]">
                    {category.title}
                  </span>
                </button>
              ))}
            </motion.nav>
          </div>
        </div>

        {/* Questions */}
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-14">
            {FAQ_DATA.map((category, catIdx) => (
              <motion.div
                key={category.slug}
                {...fadeUp(0.1 + catIdx * 0.05)}
                id={`faq-${category.slug}`}
                className="scroll-mt-28"
              >
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-light italic text-[var(--text-dark)]">
                    {category.title}
                  </h3>
                  <span className="hairline-gold flex-1" aria-hidden="true" />
                </div>

                <div>
                  {category.items.map((item) => (
                    <AccordionItem
                      key={item.slug}
                      id={`faq-${item.slug}`}
                      question={item.question}
                      isOpen={openSlug === item.slug}
                      onToggle={() => handleToggle(item.slug)}
                    >
                      <div className="flex flex-col gap-4">
                        {item.answer.map((paragraph, pIdx) => (
                          <p
                            key={pIdx}
                            className="font-[family-name:var(--font-dm-sans)] font-light text-[15px] leading-relaxed text-[#555] whitespace-pre-line"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </AccordionItem>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
