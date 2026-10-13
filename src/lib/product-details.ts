
import { getProducts } from "@/lib/products";

import type {
  MarketPrice,
  ProductDetail,
} from "@/types/product-detail";

const BASE_URL =
  process.env.BAZARDOR_API_URL ||
  "https://api.api-store.workers.dev/api/bazardor";

function isObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function isMarketPrice(value: unknown): value is MarketPrice {
  
  if (!isObject(value)) {
    return false;

  }

  return (
    typeof value.market === "string" &&
    typeof value.division === "string" &&
    typeof value.min === "number" &&
    Number.isFinite(value.min) &&
    typeof value.max === "number" &&
    Number.isFinite(value.max) &&
    value.min <= value.max

  );
}

function isProductDetail(value: unknown): value is ProductDetail {

  if (!isObject(value) || !isObject(value.change)) {
    return false;

  }

  return (
    typeof value.id === "number" &&
    typeof value.slug === "string" &&
    typeof value.nameBn === "string" &&
    typeof value.category === "string" &&
    typeof value.categoryNameBn === "string" &&
    typeof value.unit === "string" &&
    typeof value.today === "number" &&
    Number.isFinite(value.today) &&
    typeof value.yesterday === "number" &&
    Number.isFinite(value.yesterday) &&
    typeof value.lastWeek === "number" &&
    Number.isFinite(value.lastWeek) &&
    typeof value.lastMonth === "number" &&
    Number.isFinite(value.lastMonth) &&
    ["up", "down", "flat"].includes(
      String(value.change.dir)
    ) &&
    typeof value.change.pct === "number" &&
    Number.isFinite(value.change.pct) &&
    Array.isArray(value.markets) &&
    value.markets.every(isMarketPrice)

  );
}

export async function getProductBySlug(
  slug: string
): Promise<ProductDetail | null> {
  const products = await getProducts();

  const selectedProduct = products.find(
    (product) =>
      product.slug === slug ||
      String(product.id) === slug
  );

  if (!selectedProduct) {
    return null;
  }

  const response = await fetch(
    `${BASE_URL.replace(/\/$/, "")}/products/${selectedProduct.id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product details: ${response.status}`
    );
  }

  const payload: unknown = await response.json();

  const productData =
    isObject(payload) && isObject(payload.data)
      ? payload.data
      : payload;

  if (!isProductDetail(productData)) {
    throw new Error("Invalid product details response");
  }

  if (productData.id !== selectedProduct.id) {
    throw new Error("Product ID does not match");
  }

  return productData;
}
