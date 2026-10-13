import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Pencil, Plus, Trash2 } from "lucide-react";
import { CategoryIcon } from "@/components/budget/category-icon";
import { EntryDialog } from "@/components/budget/entry-dialog";
import { GoalDialog } from "@/components/budget/goal-dialog";
import { SpendChart } from "@/components/budget/spend-chart";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { Progress } from "@/components/ui/progress";
import {
  categoryLabel,
  defaultDateForMonth,
  formatDay,
  formatMoney,
  groupByDate,
  monthKey,
  monthLabel,
  paceCopy,
  shiftMonth,
  summarize,
  type Draft,
  type Kind,
  type Transaction,
} from "@/lib/budget/money";
import { useBudgetStore } from "@/lib/budget/store";
import { cn } from "@/lib/utils";

type Filter = "all" | Kind;

type Editor =
  | { type: "closed" }
  | { type: "create" }
  | { type: "edit"; tx: Transaction }
  | { type: "goal" }
  | { type: "delete"; tx: Transaction }
  | { type: "clear" };

export function Planner() {
  const transactions = useBudgetStore((state) => state.transactions);
  const goals = useBudgetStore((state) => state.goals);
  const sample = useBudgetStore((state) => state.sample);
  const addTransaction = useBudgetStore((state) => state.addTransaction);
  const updateTransaction = useBudgetStore((state) => state.updateTransaction);
  const deleteTransaction = useBudgetStore((state) => state.deleteTransaction);
  const setGoal = useBudgetStore((state) => state.setGoal);
  const clearSample = useBudgetStore((state) => state.clearSample);

  const [month, setMonth] = useState(() => monthKey(new Date()));
  const [filter, setFilter] = useState<Filter>("all");
  const [editor, setEditor] = useState<Editor>({ type: "closed" });

  const summary = useMemo(
    () => summarize(transactions, month, goals),
    [transactions, month, goals],
  );
  const pace = paceCopy(summary, month);
  const visible = summary.items.filter((tx) => (filter === "all" ? true : tx.kind === filter));
  const groups = groupByDate(visible);
  const defaultDate = defaultDateForMonth(month);

  function saveEntry(draft: Draft) {
    if (editor.type === "edit") updateTransaction(editor.tx.id, draft);
    else addTransaction(draft);
    setMonth(draft.date.slice(0, 7));
    setEditor({ type: "closed" });
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl leading-none text-fg italic">Northline</h1>
            <p className="mt-2 hidden text-sm text-muted sm:block">Month by month, what is left.</p>
          </div>
          <Button onClick={() => setEditor({ type: "create" })}>
            <Plus className="size-4" aria-hidden />
            Add entry
          </Button>
        </div>
        <div className="flex w-full items-center rounded-lg bg-track p-1 sm:w-fit">
          <button
            type="button"
            className="pressable inline-flex size-11 items-center justify-center rounded-md text-fg hover:bg-card"
            aria-label="Previous month"
            onClick={() => setMonth((current) => shiftMonth(current, -1))}
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <p className="min-w-0 flex-1 px-2 text-center font-display text-xl text-fg sm:min-w-48 sm:flex-none">
            {monthLabel(month)}
          </p>
          <button
            type="button"
            className="pressable inline-flex size-11 items-center justify-center rounded-md text-fg hover:bg-card"
            aria-label="Next month"
            onClick={() => setMonth((current) => shiftMonth(current, 1))}
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-sm font-medium text-muted">Remaining balance</h2>
        <p
          className={cn(
            "mt-2 font-sans text-4xl leading-none font-medium tracking-tight tabular-nums sm:text-5xl",
            summary.remaining < 0 ? "text-expense" : "text-fg",
          )}
          aria-live="polite"
        >
          {formatMoney(summary.remaining)}
        </p>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted tabular-nums">
          <span className="text-income">{formatMoney(summary.income)} income</span>
          <span aria-hidden>−</span>
          <span className="text-expense">{formatMoney(summary.expenses)} spent</span>
        </p>
        <p className="mt-1 text-sm text-muted">Income minus every expense, savings included.</p>

        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-end justify-between gap-3">
            <p className="text-sm text-muted">
              Savings goal
              <span className="mt-1 block text-base font-medium text-fg tabular-nums">
                {formatMoney(summary.saved)}
                <span className="font-normal text-muted"> of {formatMoney(summary.goal)}</span>
              </span>
            </p>
            <button
              type="button"
              className="pressable min-h-11 shrink-0 px-2 text-sm font-medium text-accent"
              onClick={() => setEditor({ type: "goal" })}
            >
              {summary.goal > 0 ? "Adjust" : "Set goal"}
            </button>
          </div>
          {summary.goal > 0 ? (
            <Progress
              className="mt-3"
              value={summary.progress}
              label={`Saved ${summary.progress} percent of the savings goal`}
            />
          ) : null}
          <p className="mt-3 text-sm text-muted">{pace}</p>
        </div>
      </section>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
        <SpendChart slices={summary.slices} total={summary.expenses} />

        <section className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl text-fg">Entries</h2>
            <p className="text-sm text-muted tabular-nums">
              {visible.length} {visible.length === 1 ? "entry" : "entries"}
            </p>
          </div>
          <div
            role="radiogroup"
            aria-label="Filter entries"
            className="mt-4 grid grid-cols-3 gap-1 rounded-lg bg-track p-1"
          >
            {(
              [
                ["all", "All"],
                ["income", "Income"],
                ["expense", "Expenses"],
              ] as const
            ).map(([value, label]) => {
              const selected = filter === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  className={cn(
                    "pressable min-h-11 rounded-md text-sm font-medium",
                    selected ? "bg-card text-fg shadow-card" : "text-muted",
                  )}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {groups.length === 0 ? (
            <div className="px-2 py-10 text-center">
              <p className="font-display text-2xl text-fg">No entries this month</p>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                Add income and expenses to see what is left, and how spending splits by category.
              </p>
              <Button className="mt-5" onClick={() => setEditor({ type: "create" })}>
                Add entry
              </Button>
            </div>
          ) : (
            <div className="mt-2">
              {groups.map((group) => (
                <div key={group.date}>
                  <h3 className="pt-4 text-sm font-medium text-muted">{formatDay(group.date)}</h3>
                  <ul>
                    {group.items.map((tx) => {
                      const label = categoryLabel(tx.category);
                      const named = `${label}${tx.note ? `, ${tx.note}` : ""} on ${formatDay(tx.date)}`;
                      return (
                        <li key={tx.id} className="flex gap-3 border-b border-border py-2 last:border-b-0">
                          <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-track text-accent">
                            <CategoryIcon id={tx.category} className="size-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <p className="truncate text-sm font-medium text-fg">{label}</p>
                              <p
                                className={cn(
                                  "shrink-0 text-sm font-medium tabular-nums",
                                  tx.kind === "income" ? "text-income" : "text-expense",
                                )}
                              >
                                {tx.kind === "income" ? "+" : "−"}
                                {formatMoney(tx.amount)}
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <p className="min-w-0 flex-1 truncate text-sm text-muted">
                                {tx.note || "No note"}
                              </p>
                              <div className="flex shrink-0">
                                <button
                                  type="button"
                                  className="pressable inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-track hover:text-fg"
                                  aria-label={`Edit ${named}`}
                                  onClick={() => setEditor({ type: "edit", tx })}
                                >
                                  <Pencil className="size-4" aria-hidden />
                                </button>
                                <button
                                  type="button"
                                  className="pressable inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-track hover:text-expense"
                                  aria-label={`Delete ${named}`}
                                  onClick={() => setEditor({ type: "delete", tx })}
                                >
                                  <Trash2 className="size-4" aria-hidden />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <p className="mt-4 text-sm text-muted">
            {sample ? "Sample entries stay on this device." : "Entries stay on this device."}
          </p>
          {sample ? (
            <button
              type="button"
              className="pressable min-h-11 text-sm font-medium text-muted underline-offset-4 hover:text-fg hover:underline"
              onClick={() => setEditor({ type: "clear" })}
            >
              Clear sample entries
            </button>
          ) : null}
        </section>
      </div>

      {editor.type === "create" || editor.type === "edit" ? (
        <EntryDialog
          key={editor.type === "edit" ? editor.tx.id : "create"}
          initial={editor.type === "edit" ? editor.tx : null}
          defaultDate={defaultDate}
          onClose={() => setEditor({ type: "closed" })}
          onSubmit={saveEntry}
        />
      ) : null}

      {editor.type === "goal" ? (
        <GoalDialog
          month={month}
          initialCents={summary.goal}
          onClose={() => setEditor({ type: "closed" })}
          onSubmit={(cents) => {
            setGoal(month, cents);
            setEditor({ type: "closed" });
          }}
        />
      ) : null}

      {editor.type === "delete" ? (
        <ConfirmDialog
          title="Delete this entry?"
          description={`${categoryLabel(editor.tx.category)}${editor.tx.note ? `, ${editor.tx.note}` : ""} · ${formatDay(editor.tx.date)} · ${formatMoney(editor.tx.amount)}`}
          confirmLabel="Delete"
          onClose={() => setEditor({ type: "closed" })}
          onConfirm={() => {
            deleteTransaction(editor.tx.id);
            setEditor({ type: "closed" });
          }}
        />
      ) : null}

      {editor.type === "clear" ? (
        <ConfirmDialog
          title="Clear sample entries?"
          description="This removes the sample income and expenses. Your savings goal stays, and anything you add next is kept on this device."
          confirmLabel="Clear sample"
          onClose={() => setEditor({ type: "closed" })}
          onConfirm={() => {
            clearSample();
            setEditor({ type: "closed" });
          }}
        />
      ) : null}
    </main>
  );
}
