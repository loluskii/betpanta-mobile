import { UpcomingEventCard } from "@/components/events/UpcomingEventCard";
import { LiveEventCard } from "@/components/events/LiveEventCard";
import { MarketTabs } from "@/components/betting/MarketTabs";
import { MOCK_LIVE_EVENTS, MOCK_UPCOMING_EVENTS } from "@/constants/mockData";
import type { SportSlug } from "@/types";

interface Props {
  params: Promise<{ sport: SportSlug }>;
}

export default async function SportPage({ params }: Props) {
  const { sport } = await params;
  const liveEvents = MOCK_LIVE_EVENTS.filter((e) => e.sport.slug === sport);
  const upcomingEvents = MOCK_UPCOMING_EVENTS.filter((e) => e.sport.slug === sport);

  return (
    <div>
      <MarketTabs />
      <div className="px-3 py-2 space-y-4">
        {liveEvents.length > 0 && (
          <section>
            <h3 className="text-xs font-bold text-live uppercase mb-2">Live</h3>
            <div className="space-y-2">
              {liveEvents.map((e) => (
                <LiveEventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h3 className="text-xs font-bold uppercase text-muted-foreground mb-2">Upcoming</h3>
          {upcomingEvents.length === 0 ? (
            <p className="text-sm text-muted-foreground py-6 text-center">
              No upcoming events for this sport.
            </p>
          ) : (
            <div className="space-y-2">
              {upcomingEvents.map((e) => (
                <UpcomingEventCard key={e.id} event={e} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
