
import type { Product } from "@/types/product";

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

function extractProducts(data: unknown): unknown[] {
  if (Array.isArray(data)) {
    return data;
  }

  if (!isObject(data)) {
    throw new Error("Invalid products API response");
  }

  if (Array.isArray(data.data)) {
    return data.data;
  }

  if (Array.isArray(data.products)) {
    return data.products;
  }

  if (
    isObject(data.data) &&
    Array.isArray(data.data.products)
  ) {
    return data.data.products;
  }

  throw new Error("Products array not found");
}

function isProduct(value: unknown): value is Product {
  if (!isObject(value) || !isObject(value.change)) {
    return false;
  }

  const change = value.change;

  return (
    typeof value.id === "number" &&
    typeof value.nameBn === "string" &&
    typeof value.unit === "string" &&
    typeof value.today === "number" &&
    Number.isFinite(value.today) &&
    (
      change.dir === "up" ||
      change.dir === "down" ||
      change.dir === "flat"
    ) &&
    typeof change.pct === "number" &&
    Number.isFinite(change.pct)
  );
}

async function fetchProducts(
  category?: string
): Promise<Product[]> {
  const query = category
    ? `?${new URLSearchParams({ category })}`
    : "";

  const response = await fetch(
    `${BASE_URL.replace(/\/$/, "")}/products${query}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status}`
    );
  }

  const data: unknown = await response.json();
  const products = extractProducts(data);

  if (!products.every(isProduct)) {
    throw new Error("Invalid product data received");
  }

  return products;
}

export async function getProducts(): Promise<Product[]> {
  return fetchProducts();
}

export async function getProductsByCategory(
  slug: string
): Promise<Product[]> {
  return fetchProducts(slug);
}
