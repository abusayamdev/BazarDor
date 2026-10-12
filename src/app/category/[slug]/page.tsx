
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCategories } from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  // Get slug from dynamic URL
  const { slug } = await params;

  let categories;

  try {
    // Fetch real categories from API
    categories = await getCategories();
  } catch {
    return (
      <section className="mx-auto max-w-[1120px] px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-error">
          ক্যাটাগরি লোড করা যাচ্ছে না
        </h1>

        <Link
          href="/"
          className="btn btn-primary mt-6"
        >
          হোম পেজে ফিরে যান
        </Link>
      </section>
    );
  }

  // Find current category using its slug
  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <section
      className="
        mx-auto w-full max-w-[1120px]
        px-4 py-12 sm:px-6
      "
    >
      <div
        className="
          rounded-2xl border border-base-300
          bg-base-100 p-6 sm:p-10
        "
      >
        {/* Category Icon */}
        {category.icon && (
          <span className="text-5xl">
            {category.icon}
          </span>
        )}

        {/* Category Name */}
        <h1 className="mt-5 text-3xl font-bold text-base-content">
          {category.nameBn}
        </h1>

        <p className="mt-3 text-base-content/70">
          এই ক্যাটাগরির পণ্যগুলো পরবর্তী ধাপে
          API থেকে দেখানো হবে।
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-6"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
}
