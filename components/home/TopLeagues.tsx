"use client";

import Link from "next/link";
import { TOP_LEAGUES } from "@/constants/sports";

export function TopLeagues() {
  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-2">Top Leagues</h3>
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-3 pb-2">
        {TOP_LEAGUES.map((league) => (
          <Link
            key={league.id}
            href={`/sports/football?league=${league.id}`}
            className="shrink-0 flex flex-col items-center gap-1 bg-card rounded-lg p-3 min-w-[80px]"
          >
            <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-lg">
              ⚽
            </div>
            <span className="text-[10px] text-center font-medium leading-tight">{league.name}</span>
            <span className="text-[10px] text-muted-foreground">{league.country}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
