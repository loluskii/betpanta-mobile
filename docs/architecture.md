# BetPanta Mobile — Architecture

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| State (server cache) | TanStack Query v5 |
| State (client) | Zustand v4 |
| HTTP client | Axios |

## Folder Structure

```
betpanta-mobile/
├── app/
│   ├── (main)/               # Route group — applies Header + BottomNav layout
│   │   ├── page.tsx          # Homepage
│   │   ├── live/             # Live events page
│   │   ├── sports/           # All sports listing
│   │   │   └── [sport]/      # Per-sport event listing
│   │   ├── my-bets/          # Bet history
│   │   └── account/          # User account
│   └── api/                  # Next.js API routes (mock → real endpoints)
│       ├── events/live/      # GET /api/events/live
│       ├── events/upcoming/  # GET /api/events/upcoming
│       ├── sports/           # GET /api/sports
│       └── bets/             # POST /api/bets
├── components/
│   ├── layout/               # Header, BottomNav, SportsTabs
│   ├── home/                 # Homepage sections
│   ├── events/               # Event card components
│   ├── betting/              # OddsButton, BetSlip, MarketTabs
│   └── ui/                   # shadcn primitives
├── lib/
│   ├── api/                  # Axios functions (one file per domain)
│   └── query/                # TanStack Query keys, provider, hooks
├── store/                    # Zustand stores
├── types/                    # TypeScript interfaces
├── constants/                # Static data, mock data
└── docs/                     # This folder
```

## Data Flow

```
User interaction
      │
      ▼
Zustand store (betSlipStore / uiStore)
      │
      ▼
TanStack Query hook (useLiveEvents, useUpcomingEvents)
      │
      ▼
Axios API client → /api/* (mock) → real sportsbook API
```

## Key Conventions

- All server-state fetching goes through TanStack Query hooks.
- All client-state (bet slip, selected sport/market, auth) lives in Zustand.
- API functions in `lib/api/` are thin wrappers — no business logic.
- Mock data in `constants/mockData.ts` mirrors the shape of real API responses.
- Live event polling interval: **15 seconds** via `refetchInterval`.
