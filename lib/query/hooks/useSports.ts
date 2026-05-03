"use client";

import { useQuery } from "@tanstack/react-query";
import { sportsApi } from "@/lib/api/sports";
import { queryKeys } from "@/lib/query/keys";

export function useSports() {
  return useQuery({
    queryKey: queryKeys.sports.all,
    queryFn: sportsApi.getSports,
    staleTime: Infinity,
  });
}

export function useLeagues(sportId?: string) {
  return useQuery({
    queryKey: queryKeys.sports.leagues(sportId),
    queryFn: () => sportsApi.getLeagues(sportId),
    staleTime: 5 * 60_000,
  });
}
