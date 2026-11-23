"use client";

import "react-activity-calendar/tooltips.css";

import { IconArrowUpRight, IconBrandStrava } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { cloneElement, useEffect, useRef } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

import type { StravaDay, StravaSummary } from "@/lib/strava";

// Upper bounds (km, exclusive) of levels 1-3; level 4 is anything above.
const LEVEL_KM = [3, 6, 10];
const LEGEND = ["No activity", "Under 3 km", "3–6 km", "6–10 km", "10 km or more"];

const BLOCK = 11;
const RADIUS = 2;

// Neutral to Strava orange in five steps, per color scheme.
const COLORS = {
  light: ["#e5e5e5", "#ebc0ac", "#f19c73", "#f67739", "#FC5200"],
  dark: ["#262626", "#5c311d", "#913c13", "#c74709", "#FC5200"],
};
// Outline for days before my first tracked activity.
const UNTRACKED = { light: "#e5e5e5", dark: "#333333" };

function levelFor(km: number) {
  if (km <= 0) return 0;
  const i = LEVEL_KM.findIndex((max) => km < max);
  return i === -1 ? 4 : i + 1;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function tooltip(day: StravaDay | undefined, date: string) {
  const parts: string[] = [];
  if (day && day.runKm > 0) parts.push(`Ran ${day.runKm.toFixed(1)} km`);
  if (day && day.walkKm > 0) parts.push(`Walked ${day.walkKm.toFixed(1)} km`);
  return `${formatDate(date)} · ${parts.length ? parts.join(" · ") : "No activity"}`;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

export function StravaCardView({ summary }: { summary: StravaSummary }) {
  const { days, totals, streakDays, profileUrl } = summary;
  const { resolvedTheme } = useTheme();
  const scheme = resolvedTheme === "dark" ? "dark" : "light";
  const scrollRef = useRef<HTMLDivElement>(null);

  // On narrow screens the calendar scrolls; start at the most recent weeks.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  const byDate = new Map(days.map((d) => [d.date, d]));

  // Days before my first activity weren't tracked, as opposed to inactive.
  // Once my history covers the whole calendar there are none.
  const firstTracked = days.find((d) => d.runKm + d.walkKm > 0)?.date ?? "";
  const hasUntracked = firstTracked > days[0].date;
  const trackingSince = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${firstTracked}T00:00:00Z`));

  const data: Activity[] = days.map((d) => {
    const km = d.runKm + d.walkKm;
    return { date: d.date, count: Math.round(km * 10) / 10, level: levelFor(km) };
  });

  return (
    <div className="mb-10 mt-6 flex flex-col items-center px-4">
      <div ref={scrollRef} className="w-full overflow-x-auto pb-2">
        <div className="mx-auto w-fit text-secondary">
          <ActivityCalendar
            data={data}
            blockSize={BLOCK}
            blockMargin={3}
            blockRadius={RADIUS}
            fontSize={11}
            weekStart={0}
            showTotalCount={false}
            showWeekdayLabels={["mon", "wed", "fri"]}
            colorScheme={scheme}
            theme={{
              light: COLORS.light,
              dark: COLORS.dark,
            }}
            showColorLegend={false}
            renderBlock={(block, activity) =>
              activity.date < firstTracked
                ? cloneElement(block, {
                    // Inset by half the stroke so the outline stays crisp.
                    x: 0.5,
                    y: Number(block.props.y) + 0.5,
                    width: BLOCK - 1,
                    height: BLOCK - 1,
                    // "transparent", not "none": SVG only hit-tests painted
                    // fill, so "none" would make the tooltip hover the 1px stroke.
                    fill: "transparent",
                    stroke: UNTRACKED[scheme],
                    strokeWidth: 1,
                  })
                : block
            }
            tooltips={{
              activity: {
                text: (a) =>
                  a.date < firstTracked
                    ? `${formatDate(a.date)} · Not tracked yet`
                    : tooltip(byDate.get(a.date), a.date),
                hoverRestMs: 50,
              },
            }}
          />

          <div className="mt-2 flex items-center justify-between gap-4 text-[11px]">
            {hasUntracked ? (
              <span className="flex items-center gap-1.5">
                <svg width={BLOCK} height={BLOCK} aria-hidden>
                  <rect
                    x={0.5}
                    y={0.5}
                    width={BLOCK - 1}
                    height={BLOCK - 1}
                    rx={RADIUS}
                    fill="none"
                    stroke={UNTRACKED[scheme]}
                  />
                </svg>
                Tracking since {trackingSince}
              </span>
            ) : (
              <span />
            )}
            <span className="flex items-center gap-[3px]">
              <span className="mr-1">Less</span>
              {COLORS[scheme].map((color, level) => (
                <svg key={level} width={BLOCK} height={BLOCK}>
                  <title>{LEGEND[level]}</title>
                  <rect
                    width={BLOCK}
                    height={BLOCK}
                    rx={RADIUS}
                    fill={color}
                  />
                </svg>
              ))}
              <span className="ml-1">More</span>
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-md text-center text-sm text-secondary">
        {hasUntracked ? `Since ${trackingSince},` : "Over the last year"} I ran <Strong>{totals.runKm.toFixed(1)} km</Strong>{" "}
        across <Strong>{totals.runs}</Strong> {totals.runs === 1 ? "run" : "runs"}{" "}
        and walked <Strong>{totals.walkKm.toFixed(1)} km</Strong> across{" "}
        <Strong>{totals.walks}</Strong> {totals.walks === 1 ? "walk" : "walks"}.
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
