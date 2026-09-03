"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";
import { LUMA, getLumaEmbedUrl, isLumaConfigured } from "@/config/luma";
import { cn } from "@/lib/utils";

/** Gold corner brackets — the framing device used around the embed. */
const Corner = ({ className }: { readonly className?: string }) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute h-5 w-5 border-[var(--gold)]/45",
      className,
    )}
  />
);

const Frame = ({ children }: { readonly children: React.ReactNode }) => (
  <div className="relative">
    <Corner className="-left-px -top-px border-l border-t" />
    <Corner className="-right-px -top-px border-r border-t" />
    <Corner className="-bottom-px -left-px border-b border-l" />
    <Corner className="-bottom-px -right-px border-b border-r" />
    <div className="overflow-hidden rounded-[2px] border border-[var(--divider-dark)] bg-[var(--bg-elevated)] p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:p-3">
      {children}
    </div>
  </div>
);

export const LumaEmbed = () => {
  const [loaded, setLoaded] = useState(false);
  const configured = isLumaConfigured();
  const { events } = COPY;

  // Calendar ID not set yet — show a branded panel instead of a broken iframe.
  if (!configured) {
    return (
      <Frame>
        <div
          className="flex flex-col items-center justify-center gap-6 rounded-[2px] px-6 py-20 text-center"
          style={{ minHeight: LUMA.height.mobile }}
        >
          <span className="hairline-gold w-16" aria-hidden="true" />
          <p className="max-w-[440px] font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-light italic text-[var(--text-light)]">
            {events.embed.fallbackHeadline}
          </p>
          <p className="max-w-[420px] font-[family-name:var(--font-dm-sans)] text-[14px] font-light leading-relaxed text-[var(--text-secondary)]">
            {events.embed.fallbackBody}
          </p>
          <Button
            variant="secondary"
            href={LUMA.calendarUrl}
            target="_blank"
            className="!px-8"
          >
            {events.embed.fallbackCta}
          </Button>
        </div>
      </Frame>
    );
  }

  return (
    <div
      style={
        {
          "--luma-h-mobile": `${LUMA.height.mobile}px`,
          "--luma-h-tablet": `${LUMA.height.tablet}px`,
          "--luma-h-desktop": `${LUMA.height.desktop}px`,
        } as React.CSSProperties
      }
    >
      <Frame>
        <div className="relative w-full overflow-hidden rounded-[2px] bg-[var(--bg-elevated)]">
          {/* Loading state — holds the layout so the page never jumps */}
          <div
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, var(--bg-elevated) 0%, color-mix(in srgb, var(--bg-dark) 70%, var(--bg-elevated)) 100%)",
            }}
            className={cn(
              "absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 transition-opacity duration-700",
              loaded ? "pointer-events-none opacity-0" : "opacity-100",
            )}
          >
            <span className="hairline-gold w-14" />
            <span className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]/70">
              {events.embed.loading}
            </span>
          </div>

          <iframe
            src={getLumaEmbedUrl()}
            title={events.embed.title}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen; clipboard-write; payment"
            allowFullScreen
            className="block h-[var(--luma-h-mobile)] w-full max-w-full border-0 bg-transparent sm:h-[var(--luma-h-tablet)] lg:h-[var(--luma-h-desktop)]"
          />
        </div>
      </Frame>

      {/* Escape hatch for browsers or extensions that block third-party frames */}
      <p className="mt-5 text-center font-[family-name:var(--font-dm-sans)] text-xs font-light text-[var(--text-secondary)]">
        {events.embed.helperPrefix}{" "}
        <a
          href={LUMA.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gold)] underline-offset-4 transition-colors duration-200 hover:underline"
        >
          {events.embed.helperLink}
        </a>
      </p>
    </div>
  );
};
