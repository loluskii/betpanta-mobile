import type { Sport } from "@/types";

export const SPORTS: Sport[] = [
  { id: "1", name: "Football", slug: "football", icon: "⚽" },
  { id: "2", name: "Basketball", slug: "basketball", icon: "🏀" },
  { id: "3", name: "E-Sports", slug: "esports", icon: "🎮" },
  { id: "4", name: "Tennis", slug: "tennis", icon: "🎾" },
  { id: "5", name: "Rugby", slug: "rugby", icon: "🏉" },
  { id: "6", name: "Cricket", slug: "cricket", icon: "🏏" },
];

export const TOP_LEAGUES = [
  { id: "pl", name: "Premier League", country: "England", logo: "/leagues/pl.png" },
  { id: "laliga", name: "La Liga", country: "Spain", logo: "/leagues/laliga.png" },
  { id: "ligue1", name: "Ligue 1", country: "France", logo: "/leagues/ligue1.png" },
  { id: "bundesliga", name: "Bundesliga", country: "Germany", logo: "/leagues/bundesliga.png" },
  { id: "seriea", name: "Serie A", country: "Italy", logo: "/leagues/seriea.png" },
  { id: "ucl", name: "Champions League", country: "Europe", logo: "/leagues/ucl.png" },
];
