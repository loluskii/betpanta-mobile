"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, AlignJustify, User, Gamepad2, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBetSlipStore } from "@/store/betSlipStore";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Menu", href: "/sports", icon: LayoutGrid },
  { label: "My bets", href: "/my-bets", icon: AlignJustify },
  { label: "Account", href: "/account", icon: User },
  { label: "Games", href: "/games", icon: Gamepad2 },
];

export function BottomNav() {
  const pathname = usePathname();
  const { slip, toggleSlip } = useBetSlipStore();
  const selectionCount = slip.selections.length;

  return (
    <>
      {/* Floating BetSlip button */}
      <button
        onClick={toggleSlip}
        className="fixed bottom-0 right-3 z-51 flex flex-col items-center pb-2 pt-1 w-17"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 8px)" }}
      >
        <div
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl"
          style={{
            background: "#0d1e2e",
            border: "1.5px solid #3b82f6",
          }}
        >
          <Ticket size={22} className="text-white" />
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 min-w-5.5 h-5.5 rounded-full bg-destructive text-white text-[11px] font-bold flex items-center justify-center px-1"
          >
            {selectionCount}
          </span>
        </div>
        <span className="text-[11px] font-bold text-white mt-1 tracking-wide">BETSLIP</span>
      </button>

      {/* Bottom navigation bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-card border-t border-border safe-area-pb"
      >
        <div className="flex items-end justify-around px-2 pt-1.5 pb-1">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-1 min-w-0 py-1"
              >
                <span
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-xl transition-colors",
                    isActive ? "bg-[#4361ee]" : "bg-transparent"
                  )}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-white" : "text-muted-foreground"}
                  />
                </span>
                <span
                  className={cn(
                    "text-[10px] font-medium leading-none",
                    isActive ? "text-white" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
