import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { LiveSection } from "@/components/home/LiveSection";
import { TopLeagues } from "@/components/home/TopLeagues";
import { UpcomingMatches } from "@/components/home/UpcomingMatches";
import { SmartPicks } from "@/components/home/SmartPicks";
import { SportsTabs } from "@/components/layout/SportsTabs";

export default function HomePage() {
  return (
    <div className="pb-4">
      <HeroBanner />
      <SportsTabs />
      <FeaturedSection />
      <LiveSection />
      <TopLeagues />
      <SmartPicks />
      <UpcomingMatches />
    </div>
  );
}
