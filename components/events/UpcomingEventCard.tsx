"use client";

import { OddsButton } from "@/components/betting/OddsButton";
import type { UpcomingEvent } from "@/types";

interface UpcomingEventCardProps {
  event: UpcomingEvent;
}

function formatEventTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function UpcomingEventCard({ event }: UpcomingEventCardProps) {
  const market = event.markets.find((m) => m.type === "1x2") ?? event.markets[0];

  return (
    <div className="bg-card rounded-lg p-3 space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-muted-foreground truncate">{event.league.name}</span>
        <span className="ml-auto text-[10px] text-muted-foreground whitespace-nowrap">
          {formatEventTime(event.startTime)}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0 space-y-1">
          <p className="text-sm font-medium truncate">{event.homeTeam.name}</p>
          <p className="text-sm font-medium truncate">{event.awayTeam.name}</p>
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
