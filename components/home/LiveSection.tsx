"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiveEventCard } from "@/components/events/LiveEventCard";
import { SECTION_SPORT_TABS } from "@/constants/sports";
import { MOCK_LIVE_EVENTS } from "@/constants/mockData";

const MARKET_TABS = [
  { label: "1X2", value: "1x2" },
  { label: "Q/U", value: "ou" },
  { label: "DC", value: "dc" },
  { label: "1st Half O/U", value: "1h_ou" },
  { label: "Handicap", value: "hcp" },
];

const TOTAL_LIVE = 12;

export function LiveSection() {
  const [activeSport, setActiveSport] = useState("Football");
  const [activeMarket, setActiveMarket] = useState("1x2");

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between px-3 mb-1">
        <h3 className="font-bold text-sm">Live</h3>
      </div>

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
        {MOCK_LIVE_EVENTS.map((event) => (
          <LiveEventCard key={event.id} event={event} />
        ))}
      </div>

      <Link
        href="/live"
        className="flex items-center justify-center gap-1 mt-3 py-2 text-xs text-primary font-medium"
      >
        All Live Events ({TOTAL_LIVE}) <ChevronRight size={12} />
      </Link>
    </section>
  );
}
