import { useEffect, useState, type ComponentType } from "react";
import { formatMoney, type Slice } from "@/lib/budget/money";

export function SpendChart({ slices, total }: { slices: Slice[]; total: number }) {
  const [PieView, setPieView] = useState<ComponentType<{ slices: Slice[] }> | null>(null);

  useEffect(() => {
    let live = true;
    void import("./spend-pie").then((mod) => {
      if (live) setPieView(() => mod.SpendPie);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl text-fg">Spending by category</h2>
        <p className="text-sm font-medium text-fg tabular-nums">{formatMoney(total)}</p>
      </div>
      {slices.length === 0 ? (
        <p className="py-8 text-sm text-muted">No spending in this month yet.</p>
      ) : (
        <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          <div className="grid h-40 w-40 shrink-0 place-items-center" aria-hidden>
            {PieView ? (
              <PieView slices={slices} />
            ) : (
              <div className="h-32 w-32 rounded-full border-8 border-track" />
            )}
          </div>
          <ul className="w-full min-w-0 flex-1 divide-y divide-border">
            {slices.map((slice) => (
              <li key={slice.id} className="flex items-center gap-3 py-2">
                <span
                  className="size-2.5 shrink-0 rounded-full bg-accent"
                  style={{ opacity: slice.opacity }}
                />
                <span className="min-w-0 flex-1 truncate text-sm text-fg">{slice.label}</span>
                <span className="w-10 shrink-0 text-right text-sm text-muted tabular-nums">
                  {slice.shareLabel}
                </span>
                <span className="w-24 shrink-0 text-right text-sm font-medium text-fg tabular-nums">
                  {formatMoney(slice.cents)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
