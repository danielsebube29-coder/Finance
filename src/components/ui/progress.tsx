import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function Progress({
  value,
  label,
  className,
}: {
  value: number;
  label: string;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <ProgressPrimitive.Root
      value={clamped}
      max={100}
      aria-label={label}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-track", className)}
    >
      <ProgressPrimitive.Indicator
        className="bar-fill h-full w-full bg-accent"
        style={{ transform: `translateX(-${100 - clamped}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
