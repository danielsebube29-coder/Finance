import {
  Briefcase,
  Bus,
  Circle,
  Gift,
  HeartPulse,
  Home,
  Laptop,
  Landmark,
  PiggyBank,
  ShoppingBag,
  Ticket,
  UtensilsCrossed,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  salary: Briefcase,
  freelance: Laptop,
  interest: Landmark,
  gift: Gift,
  "other-income": Wallet,
  housing: Home,
  food: UtensilsCrossed,
  transport: Bus,
  utilities: Zap,
  health: HeartPulse,
  fun: Ticket,
  shopping: ShoppingBag,
  savings: PiggyBank,
  "other-expense": Circle,
};

export function CategoryIcon({ id, className }: { id: string; className?: string }) {
  const Icon = ICONS[id] ?? Circle;
  return <Icon className={className} aria-hidden />;
}
