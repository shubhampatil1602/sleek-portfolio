import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { STRAVA_TAG } from "@/lib/strava";

// SnackDesk calls this when Strava tells it about a new, changed or deleted
// activity of the owner, so the Strava blocks update right away instead of
// within the hour. Same secret as SnackDesk's share-token route.

function sameSecret(given: string, expected: string) {
  const hash = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(hash(given), hash(expected));
}

export async function POST(request: Request) {
  const secret = process.env.STRAVA_SHARE_SECRET;
  if (!secret) return new NextResponse("Not found", { status: 404 });

  const given = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  if (!sameSecret(given, secret)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  revalidateTag(STRAVA_TAG);
  return NextResponse.json({ ok: true });
}
