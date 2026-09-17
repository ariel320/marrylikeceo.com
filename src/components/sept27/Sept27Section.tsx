import { cn } from "@/lib/utils";

import styles from "./Sept27Section.module.css";

type Sept27SectionTheme = "bg" | "surface";
type Sept27SectionPadding = "default" | "none-top" | "large";

interface Sept27SectionProps {
  readonly id?: string;
  readonly theme?: Sept27SectionTheme;
  /** Extra classes for non-spacing tweaks only (text-align, overflow, etc.) —
   *  padding is controlled by the `padding` prop below, not className,
   *  since padding utilities don't reliably resolve in this build. */
  readonly className?: string;
  /** Max content width in pixels. Defaults to 1152px (~max-w-6xl). */
  readonly maxWidth?: number;
  readonly padding?: Sept27SectionPadding;
  readonly children?: React.ReactNode;
}

const themeStyles: Record<Sept27SectionTheme, string> = {
  bg: styles.bg,
  surface: styles.surface,
};

const paddingStyles: Record<Sept27SectionPadding, string | undefined> = {
  default: undefined,
  "none-top": styles.noTopPadding,
  large: styles.large,
};

/**
 * Same padding rhythm and max-width pattern as the site-wide `Section`
 * component, re-scoped to the Sept 27 landing page's black-and-gold
 * palette. Kept separate from `Section` so the rest of the site's theming
 * is never touched. Layout comes from Sept27Section.module.css — see that
 * file for why.
 */
export const Sept27Section = ({
  id,
  theme = "bg",
  className,
  maxWidth = 1152,
  padding = "default",
  children,
}: Sept27SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        styles.section,
        themeStyles[theme],
        paddingStyles[padding],
        className,
      )}
    >
      <div className={styles.inner} style={{ maxWidth }}>
        {children}
      </div>
    </section>
  );
};
