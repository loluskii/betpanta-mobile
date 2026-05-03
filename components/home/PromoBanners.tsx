"use client";

const PROMOS = [
  {
    id: "p1",
    title: "BIG SEASONS",
    subtitle: "BIG WINS",
    gradient: "from-[#1a0533] to-[#2d0a5e]",
    accent: "#a855f7",
  },
  {
    id: "p2",
    title: "PLACE YOUR",
    subtitle: "BETS NOW!",
    gradient: "from-[#0d3320] to-[#0a4a2a]",
    accent: "#22c55e",
  },
  {
    id: "p3",
    title: "ICE",
    subtitle: "BETS",
    gradient: "from-[#0a1a3a] to-[#0d2a5a]",
    accent: "#38bdf8",
  },
  {
    id: "p4",
    title: "FIRST DEPOSIT",
    subtitle: "BONUS",
    gradient: "from-[#0d3320] to-[#1a4d2a]",
    accent: "#4ade80",
  },
  {
    id: "p5",
    title: "HYPER",
    subtitle: "BONUS",
    gradient: "from-[#3a1a00] to-[#5a2a00]",
    accent: "#fb923c",
  },
  {
    id: "p6",
    title: "CRYSTALS",
    subtitle: "",
    gradient: "from-[#1a0a3a] to-[#2d1a5e]",
    accent: "#c084fc",
  },
];

export function PromoBanners() {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar px-3 py-2">
      {PROMOS.map((promo) => (
        <button
          key={promo.id}
          className={`shrink-0 flex flex-col justify-end p-3 rounded-xl w-[120px] h-[72px] bg-gradient-to-br ${promo.gradient} relative overflow-hidden`}
        >
          <div
            className="absolute inset-0 opacity-10 rounded-xl"
            style={{ background: `radial-gradient(circle at 70% 30%, ${promo.accent} 0%, transparent 60%)` }}
          />
          <p className="relative text-[10px] font-bold text-white leading-tight">{promo.title}</p>
          {promo.subtitle && (
            <p className="relative text-[10px] font-bold leading-tight" style={{ color: promo.accent }}>
              {promo.subtitle}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}
