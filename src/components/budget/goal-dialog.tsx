import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { centsToInput, monthLabel, parseMoney } from "@/lib/budget/money";

export function GoalDialog({
  month,
  initialCents,
  onClose,
  onSubmit,
}: {
  month: string;
  initialCents: number;
  onClose: () => void;
  onSubmit: (cents: number) => void;
}) {
  const [amount, setAmount] = useState(centsToInput(initialCents));
  const [error, setError] = useState<string | null>(null);

  function save() {
    const cents = parseMoney(amount, true);
    if (cents == null) {
      setError("Enter a target like 800, or 0 to clear it.");
      return;
    }
    onSubmit(cents);
  }

  return (
    <Dialog
      title="Savings goal"
      description={`How much do you want to set aside in ${monthLabel(month)}? Use 0 to clear the goal.`}
      onClose={onClose}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          save();
        }}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="goal">Target</Label>
          <Input
            id="goal"
            inputMode="decimal"
            autoComplete="off"
            placeholder="0.00"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
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
          <Button type="submit">Save goal</Button>
        </div>
      </form>
    </Dialog>
  );
}
