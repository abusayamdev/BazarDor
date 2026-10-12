
import { Suspense } from "react";

import Hero from "@/components/hero/Hero";
import HomeProducts from "@/components/products/HomeProducts";
import HomeProductsLoading from "@/components/products/HomeProductsLoading";

export default function HomePage() {
  return (
    <div className="py-8 sm:py-10">
      <Hero />

      <div className="mx-auto mt-14 w-full max-w-[1152px] px-4 sm:mt-16">
        <Suspense fallback={<HomeProductsLoading />}>
          <HomeProducts />
        </Suspense>
      </div>
    </div>
  );
}
