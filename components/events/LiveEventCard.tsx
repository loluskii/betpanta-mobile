"use client";

import { OddsButton } from "@/components/betting/OddsButton";
import type { LiveEvent } from "@/types";

interface LiveEventCardProps {
  event: LiveEvent;
}

export function LiveEventCard({ event }: LiveEventCardProps) {
  const market = event.markets.find((m) => m.type === "1x2") ?? event.markets[0];

  return (
    <div className="bg-card rounded-lg p-3 space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold bg-live text-white px-1.5 py-0.5 rounded">LIVE</span>
        <span className="text-[10px] text-muted-foreground truncate">{event.league.name}</span>
        <span className="ml-auto text-[10px] text-muted-foreground">{event.minute ?? 0}'</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium truncate">{event.homeTeam.name}</span>
            <span className="text-sm font-bold w-5 text-center">{event.score.home}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium truncate">{event.awayTeam.name}</span>
            <span className="text-sm font-bold w-5 text-center">{event.score.away}</span>
          </div>
        </div>

        {market && (
          <div className="flex items-center gap-1 shrink-0">
            <OddsButton event={event} market={market} selectionKey="home" label="1" />
            {"draw" in market.odds && (
              <OddsButton event={event} market={market} selectionKey="draw" label="X" />
            )}
            <OddsButton event={event} market={market} selectionKey="away" label="2" />
          </div>
        )}
      </div>
    </div>
  );
}
