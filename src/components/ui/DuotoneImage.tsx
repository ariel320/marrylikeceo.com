"use client";

import Image from "next/image";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface DuotoneImageProps {
  readonly srcColor: string;
  readonly srcBW: string;
  readonly alt: string;
  readonly className?: string;
  readonly sizes?: string;
  readonly priority?: boolean;
  readonly revealOnLoad?: boolean;
  readonly revealDelay?: number;
}

export const DuotoneImage = ({
  srcColor,
  srcBW,
  alt,
  className,
  sizes,
  priority,
  revealOnLoad = false,
  revealDelay = 0.3,
}: DuotoneImageProps) => {
  const revealProps = revealOnLoad
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        transition: { duration: 1.8, delay: revealDelay, ease: EASE },
      }
    : {
        initial: { opacity: 1 },
        whileInView: { opacity: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 1.8, delay: revealDelay, ease: EASE },
      };

  return (
    <>
      <Image
        src={srcColor}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
      <motion.div {...revealProps} className="absolute inset-0">
        <Image
          src={srcBW}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          className={className}
        />
      </motion.div>
    </>
  );
};
