"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MAIN_NAV_TABS } from "@/constants/sports";

export function SportsTabs() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 py-2 border-b border-border bg-card">
      {MAIN_NAV_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={cn(
            "flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0",
            active === tab.id
              ? "bg-primary text-primary-foreground"
              : "bg-surface text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="text-sm leading-none">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
