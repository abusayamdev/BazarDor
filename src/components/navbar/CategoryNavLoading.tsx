export default function CategoryNavLoading() {
  return (
    <div
      role="status"
      aria-label="ক্যাটাগরি লোড হচ্ছে"
      className="
        w-full border-t border-base-300
        bg-base-100
      "
    >
      <div
        className="
          mx-auto flex h-[49px]
          w-full max-w-[1152px]
          items-center gap-3
          overflow-hidden px-4
        "
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="
              h-8 w-24 shrink-0
              animate-pulse rounded-lg
              bg-base-200
            "
          />
        ))}
      </div>

      <span className="sr-only">ক্যাটাগরি লোড হচ্ছে...</span>
    </div>
  );
}
