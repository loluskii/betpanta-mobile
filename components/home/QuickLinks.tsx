"use client";

import { ChevronRight, Star, Tv, Clock } from "lucide-react";
import Link from "next/link";

const LINKS = [
  { label: "MY FAVOURITES", href: "/sports?tab=favourites", Icon: Star },
  { label: "TODAY'S FOOTBALL", href: "/sports/football?period=today", Icon: Tv },
  { label: "FOOTBALL IN NEXT 3 HOURS", href: "/sports/football?period=3h", Icon: Clock },
];

export function QuickLinks() {
  return (
    <div className="flex gap-0 mx-3 my-2 rounded-lg overflow-hidden border border-border">
      {LINKS.map(({ label, href, Icon }, i) => (
        <Link
          key={label}
          href={href}
          className="flex-1 flex items-center justify-between gap-1 px-2 py-2.5 bg-card hover:bg-surface transition-colors text-[9px] font-bold text-foreground uppercase leading-tight border-r border-border last:border-r-0"
        >
          <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
            <Icon size={14} className="text-primary shrink-0" />
            <span className="text-center leading-tight">{label}</span>
          </div>
          <ChevronRight size={10} className="text-muted-foreground shrink-0" />
        </Link>
      ))}
    </div>
  );
}
