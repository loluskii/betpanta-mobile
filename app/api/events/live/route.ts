import { NextResponse } from "next/server";
import { MOCK_LIVE_EVENTS } from "@/constants/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sport = searchParams.get("sport");

  const data = sport
    ? MOCK_LIVE_EVENTS.filter((e) => e.sport.slug === sport)
    : MOCK_LIVE_EVENTS;

  return NextResponse.json(data);
}
