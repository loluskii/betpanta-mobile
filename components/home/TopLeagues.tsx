"use client";

import Link from "next/link";
import { TOP_LEAGUES } from "@/constants/sports";

export function TopLeagues() {
  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-2">Top Leagues</h3>
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-3 pb-2">
        {TOP_LEAGUES.map((league) => (
          <Link
            key={league.id}
            href={`/sports/football?league=${league.id}`}
            className="shrink-0 flex flex-col items-center gap-1.5 bg-card rounded-xl p-3 min-w-22.5"
          >
            <div className="relative w-12 h-12 rounded-full bg-surface flex items-center justify-center text-xl">
              {league.emoji}
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] font-bold px-1 py-0.5 rounded-full leading-none">
                {league.matchCount}
              </span>
            </div>
            <span className="text-[10px] text-center font-semibold leading-tight">{league.name}</span>
            <span className="text-[9px] text-muted-foreground">{league.country}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
