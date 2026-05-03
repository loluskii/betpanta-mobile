import { apiClient } from "./client";
import type { PlacedBet, PlaceBetPayload } from "@/types";

export const betsApi = {
  placeBet: (payload: PlaceBetPayload) =>
    apiClient.post<PlacedBet>("/bets", payload).then((r) => r.data),

  getMyBets: (status?: string) =>
    apiClient.get<PlacedBet[]>("/bets/my", { params: { status } }).then((r) => r.data),

  getBetById: (id: string) =>
    apiClient.get<PlacedBet>(`/bets/${id}`).then((r) => r.data),
};
