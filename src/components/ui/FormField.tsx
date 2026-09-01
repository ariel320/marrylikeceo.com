import { cn } from "@/lib/utils";
import type { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  readonly label: string;
  readonly type?: string;
  readonly placeholder?: string;
  readonly variant?: "light" | "dark";
  readonly error?: string;
  readonly registration: UseFormRegisterReturn;
  readonly inputClassName?: string;
}

export const FormField = ({
  label,
  type = "text",
  placeholder,
  variant = "dark",
  error,
  registration,
  inputClassName,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={registration.name}
        className="sr-only"
      >
        {label}
      </label>
      <input
        id={registration.name}
        type={type}
        placeholder={placeholder ?? label}
        className={cn(
          "w-full rounded-full border px-5 py-3.5 text-sm font-[family-name:var(--font-dm-sans)] outline-none transition-colors duration-200 placeholder:text-[var(--text-secondary)]",
          variant === "dark"
            ? "border-[var(--divider-dark)] bg-white/[0.04] text-[var(--text-light)] focus:border-[var(--gold)]"
            : "border-[var(--divider-light)] bg-white text-[var(--text-dark)] focus:border-[var(--crimson)]",
          inputClassName,
        )}
        {...registration}
      />
      {error && (
        <p className="text-xs text-[var(--crimson)]">{error}</p>
      )}
    </div>
  );
};
