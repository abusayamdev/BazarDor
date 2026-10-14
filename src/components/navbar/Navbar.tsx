import { Suspense } from "react";

import BrandLogo from "./BrandLogo";
import AuthButtons from "./AuthButtons";
import CategoryNav from "./CategoryNav";
import CategoryNavLoading from "./CategoryNavLoading";

import PriceTicker from "@/components/price-ticker/PriceTicker";
import PriceTickerLoading from "@/components/price-ticker/PriceTickerLoading";

export default function Navbar() {
  return (
    <header className="w-full bg-base-100">
      {/* First Row: Logo, Date, Auth */}
      <div
        className="
          mx-auto flex h-[68px]
          w-full max-w-[1152px]
          items-center justify-between
          gap-2 px-4
        "
      >
        <BrandLogo />
        <AuthButtons />
      </div>

      {/* Second Row: Category Navigation */}
      <Suspense fallback={<CategoryNavLoading />}>
        <CategoryNav />
      </Suspense>

      {/* Third Row: Dynamic Price Ticker */}
      <Suspense fallback={<PriceTickerLoading />}>
        <PriceTicker />
      </Suspense>
    </header>
  );
}
