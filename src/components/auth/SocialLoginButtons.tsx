"use client";

import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";
import { getSafeRedirectPath } from "@/lib/safe-redirect";

type SocialProvider = "google" | "github";

interface SocialLoginButtonsProps {
  providers: Record<SocialProvider, boolean>;
}

export default function SocialLoginButtons({
  providers,
}: SocialLoginButtonsProps) {
  const [loading, setLoading] = useState<SocialProvider | null>(null);

  const handleSocialLogin = async (provider: SocialProvider) => {
    setLoading(provider);

    try {
      const callbackPath = getSafeRedirectPath(
        new URLSearchParams(window.location.search).get("redirect"),
      );
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL:
          callbackPath === "/" ? "/?auth=success" : callbackPath,
        errorCallbackURL: "/signin?oauthError=1",
      });

      if (error) {
        toast.error(error.message || "সোশ্যাল লগইন করা যাচ্ছে না।");
      }
    } catch {
      toast.error("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-base-300" />
        <span className="text-xs text-base-content/50">অথবা</span>
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handleSocialLogin("google")}
          disabled={loading !== null || !providers.google}
          title={
            providers.google
              ? "Google দিয়ে চালিয়ে যান"
              : "Google OAuth credentials কনফিগার করা নেই"
          }
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-base-300 bg-base-100 text-sm font-medium text-base-content transition-colors hover:bg-base-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading === "google" ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <FaGoogle size={18} className="text-[#4285F4]" />
          )}

          <span>Google</span>
        </button>

        <button
          type="button"
          onClick={() => handleSocialLogin("github")}
          disabled={loading !== null || !providers.github}
          title={
            providers.github
              ? "GitHub দিয়ে চালিয়ে যান"
              : "GitHub OAuth credentials কনফিগার করা নেই"
          }
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-base-300 bg-base-100 text-sm font-medium text-base-content transition-colors hover:bg-base-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading === "github" ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <FaGithub size={18} />
          )}

          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}
