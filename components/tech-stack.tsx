"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Tag } from "@/constants/projects";

export function TechStack({ tag }: { tag: Tag }) {
  const { theme } = useTheme();
  const Icon = tag.icon;
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {},
      }}
      className="-mr-3 flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 hover:z-10 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <Icon
        className="size-4"
        color={theme === "dark" && tag.color === "#000" ? "#fff" : tag.color}
      />
      <motion.span
        variants={{
          initial: { width: 0, opacity: 0, marginLeft: 0 },
          hover: { width: "auto", opacity: 1, marginLeft: 2.5 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {tag.name}
      </motion.span>
    </motion.div>
  );
}
