# State Management

## Zustand Stores

### `betSlipStore`
Persisted to `localStorage` under key `betpanta-betslip`.

| Field | Type | Description |
|-------|------|-------------|
| slip.selections | BetSelection[] | Active bet selections |
| slip.betType | BetType | single / accumulator / system |
| slip.stake | number | User-entered stake |
| slip.totalOdds | number | Computed product of all odds |
| slip.potentialWin | number | stake × totalOdds |
| isOpen | boolean | Controls BetSlip drawer |

Actions: `addSelection`, `removeSelection`, `updateStake`, `setBetType`, `clearSlip`, `toggleSlip`

---

### `uiStore`
In-memory only. Resets on page load.

| Field | Type | Description |
|-------|------|-------------|
| activeSport | SportSlug | Currently selected sport tab |
| activeMarket | MarketType | Currently selected market tab |
| searchQuery | string | Search input value |

---

### `authStore`
Persisted under key `betpanta-auth`. Skipped for MVP phase.

---

## TanStack Query

| Hook | Key | Refetch interval |
|------|-----|-----------------|
| `useLiveEvents(sport?)` | `["events","live",sport]` | 15s |
| `useUpcomingEvents(sport?,leagueId?)` | `["events","upcoming",sport,leagueId]` | on stale (60s) |
| `useSports()` | `["sports"]` | never (Infinity stale) |

Default query config (set in `lib/query/provider.tsx`):
- `staleTime`: 30s
- `gcTime`: 5min
- `retry`: 2
- `refetchOnWindowFocus`: false
