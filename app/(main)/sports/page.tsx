import Link from "next/link";
import { SPORTS } from "@/constants/sports";

export default function SportsPage() {
  return (
    <div className="px-3 py-4">
      <h1 className="font-bold text-base mb-3">All Sports</h1>
      <div className="grid grid-cols-2 gap-2">
        {SPORTS.map((sport) => (
          <Link
            key={sport.id}
            href={`/sports/${sport.slug}`}
            className="flex items-center gap-3 bg-card rounded-lg p-4 hover:bg-accent transition-colors"
          >
            <span className="text-2xl">{sport.icon}</span>
            <span className="font-medium text-sm">{sport.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
