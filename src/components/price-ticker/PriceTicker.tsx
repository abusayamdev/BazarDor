import { getProducts } from "@/lib/products";
import PriceTickerTrack from "./PriceTickerTrack";

export default async function PriceTicker() {
  try {
    const products = await getProducts();

    if (products.length === 0) {
      return (
        <div className="flex h-[37px] items-center justify-center border-b border-base-300 bg-base-100 text-xs text-base-content/60">
          বর্তমানে পণ্যের তথ্য পাওয়া যায়নি।
        </div>
      );
    }

    return (
      <section
        aria-label="আজকের বাজারদর"
        className="
          h-[37px] w-full max-w-full
          overflow-hidden
          border-b border-base-300
          bg-base-100
          motion-reduce:overflow-x-auto
        "
      >
        <PriceTickerTrack products={products} />
      </section>
    );
  } catch (error) {
    console.error("Price Ticker API Error:", error);

    return (
      <div className="flex h-[37px] items-center justify-center border-b border-base-300 bg-base-100 text-xs text-error">
        বাজারদরের তথ্য লোড করা যাচ্ছে না।
      </div>
    );
  }
}
