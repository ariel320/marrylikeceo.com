"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  readonly id: string;
  readonly question: string;
  readonly children: React.ReactNode;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

export const AccordionItem = ({
  id,
  question,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div id={id} className="border-b border-[var(--divider-light)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="flex w-full items-center justify-between gap-4 bg-transparent border-none cursor-pointer py-6 text-left"
      >
        <span className="font-[family-name:var(--font-cormorant-garamond)] text-[19px] md:text-[21px] font-normal text-[var(--text-dark)] leading-snug pr-4">
          {question}
        </span>
        <span
          className={cn(
            "flex-none text-[var(--crimson)] text-xl leading-none transition-transform duration-300",
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
