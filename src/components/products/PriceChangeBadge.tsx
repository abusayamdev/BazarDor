
import type { PriceDirection } from "@/types/product";
import { formatPercentage } from "@/lib/formatters";

interface PriceChangeBadgeProps {
  direction: PriceDirection;
  percentage: number;
}

export default function PriceChangeBadge({
  direction,
  percentage,
}: PriceChangeBadgeProps) {
  const isUp = direction === "up";
  const isDown = direction === "down";

  const icon = isUp ? "▲" : isDown ? "▼" : "—";

  const colorClass = isUp
    ? "bg-success/10 text-success"
    : isDown
      ? "bg-error/10 text-error"
      : "bg-base-200 text-base-content/60";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${colorClass}`}
    >
      <span aria-hidden="true">{icon}</span>
      {formatPercentage(percentage)}%
    </span>
  );
}
