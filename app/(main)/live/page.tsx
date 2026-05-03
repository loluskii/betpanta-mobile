import { LiveEventCard } from "@/components/events/LiveEventCard";
import { MarketTabs } from "@/components/betting/MarketTabs";
import { SportsTabs } from "@/components/layout/SportsTabs";
import { MOCK_LIVE_EVENTS } from "@/constants/mockData";

export default function LivePage() {
  return (
    <div>
      <SportsTabs />
      <MarketTabs />
      <div className="px-3 py-2 space-y-2">
        <p className="text-xs text-muted-foreground">
          {MOCK_LIVE_EVENTS.length} live events
        </p>
        {MOCK_LIVE_EVENTS.map((event) => (
          <LiveEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
