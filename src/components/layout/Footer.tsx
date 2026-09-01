import { MessageCircle, Users, Music2, Mail } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Logo } from "@/components/ui/Logo";
import { COPY } from "@/constants/copy";

const InstagramIcon = ({ className, size = 16 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className, size = 16 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className, size = 16 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const socialIcons: Record<string, React.ComponentType<{ readonly className?: string; readonly size?: number }>> = {
  WhatsApp: MessageCircle,
  Facebook: Users,
  Instagram: InstagramIcon,
  TikTok: Music2,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
};

export const Footer = () => {
  const { footer } = COPY;

  return (
    <Section theme="footer" className="border-t border-[var(--divider-dark)] pt-20! pb-10! overflow-hidden">
      {/* Oversized wordmark */}
      <div className="mx-auto mb-16 max-w-[1100px]">
        <p
          className="whitespace-nowrap text-center font-[family-name:var(--font-cormorant-garamond)] font-light leading-none tracking-[0.02em] text-[var(--text-light)]/90 text-[clamp(34px,7.2vw,104px)]"
        >
          Marry Like a <span className="font-normal">CEO</span>
        </p>
        <div className="mx-auto mt-10 flex items-center gap-6">
          <span className="hairline-gold flex-1" aria-hidden="true" />
          <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            #IChooseHim
          </span>
          <span
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, var(--gold) 0%, color-mix(in srgb, var(--gold) 25%, transparent) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left">
        {/* Left — Logo + tagline */}
        <div className="flex-1">
          <Logo />
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-xs italic text-[var(--text-secondary)]">
            {footer.tagline}
          </p>
        </div>

        {/* Center — Nav links */}
        <nav className="flex flex-1 flex-wrap justify-center gap-x-6 gap-y-2">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — Social icons + email */}
        <div className="flex flex-1 flex-col items-center gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            {footer.socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--gold)]"
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${footer.email}`}
            className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--gold)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <Mail size={12} />
              {footer.email}
            </span>
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mx-auto mt-10 max-w-[1100px] border-t border-[var(--divider-dark)] pt-6 text-center">
        <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]/60">
          {footer.copyright}
        </p>
      </div>
    </Section>
  );
};
