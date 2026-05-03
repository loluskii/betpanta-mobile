"use client";

import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "@/lib/api/events";
import { queryKeys } from "@/lib/query/keys";
import type { SportSlug } from "@/types";

export function useUpcomingEvents(sport?: SportSlug, leagueId?: string) {
  return useQuery({
    queryKey: queryKeys.events.upcoming(sport, leagueId),
    queryFn: () => eventsApi.getUpcomingEvents(sport, leagueId),
    staleTime: 60_000,
  });
}
