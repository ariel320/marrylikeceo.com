"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  readonly id: string;
  readonly question: string;
  readonly children: React.ReactNode;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
  /** "light" (default) matches the site's ivory FAQ section. "dark" is for cinematic dark-on-black sections. */
  readonly theme?: "light" | "dark";
}

export const AccordionItem = ({
  id,
  question,
  children,
  isOpen,
  onToggle,
  theme = "light",
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isDark = theme === "dark";

  return (
    <div
      id={id}
      className={cn(
        "border-b",
        isDark ? "border-white/10" : "border-[var(--divider-light)]",
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="flex w-full items-center justify-between gap-4 bg-transparent border-none cursor-pointer py-6 text-left"
      >
        <span
          className={cn(
            "font-[family-name:var(--font-cormorant-garamond)] text-[19px] md:text-[21px] font-normal leading-snug pr-4",
            isDark ? "text-white" : "text-[var(--text-dark)]",
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "flex-none text-xl leading-none transition-transform duration-300",
            isDark ? "text-[var(--sept27-gold)]" : "text-[var(--crimson)]",
            isOpen && "rotate-45",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={id}
        ref={contentRef}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
