import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "inline-flex flex-row items-center gap-1.5 md:gap-2 font-[family-name:var(--font-cormorant-garamond)] font-light text-lg md:text-2xl tracking-wide text-[var(--text-light)]",
        className,
      )}
    >
      <Image
        src="/images/logo-icon.png"
        width={44}
        height={44}
        alt="Marry Like a CEO"
        className="h-8 w-8 md:h-11 md:w-11"
      />
      Marry Like a <span className="font-medium">CEO</span>
    </span>
  );
};
