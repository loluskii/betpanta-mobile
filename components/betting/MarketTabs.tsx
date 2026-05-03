"use client";

import { cn } from "@/lib/utils";
import { HOME_MARKET_TABS } from "@/constants/markets";
import { useUIStore } from "@/store/uiStore";
import type { MarketType } from "@/types";

export function MarketTabs() {
  const { activeMarket, setActiveMarket } = useUIStore();

  return (
    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 py-2">
      {HOME_MARKET_TABS.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setActiveMarket(value as MarketType)}
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
  );
}
