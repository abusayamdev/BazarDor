
import type { Category } from "@/types/category";

const BASE_URL =
  process.env.BAZARDOR_API_URL ||
  "https://api.api-store.workers.dev/api/bazardor";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();

  return categories;
}
