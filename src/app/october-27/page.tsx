import type { Metadata } from "next";

import { Oct27Hero } from "@/components/oct27/Oct27Hero";
import { Oct27Video } from "@/components/oct27/Oct27Video";
import { Oct27Invitation } from "@/components/oct27/Oct27Invitation";
import { Oct27Countdown } from "@/components/oct27/Oct27Countdown";
import { WhyAttend } from "@/components/oct27/WhyAttend";
import { SpeakerSection } from "@/components/oct27/SpeakerSection";
import { Oct27Testimonials } from "@/components/oct27/Oct27Testimonials";
import { Oct27FAQ } from "@/components/oct27/Oct27FAQ";
import { Oct27FinalCTA } from "@/components/oct27/Oct27FinalCTA";
import { Oct27FloatingCTA } from "@/components/oct27/Oct27FloatingCTA";
import { COPY } from "@/constants/copy";

export const metadata: Metadata = {
  title: COPY.oct27.meta.title,
  description: COPY.oct27.meta.description,
  alternates: {
    canonical: "/october-27",
  },
  openGraph: {
    title: COPY.oct27.meta.title,
    description: COPY.oct27.meta.description,
    url: "/october-27",
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

const Oct27Page = () => {
  return (
    <div className="bg-[var(--sept27-bg)]" style={{ paddingBottom: "5rem" }}>
      <Oct27Hero />
      <Oct27Video />
      <Oct27Invitation />
      <Oct27Countdown />
      <WhyAttend />
      <SpeakerSection />
      <Oct27Testimonials />
      <Oct27FAQ />
      <Oct27FinalCTA />
      <Oct27FloatingCTA />
    </div>
  );
};

export default Oct27Page;
