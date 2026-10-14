export default function CategoryLoading() {
  return (
    <div
      role="status"
      aria-label="ক্যাটাগরির পণ্য লোড হচ্ছে"
      className="animate-pulse"
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="size-14 rounded-xl bg-base-200" />

        <div className="space-y-3">
          <div className="h-7 w-40 rounded bg-base-200" />
          <div className="h-4 w-52 rounded bg-base-200" />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="h-4 w-36 rounded bg-base-200" />
        <div className="h-10 w-48 rounded-lg bg-base-200" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-base-300 bg-base-100 p-5"
          >
            <div className="h-24 rounded-xl bg-base-200" />

            <div className="mt-5 h-5 w-3/4 rounded bg-base-200" />

            <div className="mt-3 h-4 w-1/2 rounded bg-base-200" />

            <div className="mt-6 border-t border-base-300 pt-4">
              <div className="h-3 w-20 rounded bg-base-200" />

              <div className="mt-3 h-6 w-32 rounded bg-base-200" />
            </div>
          </div>
        ))}
      </div>

      <span className="sr-only">ক্যাটাগরির তথ্য লোড হচ্ছে...</span>
    </div>
  );
}
