import type { Sport } from "@/types";

export const SPORTS: Sport[] = [
  { id: "1", name: "Football", slug: "football", icon: "⚽" },
  { id: "2", name: "Basketball", slug: "basketball", icon: "🏀" },
  { id: "3", name: "E-Sports", slug: "esports", icon: "🎮" },
  { id: "4", name: "Tennis", slug: "tennis", icon: "🎾" },
  { id: "5", name: "Rugby", slug: "rugby", icon: "🏉" },
  { id: "6", name: "Cricket", slug: "cricket", icon: "🏏" },
];

export const MAIN_NAV_TABS = [
  { id: "all", label: "All sports", icon: "⚽" },
  { id: "live", label: "Live", icon: "📡" },
  { id: "aviator", label: "Aviator", icon: "✈️" },
  { id: "virtuals", label: "Virtuals", icon: "🕹️" },
  { id: "more", label: "More", icon: "···" },
];

export const SECTION_SPORT_TABS = [
  { label: "Football", icon: "⚽" },
  { label: "Basketball", icon: "🏀" },
  { label: "E-Sports", icon: "🎮" },
  { label: "Tennis", icon: "🎾" },
  { label: "More", icon: "···" },
];

export const TOP_LEAGUES = [
  { id: "pl", name: "Premier League", country: "England", matchCount: 38, emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: "laliga", name: "La Liga", country: "Spain", matchCount: 43, emoji: "🇪🇸" },
  { id: "ligue1", name: "Ligue 1", country: "France", matchCount: 31, emoji: "🇫🇷" },
  { id: "bundesliga", name: "Bundesliga", country: "Germany", matchCount: 27, emoji: "🇩🇪" },
  { id: "seriea", name: "Serie A", country: "Italy", matchCount: 35, emoji: "🇮🇹" },
  { id: "ucl", name: "Champions League", country: "Europe", matchCount: 16, emoji: "🏆" },
];
