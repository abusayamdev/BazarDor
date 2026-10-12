
import type { Category } from "@/types/category";

interface CategoryHeaderProps {
  category: Category;
  
}

export default function CategoryHeader({
  category,

}: CategoryHeaderProps) {

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {category.icon && (
          <span
            aria-hidden="true"
            className="flex size-14 items-center justify-center rounded-xl bg-base-200 text-4xl"
          >
            {category.icon}
          </span>
        )}


        <div>
          <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
            {category.nameBn}
          </h1>

          <p className="mt-1 text-sm text-base-content/60">
            আজকের সর্বশেষ বাজারদর
          </p>
        </div>
      </div>
    </div>


  );
}
