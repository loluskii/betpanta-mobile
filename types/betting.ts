import type { SportEvent } from "./events";

export interface BetSelection {
  id: string;
  eventId: string;
  event: SportEvent;
  marketId: string;
  marketName: string;
  selectionName: string;
  odds: number;
}

export type BetType = "single" | "accumulator" | "system";

export interface BetSlip {
  selections: BetSelection[];
  betType: BetType;
  stake: number;
  totalOdds: number;
  potentialWin: number;
}

export type BetStatus = "pending" | "won" | "lost" | "void" | "cashed_out";

export interface PlacedBet {
  id: string;
  reference: string;
  selections: BetSelection[];
  betType: BetType;
  stake: number;
  totalOdds: number;
  potentialWin: number;
  status: BetStatus;
  placedAt: string;
  settledAt?: string;
}

export interface PlaceBetPayload {
  selections: Pick<BetSelection, "eventId" | "marketId" | "selectionName" | "odds">[];
  betType: BetType;
  stake: number;
}
