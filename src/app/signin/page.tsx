import Link from "next/link";

import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import AuthNotice from "@/components/auth/AuthNotice";

export default function SignInPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-[1152px] items-center justify-center px-4 py-12">
      <AuthNotice page="signin" />

      <AuthCard
        title="আপনার অ্যাকাউন্টে লগইন করুন"
        description="বাজারদরের সব তথ্য দেখতে আপনার অ্যাকাউন্টে প্রবেশ করুন।"
      >
        <SignInForm />

        <SocialLoginButtons />

        <p className="mt-7 text-center text-sm text-base-content/60">
          আপনার কোনো অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </AuthCard>
    </div>
  );
}
