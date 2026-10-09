import type { ReactNode } from "react";

import styles from "./Oct27Benefits.module.css";

const Icon = ({ children }: { readonly children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const BENEFITS = [
  {
    title: "Expert insights",
    body: "Real strategies from Ariel’s experience and proven method.",
    icon: <Icon><path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.1-8 11-8 11Z" /></Icon>,
  },
  {
    title: "Live Q&A",
    body: "Get your questions answered in real time.",
    icon: <Icon><path d="M4 5h16v11H10l-5 4v-4H4V5Z" /><path d="M8 9.5h8M8 12.5h5" /></Icon>,
  },
  {
    title: "Actionable tools",
    body: "Simple, practical steps you can use right away.",
    icon: <Icon><path d="M6.5 4h11l4 5.2L12 20.5 2.5 9.2l4-5.2Z" /><path d="M2.5 9.2h19M9.5 4 12 9.2 14.5 4M12 9.2v11.3" /></Icon>,
  },
  {
    title: "Supportive community",
    body: "Connect with like-minded women on the same journey.",
    icon: <Icon><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16.2 14.2c2.8.3 4.8 2.5 4.8 5.8" /></Icon>,
  },
] as const;

export const Oct27Benefits = () => (
  <section data-tone="navy" className={styles.section} aria-label="What you will get">
    <ul className={styles.grid}>
      {BENEFITS.map((b) => (
        <li key={b.title} className={styles.item}>
          {b.icon}
          <h2 className={styles.title}>{b.title}</h2>
          <p className={styles.body}>{b.body}</p>
        </li>
      ))}
    </ul>
  </section>
);
