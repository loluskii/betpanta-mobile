"use client";

import { cn } from "@/lib/utils";
import { SPORTS } from "@/constants/sports";
import { useUIStore } from "@/store/uiStore";
import type { SportSlug } from "@/types";

export function SportsTabs() {
  const { activeSport, setActiveSport } = useUIStore();

  return (
    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-3 py-2 border-b border-border bg-card">
      {SPORTS.map((sport) => (
        <button
          key={sport.id}
          onClick={() => setActiveSport(sport.slug as SportSlug)}
          className={cn(
            "flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0",
            activeSport === sport.slug
              ? "bg-primary text-primary-foreground"
              : "bg-surface text-muted-foreground hover:text-foreground"
          )}
        >
          <span>{sport.icon}</span>
          {sport.name}
        </button>
      ))}
    </div>
  );
}
