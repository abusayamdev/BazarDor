import type { Product } from "@/types/product";

import { formatPrice, formatPercentage, formatUnit } from "@/lib/formatters";

interface PriceTickerItemProps {
  product: Product;
}

export default function PriceTickerItem({ product }: PriceTickerItemProps) {
  const { dir, pct } = product.change;

  const changeIcon = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

  // Figma ticker colors
  const changeColor =
    dir === "up"
      ? "text-error"
      : dir === "down"
        ? "text-success"
        : "text-base-content/50";

  const image = product.image?.trim();

  // The API usually provides an emoji.
  const emoji =
    image &&
    !image.startsWith("http") &&
    !image.startsWith("/") &&
    !image.startsWith("data:")
      ? image
      : product.categoryIcon || "🛒";

  return (
    <div
      className="
        flex h-full shrink-0
        items-center gap-2
        whitespace-nowrap
        text-xs sm:text-sm
      "
    >
      {/* Product Emoji */}
      <span aria-hidden="true" className="text-base">
        {emoji}
      </span>

      {/* Product Name */}
      <span className="font-medium text-base-content">{product.nameBn}</span>

      {/* Current Price */}
      <span className="text-base-content">
        {formatPrice(product.today)}
        {" টাকা/"}
        {formatUnit(product.unit)}
      </span>

      {/* Price Change */}
      <span
        className={`
          font-semibold ${changeColor}
        `}
      >
        {changeIcon} {formatPercentage(pct)}%
      </span>
    </div>
  );
}
