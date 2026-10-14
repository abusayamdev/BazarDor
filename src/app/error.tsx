"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 text-7xl">⚠️</div>

        <h1 className="text-3xl font-bold">কিছু একটা সমস্যা হয়েছে!</h1>

        <p className="mt-4 text-base-content/60">
          দুঃখিত, তথ্য লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => reset()} className="btn btn-primary">
            আবার চেষ্টা করুন
          </button>

          <Link href="/" className="btn btn-outline">
            হোম পেজ
          </Link>
        </div>
      </div>
    </main>
  );
}
