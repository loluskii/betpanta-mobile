"use client";

export function HeroBanner() {
  return (
    <div
      className="relative overflow-hidden mx-3 my-2 rounded-xl min-h-[130px] flex flex-col justify-end"
      style={{
        background: "linear-gradient(135deg, #0d1220 0%, #0f1a12 60%, #0d1220 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/4" />
      <div className="absolute top-0 right-0 w-32 h-full opacity-10"
        style={{ background: "radial-gradient(circle at 80% 50%, #00c853 0%, transparent 70%)" }}
      />

      <div className="relative p-4 pb-3">
        <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mb-1 font-medium">
          betpanta
        </p>
        <h2 className="text-3xl font-black uppercase leading-none tracking-tight">
          Place{" "}
          <span
            className="font-black"
            style={{ color: "#f5c518", WebkitTextStroke: "0px" }}
          >
            Your
          </span>{" "}
          Bets!
        </h2>
        <div className="mt-2.5 flex items-center gap-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: "rgba(245,197,24,0.15)", color: "#f5c518", letterSpacing: "0.1em" }}
          >
            A0Z1A2D
          </span>
          <span className="text-[10px] text-muted-foreground">Use promo code</span>
        </div>
      </div>
    </div>
  );
}
