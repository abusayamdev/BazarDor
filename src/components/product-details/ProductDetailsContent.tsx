
import { notFound } from "next/navigation";

import { requireSession } from "@/lib/require-session";
import { getProductBySlug } from "@/lib/product-details";

import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductPriceSummary from "./ProductPriceSummary";
import ProductPriceHistory from "./ProductPriceHistory";
import MarketPricesTable from "./MarketPricesTable";

interface ProductDetailsContentProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailsContent({
  params,
}: ProductDetailsContentProps) {
  const { slug } = await params;

  await requireSession(`/product/${encodeURIComponent(slug)}`);

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-10">

      <ProductDetailsHeader product={product} />

      <ProductPriceSummary markets={product.markets} />

      <ProductPriceHistory product={product} />

      <MarketPricesTable
        markets={product.markets}
        unit={product.unit}
      />
    </div>
  );
}
