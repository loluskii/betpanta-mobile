import { apiClient } from "./client";
import type { Sport, League } from "@/types";

export const sportsApi = {
  getSports: () => apiClient.get<Sport[]>("/sports").then((r) => r.data),
  getLeagues: (sportId?: string) =>
    apiClient.get<League[]>("/sports/leagues", { params: { sportId } }).then((r) => r.data),
};
