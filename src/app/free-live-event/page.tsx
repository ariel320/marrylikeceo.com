import type { Metadata } from "next";
import type { CSSProperties } from "react";

import { Oct27Hero } from "@/components/oct27/Oct27Hero";
import { Oct27Benefits } from "@/components/oct27/Oct27Benefits";
import { Oct27Invitation } from "@/components/oct27/Oct27Invitation";
import { Oct27Video } from "@/components/oct27/Oct27Video";
import { Oct27Countdown } from "@/components/oct27/Oct27Countdown";
import { SpeakerSection } from "@/components/oct27/SpeakerSection";
import { Oct27Testimonials } from "@/components/oct27/Oct27Testimonials";
import { Oct27FAQ } from "@/components/oct27/Oct27FAQ";
import { Oct27Experience } from "@/components/oct27/Oct27Experience";
import { Oct27FloatingCTA } from "@/components/oct27/Oct27FloatingCTA";
import { Oct27FinalCTA } from "@/components/oct27/Oct27FinalCTA";
import "./tones.css";
import "./sections.css";
import { COPY } from "@/constants/copy";

export const metadata: Metadata = {
  title: COPY.oct27.meta.title,
  description: COPY.oct27.meta.description,
  alternates: {
    canonical: "/free-live-event",
  },
  openGraph: {
    title: COPY.oct27.meta.title,
    description: COPY.oct27.meta.description,
    url: "/free-live-event",
    images: ["/images/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.oct27.meta.title,
    description: COPY.oct27.meta.description,
    images: ["/images/og.jpg"],
  },
};

/* Page-scoped palette: keeps the redesign from touching global tokens. */
const PALETTE = {
  /* marrylikeceo.com palette (fallback); tones.css applies it per section */
  "--mlc-navy": "#1A1C2E",
  "--mlc-charcoal": "#13151F",
  "--mlc-ivory": "#1A1C2E",
  "--mlc-text": "#F5F3EE",
  "--mlc-muted": "#9A978F",
  "--mlc-gold": "#B8975A",
  "--mlc-accent": "#B8975A",
  "--mlc-gold-text": "#B8975A",
  "--mlc-gold-display": "#C9AA70",
  "--mlc-gray": "#9A978F",
  "--mlc-line": "rgba(184, 151, 90, 0.5)",
  "--mlc-glow": "rgba(184, 151, 90, 0.35)",
  "--mlc-tint": "#13151F",
  "--mlc-card": "#1E2030",
  "--mlc-section-a": "#1A1C2E",
  "--mlc-section-b": "#1A1C2E",
  "--mlc-btn-bg": "#C1272D",
  "--mlc-btn-fg": "#F5F3EE",
  "--mlc-btn-hover": "#A01F25",
} as CSSProperties;

const Oct27Page = () => {
  return (
    <div style={PALETTE}>
      <Oct27Hero />
      <Oct27Video />
      <Oct27Benefits />
      <Oct27Invitation />
      <Oct27Countdown />
      <Oct27Experience />
      <SpeakerSection />
      <Oct27Testimonials />
      <Oct27FAQ />
      <Oct27FinalCTA />
      <Oct27FloatingCTA />
    </div>
  );
};

export default Oct27Page;
