import { HeroBanner } from "@/components/home/HeroBanner";
import { PromoBanners } from "@/components/home/PromoBanners";
import { QuickLinks } from "@/components/home/QuickLinks";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { LiveSection } from "@/components/home/LiveSection";
import { TopLeagues } from "@/components/home/TopLeagues";
import { MostPopularEvents } from "@/components/home/MostPopularEvents";
import { SmartPicks } from "@/components/home/SmartPicks";
import { UpcomingMatches } from "@/components/home/UpcomingMatches";
import { RecommendedForYou } from "@/components/home/RecommendedForYou";
import { SportsTabs } from "@/components/layout/SportsTabs";

export default function HomePage() {
  return (
    <div className="pb-4">
      <HeroBanner />
      <SportsTabs />
      <PromoBanners />
      <QuickLinks />
      <FeaturedSection />
      <LiveSection />
      <TopLeagues />
      <MostPopularEvents />
      <SmartPicks />
      <UpcomingMatches />
      <RecommendedForYou />
    </div>
  );
}
