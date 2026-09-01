import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  readonly variant?: ButtonVariant;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly href?: string;
  readonly target?: "_blank";
  readonly type?: "button" | "submit";
  readonly disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--crimson)] text-white rounded-full hover:bg-[var(--crimson-hover)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--crimson)]/25 transition-all duration-200",
  secondary:
    "border border-[var(--gold)] text-[var(--gold)] rounded-full hover:bg-[var(--gold)] hover:text-white transition-all duration-200",
  ghost:
    "text-[var(--gold)] hover:underline underline-offset-4 transition-all duration-200",
};

export const Button = ({
  variant = "primary",
  children,
  onClick,
  className,
  href,
  target,
  type = "button",
  disabled,
}: ButtonProps) => {
  const styles = cn(
    "inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] font-medium text-sm tracking-wide px-8 py-3.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
};
