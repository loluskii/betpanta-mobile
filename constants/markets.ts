import type { MarketType } from "@/types";

export const MARKET_LABELS: Record<MarketType, string> = {
  "1x2": "1X2",
  over_under: "O/U",
  double_chance: "DC",
  handicap: "Handicap",
  both_teams_score: "BTS",
  first_half_1x2: "1st Half O/U",
  first_half_ou: "1st Half O/U",
};

export const HOME_MARKET_TABS: { label: string; value: MarketType }[] = [
  { label: "1X2", value: "1x2" },
  { label: "O/U", value: "over_under" },
  { label: "DC", value: "double_chance" },
  { label: "1st Half O/U", value: "first_half_1x2" },
  { label: "Handicap", value: "handicap" },
];
