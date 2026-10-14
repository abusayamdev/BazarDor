
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";
import PasswordInput from "./PasswordInput";

export default function SignInForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password) {
      const message = "ইমেইল ও পাসওয়ার্ড লিখুন।";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      const message = "সঠিক ইমেইল অ্যাড্রেস লিখুন।";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password,
        rememberMe: true,
      });

      if (error) {
        const message = error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।";
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success("সফলভাবে লগইন হয়েছে!");

      router.replace("/");
      router.refresh();
    } catch {
      const message = "লগইন করা যাচ্ছে না। আবার চেষ্টা করুন।";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="signin-email" className="mb-2 block text-sm font-medium text-base-content">
          ইমেইল অ্যাড্রেস
        </label>

        <input
          id="signin-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@gmail.com"
          autoComplete="email"
          disabled={isSubmitting}
          required
          className="w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content outline-none transition-colors placeholder:text-base-content/40 focus:border-primary disabled:opacity-60"
        />
      </div>

      <PasswordInput
        value={password}
        onChange={setPassword}
        disabled={isSubmitting}
      />

      {errorMessage && (
        <p role="alert" className="text-sm text-error">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary h-11 w-full rounded-lg text-sm font-semibold disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            লগইন হচ্ছে...
          </>
        ) : (
          "সাইন ইন"
        )}
      </button>
    </form>
  );
}
