import { StravaRing } from "@/components/strava-ring";
import { cn } from "@/lib/utils";
import { getStravaSummary } from "@/lib/strava";

const NOUN: Record<string, string> = {
  Run: "run",
  TrailRun: "run",
  VirtualRun: "run",
  Walk: "walk",
  Hike: "hike",
};

// Small circular badge for the home hero: runs and walks today, with the
// ring showing which of the last 7 days had either.
export async function StravaStatus({ className }: { className?: string }) {
  const summary = await getStravaSummary();
  if (!summary) return null;

  const { days, latest, streakDays } = summary;
  const today = days[days.length - 1];
  const todayKm = today.runKm + today.walkKm;

  let ring: { value: string; unit: string };
  let caption: string;
  if (todayKm > 0) {
    ring = { value: todayKm.toFixed(1), unit: "km today" };
    const parts: string[] = [];
    if (today.runKm > 0) parts.push(`Ran ${today.runKm.toFixed(1)} km`);
    if (today.walkKm > 0)
      parts.push(`${parts.length ? "walked" : "Walked"} ${today.walkKm.toFixed(1)} km`);
    caption = parts.join(", ");
  } else {
    const noun = NOUN[latest.sportType] ?? "activity";
    ring = { value: "Rest", unit: "day" };
    caption =
      latest.daysAgo === 1
        ? `Last ${noun} yesterday`
        : `Last ${noun} ${latest.daysAgo}d ago`;
  }

  return (
    <a
      href={`https://www.strava.com/activities/${latest.id}`}
      target="_blank"
      rel="noopener noreferrer"
      title="View on Strava"
      className={cn(
        "group flex w-fit items-center gap-3 md:flex-col md:gap-2.5",
        className,
      )}
    >
      <StravaRing
        activeDays={days.slice(-7).map((d) => d.runKm + d.walkKm > 0)}
        active={todayKm > 0}
        {...ring}
      />
      <span className="flex flex-col text-xs leading-snug text-secondary transition-colors group-hover:text-primary md:items-center md:text-center">
        <span>{caption}</span>
        {streakDays > 1 && (
          <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
            {streakDays}-day streak
          </span>
        )}
      </span>
    </a>
  );
}
