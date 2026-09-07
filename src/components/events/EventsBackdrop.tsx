"use client";

import { motion } from "motion/react";

import { DuotoneImage } from "@/components/ui/DuotoneImage";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fine-line botanical corner illustration — matches the site's thin-gold-stroke
 * language (see SystemIcon) but scaled up as a decorative flourish rather than
 * a functional icon. Anchored to the bottom-left corner of the page.
 */
const FloralCorner = ({ className }: { readonly className?: string }) => (
  <svg
    viewBox="0 0 420 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Stems */}
    <path
      d="M20 400C60 340 90 300 100 240C108 195 100 150 130 100"
      stroke="var(--gold)"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M40 400C90 360 130 330 150 280C168 235 155 190 190 150"
      stroke="var(--gold)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M10 340C55 320 80 300 95 265"
      stroke="var(--gold)"
      strokeWidth="0.9"
      strokeLinecap="round"
    />

    {/* Leaves */}
    <path
      d="M100 240C80 225 65 228 50 245C68 252 85 252 100 240Z"
      stroke="var(--gold)"
      strokeWidth="0.9"
    />
    <path
      d="M130 200C110 190 96 196 84 214C103 218 119 214 130 200Z"
      stroke="var(--gold)"
      strokeWidth="0.9"
    />
    <path
      d="M150 280C132 272 118 278 106 296C124 300 140 296 150 280Z"
      stroke="var(--gold)"
      strokeWidth="0.9"
    />
    <path
      d="M190 150C176 136 160 136 144 148C158 162 175 162 190 150Z"
      stroke="var(--gold)"
      strokeWidth="0.9"
    />

    {/* Peony-style bloom, upper */}
    <g>
      <circle cx="132" cy="98" r="9" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="118" cy="90" r="9" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="146" cy="90" r="9" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="124" cy="78" r="9" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="140" cy="78" r="9" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="132" cy="70" r="8" stroke="var(--gold)" strokeWidth="0.9" />
      <circle cx="132" cy="85" r="4" fill="var(--gold)" opacity="0.7" />
    </g>

    {/* Smaller bloom, lower-left */}
    <g>
      <circle cx="52" cy="248" r="7" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="40" cy="242" r="7" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="60" cy="238" r="7" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="48" cy="230" r="6.5" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="50" cy="240" r="3" fill="var(--gold)" opacity="0.7" />
    </g>

    {/* Mid bloom */}
    <g>
      <circle cx="192" cy="152" r="7.5" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="180" cy="146" r="7.5" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="200" cy="142" r="7.5" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="188" cy="134" r="7" stroke="var(--gold)" strokeWidth="0.85" />
      <circle cx="190" cy="144" r="3" fill="var(--gold)" opacity="0.7" />
    </g>

    {/* Scattered petals / buds */}
    <circle cx="20" cy="340" r="3.2" stroke="var(--gold)" strokeWidth="0.85" />
    <circle cx="150" cy="282" r="4" stroke="var(--gold)" strokeWidth="0.85" />
    <circle cx="95" cy="266" r="2.6" stroke="var(--gold)" strokeWidth="0.85" />
  </svg>
);

/** Thin, flowing gold arcs — the "ribbon of light" motif that ties the page together. */
const GoldArcs = ({ className }: { readonly className?: string }) => (
  <svg
    viewBox="0 0 1200 1400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="arcFade1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.85" />
        <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="arcFade2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
      </linearGradient>
    </defs>

    <motion.path
      d="M-40 60C160 -10 260 90 190 230C120 370 260 430 460 380"
      stroke="url(#arcFade1)"
      strokeWidth="1.4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.2, ease: EASE }}
    />
    <motion.path
      d="M1250 40C1000 180 1080 340 960 520C860 670 940 900 1120 1080"
      stroke="url(#arcFade2)"
      strokeWidth="1.2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.4, delay: 0.2, ease: EASE }}
    />
    <motion.path
      d="M1300 700C1080 780 1140 950 1000 1120C880 1260 950 1350 1150 1420"
      stroke="url(#arcFade2)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.4, delay: 0.35, ease: EASE }}
    />
  </svg>
);

interface EventsBackdropProps {
  readonly imageAlt: string;
}

/**
 * Full-bleed atmosphere behind the Events hero + calendar: a soft gold glow,
 * flowing hairline arcs, a fine-line floral corner flourish, and — on wide
 * screens only, so mobile stays legible — a duotone portrait bleeding in
 * from the right edge.
 */
export const EventsBackdrop = ({ imageAlt }: EventsBackdropProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base warm glow, upper-left */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[560px] w-[560px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--gold) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Secondary warm glow, lower-right, behind the portrait */}
      <div
        className="absolute -right-[15%] bottom-[10%] h-[520px] w-[520px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--gold) 18%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Tertiary glow around the calendar frame, so the atmosphere carries down the page */}
      <div
        className="absolute left-1/2 top-[52%] h-[640px] w-[900px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--gold) 14%, transparent) 0%, transparent 70%)",
        }}
      />

      <GoldArcs className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen" />

      {/* Portrait bleed — wide screens only, kept subtle so copy stays legible */}
      <div className="absolute inset-y-0 right-0 hidden w-[34%] xl:block">
        <div className="relative h-full w-full opacity-[0.55]">
          <DuotoneImage
            srcColor="/images/ariel-hero.jpg"
            srcBW="/images/ariel-hero-bw.jpg"
            alt={imageAlt}
            className="object-cover object-[30%_20%]"
            sizes="34vw"
          />
        </div>
        <div
          className="absolute inset-y-0 left-0 w-2/3"
          style={{
            background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background: "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          style={{
            background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Floral flourish, bottom-left */}
      <FloralCorner className="absolute -bottom-6 -left-6 h-[220px] w-[220px] opacity-60 sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] lg:opacity-80" />
    </div>
  );
};
