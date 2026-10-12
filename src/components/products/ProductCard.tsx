
import Link from "next/link";

import type { Product } from "@/types/product";
import { formatPrice, formatUnit } from "@/lib/formatters";

import PriceChangeBadge from "./PriceChangeBadge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const image = product.image?.trim();

  const emoji =
    image &&
    !image.startsWith("http") &&
    !image.startsWith("/") &&
    !image.startsWith("data:")
      ? image
      : product.categoryIcon || "🛒";

  return (
    <Link
      href={`/product/${product.id}`}
      aria-label={`${product.nameBn} এর বিস্তারিত দেখুন`}
      className="group flex h-full flex-col rounded-xl border border-base-300 bg-base-100 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
    >
      <div className="flex h-24 items-center justify-center rounded-xl bg-base-200">
        <span aria-hidden="true" className="text-5xl">
          {emoji}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-base-content transition-colors group-hover:text-primary">
          {product.nameBn}
        </h3>

        <p className="mt-1 text-sm text-base-content/60">
          প্রতি {formatUnit(product.unit)}
        </p>
      </div>

      <div className="mt-auto pt-5">
        <div className="border-t border-base-300 pt-4">
          <p className="mb-2 text-xs text-base-content/60">
            আজকের দাম
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xl font-bold text-base-content">
              {formatPrice(product.today)} টাকা
            </p>

            <PriceChangeBadge
              direction={product.change.dir}
              percentage={product.change.pct}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
