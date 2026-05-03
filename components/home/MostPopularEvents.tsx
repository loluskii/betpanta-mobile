"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { UpcomingEventCard } from "@/components/events/UpcomingEventCard";
import { MOCK_POPULAR_EVENTS } from "@/constants/mockData";

const SPORT_TABS = [
  { label: "Football", icon: "⚽" },
  { label: "Basketball", icon: "🏀" },
];

const MARKET_TABS = [
  { label: "1X2", value: "1x2" },
  { label: "Total Goals", value: "total" },
  { label: "Over/Under", value: "ou" },
  { label: "1st Half O/U", value: "1h_ou" },
  { label: "Handicap", value: "hcp" },
];

export function MostPopularEvents() {
  const [betMode, setBetMode] = useState<"swipe" | "quick">("swipe");
  const [activeSport, setActiveSport] = useState("Football");
  const [activeMarket, setActiveMarket] = useState("1x2");

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="font-bold text-sm">Most Popular Events</h3>
      </div>

      <div className="flex items-center gap-2 px-3 mb-2">
        <button
          onClick={() => setBetMode("swipe")}
          className={cn(
            "px-4 py-1.5 rounded text-xs font-bold transition-colors",
            betMode === "swipe"
              ? "bg-primary text-primary-foreground"
              : "bg-surface text-muted-foreground"
          )}
        >
          BET SWIPE
        </button>
        <button
          onClick={() => setBetMode("quick")}
          className={cn(
            "px-4 py-1.5 rounded text-xs font-bold transition-colors",
            betMode === "quick"
              ? "bg-primary text-primary-foreground"
              : "bg-surface text-muted-foreground"
          )}
        >
          QUICK BET
        </button>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3">
        {SPORT_TABS.map(({ label, icon }) => (
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

      <div className="px-3 mt-1">
        <div className="flex items-center gap-1.5 py-1.5 border-b border-border mb-1">
          <span className="text-[10px] text-[#38bdf8] font-bold">⚽</span>
          <span className="text-[10px] font-semibold text-muted-foreground">Champions League</span>
        </div>
        <div className="space-y-1.5">
          {MOCK_POPULAR_EVENTS.map((event) => (
            <UpcomingEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
