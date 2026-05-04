import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { PageFooter } from "@/components/layout/PageFooter";
import { BetSlip } from "@/components/betting/BetSlip";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
        <PageFooter />
      </main>
      <BottomNav />
      <BetSlip />
    </div>
  );
}
