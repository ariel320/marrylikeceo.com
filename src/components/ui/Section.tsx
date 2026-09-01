import { cn } from "@/lib/utils";

type SectionTheme = "dark" | "light" | "ivory" | "footer";

interface SectionComponentProps {
  readonly id?: string;
  readonly theme?: SectionTheme;
  readonly className?: string;
  readonly children?: React.ReactNode;
}

const themeStyles: Record<SectionTheme, string> = {
  dark: "bg-[var(--bg-dark)] text-[var(--text-light)]",
  light: "bg-[var(--bg-white)] text-[var(--text-dark)]",
  ivory: "bg-[var(--bg-ivory)] text-[var(--text-dark)]",
  footer: "bg-[var(--bg-footer)] text-[var(--text-light)]",
};

export const Section = ({
  id,
  theme = "dark",
  className,
  children,
}: SectionComponentProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 px-6 lg:py-[160px] lg:px-12 xl:py-[180px]",
        themeStyles[theme],
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
};
