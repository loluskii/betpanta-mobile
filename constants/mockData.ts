import type { LiveEvent, UpcomingEvent } from "@/types";

export const MOCK_FEATURED_EVENT: LiveEvent = {
  id: "feat-1",
  sport: { id: "1", name: "Football", slug: "football" },
  league: { id: "uel", name: "UEFA Europa League", slug: "uel", sportId: "1" },
  homeTeam: { id: "t20", name: "FC Midtjylland", shortName: "FCM" },
  awayTeam: { id: "t21", name: "Hibernian FC", shortName: "HIB" },
  status: "live",
  startTime: new Date().toISOString(),
  score: { home: 1, away: 2 },
  minute: 1,
  period: "H2",
  markets: [
    {
      id: "mf1",
      name: "1X2",
      type: "1x2",
      odds: { home: 2.80, draw: 3.52, away: 11.00 },
    },
  ],
};

export const MOCK_LIVE_EVENTS: LiveEvent[] = [
  {
    id: "live-1",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "UEFA Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t1", name: "Real Madrid", shortName: "RMA" },
    awayTeam: { id: "t2", name: "AS Roma", shortName: "ROM" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 1, away: 1 },
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
    awayTeam: { id: "t4", name: "Avaí FC SC", shortName: "AVA" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 1, away: 0 },
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
    score: { home: 1, away: 1 },
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
  {
    id: "live-4",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "UEFA Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t7", name: "AS Roma", shortName: "ROM" },
    awayTeam: { id: "t8", name: "Real Madrid", shortName: "RMA" },
    status: "live",
    startTime: new Date().toISOString(),
    score: { home: 0, away: 2 },
    minute: 90,
    period: "90+",
    markets: [
      {
        id: "m4",
        name: "1X2",
        type: "1x2",
        odds: { home: 2.35, draw: 3.21, away: 4.13 },
      },
    ],
  },
];

export const MOCK_POPULAR_EVENTS: UpcomingEvent[] = [
  {
    id: "pop-1",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t30", name: "Liverpool", shortName: "LIV" },
    awayTeam: { id: "t31", name: "Everton", shortName: "EVE" },
    status: "upcoming",
    startTime: new Date("2026-09-20T20:30:00").toISOString(),
    markets: [
      { id: "mp1", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
  {
    id: "pop-2",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t32", name: "Barcelona", shortName: "BAR" },
    awayTeam: { id: "t33", name: "Manchester United", shortName: "MUN" },
    status: "upcoming",
    startTime: new Date("2026-06-12T20:30:00").toISOString(),
    markets: [
      { id: "mp2", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
  {
    id: "pop-3",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t34", name: "Chelsea", shortName: "CHE" },
    awayTeam: { id: "t35", name: "Borussia Dortmund", shortName: "BVB" },
    status: "upcoming",
    startTime: new Date("2026-06-12T20:30:00").toISOString(),
    markets: [
      { id: "mp3", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
  {
    id: "pop-4",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "ucl", name: "Champions League", slug: "ucl", sportId: "1" },
    homeTeam: { id: "t36", name: "RC Celta de Vigo", shortName: "CEL" },
    awayTeam: { id: "t37", name: "Athletic Bilbao", shortName: "ATH" },
    status: "upcoming",
    startTime: new Date("2026-06-12T20:30:00").toISOString(),
    markets: [
      { id: "mp4", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
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
    startTime: new Date("2026-06-19T20:30:00").toISOString(),
    markets: [
      { id: "m5", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
  {
    id: "up-2",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "bl", name: "Bundesliga", slug: "bundesliga", sportId: "1" },
    homeTeam: { id: "t9", name: "VfL Wolfsburg", shortName: "WOL" },
    awayTeam: { id: "t10", name: "Manchester United", shortName: "MUN" },
    status: "upcoming",
    startTime: new Date("2026-06-12T20:30:00").toISOString(),
    markets: [
      { id: "m6", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
  {
    id: "up-3",
    sport: { id: "1", name: "Football", slug: "football" },
    league: { id: "eredivisie", name: "Eredivisie", slug: "eredivisie", sportId: "1" },
    homeTeam: { id: "t11", name: "Ajax Amsterdam", shortName: "AJX" },
    awayTeam: { id: "t12", name: "SL Benfica", shortName: "BEN" },
    status: "upcoming",
    startTime: new Date("2026-06-12T20:30:00").toISOString(),
    markets: [
      { id: "m7", name: "1X2", type: "1x2", odds: { home: 2.35, draw: 3.21, away: 4.13 } },
    ],
  },
];

export const MOCK_SMART_PICKS = [
  {
    id: "sp-1",
    league: "Champions League",
    homeTeam: "RSC Anderlecht",
    awayTeam: "FC Sherif T.",
    pick: "Anderlecht to Win Both Halves",
    selection: "Yes",
    oddsMin: 2.43,
    oddsMax: 3.29,
  },
  {
    id: "sp-2",
    league: "Champions League",
    homeTeam: "AS Monaco",
    awayTeam: "PSV",
    pick: "Both Teams to Score",
    selection: "Q/U To...",
    oddsMin: 1.75,
    oddsMax: 2.10,
  },
];
