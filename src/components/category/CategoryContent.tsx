
import { notFound } from "next/navigation";

import { getCategories } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";

import CategoryHeader from "./CategoryHeader";
import CategoryProducts from "./CategoryProducts";

interface CategoryContentProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryContent({
  params,

}: CategoryContentProps) {

  const { slug } = await params;
  const categories = await getCategories();

  const category = categories.find(
    (item) => item.slug === slug
    
  );

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(slug);

  return (
    <>
      <CategoryHeader category={category} />
      <CategoryProducts products={products} />
    </>

  );



}
