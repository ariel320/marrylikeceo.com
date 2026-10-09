import styles from "./Oct27Tones.module.css";

export type Oct27Tone = "navy" | "light" | "white";

/** Class names that apply a colour tone (tokens + gold top lining) to an element. */
export const toneClass = (tone: Oct27Tone): string => `${styles[tone]} ${styles.lined}`;
