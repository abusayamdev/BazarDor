
interface SectionSkeletonProps {
  title: string;
  count: number;
  id?: string;
}

function SectionSkeleton({
  title,
  count,
  id,
}: SectionSkeletonProps) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="mb-6 text-2xl font-bold text-base-content">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-base-300 bg-base-100 p-5"
          >
            <div className="h-24 animate-pulse rounded-xl bg-base-200" />

            <div className="mt-5 h-5 w-3/4 animate-pulse rounded bg-base-200" />

            <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-base-200" />

            <div className="mt-6 border-t border-base-300 pt-4">
              <div className="h-5 w-2/3 animate-pulse rounded bg-base-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomeProductsLoading() {
  return (
    <div
      role="status"
      aria-label="পণ্য লোড হচ্ছে"
      className="space-y-14 sm:space-y-16"
    >
      <SectionSkeleton
        title="আজ দাম বেড়েছে ▲"
        count={6}
      />

      <SectionSkeleton
        title="আজ দাম কমেছে ▼"
        count={6}
      />

      <SectionSkeleton
        id="সব-পণ্য"
        title="সব পণ্য"
        count={6}
      />

      <span className="sr-only">
        পণ্যের তথ্য লোড হচ্ছে...
      </span>
    </div>
  );
}
