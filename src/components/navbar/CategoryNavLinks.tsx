
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types/category";

interface CategoryNavLinksProps {
  categories: Category[];
}

export default function CategoryNavLinks({ categories }: CategoryNavLinksProps) {
  const pathname = usePathname();

  if (categories.length === 0) {
    return (
      <div className="flex h-[49px] w-full items-center border-t border-base-300 bg-base-100 px-4">
        <p className="mx-auto w-full max-w-[1152px] text-sm text-base-content/60">
          কোনো ক্যাটাগরি পাওয়া যায়নি।
        </p>
      </div>
    );
  }

  return (
    <div className="w-full border-t border-base-300 bg-base-100">
      <nav
        aria-label="পণ্যের ক্যাটাগরি"
        className="mx-auto flex h-[49px] w-full max-w-[1152px] items-center px-4"
      >
        <div className="flex w-full min-w-0 items-center gap-1 overflow-x-auto overscroll-x-contain whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const href = `/category/${encodeURIComponent(category.slug)}`;

            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            const linkClassName = [
              "inline-flex h-8 shrink-0 items-center justify-center gap-2",
              "rounded-lg px-3 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-primary",
              isActive
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-200 hover:text-primary",
            ].join(" ");

            return (
              <Link
                key={category.slug}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={linkClassName}
              >
                {category.icon && (
                  <span aria-hidden="true" className="text-base">
                    {category.icon}
                  </span>
                )}

                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
