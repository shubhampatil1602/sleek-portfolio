import { StravaRing } from "@/components/strava-ring";
import { cn } from "@/lib/utils";
import { getStravaSummary } from "@/lib/strava";

const PAST_TENSE: Record<string, string> = {
  Run: "Ran",
  TrailRun: "Ran",
  VirtualRun: "Ran",
  Walk: "Walked",
  Hike: "Hiked",
  Ride: "Rode",
  VirtualRide: "Rode",
  MountainBikeRide: "Rode",
  GravelRide: "Rode",
  EBikeRide: "Rode",
  Swim: "Swam",
};

const NOUN: Record<string, string> = {
  Run: "run",
  TrailRun: "run",
  VirtualRun: "run",
  Walk: "walk",
  Hike: "hike",
  Ride: "ride",
  VirtualRide: "ride",
  MountainBikeRide: "ride",
  GravelRide: "ride",
  EBikeRide: "ride",
  Swim: "swim",
};

// Small circular badge for the home hero: what I did on Strava today.
export async function StravaStatus({ className }: { className?: string }) {
  const summary = await getStravaSummary();
  if (!summary) return null;

  const { today, latest, days, streakDays } = summary;

  let ring: { value: string; unit: string };
  let caption: string;
  if (today && today.distanceKm > 0) {
    ring = { value: today.distanceKm.toFixed(1), unit: "km today" };
    caption = `${PAST_TENSE[today.sportType] ?? "Active"} today`;
  } else if (today) {
    ring = { value: "Done", unit: "today" };
    caption = "Active today";
  } else {
    const noun = NOUN[latest.sportType] ?? "activity";
    ring = { value: "Rest", unit: "day" };
    caption =
      latest.daysAgo === 1
        ? `Last ${noun} yesterday`
        : `Last ${noun} ${latest.daysAgo}d ago`;
  }
  if (streakDays > 1) caption += ` · ${streakDays}-day streak`;

  return (
    <a
      href={`https://www.strava.com/activities/${latest.id}`}
      target="_blank"
      rel="noopener noreferrer"
      title="View on Strava"
      className={cn(
        "group flex w-fit items-center gap-4 md:flex-col md:gap-3",
        className,
      )}
    >
      <StravaRing
        activeDays={days.map((d) => d.active)}
        active={today !== null}
        {...ring}
      />
      <span className="text-xs text-secondary transition-colors group-hover:text-primary">
        {caption}
      </span>
    </a>
  );
}
