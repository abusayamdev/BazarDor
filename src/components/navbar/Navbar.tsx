
import { Suspense } from "react";

import BrandLogo from "./BrandLogo";
import AuthButtons from "./AuthButtons";
import CategoryNav from "./CategoryNav";
import CategoryNavLoading from "./CategoryNavLoading";

export default function Navbar() {
  return (
    <header
      className="
        w-full border-b
        border-base-300 bg-base-100
      "
    >
      {/* =================================
          FIRST ROW: LOGO + AUTH BUTTONS
      ================================= */}

      <div
        className="
          mx-auto flex h-[68px]
          w-full max-w-[1152px]
          items-center justify-between
          gap-2 px-4
        "
      >
        <BrandLogo />

        <AuthButtons />
      </div>

      {/* =================================
          SECOND ROW: API CATEGORIES
      ================================= */}

      <Suspense fallback={<CategoryNavLoading />}>
        <CategoryNav />
      </Suspense>

    </header>
  );
}
