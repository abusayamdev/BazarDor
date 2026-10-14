"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";
import { getSafeRedirectPath } from "@/lib/safe-redirect";
import PasswordInput from "./PasswordInput";

export default function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (trimmedName.length < 2 || trimmedName.length > 80) {
      const message = "নাম ২ থেকে ৮০ অক্ষরের মধ্যে হতে হবে।";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      const message = "সঠিক ইমেইল অ্যাড্রেস লিখুন।";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    if (password.length < 8) {
      const message = "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await authClient.signUp.email({
        name: trimmedName,
        email: normalizedEmail,
        password,
        callbackURL: getSafeRedirectPath(
          new URLSearchParams(window.location.search).get("redirect"),
        ),
      });

      if (error) {
        const message = error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।";
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
      router.replace(
        getSafeRedirectPath(
          new URLSearchParams(window.location.search).get("redirect"),
        ),
      );
      router.refresh();
    } catch {
      const message = "অ্যাকাউন্ট তৈরি করা যাচ্ছে না। আবার চেষ্টা করুন।";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="signup-name"
          className="mb-2 block text-sm font-medium text-base-content"
        >
          আপনার নাম
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="আপনার পূর্ণ নাম লিখুন"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          disabled={isSubmitting}
          required
          className="input input-bordered h-12 w-full focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="signup-email"
          className="mb-2 block text-sm font-medium text-base-content"
        >
          ইমেইল অ্যাড্রেস
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@gmail.com"
          autoComplete="email"
          disabled={isSubmitting}
          required
          className="input input-bordered h-12 w-full focus:border-primary focus:outline-none"
        />
      </div>

      <PasswordInput
        value={password}
        onChange={setPassword}
        autoComplete="new-password"
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
        className="btn btn-primary h-12 w-full"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            অ্যাকাউন্ট তৈরি হচ্ছে...
          </>
        ) : (
          "সাইন আপ"
        )}
      </button>
    </form>
  );
}
