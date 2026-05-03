import type { LiveEvent, UpcomingEvent } from "@/types";

export const MOCK_LIVE_EVENTS: LiveEvent[] = [
  {
    id: "live-1",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "UEFA Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t1", name: "Real Madrid", shortName: "RMA" },
    awayTeam: { id: "t2", name: "AS Roma", shortName: "ROM" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 1, away: 0 },
    minute: 90,
    period: "90+",
    markets: [
      {
        id: "m1",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
  {
    id: "live-2",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "bra", name: "Brazil - Brasileiro Serie A", slug: "brasileirao", sportId: "1" },
    homeTeam: { id: "t3", name: "Clube do Remo PA", shortName: "CRM" },
    awayTeam: { id: "t4", name: "Avai FC SC", shortName: "AVA" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 0, away: 0 },
    minute: 53,
    period: "HT",
    markets: [
      {
        id: "m2",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
  {
    id: "live-3",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "UEFA Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t5", name: "Newcastle", shortName: "NEW" },
    awayTeam: { id: "t6", name: "FC Barcelona", shortName: "BAR" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 0, away: 0 },
    minute: 0,
    period: "H2",
    markets: [
      {
        id: "m3",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
];

export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "up-1",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t7", name: "Liverpool", shortName: "LIV" },
    awayTeam: { id: "t8", name: "Everton", shortName: "EVE" },
    status: "upcoming",
    startTime: new Date(Date.now() + 86400000).toISOString(),
    markets: [
      {
        id: "m4",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
  {
    id: "up-2",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "bl", name: "Bundesliga", slug: "bundesliga", sportId: "1" },
    homeTeam: { id: "t9", name: "VfL Wolfsburg", shortName: "WOL" },
    awayTeam: { id: "t10", name: "Manchester United", shortName: "MUN" },
    status: "upcoming",
    startTime: new Date(Date.now() + 86400000).toISOString(),
    markets: [
      {
        id: "m5",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
  {
    id: "up-3",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "eredivisie", name: "Eredivisie", slug: "eredivisie", sportId: "1" },
    homeTeam: { id: "t11", name: "Ajax Amsterdam", shortName: "AJX" },
    awayTeam: { id: "t12", name: "SL Benfica", shortName: "BEN" },
    status: "upcoming",
    startTime: new Date(Date.now() + 86400000).toISOString(),
    markets: [
      {
        id: "m6",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
];
