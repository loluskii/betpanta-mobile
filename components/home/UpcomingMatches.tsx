"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { UpcomingEventCard } from "@/components/events/UpcomingEventCard";
import { MOCK_UPCOMING_EVENTS } from "@/constants/mockData";

export function UpcomingMatches() {
  return (
    <section className="mt-4">
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="font-bold text-sm">Upcoming Matches</h3>
        <Link href="/sports" className="flex items-center gap-0.5 text-xs text-primary">
          View All <ChevronRight size={12} />
        </Link>
      </div>

      <div className="px-3 space-y-2">
        {MOCK_UPCOMING_EVENTS.map((event) => (
          <UpcomingEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
