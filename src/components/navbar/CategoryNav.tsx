
import { getCategories } from "@/lib/categories";
import CategoryNavLinks from "./CategoryNavLinks";

export default async function CategoryNav() {
  try {
    const categories = await getCategories();

    return (
      <CategoryNavLinks categories={categories} />
    );
  } catch (error) {
    console.error("Category API Error:", error);

    return (
      <p className="py-3 text-center text-sm text-error">
        ক্যাটাগরি লোড করা যাচ্ছে না।
      </p>
    );
  }
}
