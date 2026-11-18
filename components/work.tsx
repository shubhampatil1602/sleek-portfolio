"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { WorkData } from "@/constants/work";
import { SectionHeading } from "./section-heading";
import { TechStack } from "./tech-stack";

export function Work({ work }: { work: WorkData[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="my-10 border-y border-neutral-100 px-4 py-6 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark">
      <SectionHeading delay={0.4} className="mb-4">
        Work Experience
      </SectionHeading>

      <div ref={ref} className="relative py-6">
        {/* Timeline rail */}
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 left-[5px] top-8 w-px origin-top bg-neutral-200 dark:bg-neutral-800"
        />

        <ol className="flex flex-col gap-2">
          {work.map((item, idx) => (
            <WorkItem
              key={item.company + item.title}
              item={item}
              idx={idx}
              isInView={isInView}
              isOpen={openIdx === idx}
              isCurrent={item.duration.includes("Present")}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

function WorkItem({
  item: { company, title, duration, description, stack, logo },
  idx,
  isInView,
  isOpen,
  isCurrent,
  onToggle,
}: {
  item: WorkData;
  idx: number;
  isInView: boolean;
  isOpen: boolean;
  isCurrent: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: -10, filter: "blur(6px)" }
      }
      transition={{ duration: 0.3, delay: 0.15 * idx, ease: "easeInOut" }}
      className="relative pl-8"
    >
      {/* Timeline node */}
      <span
        aria-hidden
        className="absolute left-0 top-[18px] flex size-[11px] items-center justify-center"
      >
        {isCurrent && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
        )}
        <span
          className={cn(
            "relative size-[11px] rounded-full border-2 bg-white transition-colors duration-200 dark:bg-neutral-900",
            isCurrent
              ? "border-emerald-500"
              : isOpen
                ? "border-neutral-500 dark:border-neutral-400"
                : "border-neutral-300 dark:border-neutral-700",
          )}
        />
      </span>

      {/* Invisible accordion trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group -mx-2 flex w-[calc(100%+1rem)] items-start justify-between gap-4 rounded-md px-2 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-700"
      >
        <span className="block min-w-0">
          <span className="flex items-center gap-1.5 font-medium text-neutral-900 dark:text-neutral-100">
            {company}
            <IconChevronDown
              className={cn(
                "size-4 shrink-0 text-neutral-400 opacity-0 transition-[transform,opacity] duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100",
                isOpen && "rotate-180",
              )}
            />
          </span>
          <span className="flex flex-col gap-1 pt-1 sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm text-neutral-800 dark:text-neutral-200">
              {title}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {duration}
            </span>
          </span>
        </span>

        <Image
          src={logo}
          alt={company}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="/blur-placeholder.jpg"
          className="hidden max-h-[32px] w-fit max-w-[90px] shrink-0 object-contain md:block"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={
              reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
            }
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="max-w-[90%] pt-2">
              {description.map((d) => (
                <li className="mb-3 text-sm text-neutral-500" key={d}>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 pb-4 pt-2">
        {stack.map((s) => (
          <TechStack key={s} stack={s} />
        ))}
      </div>
    </motion.li>
  );
}
