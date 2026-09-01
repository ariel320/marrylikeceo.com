import { cn } from "@/lib/utils";

interface EyebrowProps {
  readonly children: React.ReactNode;
  readonly color?: "gold" | "crimson";
  readonly className?: string;
}

export const Eyebrow = ({
  children,
  color = "gold",
  className,
}: EyebrowProps) => {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-dm-sans)] font-medium text-xs uppercase tracking-[0.2em]",
        color === "gold" ? "text-[var(--gold)]" : "text-[var(--crimson)]",
        className,
      )}
    >
      {children}
    </span>
  );
};
