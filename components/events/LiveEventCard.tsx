"use client";

import { Tv } from "lucide-react";
import { OddsButton } from "@/components/betting/OddsButton";
import type { LiveEvent } from "@/types";

interface LiveEventCardProps {
  event: LiveEvent;
}

function formatPeriod(minute: number, period: string): string {
  if (period === "HT") return `${minute}:32 HT`;
  if (period === "H2") return "H2";
  if (period === "90+") return `90:00+ H2`;
  return `${minute}'`;
}

export function LiveEventCard({ event }: LiveEventCardProps) {
  const market = event.markets.find((m) => m.type === "1x2") ?? event.markets[0];

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface/60">
        <span className="text-[9px] font-bold bg-live text-white px-1.5 py-0.5 rounded">HOT</span>
        <span className="text-[10px] text-muted-foreground truncate flex-1">{event.league.name}</span>
        <span className="text-[10px] text-muted-foreground shrink-0 ml-auto">
          {formatPeriod(event.minute ?? 0, event.period ?? "")}
        </span>
        <Tv size={10} className="text-muted-foreground shrink-0" />
      </div>

      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium truncate">{event.homeTeam.name}</span>
            <span className="text-sm font-bold w-4 text-center shrink-0">{event.score.home}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium truncate">{event.awayTeam.name}</span>
            <span className="text-sm font-bold w-4 text-center shrink-0">{event.score.away}</span>
          </div>
        </div>

        {market && (
          <div className="flex items-center gap-1 shrink-0">
            <OddsButton event={event} market={market} selectionKey="home" />
            {"draw" in market.odds && (
              <OddsButton event={event} market={market} selectionKey="draw" />
            )}
            <OddsButton event={event} market={market} selectionKey="away" />
          </div>
        )}
      </div>
    </div>
  );
}
