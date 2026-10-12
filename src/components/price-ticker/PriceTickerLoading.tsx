
export default function PriceTickerLoading() {
  return (
    <div
      role="status"
      aria-label="বাজারদর লোড হচ্ছে"
      className="
        flex h-[37px] w-full items-center
        gap-5 overflow-hidden
        border-b border-base-300
        bg-base-100 px-4
      "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            h-4 w-48 shrink-0
            animate-pulse rounded
            bg-base-200
          "
        />
      ))}

      <span className="sr-only">
        বাজারদর লোড হচ্ছে...
      </span>
    </div>
  );
}
