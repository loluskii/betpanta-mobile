import { apiClient } from "./client";
import type { LiveEvent, UpcomingEvent, SportSlug } from "@/types";

export const eventsApi = {
  getLiveEvents: (sport?: SportSlug) =>
    apiClient.get<LiveEvent[]>("/events/live", { params: { sport } }).then((r) => r.data),

  getUpcomingEvents: (sport?: SportSlug, leagueId?: string) =>
    apiClient
      .get<UpcomingEvent[]>("/events/upcoming", { params: { sport, leagueId } })
      .then((r) => r.data),

  getEventById: (id: string) =>
    apiClient.get<LiveEvent | UpcomingEvent>(`/events/${id}`).then((r) => r.data),
};
