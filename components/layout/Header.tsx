"use client";

import { Search, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-2 px-3 py-2 bg-card border-b border-border">
      <span className="text-primary font-extrabold text-lg tracking-tight mr-auto">BetPanta</span>

      <button className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors">
        <Search size={18} />
      </button>

      <Button variant="outline" size="sm" className="text-xs h-7 px-3 border-border">
        <LogIn size={13} className="mr-1" />
        Log in
      </Button>
      <Button size="sm" className="text-xs h-7 px-3 bg-primary text-primary-foreground hover:bg-primary/90">
        <UserPlus size={13} className="mr-1" />
        Join now
      </Button>
    </header>
  );
}
