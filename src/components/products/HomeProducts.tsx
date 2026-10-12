
import { getProducts } from "@/lib/products";

import ProductSection from "./ProductSection";

export default async function HomeProducts() {
  let products;

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to load home products:", error);

    return (
      <section id="সব-পণ্য" className="rounded-xl border border-error/20 bg-base-100 p-8 text-center">
        <h2 className="text-xl font-semibold text-error">
          পণ্যের তথ্য লোড করা যাচ্ছে না।
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          কিছুক্ষণ পর পেজটি আবার রিফ্রেশ করুন।
        </p>
      </section>
    );
  }

  const priceRisers = products
    .filter((product) => product.change.dir === "up")
    .sort(
      (a, b) =>
        Math.abs(b.change.pct) - Math.abs(a.change.pct)
    )
    .slice(0, 6);

  const priceFallers = products
    .filter((product) => product.change.dir === "down")
    .sort(
      (a, b) =>
        Math.abs(b.change.pct) - Math.abs(a.change.pct)
    )
    .slice(0, 6);

  return (
    <div className="space-y-14 sm:space-y-16">
      <ProductSection
        title="আজ দাম বেড়েছে ▲"
        subtitle="আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে"
        products={priceRisers}
        emptyMessage="আজ কোনো পণ্যের দাম বাড়েনি।"
      />

      <ProductSection
        title="আজ দাম কমেছে ▼"
        subtitle="আজ যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে"
        products={priceFallers}
        emptyMessage="আজ কোনো পণ্যের দাম কমেনি।"
      />

      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle="নিত্যপ্রয়োজনীয় সব পণ্যের সর্বশেষ বাজারদর এক জায়গায় দেখুন।"
        products={products}
      />
    </div>
  );
}
