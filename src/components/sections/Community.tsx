"use client";

import { motion } from "motion/react";
import { MessageCircle, Users, Music2, ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const InstagramIcon = ({ className, size = 18 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className, size = 18 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className, size = 18 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ readonly className?: string; readonly size?: number }>> = {
  MessageCircle,
  Users,
  Instagram: InstagramIcon,
  Music2,
  Linkedin: LinkedinIcon,
  Youtube: YoutubeIcon,
};

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Community = () => {
  const { community } = COPY;

  return (
    <Section theme="ivory" id="community" className="text-center">
      <div className="mx-auto max-w-[1000px]">
        <motion.div {...fadeUp(0)}>
          <Eyebrow color="crimson">{community.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(32px,4.4vw,54px)] leading-[1.08] text-[var(--text-dark)]"
        >
          {community.headline}
        </motion.h2>

        <motion.p
          {...fadeUp(0.18)}
          className="mx-auto mt-4 max-w-[480px] font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[#555]"
        >
          {community.body}
        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {community.channels.map((channel, i) => {
            const Icon = iconMap[channel.icon];
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp(0.2 + i * 0.07)}
                className="group flex min-w-[200px] items-center gap-3 border border-[var(--divider-light)] bg-white px-7 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_24px_50px_-24px_rgba(26,28,46,0.16)]"
              >
                {Icon && <Icon size={18} className="text-[var(--gold)]" />}
                <span className="flex-1 text-left font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[var(--text-dark)]">
                  {channel.name}
                </span>
                <ArrowRight
                  size={14}
                  className="text-[var(--text-secondary)] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[var(--gold)]"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
