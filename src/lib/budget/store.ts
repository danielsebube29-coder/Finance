import { create } from "zustand";
import {
  makeSeed,
  readPersisted,
  type Draft,
  type Persisted,
  type Transaction,
} from "@/lib/budget/money";

const STORAGE_KEY = "northline.budget.v1";

type BudgetStore = Persisted & {
  ready: boolean;
  hydrate: () => void;
  addTransaction: (draft: Draft) => void;
  updateTransaction: (id: string, draft: Draft) => void;
  deleteTransaction: (id: string) => void;
  setGoal: (month: string, cents: number) => void;
  clearSample: () => void;
};

function snapshot(state: Persisted): Persisted {
  return {
    transactions: state.transactions,
    goals: state.goals,
    sample: state.sample,
  };
}

function commit(set: (partial: Partial<BudgetStore>) => void, next: Persisted) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Keep the in-memory ledger if storage is unavailable.
  }
  set({ ...next, ready: true });
}

export const useBudgetStore = create<BudgetStore>((set, get) => ({
  transactions: [],
  goals: {},
  sample: false,
  ready: false,
  hydrate: () => {
    if (get().ready || typeof window === "undefined") return;
    let next = makeSeed();
    let shouldWrite = true;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = readPersisted(raw);
        if (parsed) {
          next = parsed;
          shouldWrite = false;
        }
      }
    } catch {
      // Fall through to the sample month.
    }
    if (shouldWrite) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Sample still renders for this visit.
      }
    }
    set({ ...next, ready: true });
  },
  addTransaction: (draft) => {
    const tx: Transaction = { ...draft, id: crypto.randomUUID() };
    const current = snapshot(get());
    commit(set, {
      ...current,
      sample: false,
      transactions: [tx, ...current.transactions],
    });
  },
  updateTransaction: (id, draft) => {
    const current = snapshot(get());
    commit(set, {
      ...current,
      sample: false,
      transactions: current.transactions.map((tx) => (tx.id === id ? { ...draft, id } : tx)),
    });
  },
  deleteTransaction: (id) => {
    const current = snapshot(get());
    commit(set, {
      ...current,
      sample: false,
      transactions: current.transactions.filter((tx) => tx.id !== id),
    });
  },
  setGoal: (month, cents) => {
    const current = snapshot(get());
    commit(set, {
      ...current,
      goals: { ...current.goals, [month]: cents },
    });
  },
  clearSample: () => {
    const current = snapshot(get());
    commit(set, { ...current, sample: false, transactions: [] });
  },
}));
