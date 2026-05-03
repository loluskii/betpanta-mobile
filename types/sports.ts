export interface Sport {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  matchCount?: number;
}

export interface League {
  id: string;
  name: string;
  slug: string;
  sportId: string;
  countryCode?: string;
  logo?: string;
  matchCount?: number;
}

export type SportSlug =
  | "football"
  | "basketball"
  | "esports"
  | "tennis"
  | "rugby"
  | "cricket"
  | "volleyball";
