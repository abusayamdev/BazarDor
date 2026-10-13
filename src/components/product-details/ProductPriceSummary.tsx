
import type { MarketPrice } from "@/types/product-detail";
import { formatPrice } from "@/lib/formatters";

interface ProductPriceSummaryProps {
  markets: MarketPrice[];
}

export default function ProductPriceSummary({
  markets,
}: ProductPriceSummaryProps) {
  if (markets.length === 0) {
    return (
      <section className="rounded-xl border border-base-300 bg-base-100 p-6">
        <h2 className="text-xl font-bold">
          বাজারদরের সারসংক্ষেপ
        </h2>

        <p className="mt-3 text-sm text-base-content/60">
          বর্তমানে বাজারভিত্তিক দামের তথ্য নেই।
        </p>
      </section>
    );
  }

  const minimumPrice = Math.min(
    ...markets.map((market) => market.min)
  );

  const maximumPrice = Math.max(
    ...markets.map((market) => market.max)
  );

  const averagePrice =
    markets.reduce((total, market) => {
      return total + (market.min + market.max) / 2;
    }, 0) / markets.length;

  const priceSummary = [
    {
      label: "সর্বনিম্ন দাম",
      price: minimumPrice,
      color: "text-success",
    },
    {
      label: "সর্বোচ্চ দাম",
      price: maximumPrice,
      color: "text-error",
    },
    {
      label: "আনুমানিক গড় দাম",
      price: averagePrice,
      color: "text-primary",
    },
  ];

  return (
    <section>
      <h2 className="mb-5 text-xl font-bold text-base-content sm:text-2xl">
        বাজারদরের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {priceSummary.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-base-300 bg-base-100 p-6"
          >
            <p className="text-sm text-base-content/60">
              {item.label}
            </p>

            <p className={`mt-3 text-2xl font-bold ${item.color}`}>
              {formatPrice(item.price)} টাকা
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-6 text-base-content/60">
        গড় দাম প্রতিটি বাজারের সর্বনিম্ন ও সর্বোচ্চ দামের
        মধ্যবিন্দু থেকে হিসাব করা হয়েছে। এটি আনুমানিক,
        প্রকৃত লেনদেনের গড় নয়।
      </p>
    </section>
  );
}
