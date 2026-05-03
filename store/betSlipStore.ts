import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BetSelection, BetType, BetSlip } from "@/types";

interface BetSlipState {
  slip: BetSlip;
  isOpen: boolean;
  addSelection: (selection: BetSelection) => void;
  removeSelection: (selectionId: string) => void;
  updateStake: (stake: number) => void;
  setBetType: (type: BetType) => void;
  clearSlip: () => void;
  toggleSlip: () => void;
}

const DEFAULT_SLIP: BetSlip = {
  selections: [],
  betType: "single",
  stake: 0,
  totalOdds: 0,
  potentialWin: 0,
};

function computeTotals(selections: BetSelection[], stake: number): Pick<BetSlip, "totalOdds" | "potentialWin"> {
  if (selections.length === 0) return { totalOdds: 0, potentialWin: 0 };
  const totalOdds = selections.reduce((acc, s) => acc * s.odds, 1);
  return { totalOdds: parseFloat(totalOdds.toFixed(2)), potentialWin: parseFloat((totalOdds * stake).toFixed(2)) };
}

export const useBetSlipStore = create<BetSlipState>()(
  persist(
    (set) => ({
      slip: DEFAULT_SLIP,
      isOpen: false,

      addSelection: (selection) =>
        set((state) => {
          const exists = state.slip.selections.some((s) => s.id === selection.id);
          if (exists) return state;
          const selections = [...state.slip.selections, selection];
          const totals = computeTotals(selections, state.slip.stake);
          return { slip: { ...state.slip, selections, ...totals }, isOpen: true };
        }),

      removeSelection: (selectionId) =>
        set((state) => {
          const selections = state.slip.selections.filter((s) => s.id !== selectionId);
          const totals = computeTotals(selections, state.slip.stake);
          return { slip: { ...state.slip, selections, ...totals } };
        }),

      updateStake: (stake) =>
        set((state) => {
          const totals = computeTotals(state.slip.selections, stake);
          return { slip: { ...state.slip, stake, ...totals } };
        }),

      setBetType: (betType) => set((state) => ({ slip: { ...state.slip, betType } })),

      clearSlip: () => set({ slip: DEFAULT_SLIP, isOpen: false }),

      toggleSlip: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "betpanta-betslip" }
  )
);
