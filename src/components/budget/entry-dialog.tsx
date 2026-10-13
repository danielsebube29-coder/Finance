import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  categoriesFor,
  categoryLabel,
  centsToInput,
  isValidDate,
  parseMoney,
  SAVINGS_CATEGORY,
  type Draft,
  type Kind,
  type Transaction,
} from "@/lib/budget/money";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 w-full appearance-none rounded-md border border-border-strong bg-card px-3 text-base text-fg outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

export function EntryDialog({
  initial,
  defaultDate,
  onClose,
  onSubmit,
}: {
  initial: Transaction | null;
  defaultDate: string;
  onClose: () => void;
  onSubmit: (draft: Draft) => void;
}) {
  const [kind, setKind] = useState<Kind>(initial?.kind ?? "expense");
  const [amount, setAmount] = useState(initial ? centsToInput(initial.amount) : "");
  const [category, setCategory] = useState(initial?.category ?? "food");
  const [date, setDate] = useState(initial?.date ?? defaultDate);
  const [note, setNote] = useState(initial?.note ?? "");
  const [error, setError] = useState<string | null>(null);

  const options = categoriesFor(kind);
  const known = options.some((item) => item.id === category);
  const selectOptions = known
    ? options
    : [{ id: category, label: categoryLabel(category), kind }, ...options];

  function chooseKind(next: Kind) {
    setKind(next);
    const nextOptions = categoriesFor(next);
    if (!nextOptions.some((item) => item.id === category)) {
      setCategory(next === "expense" ? "food" : "salary");
    }
  }

  function save() {
    const cents = parseMoney(amount);
    if (cents == null) {
      setError("Enter an amount like 42.50.");
      return;
    }
    if (!isValidDate(date)) {
      setError("Choose a valid date.");
      return;
    }
    setError(null);
    onSubmit({
      kind,
      amount: cents,
      category,
      date,
      note: note.trim(),
    });
  }

  return (
    <Dialog
      title={initial ? "Edit entry" : "Add entry"}
      description="Income adds to the month. Expenses, including savings transfers, come off the remaining balance."
      onClose={onClose}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          save();
        }}
      >
        <div role="radiogroup" aria-label="Entry type" className="grid grid-cols-2 gap-1 rounded-lg bg-track p-1">
          {(["expense", "income"] as const).map((value) => {
            const selected = kind === value;
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
                onClick={() => chooseKind(value)}
              >
                {value === "expense" ? "Expense" : "Income"}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            inputMode="decimal"
            autoComplete="off"
            placeholder="0.00"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="category">Category</Label>
          <div className="relative">
            <select
              id="category"
              className={cn(fieldClass, "pr-10")}
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {selectOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
          </div>
          {kind === "expense" && category === SAVINGS_CATEGORY ? (
            <p className="text-sm text-muted">This counts toward the savings goal.</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="entry-date">Date</Label>
          <input
            id="entry-date"
            type="date"
            className={fieldClass}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="note">Note</Label>
          <Input
            id="note"
            maxLength={80}
            placeholder="Optional"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm text-expense">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{initial ? "Save changes" : "Save entry"}</Button>
        </div>
      </form>
    </Dialog>
  );
}
