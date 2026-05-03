"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SECTION_SPORT_TABS } from "@/constants/sports";
import { MOCK_SMART_PICKS } from "@/constants/mockData";

const SUB_TABS = ["Combination Bets", "Enhanced Odds", "Bet Builder"];

export function SmartPicks() {
  const [activeSport, setActiveSport] = useState("Football");
  const [activeSubTab, setActiveSubTab] = useState("Combination Bets");

  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-1">Smart Picks</h3>

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
        {SUB_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={cn(
              "whitespace-nowrap px-3 py-1 rounded text-xs font-medium transition-colors shrink-0",
              activeSubTab === tab
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar px-3 pb-1">
        {MOCK_SMART_PICKS.map((pick) => (
          <div key={pick.id} className="shrink-0 w-44 bg-card rounded-xl p-3 space-y-2">
            <p className="text-[10px] text-muted-foreground truncate">{pick.league}</p>
            <p className="text-xs font-semibold leading-tight truncate">
              {pick.homeTeam} v {pick.awayTeam}
            </p>
            <p className="text-[10px] text-primary leading-tight">{pick.pick}</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">{pick.selection}</span>
              <span className="text-xs font-bold text-primary">
                {pick.oddsMin.toFixed(2)}-{pick.oddsMax.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
