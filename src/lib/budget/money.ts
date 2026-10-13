import { z } from "zod";

export type Kind = "income" | "expense";

export type Transaction = {
  id: string;
  kind: Kind;
  amount: number;
  category: string;
  date: string;
  note: string;
};

export type Draft = Omit<Transaction, "id">;

export type Category = {
  id: string;
  label: string;
  kind: Kind;
};

export const CATEGORIES: Category[] = [
  { id: "salary", label: "Salary", kind: "income" },
  { id: "freelance", label: "Freelance", kind: "income" },
  { id: "interest", label: "Interest", kind: "income" },
  { id: "gift", label: "Gift", kind: "income" },
  { id: "other-income", label: "Other", kind: "income" },
  { id: "housing", label: "Housing", kind: "expense" },
  { id: "food", label: "Food", kind: "expense" },
  { id: "transport", label: "Transport", kind: "expense" },
  { id: "utilities", label: "Utilities", kind: "expense" },
  { id: "health", label: "Health", kind: "expense" },
  { id: "fun", label: "Fun", kind: "expense" },
  { id: "shopping", label: "Shopping", kind: "expense" },
  { id: "savings", label: "Savings", kind: "expense" },
  { id: "other-expense", label: "Other", kind: "expense" },
];

export const SAVINGS_CATEGORY = "savings";
export const DEFAULT_GOAL = 80_000;
export const SLICE_OPACITY = [1, 0.86, 0.74, 0.62, 0.52, 0.44, 0.38, 0.32, 0.28];

const moneyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatMoney(cents: number) {
  return moneyFormat.format(cents / 100);
}

export function centsToInput(cents: number) {
  return (cents / 100).toFixed(2);
}

export function parseMoney(raw: string, allowZero = false): number | null {
  const cleaned = raw.trim().replace(/[$,]/g, "");
  if (!/^\d+(\.\d{0,2})?$/.test(cleaned)) return null;
  const [whole, frac = ""] = cleaned.split(".");
  const cents = Number(whole) * 100 + Number(frac.padEnd(2, "0"));
  if (!Number.isSafeInteger(cents)) return null;
  if (cents === 0 && !allowZero) return null;
  if (cents < 0 || cents > 99_999_999_99) return null;
  return cents;
}

export function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function monthKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

export function toISO(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function shiftMonth(key: string, delta: number) {
  const [year, month] = key.split("-").map(Number);
  return monthKey(new Date(year, month - 1 + delta, 1));
}

export function monthLabel(key: string) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function formatDay(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function daysInMonth(key: string) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month, 0).getDate();
}

export function isValidDate(iso: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [year, month, day] = iso.split("-").map(Number);
  if (year < 2000 || year > 2100) return false;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export function defaultDateForMonth(month: string, now = new Date()) {
  if (monthKey(now) === month) return toISO(now);
  return `${month}-01`;
}

export function categoriesFor(kind: Kind) {
  return CATEGORIES.filter((category) => category.kind === kind);
}

export function categoryLabel(id: string) {
  return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export function goalFor(goals: Record<string, number>, month: string) {
  return goals[month] ?? DEFAULT_GOAL;
}

export type Slice = {
  id: string;
  label: string;
  cents: number;
  shareLabel: string;
  opacity: number;
};

export type MonthSummary = {
  items: Transaction[];
  income: number;
  expenses: number;
  saved: number;
  remaining: number;
  goal: number;
  spendable: number;
  progress: number;
  slices: Slice[];
};

function shareLabel(cents: number, total: number) {
  if (total <= 0) return "0%";
  const pct = (cents / total) * 100;
  if (pct > 0 && pct < 1) return "<1%";
  return `${Math.round(pct)}%`;
}

export function summarize(
  transactions: Transaction[],
  month: string,
  goals: Record<string, number>,
): MonthSummary {
  const items = transactions.filter((tx) => tx.date.slice(0, 7) === month);
  let income = 0;
  let expenses = 0;
  let saved = 0;
  const byCategory = new Map<string, number>();

  for (const tx of items) {
    if (tx.kind === "income") {
      income += tx.amount;
      continue;
    }
    expenses += tx.amount;
    byCategory.set(tx.category, (byCategory.get(tx.category) ?? 0) + tx.amount);
    if (tx.category === SAVINGS_CATEGORY) saved += tx.amount;
  }

  const goal = goalFor(goals, month);
  const remaining = income - expenses;
  const stillNeeded = Math.max(0, goal - saved);
  const spendable = remaining - stillNeeded;
  const progress = goal > 0 ? Math.min(100, Math.round((saved / goal) * 100)) : 0;
  const slices = [...byCategory.entries()]
    .map(([id, cents]) => ({ id, cents }))
    .sort((a, b) => b.cents - a.cents || a.id.localeCompare(b.id))
    .map((slice, index) => ({
      id: slice.id,
      label: categoryLabel(slice.id),
      cents: slice.cents,
      shareLabel: shareLabel(slice.cents, expenses),
      opacity: SLICE_OPACITY[index] ?? 0.28,
    }));

  return { items, income, expenses, saved, remaining, goal, spendable, progress, slices };
}

export function paceCopy(summary: MonthSummary, month: string, now = new Date()) {
  if (summary.remaining < 0) {
    return `Spending is ${formatMoney(-summary.remaining)} over income.`;
  }
  if (summary.goal <= 0) {
    return "No savings goal this month. Set one to see what you can still spend.";
  }
  if (summary.saved >= summary.goal) {
    return `Savings goal met. ${formatMoney(summary.remaining)} is still unspent.`;
  }
  const short = summary.goal - summary.saved;
  if (summary.spendable < 0) {
    return `${formatMoney(short)} still to save, ${formatMoney(-summary.spendable)} more than what is left.`;
  }
  if (monthKey(now) === month) {
    const daysLeft = Math.max(1, daysInMonth(month) - now.getDate() + 1);
    const perDay = Math.floor(summary.spendable / daysLeft / 100) * 100;
    const dayWord = daysLeft === 1 ? "day" : "days";
    if (perDay <= 0) {
      return `${formatMoney(summary.spendable)} left after the savings goal, with ${daysLeft} ${dayWord} to go.`;
    }
    return `${formatMoney(perDay)} a day for ${daysLeft} ${dayWord} still hits the savings goal.`;
  }
  if (month > monthKey(now)) {
    return `${formatMoney(short)} to set aside to hit the savings goal.`;
  }
  return `${formatMoney(short)} short of the savings goal.`;
}

export type DateGroup = { date: string; items: Transaction[] };

export function groupByDate(list: Transaction[]): DateGroup[] {
  const sorted = [...list].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return b.amount - a.amount;
  });
  const groups: DateGroup[] = [];
  for (const tx of sorted) {
    const last = groups[groups.length - 1];
    if (!last || last.date !== tx.date) groups.push({ date: tx.date, items: [tx] });
    else last.items.push(tx);
  }
  return groups;
}

