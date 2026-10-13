import { Cell, Pie, PieChart } from "recharts";
import type { Slice } from "@/lib/budget/money";

export function SpendPie({ slices }: { slices: Slice[] }) {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={slices}
        dataKey="cents"
        nameKey="label"
        cx="50%"
        cy="50%"
        innerRadius={48}
        outerRadius={74}
        paddingAngle={slices.length > 1 ? 2 : 0}
        stroke="var(--color-card)"
        strokeWidth={2}
        isAnimationActive={false}
        startAngle={90}
        endAngle={-270}
      >
        {slices.map((slice) => (
          <Cell key={slice.id} fill="var(--color-accent)" fillOpacity={slice.opacity} />
        ))}
      </Pie>
    </PieChart>
  );
}
