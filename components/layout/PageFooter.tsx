"use client";

export function PageFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 py-5 mt-4 border-t border-border">
      <p className="text-[11px] text-muted-foreground">
        © 2025 BetPanta. All rights reserved.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        Back to Top
        <span className="text-base leading-none">↑</span>
      </button>
    </footer>
  );
}
