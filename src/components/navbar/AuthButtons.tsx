
import Link from "next/link";

export default function AuthButtons() {
  return (
    <nav
      aria-label="অ্যাকাউন্ট নেভিগেশন"
      className="
        flex shrink-0 items-center
        gap-1 sm:gap-2
      "
    >
      {/* Sign In Button */}
      <Link
        href="/signin"
        className="
          inline-flex h-9 items-center
          justify-center rounded-lg
          px-2 text-[11px] font-medium
          whitespace-nowrap
          text-base-content
          transition-colors duration-200
          hover:bg-base-200
          focus-visible:outline-2
          focus-visible:outline-primary
          sm:h-10 sm:px-4 sm:text-sm
        "
      >
        সাইন ইন
      </Link>

      {/* Sign Up Button */}
      <Link
        href="/signup"
        className="
          inline-flex h-9 items-center
          justify-center rounded-lg
          bg-primary px-3
          text-[11px] font-medium
          whitespace-nowrap text-white
          shadow-sm
          transition-colors duration-200
          hover:bg-[#047F39]
          focus-visible:outline-2
          focus-visible:outline-primary
          sm:h-10 sm:px-5 sm:text-sm
        "
      >
        সাইন আপ
      </Link>
    </nav>
  );
}
