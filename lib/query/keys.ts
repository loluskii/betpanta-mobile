import type { SportSlug } from "@/types";

export const queryKeys = {
  sports: {
    all: ["sports"] as const,
    leagues: (sportId?: string) => ["sports", "leagues", sportId] as const,
  },
  events: {
    live: (sport?: SportSlug) => ["events", "live", sport] as const,
    upcoming: (sport?: SportSlug, leagueId?: string) =>
      ["events", "upcoming", sport, leagueId] as const,
    detail: (id: string) => ["events", id] as const,
  },
  bets: {
    my: (status?: string) => ["bets", "my", status] as const,
    detail: (id: string) => ["bets", id] as const,
  },
};
