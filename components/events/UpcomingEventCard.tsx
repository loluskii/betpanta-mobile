"use client";

import { Tv } from "lucide-react";
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
    hour12: false,
  }).replace(",", "");
}

export function UpcomingEventCard({ event }: UpcomingEventCardProps) {
  const market = event.markets.find((m) => m.type === "1x2") ?? event.markets[0];

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface/60">
        <span className="text-[10px] text-muted-foreground truncate flex-1">{event.league.name}</span>
        <Tv size={10} className="text-muted-foreground shrink-0" />
      </div>

      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex-1 min-w-0 space-y-0.5">
          <p className="text-[10px] text-muted-foreground">{formatEventTime(event.startTime)}</p>
          <p className="text-xs font-medium truncate">{event.homeTeam.name}</p>
          <p className="text-xs font-medium truncate">{event.awayTeam.name}</p>
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
