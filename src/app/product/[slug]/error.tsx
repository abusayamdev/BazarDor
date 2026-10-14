"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ProductErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductError({ error, reset }: ProductErrorProps) {
  useEffect(() => {
    console.error("Product details error:", error);
  }, [error]);

  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-16">
      <div className="rounded-2xl border border-error/20 bg-base-100 px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-error">
          পণ্যের তথ্য লোড করা যাচ্ছে না
        </h1>

        <p className="mt-3 text-sm text-base-content/60">
          পণ্যের তথ্য আনতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={reset} className="btn btn-primary">
            আবার চেষ্টা করুন
          </button>

          <Link href="/" className="btn btn-outline">
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
