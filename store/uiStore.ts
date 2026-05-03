import { create } from "zustand";
import type { SportSlug, MarketType } from "@/types";

interface UIState {
  activeSport: SportSlug;
  activeMarket: MarketType;
  searchQuery: string;
  setActiveSport: (sport: SportSlug) => void;
  setActiveMarket: (market: MarketType) => void;
  setSearchQuery: (query: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSport: "football",
  activeMarket: "1x2",
  searchQuery: "",
  setActiveSport: (activeSport) => set({ activeSport }),
  setActiveMarket: (activeMarket) => set({ activeMarket }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
