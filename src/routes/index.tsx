import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Planner } from "@/components/budget/planner";
import { useBudgetStore } from "@/lib/budget/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const ready = useBudgetStore((state) => state.ready);
  const hydrate = useBudgetStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!ready) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-5xl px-4 pt-6 sm:px-6 sm:pt-10">
        <h1 className="font-display text-3xl leading-none text-fg italic">Northline</h1>
        <p className="mt-3 text-sm text-muted">Opening this month.</p>
      </main>
    );
  }

  return <Planner />;
}
