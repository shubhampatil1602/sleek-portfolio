"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { timelineData } from "@/constants/timeline";
import { SectionHeading } from "./section-heading";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div
      ref={ref}
      className="my-10 border-y border-neutral-100 p-4 pt-1 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark"
    >
      <SectionHeading className="mx-2 my-10">
        Timeline of Achievements
      </SectionHeading>
      {timelineData.map((year, index) => (
        <div key={year.title} content="px-4 py-1" className="mb-4">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1 * index,
              ease: "easeInOut",
            }}
            style={{
              boxShadow: "var(--custom-shadow)",
            }}
            className="mb-2 w-fit rounded-[6px] px-2 py-0.5 font-bold text-neutral-900 shadow-custom dark:border dark:border-neutral-700 dark:text-neutral-100"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step idx={idx} isInView={isInView}>
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 * idx,
                      ease: "easeInOut",
                    }}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 * idx,
                      ease: "easeInOut",
                    }}
                    className="pl-6 pt-1 text-sm text-neutral-400 dark:text-neutral-500"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Step({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView?: boolean;
  idx?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx!,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-600 dark:text-neutral-400" />
      {children}
    </motion.div>
  );
}
