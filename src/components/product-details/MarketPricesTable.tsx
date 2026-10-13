
import type { MarketPrice } from "@/types/product-detail";
import { formatPrice, formatUnit } from "@/lib/formatters";

interface MarketPricesTableProps {
  markets: MarketPrice[];
  unit: string;
}

export default function MarketPricesTable({
  markets,
  unit,
}: MarketPricesTableProps) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-base-content sm:text-2xl">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mt-2 text-sm leading-6 text-base-content/60">
          বিভিন্ন বাজারে প্রতি {formatUnit(unit)} পণ্যের সর্বনিম্ন ও সর্বোচ্চ দামের তুলনা।
        </p>
      </div>

      {markets.length === 0 ? (
        <div className="rounded-xl border border-base-300 bg-base-100 p-8 text-center">
          <p className="text-base-content/60">
            বাজারভিত্তিক তথ্য পাওয়া যায়নি।
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-base-300 bg-base-100">
          <div className="overflow-x-auto">
            <table className="table min-w-[650px]">
              <thead className="bg-base-200">
                <tr className="text-sm text-base-content">
                  <th>বিভাগ</th>
                  <th>বাজারের নাম</th>
                  <th className="text-right">সর্বনিম্ন দাম</th>
                  <th className="text-right">সর্বোচ্চ দাম</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={`${market.division}-${market.market}-${index}`}
                    className="hover:bg-base-200/50"
                  >
                    <td className="text-sm text-base-content/70">
                      {market.division}
                    </td>

                    <td className="text-sm font-medium text-base-content">
                      {market.market}
                    </td>

                    <td className="text-right">
                      <span className="inline-block whitespace-nowrap text-base font-bold leading-7 tracking-normal text-[#067647] tabular-nums">
                        {formatPrice(market.min)} টাকা
                      </span>
                    </td>

                    <td className="text-right">
                      <span className="inline-block whitespace-nowrap text-base font-bold leading-7 tracking-normal text-[#B42318] tabular-nums">
                        {formatPrice(market.max)} টাকা
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-base-300 bg-base-200/50 px-5 py-3">
            <p className="text-xs text-base-content/60">
              বাজার ও অঞ্চলভেদে পণ্যের দাম পরিবর্তিত হতে পারে।
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
