"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { UpcomingEventCard } from "@/components/events/UpcomingEventCard";
import { SECTION_SPORT_TABS } from "@/constants/sports";
import { MOCK_UPCOMING_EVENTS } from "@/constants/mockData";

const MARKET_TABS = [
  { label: "1X2", value: "1x2" },
  { label: "Total Goals", value: "total" },
  { label: "Over/Under", value: "ou" },
  { label: "Double Chance", value: "dc" },
];

export function UpcomingMatches() {
  const [activeSport, setActiveSport] = useState("Football");
  const [activeMarket, setActiveMarket] = useState("1x2");

  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-1">Upcoming Matches</h3>

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 pt-1">
        {SECTION_SPORT_TABS.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActiveSport(label)}
            className={cn(
              "flex items-center gap-1 whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0",
              activeSport === label
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="text-[10px]">{icon}</span>
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 py-1.5">
        {MARKET_TABS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveMarket(value)}
            className={cn(
              "whitespace-nowrap px-3 py-1 rounded text-xs font-medium transition-colors shrink-0",
              activeMarket === value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="px-3 space-y-1.5">
        {MOCK_UPCOMING_EVENTS.map((event) => (
          <UpcomingEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
