// Server-only: reads Strava secrets from env. Never import from a client component.

const TIME_ZONE = "Asia/Kolkata";
const REVALIDATE_SECONDS = 3600;
// Pages using the summary re-render at least this often (see getAccessToken)
const TOKEN_REVALIDATE_SECONDS = 1800;
const DAY_MS = 86_400_000;
const WEEKS = 53;
const PAGE_SIZE = 200;
const MAX_PAGES = 5;

type StravaActivity = {
  id: number;
  athlete: { id: number };
  sport_type: string;
  start_date: string;
  start_date_local: string;
  distance: number;
  moving_time: number;
  private: boolean;
  visibility?: string;
};

type Sport = "run" | "walk";

const SPORT_TYPES: Record<Sport, string[]> = {
  run: ["Run", "TrailRun", "VirtualRun"],
  walk: ["Walk", "Hike"],
};

function sportOf(sportType: string): Sport | null {
  if (SPORT_TYPES.run.includes(sportType)) return "run";
  if (SPORT_TYPES.walk.includes(sportType)) return "walk";
  return null;
}

export type StravaDay = {
  date: string; // YYYY-MM-DD in India
  runKm: number;
  walkKm: number;
};

export type StravaSummary = {
  profileUrl: string;
  // Every day from a Sunday ~a year ago to today, oldest first.
  days: StravaDay[];
  totals: { runKm: number; walkKm: number; runs: number; walks: number };
  // Consecutive days with a run or a walk, ending today or yesterday.
  streakDays: number;
  latest: { id: number; sportType: string; daysAgo: number };
};

// The token comes from SnackDesk, which shares this Strava app and keeps the
// connection refreshed. Strava keeps one live token per athlete per app, so a
// copy kept here would die whenever SnackDesk reconnects. No token (not
// connected in SnackDesk, or SnackDesk is down) hides the Strava blocks.
async function getAccessToken(): Promise<string | null> {
  const { SNACKDESK_STRAVA_TOKEN_URL, STRAVA_SHARE_SECRET } = process.env;
  if (!SNACKDESK_STRAVA_TOKEN_URL || !STRAVA_SHARE_SECRET) return null;

  const res = await fetch(SNACKDESK_STRAVA_TOKEN_URL, {
    headers: { Authorization: `Bearer ${STRAVA_SHARE_SECRET}` },
    // SnackDesk hands out tokens with at least an hour left
    next: { revalidate: TOKEN_REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

// "YYYY-MM-DD" for a date as seen in India, regardless of the server's timezone.
function dateInIndia(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(date);
}

// start_date_local is the athlete's wall-clock time (its "Z" suffix is misleading),
// so its date part is already the local date of the activity.
function activityDate(activity: StravaActivity): string {
  return activity.start_date_local.slice(0, 10);
}

function addDays(date: string, days: number): string {
  return new Date(Date.parse(`${date}T00:00:00Z`) + days * DAY_MS)
    .toISOString()
    .slice(0, 10);
}

function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(to) - Date.parse(from)) / DAY_MS);
}

const round2 = (n: number) => Math.round(n * 100) / 100;

// All activities since `after` (epoch seconds), following Strava's pagination.
// `after` only changes once a week, so the cached URLs stay stable.
async function fetchActivities(
  token: string,
  after: number,
): Promise<StravaActivity[] | null> {
  const all: StravaActivity[] = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=${PAGE_SIZE}&page=${page}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return page === 1 ? null : all;
    const batch = (await res.json()) as StravaActivity[];
    all.push(...batch);
    if (batch.length < PAGE_SIZE) break;
  }
  return all;
}

export async function getStravaSummary(): Promise<StravaSummary | null> {
  try {
    const token = await getAccessToken();
    if (!token) return null;

    const todayDate = dateInIndia(new Date());
    // Start on a Sunday so the heatmap has WEEKS full columns ending this week.
    const weekday = new Date(`${todayDate}T00:00:00Z`).getUTCDay();
    const startDate = addDays(todayDate, -(WEEKS - 1) * 7 - weekday);
    // A day of slack for timezones; activities before startDate are dropped below.
    const after = Date.parse(`${startDate}T00:00:00Z`) / 1000 - 86_400;

    const fetched = await fetchActivities(token, after);
    if (!fetched) return null;

    // Newest first. Never show private activities, and only runs and walks.
    const activities = fetched
      .filter(
        (a) =>
          !a.private &&
          a.visibility !== "only_me" &&
          sportOf(a.sport_type) &&
          activityDate(a) >= startDate,
      )
      .sort((a, b) => b.start_date.localeCompare(a.start_date));
    const latest = activities[0];
    if (!latest) return null;

    const byDate = new Map<string, StravaDay>();
    const totals = { runKm: 0, walkKm: 0, runs: 0, walks: 0 };
    for (const a of activities) {
      const date = activityDate(a);
      const day = byDate.get(date) ?? { date, runKm: 0, walkKm: 0 };
      const km = a.distance / 1000;
      if (sportOf(a.sport_type) === "run") {
        day.runKm += km;
        totals.runKm += km;
        totals.runs++;
      } else {
        day.walkKm += km;
        totals.walkKm += km;
        totals.walks++;
      }
      byDate.set(date, day);
    }

    const days: StravaDay[] = [];
    for (let date = startDate; date <= todayDate; date = addDays(date, 1)) {
      const day = byDate.get(date);
      days.push({
        date,
        runKm: round2(day?.runKm ?? 0),
        walkKm: round2(day?.walkKm ?? 0),
      });
    }

    // Consecutive active days ending today (or yesterday, so a streak
    // isn't shown as broken before today's activity is done).
    let streakDays = 0;
    let cursor = byDate.has(todayDate) ? todayDate : addDays(todayDate, -1);
    while (byDate.has(cursor)) {
      streakDays++;
      cursor = addDays(cursor, -1);
    }

    return {
      profileUrl: `https://www.strava.com/athletes/${latest.athlete.id}`,
      days,
      totals: {
        ...totals,
        runKm: round2(totals.runKm),
        walkKm: round2(totals.walkKm),
      },
      streakDays,
      latest: {
        id: latest.id,
        sportType: latest.sport_type,
        daysAgo: daysBetween(activityDate(latest), todayDate),
      },
    };
  } catch {
    return null;
  }
}
