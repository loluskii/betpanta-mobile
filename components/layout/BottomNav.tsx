"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, Ticket, User, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBetSlipStore } from "@/store/betSlipStore";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Menu", href: "/sports", icon: Menu },
  { label: "My Bets", href: "/my-bets", icon: Ticket },
  { label: "Account", href: "/account", icon: User },
  { label: "Games", href: "/games", icon: Gamepad2 },
];

export function BottomNav() {
  const pathname = usePathname();
  const { slip, toggleSlip } = useBetSlipStore();
  const selectionCount = slip.selections.length;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-card border-t border-border safe-area-pb">
      <div className="flex items-center justify-around relative">
        {NAV_ITEMS.map(({ label, href, icon: Icon }, i) => {
          const isActive = pathname === href;
          const isMid = i === Math.floor(NAV_ITEMS.length / 2);

          if (isMid) {
            return (
              <button
                key={label}
                onClick={toggleSlip}
                className="relative -top-4 flex flex-col items-center"
              >
                <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Ticket size={22} />
                  {selectionCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-white text-[10px] font-bold flex items-center justify-center">
                      {selectionCount}
                    </span>
                  )}
                </span>
                <span className="text-[10px] mt-1 font-medium text-primary">BETSLIP</span>
              </button>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 min-w-0",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
