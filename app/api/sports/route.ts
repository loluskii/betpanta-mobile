import { NextResponse } from "next/server";
import { SPORTS } from "@/constants/sports";

export async function GET() {
  return NextResponse.json(SPORTS);
}
