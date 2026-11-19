// Server-only: reads Strava secrets from env. Never import from a client component.

const TIME_ZONE = "Asia/Kolkata";
const REVALIDATE_SECONDS = 3600;
const DAY_MS = 86_400_000;

type StravaActivity = {
  id: number;
  athlete: { id: number };
  sport_type: string;
  start_date_local: string;
  distance: number;
  moving_time: number;
  private: boolean;
  visibility?: string;
};

export type StravaDay = {
  date: string; // YYYY-MM-DD in India
  distanceKm: number;
  active: boolean;
};

export type StravaSummary = {
  profileUrl: string;
  // Last 7 days, oldest first; the last entry is today.
  days: StravaDay[];
  week: {
    distanceKm: number;
    activities: number;
    movingTimeSeconds: number;
  };
  streakDays: number;
  // Today's activities of the most recent sport, summed (null on a rest day).
  today: { sportType: string; distanceKm: number } | null;
  latest: { id: number; sportType: string; daysAgo: number };
};

async function getAccessToken(): Promise<string | null> {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } =
    process.env;
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    return null;
  }

  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
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

function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(to) - Date.parse(from)) / DAY_MS);
}

export async function getStravaSummary(): Promise<StravaSummary | null> {
  try {
    const token = await getAccessToken();
    if (!token) return null;

    const res = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=30",
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return null;

    // Newest first. Never show private activities.
    const activities = ((await res.json()) as StravaActivity[]).filter(
      (a) => !a.private && a.visibility !== "only_me",
    );
    const latest = activities[0];
    if (!latest) return null;

    const now = Date.now();
    const todayDate = dateInIndia(new Date(now));
    const dates = Array.from({ length: 7 }, (_, i) =>
      dateInIndia(new Date(now - (6 - i) * DAY_MS)),
    );

    const days = dates.map((date) => {
      const onDay = activities.filter((a) => activityDate(a) === date);
      return {
        date,
        distanceKm: onDay.reduce((sum, a) => sum + a.distance, 0) / 1000,
        active: onDay.length > 0,
      };
    });

    const inWeek = activities.filter((a) => dates.includes(activityDate(a)));

    // Consecutive active days ending today (or yesterday, so a streak
    // isn't shown as broken before today's activity is done).
    const activeDates = new Set(activities.map(activityDate));
    let streakDays = 0;
    let cursor = activeDates.has(todayDate) ? now : now - DAY_MS;
    while (activeDates.has(dateInIndia(new Date(cursor)))) {
      streakDays++;
      cursor -= DAY_MS;
    }

    const todaySame = activities.filter(
      (a) =>
        activityDate(a) === todayDate && a.sport_type === latest.sport_type,
    );

    return {
      profileUrl: `https://www.strava.com/athletes/${latest.athlete.id}`,
      days,
      week: {
        distanceKm: inWeek.reduce((sum, a) => sum + a.distance, 0) / 1000,
        activities: inWeek.length,
        movingTimeSeconds: inWeek.reduce((sum, a) => sum + a.moving_time, 0),
      },
      streakDays,
      today:
        todaySame.length > 0
          ? {
              sportType: latest.sport_type,
              distanceKm:
                todaySame.reduce((sum, a) => sum + a.distance, 0) / 1000,
            }
          : null,
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
