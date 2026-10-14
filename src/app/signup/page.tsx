import Link from "next/link";

import AuthCard from "@/components/auth/AuthCard";
import SignUpForm from "@/components/auth/SignUpForm";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-[1152px] items-center justify-center px-4 py-12">
      <AuthCard
        title="নতুন অ্যাকাউন্ট তৈরি করুন"
        description="বাজারদরে যোগ দিতে আপনার তথ্য দিয়ে রেজিস্ট্রেশন করুন।"
      >
        <SignUpForm />

        <SocialLoginButtons />

        <p className="mt-7 text-center text-sm text-base-content/60">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-semibold text-primary hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </AuthCard>
    </div>
  );
}
