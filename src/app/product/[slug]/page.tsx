
import { Suspense } from "react";

import ProductDetailsContent from "@/components/product-details/ProductDetailsContent";
import ProductDetailsLoading from "@/components/product-details/ProductDetailsLoading";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-10 sm:py-12">
      <Suspense fallback={<ProductDetailsLoading />}>
        <ProductDetailsContent params={params} />
      </Suspense>
    </main>
  );
}
