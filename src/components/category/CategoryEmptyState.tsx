
import Link from "next/link";

interface CategoryEmptyStateProps {
  title?: string;
  description?: string;
}

export default function CategoryEmptyState({
  title = "কোনো পণ্য পাওয়া যায়নি",
  description = "এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।",

}: CategoryEmptyStateProps) {

  return (
    <div className="rounded-xl border border-dashed border-base-300 bg-base-100 px-6 py-16 text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-base-200 text-3xl">
        📦
      </div>

      <h2 className="mt-5 text-xl font-bold text-base-content">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-base-content/60">
        {description}
      </p>

      <Link
        href="/"
        className="btn btn-primary mt-6 rounded-lg"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>

  );
  
}