const TxSchema = z.object({
  id: z.string().min(1).max(80),
  kind: z.enum(["income", "expense"]),
  amount: z.number().int().positive().max(99_999_999_99),
  category: z.string().min(1).max(40),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  note: z.string().max(80),
});

export const PersistedSchema = z.object({
  transactions: z.array(TxSchema),
  goals: z.record(z.string(), z.number().int().nonnegative().max(99_999_999_99)),
  sample: z.boolean().optional(),
});

export type Persisted = {
  transactions: Transaction[];
  goals: Record<string, number>;
  sample: boolean;
};

function isoInMonth(month: string, day: number) {
  const [year, monthNumber] = month.split("-").map(Number);
  const last = new Date(year, monthNumber, 0).getDate();
  return `${month}-${pad(Math.min(day, last))}`;
}

export function makeSeed(now = new Date()): Persisted {
  const month = monthKey(now);
  const previous = shiftMonth(month, -1);
  const transactions: Transaction[] = [
    { id: "seed-salary", kind: "income", amount: 520_000, category: "salary", date: isoInMonth(month, 1), note: "Payday" },
    { id: "seed-rent", kind: "expense", amount: 185_000, category: "housing", date: isoInMonth(month, 1), note: "Rent" },
    { id: "seed-market", kind: "expense", amount: 8_640, category: "food", date: isoInMonth(month, 2), note: "Market run" },
    { id: "seed-pass", kind: "expense", amount: 12_800, category: "transport", date: isoInMonth(month, 3), note: "Monthly pass" },
    { id: "seed-groceries", kind: "expense", amount: 6_230, category: "food", date: isoInMonth(month, 4), note: "Weekday groceries" },
    { id: "seed-electric", kind: "expense", amount: 9_412, category: "utilities", date: isoInMonth(month, 5), note: "Electric" },
    { id: "seed-freelance", kind: "income", amount: 64_000, category: "freelance", date: isoInMonth(month, 8), note: "Logo revisions" },
    { id: "seed-pharmacy", kind: "expense", amount: 4_218, category: "health", date: isoInMonth(month, 9), note: "Pharmacy" },
    { id: "seed-dinner", kind: "expense", amount: 6_700, category: "fun", date: isoInMonth(month, 11), note: "Dinner out" },
    { id: "seed-notebook", kind: "expense", amount: 2_499, category: "shopping", date: isoInMonth(month, 12), note: "Notebook" },
    { id: "seed-save", kind: "expense", amount: 40_000, category: "savings", date: isoInMonth(month, 12), note: "Transfer to savings" },
    { id: "seed-prev-salary", kind: "income", amount: 520_000, category: "salary", date: isoInMonth(previous, 1), note: "Payday" },
    { id: "seed-prev-rent", kind: "expense", amount: 185_000, category: "housing", date: isoInMonth(previous, 1), note: "Rent" },
    { id: "seed-prev-pass", kind: "expense", amount: 12_800, category: "transport", date: isoInMonth(previous, 3), note: "Monthly pass" },
    { id: "seed-prev-food", kind: "expense", amount: 14_200, category: "food", date: isoInMonth(previous, 6), note: "Groceries" },
    { id: "seed-prev-util", kind: "expense", amount: 8_800, category: "utilities", date: isoInMonth(previous, 7), note: "Electric" },
    { id: "seed-prev-save", kind: "expense", amount: 60_000, category: "savings", date: isoInMonth(previous, 15), note: "Transfer to savings" },
    { id: "seed-prev-fun", kind: "expense", amount: 5_400, category: "fun", date: isoInMonth(previous, 20), note: "Night out" },
  ];

  return {
    transactions,
    goals: { [month]: DEFAULT_GOAL, [previous]: 60_000 },
    sample: true,
  };
}

export function readPersisted(raw: string): Persisted | null {
  try {
    const parsed = PersistedSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return null;
    return {
      transactions: parsed.data.transactions,
      goals: parsed.data.goals,
      sample: parsed.data.sample ?? false,
    };
  } catch {
    return null;
  }
}
