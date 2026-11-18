"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getLogoFortechnology } from "@/utils/logo-mapper";

// Touch screens have no hover, so the hover-to-reveal label would never show.
function useCanHover() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover)");
    setCanHover(query.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return canHover;
}

export function TechStack({ stack }: { stack: string }) {
  const canHover = useCanHover();

  if (!canHover) {
    return (
      <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-1.5 py-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        {getLogoFortechnology(stack)}
        <span className="whitespace-nowrap">{stack}</span>
      </div>
    );
  }

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
