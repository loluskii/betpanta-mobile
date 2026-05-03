"use client";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-secondary to-background rounded-lg mx-3 my-2 p-4 min-h-[100px] flex flex-col justify-end">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <p className="relative text-xs text-muted-foreground uppercase tracking-widest">BetPanta</p>
      <h2 className="relative text-xl font-extrabold leading-tight">
        Place <span className="text-primary">Your</span> Bets!
      </h2>
      <p className="relative text-xs text-muted-foreground mt-1">Use promo code to get started</p>
    </div>
  );
}
