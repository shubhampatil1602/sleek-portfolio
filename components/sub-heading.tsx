"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function SubHeading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2,
      }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "max-w-lg px-4 pt-4 text-sm text-secondary md:text-base",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
