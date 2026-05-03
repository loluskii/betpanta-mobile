import { NextResponse } from "next/server";
import type { PlaceBetPayload } from "@/types";

export async function POST(req: Request) {
  const body: PlaceBetPayload = await req.json();

  // TODO: replace with real bet placement logic
  const mockResponse = {
    id: `bet-${Date.now()}`,
    reference: `BP${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    ...body,
    totalOdds: body.selections.reduce((acc, s) => acc * s.odds, 1),
    potentialWin: body.stake * body.selections.reduce((acc, s) => acc * s.odds, 1),
    status: "pending",
    placedAt: new Date().toISOString(),
  };

  return NextResponse.json(mockResponse, { status: 201 });
}
