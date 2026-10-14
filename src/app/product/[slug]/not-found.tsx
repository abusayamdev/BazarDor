import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-16">
      <div className="rounded-2xl border border-base-300 bg-base-100 px-6 py-16 text-center">
        <div className="text-5xl" aria-hidden="true">
          🔍
        </div>

        <h1 className="mt-5 text-2xl font-bold text-base-content">
          পণ্যটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60">
          আপনি যে পণ্যটি খুঁজছেন সেটি পাওয়া যায়নি। অন্য কোনো পণ্য দেখার চেষ্টা
          করুন।
        </p>

        <Link href="/" className="btn btn-primary mt-6">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
