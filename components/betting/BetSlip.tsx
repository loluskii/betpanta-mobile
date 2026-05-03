"use client";

import { X, Trash2 } from "lucide-react";
import { useBetSlipStore } from "@/store/betSlipStore";
import { Button } from "@/components/ui/button";

export function BetSlip() {
  const { slip, isOpen, toggleSlip, removeSelection, updateStake, clearSlip } = useBetSlipStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={toggleSlip} />
      <div className="relative bg-card rounded-t-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="font-bold text-base">
            Bet Slip{" "}
            {slip.selections.length > 0 && (
              <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                {slip.selections.length}
              </span>
            )}
          </h2>
          <button onClick={toggleSlip} className="text-muted-foreground hover:text-foreground">
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-4 py-2 space-y-2">
          {slip.selections.length === 0 ? (
            <p className="text-center text-muted-foreground py-8 text-sm">
              Add selections to build your bet slip
            </p>
          ) : (
            slip.selections.map((s) => (
              <div key={s.id} className="bg-surface rounded-lg p-3 flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">{s.marketName}</p>
                  <p className="text-sm font-medium">{s.selectionName}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {s.event.homeTeam.name} vs {s.event.awayTeam.name}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-primary font-bold text-sm">{s.odds.toFixed(2)}</span>
                  <button
                    onClick={() => removeSelection(s.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {slip.selections.length > 0 && (
          <div className="px-4 py-3 border-t border-border space-y-3">
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground shrink-0">Stake</label>
              <input
                type="number"
                min={0}
                value={slip.stake || ""}
                onChange={(e) => updateStake(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="flex-1 bg-surface border border-border rounded px-3 py-1.5 text-sm text-right focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Odds</span>
              <span className="font-bold">{slip.totalOdds.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Potential Win</span>
              <span className="font-bold text-primary">{slip.potentialWin.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearSlip}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={12} /> Clear
              </button>
              <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Place Bet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
