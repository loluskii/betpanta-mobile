"use client";

import { cn } from "@/lib/utils";
import { useBetSlipStore } from "@/store/betSlipStore";
import type { SportEvent, Market } from "@/types";

interface OddsButtonProps {
  event: SportEvent;
  market: Market;
  selectionKey: string;
  label?: string;
}

export function OddsButton({ event, market, selectionKey, label }: OddsButtonProps) {
  const { slip, addSelection, removeSelection } = useBetSlipStore();
  const odds = market.odds[selectionKey];
  const selectionId = `${event.id}-${market.id}-${selectionKey}`;
  const isSelected = slip.selections.some((s) => s.id === selectionId);

  if (!odds) return <div className="h-8 w-12 rounded bg-surface" />;

  const handleClick = () => {
    if (isSelected) {
      removeSelection(selectionId);
    } else {
      addSelection({
        id: selectionId,
        eventId: event.id,
        event,
        marketId: market.id,
        marketName: market.name,
        selectionName: label ?? selectionKey,
        odds,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center justify-center min-w-[2.8rem] h-8 px-2 rounded text-xs font-semibold transition-all",
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-surface text-foreground hover:bg-accent"
      )}
    >
      {label && <span className="text-[9px] text-muted-foreground leading-none mb-0.5">{label}</span>}
      <span>{odds.toFixed(2)}</span>
    </button>
  );
}
