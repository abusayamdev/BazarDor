"use client";

import { useMemo, useState } from "react";

import type { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";

import CategoryEmptyState from "./CategoryEmptyState";

type SortOrder = "default" | "low-to-high" | "high-to-low";

interface CategoryProductsProps {
  products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const sortedProducts = useMemo(() => {
    if (sortOrder === "default") {
      return products;
    }

    return [...products].sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.today - b.today;
      }

      return b.today - a.today;
    });
  }, [products, sortOrder]);

  const productCount = new Intl.NumberFormat("bn-BD").format(products.length);

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-base-content/60">
          মোট {productCount}টি পণ্য পাওয়া গেছে
        </p>

        <div className="flex items-center gap-3">
          <label
            htmlFor="category-sort"
            className="shrink-0 text-sm font-medium text-base-content"
          >
            সাজান:
          </label>

          <div className="relative w-full sm:w-56">
            <select
              id="category-sort"
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value as SortOrder)
              }
              className="w-full appearance-none rounded-lg border border-base-300 bg-base-100 px-4 py-2.5 pr-10 text-sm text-base-content outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-to-high">দাম: কম থেকে বেশি</option>
              <option value="high-to-low">দাম: বেশি থেকে কম</option>
            </select>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-base-content/60"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <CategoryEmptyState />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
