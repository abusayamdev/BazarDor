export default function ProductDetailsLoading() {
  return (
    <div
      role="status"
      aria-label="পণ্যের বিস্তারিত তথ্য লোড হচ্ছে"
      className="animate-pulse space-y-10"
    >
      <div className="rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8">
        <div className="h-4 w-48 rounded bg-base-200" />

        <div className="mt-8 flex items-start gap-5">
          <div className="size-24 shrink-0 rounded-xl bg-base-200" />

          <div className="w-full space-y-4">
            <div className="h-8 w-48 max-w-full rounded bg-base-200" />
            <div className="h-4 w-64 max-w-full rounded bg-base-200" />
            <div className="h-6 w-32 rounded bg-base-200" />
          </div>
        </div>

        <div className="mt-8 h-12 rounded bg-base-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-32 rounded-xl bg-base-200" />
        ))}
      </div>

      <div className="rounded-xl border border-base-300 bg-base-100 p-6">
        <div className="mb-6 h-7 w-56 rounded bg-base-200" />

        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="mb-4 h-10 rounded bg-base-200 last:mb-0"
          />
        ))}
      </div>

      <span className="sr-only">পণ্যের বিস্তারিত তথ্য লোড হচ্ছে...</span>
    </div>
  );
}
