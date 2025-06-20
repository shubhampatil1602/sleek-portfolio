"use client";

import { motion } from "motion/react";
import { getLogoFortechnology } from "@/utils/logo-mapper";

export function TechStack({ stack }: { stack: string }) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {},
      }}
      className="-mr-3 flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs hover:z-10 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div className="flex items-center">{getLogoFortechnology(stack)}</div>
      <motion.span
        variants={{
          initial: { width: 0, opacity: 0, marginLeft: 0 },
          hover: { width: "auto", opacity: 1, marginLeft: 2.5 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {stack}
      </motion.span>
    </motion.div>
  );
}
