"use client";

import { IconBrandStrava } from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const SIZE = 104;
const STROKE = 5;
// Ring sits a little inside the badge's shadow edge.
const RADIUS = SIZE / 2 - STROKE / 2 - 5;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// Round caps add STROKE/2 at each end, so the visible gap is GAP - STROKE.
const GAP = 11;

// Circular badge: the ring is the last 7 days (one segment per day,
// orange when active, starting at the top and running clockwise to today),
// the centre is today's number.
export function StravaRing({
  activeDays,
  value,
  unit,
  active,
}: {
  activeDays: boolean[];
  value: string;
  unit: string;
  active: boolean;
}) {
  const slot = CIRCUMFERENCE / activeDays.length;
  const segment = slot - GAP;

  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-full shadow-custom"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        className="absolute inset-0 -rotate-90"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden
      >
        {activeDays.map((isActive, i) => (
          <motion.circle
            key={i}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${segment} ${CIRCUMFERENCE}`}
            strokeDashoffset={-(i * slot + GAP / 2)}
            className={cn(
              isActive
                ? "stroke-[#FC5200]"
                : "stroke-neutral-200 dark:stroke-neutral-700",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
          />
        ))}
      </svg>

      <div className="flex flex-col items-center leading-none">
        <IconBrandStrava
          className={cn(
            "mb-1 size-3.5",
            active ? "text-[#FC5200]" : "text-neutral-400",
          )}
          aria-hidden
        />
        <span
          className={cn(
            "text-xl font-bold tabular-nums tracking-tight",
            active ? "text-primary" : "text-secondary",
          )}
        >
          {value}
        </span>
        <span className="mt-0.5 text-[10px] text-secondary">{unit}</span>
      </div>
    </div>
  );
}
