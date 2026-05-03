"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LiveEventCard } from "@/components/events/LiveEventCard";
import { MarketTabs } from "@/components/betting/MarketTabs";
import { MOCK_LIVE_EVENTS } from "@/constants/mockData";

export function LiveSection() {
  return (
    <section className="mt-4">
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="font-bold text-sm">Live</h3>
        <Link href="/live" className="flex items-center gap-0.5 text-xs text-primary">
          All Live Events <ChevronRight size={12} />
        </Link>
      </div>

      <MarketTabs />

      <div className="px-3 mt-2 space-y-2">
        {MOCK_LIVE_EVENTS.map((event) => (
          <LiveEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
