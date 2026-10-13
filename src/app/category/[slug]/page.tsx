
import { Suspense } from "react";

import CategoryContent from "@/components/category/CategoryContent";
import CategoryLoading from "@/components/category/CategoryLoading";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-10 sm:py-12">
      <Suspense fallback={<CategoryLoading />}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}
