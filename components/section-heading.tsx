"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const SectionHeading = ({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <h2
      className={cn(
        "relative mt-4 w-fit max-w-lg text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base",
        className,
      )}
    >
      <Background />
      {children.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            delay: delay + 0.05 * idx,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

function Background() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100"
    >
      <div className="absolute -left-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></div>
      <div className="absolute -right-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></div>
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></div>
      <div className="absolute -bottom-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></div>
    </motion.div>
  );
}
