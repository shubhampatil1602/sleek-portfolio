"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const roles = [
  "Front-end Engineer",
  "Full Stack Engineer",
  "Software Engineer",
  "Design Engineer",
];

export function Heading({
  as: Tag = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
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
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        <Tag
          className={cn(
            "px-4 text-2xl font-bold tracking-tighter text-primary drop-shadow-lg dark:text-primary md:text-4xl",
            className,
          )}
        >
          {children}
        </Tag>
      </motion.div>
      <Role />
    </div>
  );
}

function Role() {
  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = roles.indexOf(role);
      const nextIndex = (index + 1) % roles.length;
      setRole(roles[nextIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [role]);
  return (
    <motion.div
      layout
      initial={{ filter: "blur(6px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      className="relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden rounded-[6px] px-2 py-0.5 pt-0 text-sm text-secondary shadow-custom sm:order-last sm:mx-0 sm:mb-0"
      transition={{
        layout: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <motion.span
        key={role}
        initial={{ opacity: 0.3, filter: "blur(6px)", y: -20 }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          x: [0, -2, 2, -1, 0],
        }}
        transition={{
          opacity: { duration: 0.4, ease: "easeInOut", delay: 0.1 },
          filter: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
          y: { duration: 0.3, ease: "easeInOut" },
          x: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
        }}
        className="inline-block whitespace-nowrap"
      >
        {role}
      </motion.span>
    </motion.div>
  );
}
