
import Link from "next/link";

import type { ProductDetail } from "@/types/product-detail";
import { formatPrice, formatUnit } from "@/lib/formatters";

import PriceChangeBadge from "@/components/products/PriceChangeBadge";

interface ProductDetailsHeaderProps {
  product: ProductDetail;
}

export default function ProductDetailsHeader({
  product,
  
}: ProductDetailsHeaderProps) {
  const image = product.image?.trim();

  const emoji =
    image &&
    !image.startsWith("http") &&
    !image.startsWith("/")
      ? image
      : product.categoryIcon || "🛒";

  return (
    <section className="rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8">
      <Link
        href={`/category/${product.category}`}
        className="text-sm text-base-content/60 transition-colors hover:text-primary"
      >
        ← {product.categoryNameBn} ক্যাটাগরিতে ফিরে যান
      </Link>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-base-200 text-6xl">
          <span aria-hidden="true">{emoji}</span>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
            {product.nameBn}
          </h1>

          <p className="mt-2 text-sm leading-6 text-base-content/60">
            আজকের বাজারদর ও বিভিন্ন বাজারের মূল্যতথ্য
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="badge badge-outline">
              {product.categoryIcon} {product.categoryNameBn}
            </span>

            <span className="badge badge-outline">
              প্রতি {formatUnit(product.unit)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-6">
        <div>
          <p className="text-sm text-base-content/60">
            আজকের দাম
          </p>

          <p className="mt-1 text-3xl font-bold text-primary">
            {formatPrice(product.today)} টাকা
          </p>
        </div>

        <PriceChangeBadge
          direction={product.change.dir}
          percentage={product.change.pct}
        />
      </div>
    </section>
  );
}
