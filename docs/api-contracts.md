# API Contracts

All endpoints are prefixed `/api` in the mock layer. When connecting to a real sportsbook API, update `NEXT_PUBLIC_API_URL` in `.env.local`.

---

## GET /api/events/live

Returns live events currently in progress.

**Query params**
| Param | Type | Description |
|-------|------|-------------|
| sport | string? | Filter by sport slug (e.g. `football`) |

**Response** `LiveEvent[]`

```ts
{
  id: string
  sport: Sport
  league: League
  homeTeam: Team
  awayTeam: Team
  status: "live"
  startTime: string      // ISO 8601
  score: { home: number; away: number }
  minute: number
  period: string
  markets: Market[]
}
```

---

## GET /api/events/upcoming

**Query params**
| Param | Type | Description |
|-------|------|-------------|
| sport | string? | Filter by sport slug |
| leagueId | string? | Filter by league id |

**Response** `UpcomingEvent[]`

---

## GET /api/sports

**Response** `Sport[]`

```ts
{ id: string; name: string; slug: string; icon?: string }
```

---

## POST /api/bets

**Body** `PlaceBetPayload`

```ts
{
  selections: {
    eventId: string
    marketId: string
    selectionName: string
    odds: number
  }[]
  betType: "single" | "accumulator" | "system"
  stake: number
}
```

**Response 201** `PlacedBet`

```ts
{
  id: string
  reference: string     // e.g. "BP3X7K2A"
  ...PlaceBetPayload
  totalOdds: number
  potentialWin: number
  status: "pending"
  placedAt: string      // ISO 8601
}
```

---

## Market Odds Shape

All `Market.odds` objects are keyed by selection name:

| Key | Meaning |
|-----|---------|
| `home` | Home win / Team 1 |
| `draw` | Draw (football) |
| `away` | Away win / Team 2 |
| `over` | Over threshold |
| `under` | Under threshold |
