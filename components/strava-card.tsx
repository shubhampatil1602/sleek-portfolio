import { IconArrowUpRight, IconBrandStrava } from "@tabler/icons-react";

import { MotionDiv } from "@/components/motion-div";
import { cn } from "@/lib/utils";
import { getStravaSummary } from "@/lib/strava";

const MAX_BAR_PX = 150;
const MIN_BAR_PX = 3;

function weekdayInitial(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "narrow",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function hoursMinutes(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

export async function StravaCard() {
  const summary = await getStravaSummary();
  // Hide the block entirely if Strava is down or not configured.
  if (!summary) return null;

  const { days, week, streakDays, profileUrl } = summary;
  const maxKm = Math.max(...days.map((d) => d.distanceKm), 1);
  const lastIndex = days.length - 1;

  return (
    <div className="mb-10 mt-6 flex flex-col items-center px-4">
      <div className="flex w-full max-w-lg items-end gap-2 sm:gap-3">
        {days.map((day, i) => {
          const isToday = i === lastIndex;
          const height = day.active
            ? Math.max(MIN_BAR_PX, (day.distanceKm / maxKm) * MAX_BAR_PX)
            : MIN_BAR_PX;

          return (
            <div
              key={day.date}
              className="flex flex-1 flex-col items-center gap-1.5"
              title={
                day.active ? `${day.distanceKm.toFixed(1)} km` : "Rest day"
              }
            >
              <MotionDiv
                className={cn(
                  "w-full origin-bottom rounded-[3px]",
                  !day.active && "bg-neutral-200 dark:bg-neutral-800",
                  day.active &&
                    !isToday &&
                    "bg-neutral-300 dark:bg-neutral-600",
                  isToday && day.active && "bg-[#FC5200]",
                )}
                style={{ height }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              />
              <span
                className={cn(
                  "text-[10px] text-secondary",
                  isToday && "text-[#FC5200]",
                )}
              >
                {weekdayInitial(day.date)}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 max-w-md text-center text-sm text-secondary">
        <Strong>{week.distanceKm.toFixed(1)} km</Strong> over the last 7 days,
        across <Strong>{week.activities}</Strong>{" "}
        {week.activities === 1 ? "activity" : "activities"} and{" "}
        <Strong>{hoursMinutes(week.movingTimeSeconds)}</Strong> of moving time.
        {streakDays > 1 && (
          <>
            {" "}
            Currently on a <Strong>{streakDays}-day</Strong> streak.
          </>
        )}
      </p>

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-3 inline-flex items-center gap-1 text-xs text-secondary transition-colors hover:text-[#FC5200]"
      >
        <IconBrandStrava className="size-3.5 text-[#FC5200]" aria-hidden />
        Powered by Strava
        <IconArrowUpRight
          className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
          aria-hidden
        />
      </a>
    </div>
  );
}
