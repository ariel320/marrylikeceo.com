import type { Metadata } from "next";

import { Sept27Hero } from "@/components/sept27/Sept27Hero";
import { Sept27Video } from "@/components/sept27/Sept27Video";
import { Sept27Invitation } from "@/components/sept27/Sept27Invitation";
import { Sept27Countdown } from "@/components/sept27/Sept27Countdown";
import { WhyAttend } from "@/components/sept27/WhyAttend";
import { SpeakerSection } from "@/components/sept27/SpeakerSection";
import { Sept27Testimonials } from "@/components/sept27/Sept27Testimonials";
import { Sept27FAQ } from "@/components/sept27/Sept27FAQ";
import { Sept27FinalCTA } from "@/components/sept27/Sept27FinalCTA";
import { Sept27FloatingCTA } from "@/components/sept27/Sept27FloatingCTA";
import { COPY } from "@/constants/copy";

export const metadata: Metadata = {
  title: COPY.sept27.meta.title,
  description: COPY.sept27.meta.description,
  alternates: {
    canonical: "/sept-27",
  },
  openGraph: {
    title: COPY.sept27.meta.title,
    description: COPY.sept27.meta.description,
    url: "/sept-27",
    images: ["/images/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.sept27.meta.title,
    description: COPY.sept27.meta.description,
    images: ["/images/og.jpg"],
  },
};

const Sept27Page = () => {
  return (
    <div className="bg-[var(--sept27-bg)]" style={{ paddingBottom: "5rem" }}>
      <Sept27Hero />
      <Sept27Video />
      <Sept27Invitation />
      <Sept27Countdown />
      <WhyAttend />
      <SpeakerSection />
      <Sept27Testimonials />
      <Sept27FAQ />
      <Sept27FinalCTA />
      <Sept27FloatingCTA />
    </div>
  );
};

export default Sept27Page;
