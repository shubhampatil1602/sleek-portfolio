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
      className={cn("max-w-lg pt-4 text-sm font-normal md:text-sm", className)}
    >
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
