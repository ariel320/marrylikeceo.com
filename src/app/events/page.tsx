import type { Metadata } from "next";

import { EventsHero } from "@/components/sections/EventsHero";
import { EventsCalendar } from "@/components/sections/EventsCalendar";
import { EventsCTA } from "@/components/sections/EventsCTA";

export const metadata: Metadata = {
  title: "Events - Marry Like a CEO",
  description:
    "Upcoming Marry Like a CEO Experiences. Live monthly virtual events with Ariel Yankelewitz - a new topic every month, open to all.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events - Marry Like a CEO",
    description: "Discover what's coming next. Live monthly Experiences with Ariel.",
    url: "/events",
    images: ["/images/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events - Marry Like a CEO",
    description: "Discover what's coming next.",
    images: ["/images/og.jpg"],
  },
};

const EventsPage = () => {
  return (
    <>
      <EventsHero />
      <EventsCalendar />
      <EventsCTA />
    </>
  );
};

export default EventsPage;
