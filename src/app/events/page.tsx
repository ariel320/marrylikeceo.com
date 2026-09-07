import type { Metadata } from "next";

import { EventsHero } from "@/components/sections/EventsHero";
import { EventsCalendar } from "@/components/sections/EventsCalendar";
import { EventsCTA } from "@/components/sections/EventsCTA";
import { EventsBackdrop } from "@/components/events/EventsBackdrop";

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
      {/* Backdrop (floral flourish + gold arcs) is scoped to the hero's own
       *  height only — it previously wrapped the calendar/card list too,
       *  which put its large bottom-left bloom right on top of the event
       *  cards. The card itself has its own small corner accents instead. */}
      <div className="relative overflow-hidden bg-[var(--bg-dark)]">
        <EventsBackdrop imageAlt="Ariel Yankelewitz, founder of Marry Like a CEO" />
        <EventsHero />
      </div>
      <div className="relative bg-[var(--bg-dark)]">
        <EventsCalendar />
      </div>
      <EventsCTA />
    </>
  );
};

export default EventsPage;
