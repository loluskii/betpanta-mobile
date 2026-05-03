"use client";

import { MOCK_LIVE_EVENTS } from "@/constants/mockData";
import { LiveEventCard } from "@/components/events/LiveEventCard";

export function FeaturedSection() {
  const featured = MOCK_LIVE_EVENTS[0];
  if (!featured) return null;

  return (
    <section className="mt-4">
      <h3 className="px-3 font-bold text-sm mb-2">Featured</h3>
      <div className="px-3">
        <div className="bg-card rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-secondary to-card px-3 py-1.5 flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              {featured.league.name}
            </span>
          </div>
          <div className="p-3">
            <LiveEventCard event={featured} />
          </div>
        </div>
      </div>
    </section>
  );
}
