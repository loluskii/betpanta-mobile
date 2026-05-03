"use client";

import { MOCK_UPCOMING_EVENTS } from "@/constants/mockData";
import { OddsButton } from "@/components/betting/OddsButton";

export function SmartPicks() {
  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-2">Smart Picks</h3>
      <div className="px-3 space-y-2">
        {MOCK_UPCOMING_EVENTS.slice(0, 2).map((event) => {
          const market = event.markets[0];
          if (!market) return null;
          return (
            <div key={event.id} className="bg-card rounded-lg p-3 space-y-1">
              <p className="text-xs text-muted-foreground">{event.league.name}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {event.homeTeam.name} vs {event.awayTeam.name}
                  </p>
                  <p className="text-xs text-primary mt-0.5">
                    {event.homeTeam.name} to Win — Yes
                  </p>
                </div>
                <OddsButton event={event} market={market} selectionKey="home" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
