import styles from "./Oct27Experience.module.css";

const POINTS = [
  "Gain clarity about your dating patterns.",
  "Develop confidence and intentional decision-making.",
  "Build a foundation for lasting love.",
] as const;

export const Oct27Experience = () => (
  <section id="the-experience" data-tone="white" className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.label}>The experience</p>
      <h2 className={styles.headline}>
        Every month, a <em>new entry point.</em>
      </h2>
      <p className={styles.copy}>
        Each session gives you a fresh perspective, practical tools, and the mindset to create the love life you deserve.
      </p>

      <ul className={styles.points}>
        {POINTS.map((p) => (
          <li key={p} className={styles.point}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
