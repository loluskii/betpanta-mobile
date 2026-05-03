import { NextResponse } from "next/server";
import { MOCK_UPCOMING_EVENTS } from "@/constants/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sport = searchParams.get("sport");
  const leagueId = searchParams.get("leagueId");

  let data = MOCK_UPCOMING_EVENTS;
  if (sport) data = data.filter((e) => e.sport.slug === sport);
  if (leagueId) data = data.filter((e) => e.league.id === leagueId);

  return NextResponse.json(data);
}
