import { COPY } from "@/constants/copy";
import { OCT27_EVENT } from "@/config/oct27-event";

import styles from "./Oct27FinalCTA.module.css";

export const Oct27FinalCTA = () => (
  <section id="oct27-final-cta" data-tone="white" className={styles.section}>
    <div className={styles.inner}>
      <span className={styles.rule} aria-hidden="true" />
      <h2 className={styles.headline}>Ready to change the way you date?</h2>
      <p className={styles.copy}>
        Join Ariel Yankelewitz for a fresh perspective on dating, clarity, and lasting love.
      </p>
      <a href={OCT27_EVENT.lumaUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
        Reserve your free seat <span aria-hidden="true">&rarr;</span>
      </a>
      <p className={styles.micro}>{COPY.oct27.hero.ctaMicro}</p>
    </div>
  </section>
);
