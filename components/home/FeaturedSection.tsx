"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tv } from "lucide-react";
import { OddsButton } from "@/components/betting/OddsButton";
import { MOCK_FEATURED_EVENT } from "@/constants/mockData";

const TABS = ["Matches", "Bet builder", "Games", "Combo"];

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState("Matches");
  const event = MOCK_FEATURED_EVENT;

  return (
    <section className="mt-3">
      <div className="flex items-center justify-between px-3 mb-1">
        <h3 className="font-bold text-sm">Featured</h3>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "whitespace-nowrap px-3 py-2 text-xs font-medium transition-colors shrink-0 border-b-2 -mb-px",
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-3 mt-2">
        <div className="bg-card rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-surface">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px]">
              🏆
            </div>
            <span className="text-xs font-semibold text-foreground flex-1 truncate">
              {event.league.name}
            </span>
            <Tv size={12} className="text-muted-foreground shrink-0" />
          </div>

          <div className="px-3 py-3">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-[9px] font-bold bg-live text-white px-1.5 py-0.5 rounded">
                LIVE
              </span>
              <span className="text-[10px] text-muted-foreground">
                {event.minute}:{String(0).padStart(2, "0")} {event.period}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">{event.homeTeam.name}</span>
                  <span className="text-base font-bold ml-2 w-5 text-center">{event.score.home}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">{event.awayTeam.name}</span>
                  <span className="text-base font-bold ml-2 w-5 text-center">{event.score.away}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {event.markets[0] && (
                  <>
                    <OddsButton event={event} market={event.markets[0]} selectionKey="home" label="1" />
                    {"draw" in event.markets[0].odds && (
                      <OddsButton event={event} market={event.markets[0]} selectionKey="draw" label="X" />
                    )}
                    <OddsButton event={event} market={event.markets[0]} selectionKey="away" label="2" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
