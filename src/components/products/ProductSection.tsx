
import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
  emptyMessage?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  id,
  emptyMessage = "কোনো পণ্য পাওয়া যায়নি।",
}: ProductSectionProps) {
  return (
    <section id={id} className="scroll-mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-base-content/60">
          {subtitle}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
          <p className="text-base-content/60">
            {emptyMessage}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}
