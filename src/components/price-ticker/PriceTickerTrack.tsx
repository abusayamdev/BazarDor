import type { Product } from "@/types/product";
import PriceTickerItem from "./PriceTickerItem";

interface PriceTickerTrackProps {
  products: Product[];
}

function TickerGroup({
  products,
  duplicate = false,
}: {
  products: Product[];
  duplicate?: boolean;
}) {
  return (
    <div
      aria-hidden={duplicate ? true : undefined}
      className={`
        flex h-full shrink-0
        items-center gap-6 pr-6
        whitespace-nowrap
        ${duplicate ? "motion-reduce:hidden" : ""}
      `}
    >
      {products.map((product) => (
        <PriceTickerItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function PriceTickerTrack({ products }: PriceTickerTrackProps) {
  return (
    <div
      className="
        flex h-full w-max items-center
        motion-safe:animate-bazardor-ticker
      "
    >
      {/* Original Products */}
      <TickerGroup products={products} />

      {/* Duplicate for seamless scrolling */}
      <TickerGroup products={products} duplicate />
    </div>
  );
}
