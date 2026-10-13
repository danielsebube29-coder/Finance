import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { a as AlertDialogDescription, b as require_react, c as AlertDialogTitle, d as DialogContent, f as DialogDescription, h as DialogTitle, i as AlertDialogContent, l as Dialog$1, m as DialogPortal, n as AlertDialogAction, o as AlertDialogOverlay, p as DialogOverlay, r as AlertDialogCancel, s as AlertDialogPortal, t as AlertDialog, u as DialogClose, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { S as Briefcase, _ as Circle, b as ChevronDown, c as ShoppingBag, d as Pencil, f as Laptop, g as Gift, h as HeartPulse, i as UtensilsCrossed, l as Plus, m as House, n as X, o as Trash2, p as Landmark, r as Wallet, s as Ticket, t as Zap, u as PiggyBank, v as ChevronRight, x as Bus, y as ChevronLeft } from "../_libs/lucide-react.mjs";
import { a as number, c as string, n as array, o as object, r as boolean, s as record, t as _enum } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as ProgressIndicator, t as Progress$1 } from "../_libs/radix-ui__react-progress.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5aoeeNi.js
var routes_C5aoeeNi_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	salary: Briefcase,
	freelance: Laptop,
	interest: Landmark,
	gift: Gift,
	"other-income": Wallet,
	housing: House,
	food: UtensilsCrossed,
	transport: Bus,
	utilities: Zap,
	health: HeartPulse,
	fun: Ticket,
	shopping: ShoppingBag,
	savings: PiggyBank,
	"other-expense": Circle
};
function CategoryIcon({ id, className }) {
	const Icon = ICONS[id] ?? Circle;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		"aria-hidden": true
	});
}
function Dialog({ title, description, onClose, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open: true,
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay-fade fixed inset-0 z-50 bg-fg/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "dialog-panel dialog-pop fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-card outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl leading-tight text-fg",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						"aria-label": "Close",
						className: "pressable -mr-2 -mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-track hover:text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							"aria-hidden": true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-2 text-sm text-muted",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children
				})
			]
		})] })
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			outline: "border border-border-strong bg-card text-fg hover:bg-track",
			ghost: "bg-transparent text-fg hover:bg-track",
			danger: "border border-expense/30 bg-card text-expense hover:bg-expense/10"
		},
		size: {
			default: "min-h-11 px-4",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border-strong bg-card px-3 text-base text-fg outline-none", "placeholder:text-subtle focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
var CATEGORIES = [
	{
		id: "salary",
		label: "Salary",
		kind: "income"
	},
	{
		id: "freelance",
		label: "Freelance",
		kind: "income"
	},
	{
		id: "interest",
		label: "Interest",
		kind: "income"
	},
	{
		id: "gift",
		label: "Gift",
		kind: "income"
	},
	{
		id: "other-income",
		label: "Other",
		kind: "income"
	},
	{
		id: "housing",
		label: "Housing",
		kind: "expense"
	},
	{
		id: "food",
		label: "Food",
		kind: "expense"
	},
	{
		id: "transport",
		label: "Transport",
		kind: "expense"
	},
	{
		id: "utilities",
		label: "Utilities",
		kind: "expense"
	},
	{
		id: "health",
		label: "Health",
		kind: "expense"
	},
	{
		id: "fun",
		label: "Fun",
		kind: "expense"
	},
	{
		id: "shopping",
		label: "Shopping",
		kind: "expense"
	},
	{
		id: "savings",
		label: "Savings",
		kind: "expense"
	},
	{
		id: "other-expense",
		label: "Other",
		kind: "expense"
	}
];
var DEFAULT_GOAL = 8e4;
var SLICE_OPACITY = [
	1,
	.86,
	.74,
	.62,
	.52,
	.44,
	.38,
	.32,
	.28
];
var moneyFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
});
function formatMoney(cents) {
	return moneyFormat.format(cents / 100);
}
function centsToInput(cents) {
	return (cents / 100).toFixed(2);
}
function parseMoney(raw, allowZero = false) {
	const cleaned = raw.trim().replace(/[$,]/g, "");
	if (!/^\d+(\.\d{0,2})?$/.test(cleaned)) return null;
	const [whole, frac = ""] = cleaned.split(".");
	const cents = Number(whole) * 100 + Number(frac.padEnd(2, "0"));
	if (!Number.isSafeInteger(cents)) return null;
	if (cents === 0 && !allowZero) return null;
	if (cents < 0 || cents > 9999999999) return null;
	return cents;
}
function pad(value) {
	return String(value).padStart(2, "0");
}
function monthKey(date) {
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}
function toISO(date) {
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function shiftMonth(key, delta) {
	const [year, month] = key.split("-").map(Number);
	return monthKey(new Date(year, month - 1 + delta, 1));
}
function monthLabel(key) {
	const [year, month] = key.split("-").map(Number);
	return new Date(year, month - 1, 1).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric"
	});
}
function formatDay(iso) {
	const [year, month, day] = iso.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
function daysInMonth(key) {
	const [year, month] = key.split("-").map(Number);
	return new Date(year, month, 0).getDate();
}
function isValidDate(iso) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
	const [year, month, day] = iso.split("-").map(Number);
	if (year < 2e3 || year > 2100) return false;
	const date = new Date(year, month - 1, day);
	return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
function defaultDateForMonth(month, now = /* @__PURE__ */ new Date()) {
	if (monthKey(now) === month) return toISO(now);
	return `${month}-01`;
}
function categoriesFor(kind) {
	return CATEGORIES.filter((category) => category.kind === kind);
}
function categoryLabel(id) {
	return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
function goalFor(goals, month) {
	return goals[month] ?? 8e4;
}
function shareLabel(cents, total) {
	if (total <= 0) return "0%";
	const pct = cents / total * 100;
	if (pct > 0 && pct < 1) return "<1%";
	return `${Math.round(pct)}%`;
}
function summarize(transactions, month, goals) {
	const items = transactions.filter((tx) => tx.date.slice(0, 7) === month);
	let income = 0;
	let expenses = 0;
	let saved = 0;
	const byCategory = /* @__PURE__ */ new Map();
	for (const tx of items) {
		if (tx.kind === "income") {
			income += tx.amount;
			continue;
		}
		expenses += tx.amount;
		byCategory.set(tx.category, (byCategory.get(tx.category) ?? 0) + tx.amount);
		if (tx.category === "savings") saved += tx.amount;
	}
	const goal = goalFor(goals, month);
	const remaining = income - expenses;
	const spendable = remaining - Math.max(0, goal - saved);
	const progress = goal > 0 ? Math.min(100, Math.round(saved / goal * 100)) : 0;
	const slices = [...byCategory.entries()].map(([id, cents]) => ({
		id,
		cents
	})).sort((a, b) => b.cents - a.cents || a.id.localeCompare(b.id)).map((slice, index) => ({
		id: slice.id,
		label: categoryLabel(slice.id),
		cents: slice.cents,
		shareLabel: shareLabel(slice.cents, expenses),
		opacity: SLICE_OPACITY[index] ?? .28
	}));
	return {
		items,
		income,
		expenses,
		saved,
		remaining,
		goal,
		spendable,
		progress,
		slices
	};
}
function paceCopy(summary, month, now = /* @__PURE__ */ new Date()) {
	if (summary.remaining < 0) return `Spending is ${formatMoney(-summary.remaining)} over income.`;
	if (summary.goal <= 0) return "No savings goal this month. Set one to see what you can still spend.";
	if (summary.saved >= summary.goal) return `Savings goal met. ${formatMoney(summary.remaining)} is still unspent.`;
	const short = summary.goal - summary.saved;
	if (summary.spendable < 0) return `${formatMoney(short)} still to save, ${formatMoney(-summary.spendable)} more than what is left.`;
	if (monthKey(now) === month) {
		const daysLeft = Math.max(1, daysInMonth(month) - now.getDate() + 1);
		const perDay = Math.floor(summary.spendable / daysLeft / 100) * 100;
		const dayWord = daysLeft === 1 ? "day" : "days";
		if (perDay <= 0) return `${formatMoney(summary.spendable)} left after the savings goal, with ${daysLeft} ${dayWord} to go.`;
		return `${formatMoney(perDay)} a day for ${daysLeft} ${dayWord} still hits the savings goal.`;
	}
	if (month > monthKey(now)) return `${formatMoney(short)} to set aside to hit the savings goal.`;
	return `${formatMoney(short)} short of the savings goal.`;
}
function groupByDate(list) {
	const sorted = [...list].sort((a, b) => {
		if (a.date !== b.date) return a.date < b.date ? 1 : -1;
		return b.amount - a.amount;
	});
	const groups = [];
	for (const tx of sorted) {
		const last = groups[groups.length - 1];
		if (!last || last.date !== tx.date) groups.push({
			date: tx.date,
			items: [tx]
		});
		else last.items.push(tx);
	}
	return groups;
}
var TxSchema = object({
	id: string().min(1).max(80),
	kind: _enum(["income", "expense"]),
	amount: number().int().positive().max(9999999999),
	category: string().min(1).max(40),
	date: string().regex(/^\d{4}-\d{2}-\d{2}$/),
	note: string().max(80)
});
var PersistedSchema = object({
	transactions: array(TxSchema),
	goals: record(string(), number().int().nonnegative().max(9999999999)),
	sample: boolean().optional()
});
function isoInMonth(month, day) {
	const [year, monthNumber] = month.split("-").map(Number);
	const last = new Date(year, monthNumber, 0).getDate();
	return `${month}-${pad(Math.min(day, last))}`;
}
function makeSeed(now = /* @__PURE__ */ new Date()) {
	const month = monthKey(now);
	const previous = shiftMonth(month, -1);
	return {
		transactions: [
			{
				id: "seed-salary",
				kind: "income",
				amount: 52e4,
				category: "salary",
				date: isoInMonth(month, 1),
				note: "Payday"
			},
			{
				id: "seed-rent",
				kind: "expense",
				amount: 185e3,
				category: "housing",
				date: isoInMonth(month, 1),
				note: "Rent"
			},
			{
				id: "seed-market",
				kind: "expense",
				amount: 8640,
				category: "food",
				date: isoInMonth(month, 2),
				note: "Market run"
			},
			{
				id: "seed-pass",
				kind: "expense",
				amount: 12800,
				category: "transport",
				date: isoInMonth(month, 3),
				note: "Monthly pass"
			},
			{
				id: "seed-groceries",
				kind: "expense",
				amount: 6230,
				category: "food",
				date: isoInMonth(month, 4),
				note: "Weekday groceries"
			},
			{
				id: "seed-electric",
				kind: "expense",
				amount: 9412,
				category: "utilities",
				date: isoInMonth(month, 5),
				note: "Electric"
			},
			{
				id: "seed-freelance",
				kind: "income",
				amount: 64e3,
				category: "freelance",
				date: isoInMonth(month, 8),
				note: "Logo revisions"
			},
			{
				id: "seed-pharmacy",
				kind: "expense",
				amount: 4218,
				category: "health",
				date: isoInMonth(month, 9),
				note: "Pharmacy"
			},
			{
				id: "seed-dinner",
				kind: "expense",
				amount: 6700,
				category: "fun",
				date: isoInMonth(month, 11),
				note: "Dinner out"
			},
			{
				id: "seed-notebook",
				kind: "expense",
				amount: 2499,
				category: "shopping",
				date: isoInMonth(month, 12),
				note: "Notebook"
			},
			{
				id: "seed-save",
				kind: "expense",
				amount: 4e4,
				category: "savings",
				date: isoInMonth(month, 12),
				note: "Transfer to savings"
			},
			{
				id: "seed-prev-salary",
				kind: "income",
				amount: 52e4,
				category: "salary",
				date: isoInMonth(previous, 1),
				note: "Payday"
			},
			{
				id: "seed-prev-rent",
				kind: "expense",
				amount: 185e3,
				category: "housing",
				date: isoInMonth(previous, 1),
				note: "Rent"
			},
			{
				id: "seed-prev-pass",
				kind: "expense",
				amount: 12800,
				category: "transport",
				date: isoInMonth(previous, 3),
				note: "Monthly pass"
			},
			{
				id: "seed-prev-food",
				kind: "expense",
				amount: 14200,
				category: "food",
				date: isoInMonth(previous, 6),
				note: "Groceries"
			},
			{
				id: "seed-prev-util",
				kind: "expense",
				amount: 8800,
				category: "utilities",
				date: isoInMonth(previous, 7),
				note: "Electric"
			},
			{
				id: "seed-prev-save",
				kind: "expense",
				amount: 6e4,
				category: "savings",
				date: isoInMonth(previous, 15),
				note: "Transfer to savings"
			},
			{
				id: "seed-prev-fun",
				kind: "expense",
				amount: 5400,
				category: "fun",
				date: isoInMonth(previous, 20),
				note: "Night out"
			}
		],
		goals: {
			[month]: DEFAULT_GOAL,
			[previous]: 6e4
		},
		sample: true
	};
}
function readPersisted(raw) {
	try {
		const parsed = PersistedSchema.safeParse(JSON.parse(raw));
		if (!parsed.success) return null;
		return {
			transactions: parsed.data.transactions,
			goals: parsed.data.goals,
			sample: parsed.data.sample ?? false
		};
	} catch {
		return null;
	}
}
var fieldClass = "h-11 w-full appearance-none rounded-md border border-border-strong bg-card px-3 text-base text-fg outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";
function EntryDialog({ initial, defaultDate, onClose, onSubmit }) {
	const [kind, setKind] = (0, import_react.useState)(initial?.kind ?? "expense");
	const [amount, setAmount] = (0, import_react.useState)(initial ? centsToInput(initial.amount) : "");
	const [category, setCategory] = (0, import_react.useState)(initial?.category ?? "food");
	const [date, setDate] = (0, import_react.useState)(initial?.date ?? defaultDate);
	const [note, setNote] = (0, import_react.useState)(initial?.note ?? "");
	const [error, setError] = (0, import_react.useState)(null);
	const options = categoriesFor(kind);
	const selectOptions = options.some((item) => item.id === category) ? options : [{
		id: category,
		label: categoryLabel(category),
		kind
	}, ...options];
	function chooseKind(next) {
		setKind(next);
		if (!categoriesFor(next).some((item) => item.id === category)) setCategory(next === "expense" ? "food" : "salary");
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
			note: note.trim()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		title: initial ? "Edit entry" : "Add entry",
		description: "Income adds to the month. Expenses, including savings transfers, come off the remaining balance.",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-col gap-4",
			onSubmit: (event) => {
				event.preventDefault();
				save();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "radiogroup",
					"aria-label": "Entry type",
					className: "grid grid-cols-2 gap-1 rounded-lg bg-track p-1",
					children: ["expense", "income"].map((value) => {
						const selected = kind === value;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "radio",
							"aria-checked": selected,
							className: cn("pressable min-h-11 rounded-md text-sm font-medium", selected ? "bg-card text-fg shadow-card" : "text-muted"),
							onClick: () => chooseKind(value),
							children: value === "expense" ? "Expense" : "Income"
						}, value);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "amount",
						children: "Amount"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "amount",
						inputMode: "decimal",
						autoComplete: "off",
						placeholder: "0.00",
						value: amount,
						onChange: (event) => setAmount(event.target.value),
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "category",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "category",
								className: cn(fieldClass, "pr-10"),
								value: category,
								onChange: (event) => setCategory(event.target.value),
								children: selectOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.id,
									children: item.label
								}, item.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted",
								"aria-hidden": true
							})]
						}),
						kind === "expense" && category === "savings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "This counts toward the savings goal."
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "entry-date",
						children: "Date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "entry-date",
						type: "date",
						className: fieldClass,
						value: date,
						onChange: (event) => setDate(event.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "note",
						children: "Note"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "note",
						maxLength: 80,
						placeholder: "Optional",
						value: note,
						onChange: (event) => setNote(event.target.value)
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-expense",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: initial ? "Save changes" : "Save entry"
					})]
				})
			]
		})
	});
}
function GoalDialog({ month, initialCents, onClose, onSubmit }) {
	const [amount, setAmount] = (0, import_react.useState)(centsToInput(initialCents));
	const [error, setError] = (0, import_react.useState)(null);
	function save() {
		const cents = parseMoney(amount, true);
		if (cents == null) {
			setError("Enter a target like 800, or 0 to clear it.");
			return;
		}
		onSubmit(cents);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		title: "Savings goal",
		description: `How much do you want to set aside in ${monthLabel(month)}? Use 0 to clear the goal.`,
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-col gap-4",
			onSubmit: (event) => {
				event.preventDefault();
				save();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "goal",
						children: "Target"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "goal",
						inputMode: "decimal",
						autoComplete: "off",
						placeholder: "0.00",
						value: amount,
						onChange: (event) => setAmount(event.target.value),
						autoFocus: true
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-expense",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save goal"
					})]
				})
			]
		})
	});
}
function SpendChart({ slices, total }) {
	const [PieView, setPieView] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./spend-pie-KI-GelHw.mjs").then((mod) => {
			if (live) setPieView(() => mod.SpendPie);
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-fg",
				children: "Spending by category"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-fg tabular-nums",
				children: formatMoney(total)
			})]
		}), slices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-8 text-sm text-muted",
			children: "No spending in this month yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-40 w-40 shrink-0 place-items-center",
				"aria-hidden": true,
				children: PieView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieView, { slices }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-32 rounded-full border-8 border-track" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "w-full min-w-0 flex-1 divide-y divide-border",
				children: slices.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 shrink-0 rounded-full bg-accent",
							style: { opacity: slice.opacity }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-sm text-fg",
							children: slice.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 shrink-0 text-right text-sm text-muted tabular-nums",
							children: slice.shareLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 shrink-0 text-right text-sm font-medium text-fg tabular-nums",
							children: formatMoney(slice.cents)
						})
					]
				}, slice.id))
			})]
		})]
	});
}
function ConfirmDialog({ title, description, confirmLabel, onConfirm, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
		open: true,
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, { className: "overlay-fade fixed inset-0 z-50 bg-fg/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
			className: "dialog-panel dialog-pop fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-card outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
					className: "font-display text-2xl leading-tight text-fg",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
					className: "mt-2 text-sm text-muted",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
						className: buttonVariants({ variant: "outline" }),
						children: "Keep"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						className: buttonVariants({ variant: "danger" }),
						onClick: onConfirm,
						children: confirmLabel
					})]
				})
			]
		})] })
	});
}
function Progress({ value, label, className }) {
	const clamped = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
		value: clamped,
		max: 100,
		"aria-label": label,
		className: cn("relative h-2 w-full overflow-hidden rounded-full bg-track", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
			className: "bar-fill h-full w-full bg-accent",
			style: { transform: `translateX(-${100 - clamped}%)` }
		})
	});
}
var STORAGE_KEY = "northline.budget.v1";
function snapshot(state) {
	return {
		transactions: state.transactions,
		goals: state.goals,
		sample: state.sample
	};
}
function commit(set, next) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	} catch {}
	set({
		...next,
		ready: true
	});
}
var useBudgetStore = create((set, get) => ({
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
		} catch {}
		if (shouldWrite) try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		} catch {}
		set({
			...next,
			ready: true
		});
	},
	addTransaction: (draft) => {
		const tx = {
			...draft,
			id: crypto.randomUUID()
		};
		const current = snapshot(get());
		commit(set, {
			...current,
			sample: false,
			transactions: [tx, ...current.transactions]
		});
	},
	updateTransaction: (id, draft) => {
		const current = snapshot(get());
		commit(set, {
			...current,
			sample: false,
			transactions: current.transactions.map((tx) => tx.id === id ? {
				...draft,
				id
			} : tx)
		});
	},
	deleteTransaction: (id) => {
		const current = snapshot(get());
		commit(set, {
			...current,
			sample: false,
			transactions: current.transactions.filter((tx) => tx.id !== id)
		});
	},
	setGoal: (month, cents) => {
		const current = snapshot(get());
		commit(set, {
			...current,
			goals: {
				...current.goals,
				[month]: cents
			}
		});
	},
	clearSample: () => {
		commit(set, {
			...snapshot(get()),
			sample: false,
			transactions: []
		});
	}
}));
function Planner() {
	const transactions = useBudgetStore((state) => state.transactions);
	const goals = useBudgetStore((state) => state.goals);
	const sample = useBudgetStore((state) => state.sample);
	const addTransaction = useBudgetStore((state) => state.addTransaction);
	const updateTransaction = useBudgetStore((state) => state.updateTransaction);
	const deleteTransaction = useBudgetStore((state) => state.deleteTransaction);
	const setGoal = useBudgetStore((state) => state.setGoal);
	const clearSample = useBudgetStore((state) => state.clearSample);
	const [month, setMonth] = (0, import_react.useState)(() => monthKey(/* @__PURE__ */ new Date()));
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [editor, setEditor] = (0, import_react.useState)({ type: "closed" });
	const summary = (0, import_react.useMemo)(() => summarize(transactions, month, goals), [
		transactions,
		month,
		goals
	]);
	const pace = paceCopy(summary, month);
	const visible = summary.items.filter((tx) => filter === "all" ? true : tx.kind === filter);
	const groups = groupByDate(visible);
	const defaultDate = defaultDateForMonth(month);
	function saveEntry(draft) {
		if (editor.type === "edit") updateTransaction(editor.tx.id, draft);
		else addTransaction(draft);
		setMonth(draft.date.slice(0, 7));
		setEditor({ type: "closed" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-none text-fg italic",
						children: "Northline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 hidden text-sm text-muted sm:block",
						children: "Month by month, what is left."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditor({ type: "create" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}), "Add entry"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full items-center rounded-lg bg-track p-1 sm:w-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pressable inline-flex size-11 items-center justify-center rounded-md text-fg hover:bg-card",
							"aria-label": "Previous month",
							onClick: () => setMonth((current) => shiftMonth(current, -1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 flex-1 px-2 text-center font-display text-xl text-fg sm:min-w-48 sm:flex-none",
							children: monthLabel(month)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pressable inline-flex size-11 items-center justify-center rounded-md text-fg hover:bg-card",
							"aria-label": "Next month",
							onClick: () => setMonth((current) => shiftMonth(current, 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-5",
								"aria-hidden": true
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium text-muted",
						children: "Remaining balance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2 font-sans text-4xl leading-none font-medium tracking-tight tabular-nums sm:text-5xl", summary.remaining < 0 ? "text-expense" : "text-fg"),
						"aria-live": "polite",
						children: formatMoney(summary.remaining)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted tabular-nums",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-income",
								children: [formatMoney(summary.income), " income"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-expense",
								children: [formatMoney(summary.expenses), " spent"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Income minus every expense, savings included."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 border-t border-border pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: ["Savings goal", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-base font-medium text-fg tabular-nums",
										children: [formatMoney(summary.saved), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-normal text-muted",
											children: [" of ", formatMoney(summary.goal)]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "pressable min-h-11 shrink-0 px-2 text-sm font-medium text-accent",
									onClick: () => setEditor({ type: "goal" }),
									children: summary.goal > 0 ? "Adjust" : "Set goal"
								})]
							}),
							summary.goal > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								className: "mt-3",
								value: summary.progress,
								label: `Saved ${summary.progress} percent of the savings goal`
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: pace
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid items-start gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendChart, {
					slices: summary.slices,
					total: summary.expenses
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: "Entries"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted tabular-nums",
								children: [
									visible.length,
									" ",
									visible.length === 1 ? "entry" : "entries"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-label": "Filter entries",
							className: "mt-4 grid grid-cols-3 gap-1 rounded-lg bg-track p-1",
							children: [
								["all", "All"],
								["income", "Income"],
								["expense", "Expenses"]
							].map(([value, label]) => {
								const selected = filter === value;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "radio",
									"aria-checked": selected,
									className: cn("pressable min-h-11 rounded-md text-sm font-medium", selected ? "bg-card text-fg shadow-card" : "text-muted"),
									onClick: () => setFilter(value),
									children: label
								}, value);
							})
						}),
						groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2 py-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-fg",
									children: "No entries this month"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-2 max-w-sm text-sm text-muted",
									children: "Add income and expenses to see what is left, and how spending splits by category."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-5",
									onClick: () => setEditor({ type: "create" }),
									children: "Add entry"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "pt-4 text-sm font-medium text-muted",
								children: formatDay(group.date)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: group.items.map((tx) => {
								const label = categoryLabel(tx.category);
								const named = `${label}${tx.note ? `, ${tx.note}` : ""} on ${formatDay(tx.date)}`;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 border-b border-border py-2 last:border-b-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-track text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
											id: tx.category,
											className: "size-4"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium text-fg",
												children: label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: cn("shrink-0 text-sm font-medium tabular-nums", tx.kind === "income" ? "text-income" : "text-expense"),
												children: [tx.kind === "income" ? "+" : "−", formatMoney(tx.amount)]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "min-w-0 flex-1 truncate text-sm text-muted",
												children: tx.note || "No note"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "pressable inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-track hover:text-fg",
													"aria-label": `Edit ${named}`,
													onClick: () => setEditor({
														type: "edit",
														tx
													}),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
														className: "size-4",
														"aria-hidden": true
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "pressable inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-track hover:text-expense",
													"aria-label": `Delete ${named}`,
													onClick: () => setEditor({
														type: "delete",
														tx
													}),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
														className: "size-4",
														"aria-hidden": true
													})
												})]
											})]
										})]
									})]
								}, tx.id);
							}) })] }, group.date))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: sample ? "Sample entries stay on this device." : "Entries stay on this device."
						}),
						sample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pressable min-h-11 text-sm font-medium text-muted underline-offset-4 hover:text-fg hover:underline",
							onClick: () => setEditor({ type: "clear" }),
							children: "Clear sample entries"
						}) : null
					]
				})]
			}),
			editor.type === "create" || editor.type === "edit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryDialog, {
				initial: editor.type === "edit" ? editor.tx : null,
				defaultDate,
				onClose: () => setEditor({ type: "closed" }),
				onSubmit: saveEntry
			}, editor.type === "edit" ? editor.tx.id : "create") : null,
			editor.type === "goal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalDialog, {
				month,
				initialCents: summary.goal,
				onClose: () => setEditor({ type: "closed" }),
				onSubmit: (cents) => {
					setGoal(month, cents);
					setEditor({ type: "closed" });
				}
			}) : null,
			editor.type === "delete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				title: "Delete this entry?",
				description: `${categoryLabel(editor.tx.category)}${editor.tx.note ? `, ${editor.tx.note}` : ""} · ${formatDay(editor.tx.date)} · ${formatMoney(editor.tx.amount)}`,
				confirmLabel: "Delete",
				onClose: () => setEditor({ type: "closed" }),
				onConfirm: () => {
					deleteTransaction(editor.tx.id);
					setEditor({ type: "closed" });
				}
			}) : null,
			editor.type === "clear" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				title: "Clear sample entries?",
				description: "This removes the sample income and expenses. Your savings goal stays, and anything you add next is kept on this device.",
				confirmLabel: "Clear sample",
				onClose: () => setEditor({ type: "closed" }),
				onConfirm: () => {
					clearSample();
					setEditor({ type: "closed" });
				}
			}) : null
		]
	});
}
function Home() {
	const ready = useBudgetStore((state) => state.ready);
	const hydrate = useBudgetStore((state) => state.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-4 pt-6 sm:px-6 sm:pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl leading-none text-fg italic",
			children: "Northline"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Opening this month."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Planner, {});
}
//#endregion
export { Home as component, routes_C5aoeeNi_exports as t };
