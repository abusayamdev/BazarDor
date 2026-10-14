import type { ProductDetail } from "@/types/product-detail";
import { formatPrice } from "@/lib/formatters";

interface ProductPriceHistoryProps {
  product: ProductDetail;
}

export default function ProductPriceHistory({
  product,
}: ProductPriceHistoryProps) {
  const priceHistory = [
    {
      label: "আজকের দাম",
      price: product.today,
    },
    {
      label: "গতকালের দাম",
      price: product.yesterday,
    },
    {
      label: "গত সপ্তাহের দাম",
      price: product.lastWeek,
    },
    {
      label: "গত মাসের দাম",
      price: product.lastMonth,
    },
  ];

  return (
    <section>
      <h2 className="mb-5 text-xl font-bold text-base-content sm:text-2xl">
        আগের দামের তুলনা
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {priceHistory.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-base-300 bg-base-100 p-5"
          >
            <p className="text-sm text-base-content/60">{item.label}</p>

            <p className="mt-3 text-xl font-bold text-base-content">
              {formatPrice(item.price)} টাকা
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
