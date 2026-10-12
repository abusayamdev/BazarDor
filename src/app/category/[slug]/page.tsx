
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCategories } from "@/lib/categories";

// =====================================
// TYPES
// =====================================

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =====================================
// LOADING COMPONENT
// =====================================

function CategoryLoading() {
  return (
    <div className="animate-pulse rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-10">
      <div className="mb-5 h-12 w-12 rounded-lg bg-base-200" />

      <div className="mb-4 h-8 w-48 rounded-lg bg-base-200" />

      <div className="h-4 w-72 max-w-full rounded-lg bg-base-200" />
    </div>
  );
}

// =====================================
// DYNAMIC CATEGORY CONTENT
// =====================================

async function CategoryContent({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  let categories;

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Category API Error:", error);

    return (
      <div className="rounded-2xl border border-error/20 bg-base-100 p-8 text-center">
        <h2 className="text-xl font-bold text-error">
          ক্যাটাগরি লোড করা যাচ্ছে না
        </h2>

        <p className="mt-3 text-base-content/60">
          কিছুক্ষণ পর আবার চেষ্টা করুন।
        </p>

        <Link href="/" className="btn btn-primary mt-6">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-10">
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

      {/* Temporary Description */}
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
  );
}

// =====================================
// CATEGORY PAGE
// =====================================

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-4 py-12 sm:px-6">
      <Suspense fallback={<CategoryLoading />}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}
