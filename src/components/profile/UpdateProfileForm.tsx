"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

interface UpdateProfileFormProps {
  initialName: string;
}

export default function UpdateProfileForm({
  initialName,
}: UpdateProfileFormProps) {
  const router = useRouter();

  const [name, setName] = useState(initialName);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();

    // Validate name
    if (trimmedName.length < 2) {
      setErrorMessage("নাম কমপক্ষে ২ অক্ষরের হতে হবে।");
      return;
    }

    // Check for unchanged name
    if (trimmedName === initialName) {
      toast("নামে কোনো পরিবর্তন করা হয়নি।");
      return;
    }

    setIsUpdating(true);
    setErrorMessage("");

    try {
      // Better Auth: Update User
      const { error } = await authClient.updateUser({
        name: trimmedName,
      });

      if (error) {
        const message = error.message || "তথ্য আপডেট করা যায়নি।";

        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success("আপনার তথ্য সফলভাবে আপডেট হয়েছে!");

      // Redirect to Profile
      router.replace("/profile");
      router.refresh();
    } catch {
      setErrorMessage("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");

      toast.error("তথ্য আপডেট করা যায়নি।");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/profile"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← আমার প্রোফাইলে ফিরে যান
          </Link>

          <h1 className="mt-5 text-2xl font-bold text-base-content">
            ব্যক্তিগত তথ্য আপডেট
          </h1>

          <p className="mt-2 text-sm leading-6 text-base-content/60">
            আপনার প্রোফাইলের নাম পরিবর্তন করতে নিচের ফর্মটি পূরণ করুন।
          </p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-base-content"
            >
              আপনার নাম
              <span className="ml-1 text-error">*</span>
            </label>

            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setErrorMessage("");
              }}
              placeholder="আপনার পূর্ণ নাম লিখুন"
              minLength={2}
              maxLength={80}
              required
              disabled={isUpdating}
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? "name-error" : undefined}
              className="input input-bordered w-full focus:input-primary"
            />

            <p className="mt-2 text-xs text-base-content/50">
              এই নামটি আপনার প্রোফাইল এবং নেভিগেশন মেনুতে দেখানো হবে।
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div
              id="name-error"
              role="alert"
              className="alert alert-error alert-soft text-sm"
            >
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-base-200 pt-6 sm:flex-row sm:justify-end">
            <Link
              href="/profile"
              className={`btn btn-outline ${
                isUpdating ? "pointer-events-none opacity-50" : ""
              }`}
              aria-disabled={isUpdating}
            >
              বাতিল করুন
            </Link>

            <button
              type="submit"
              disabled={isUpdating}
              className="btn btn-primary"
            >
              {isUpdating ? (
                <>
                  <span className="loading loading-spinner loading-xs" />
                  আপডেট হচ্ছে...
                </>
              ) : (
                "তথ্য আপডেট করুন"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
