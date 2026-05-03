"use client";

import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "@/lib/api/events";
import { queryKeys } from "@/lib/query/keys";
import type { SportSlug } from "@/types";

export function useLiveEvents(sport?: SportSlug) {
  return useQuery({
    queryKey: queryKeys.events.live(sport),
    queryFn: () => eventsApi.getLiveEvents(sport),
    refetchInterval: 15_000,
  });
}
