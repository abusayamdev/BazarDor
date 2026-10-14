import CategoryEmptyState from "@/components/category/CategoryEmptyState";

export default function CategoryNotFound() {
  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-16">
      <CategoryEmptyState
        title="ক্যাটাগরি খুঁজে পাওয়া যায়নি"
        description="আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি। অনুগ্রহ করে সঠিক ক্যাটাগরি নির্বাচন করুন।"
      />
    </main>
  );
}
