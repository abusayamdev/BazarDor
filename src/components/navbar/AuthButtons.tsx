
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "লগআউট করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে লগআউট হয়েছে।");

      router.replace("/");
      router.refresh();
    } catch {
      toast.error("লগআউট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-2" role="status" aria-label="অ্যাকাউন্ট লোড হচ্ছে">
        <div className="skeleton h-9 w-20 rounded-lg" />
        <div className="skeleton h-9 w-20 rounded-lg" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/profile"
          className="btn btn-ghost btn-sm sm:btn-md"
        >
          প্রোফাইল
        </Link>

        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="btn btn-outline btn-sm border-primary text-primary hover:bg-primary hover:text-white sm:btn-md"
        >
          {isSigningOut ? (
            <span className="loading loading-spinner loading-xs" />
          ) : (
            "লগআউট"
          )}
        </button>
      </div>
    );
  }

  return (
    <nav aria-label="অ্যাকাউন্ট" className="flex items-center gap-2">
      <Link
        href="/signin"
        className="btn btn-ghost btn-sm sm:btn-md"
      >
        সাইন ইন
      </Link>

      <Link
        href="/signup"
        className="btn btn-primary btn-sm sm:btn-md"
      >
        সাইন আপ
      </Link>
    </nav>
  );
}
