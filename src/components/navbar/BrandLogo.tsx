
import Image from "next/image";
import Link from "next/link";

import BanglaDate from "./BanglaDate";

export default function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="বাজার দর হোম পেজ"
      className="
        flex min-w-0 shrink items-center
        gap-2 sm:gap-3
      "
    >
      {/* Logo Icon */}
      <div
        className="
          flex size-9 shrink-0
          items-center justify-center
          rounded-xl bg-primary
          sm:size-10
        "
      >
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={18}
          height={18}
          className="brightness-0 invert"
        />
      </div>

      {/* Brand Name and Date */}
      <div className="min-w-0">
        <h2
          className="
            whitespace-nowrap
            text-lg font-bold leading-6
            text-base-content
            sm:text-xl
          "
        >
          বাজার দর
        </h2>

        <BanglaDate />
      </div>
    </Link>
  );
}
