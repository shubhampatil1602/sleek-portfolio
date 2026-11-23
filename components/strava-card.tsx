import { StravaCardView } from "@/components/strava-card-view";
import { getStravaSummary } from "@/lib/strava";

// About page: a year of runs and walks as a GitHub-style heatmap.
export async function StravaCard() {
  const summary = await getStravaSummary();
  // Hide the block entirely if Strava is down or not configured.
  if (!summary) return null;

  return <StravaCardView summary={summary} />;
}
