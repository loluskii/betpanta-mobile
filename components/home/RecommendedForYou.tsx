"use client";

const CASINO_GAMES = [
  { id: "g1", label: "Casino game", gradient: "from-[#1a0533] to-[#2d0a5e]", emoji: "🎰" },
  { id: "g2", label: "Casino game", gradient: "from-[#0d3320] to-[#0a4a2a]", emoji: "🃏" },
  { id: "g3", label: "Casino game", gradient: "from-[#0a1a3a] to-[#0d2a5a]", emoji: "🎲" },
  { id: "g4", label: "Casino game", gradient: "from-[#3a1a00] to-[#5a2a00]", emoji: "🎯" },
  { id: "g5", label: "Casino game", gradient: "from-[#1a0a3a] to-[#2d1a5e]", emoji: "🎮" },
];

export function RecommendedForYou() {
  return (
    <section className="mt-4 mb-2">
      <h3 className="px-3 font-bold text-sm mb-2">Recommended For You</h3>
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-3 pb-2">
        {CASINO_GAMES.map((game) => (
          <button
            key={game.id}
            className="shrink-0 flex flex-col gap-1"
          >
            <div
              className={`w-28 h-20 rounded-xl bg-gradient-to-br ${game.gradient} flex items-center justify-center text-3xl`}
            >
              {game.emoji}
            </div>
            <span className="text-[10px] text-muted-foreground text-center">{game.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
