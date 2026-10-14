"use client";

import { ChevronDown, LogOut, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

interface UserAvatarProps {
  image?: string | null;
  label: string;
}

function UserAvatar({ image, label }: UserAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);

  if (image && !hasImageError) {
    return (
      <Image
        src={image}
        alt=""
        width={36}
        height={36}
        sizes="36px"
        referrerPolicy="no-referrer"
        onError={() => setHasImageError(true)}
        className="size-9 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
      {label.charAt(0).toUpperCase() || "U"}
    </span>
  );
}

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const accountRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeIfOutside = (target: EventTarget | null) => {
      if (
        target instanceof Node &&
        accountRef.current &&
        !accountRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      closeIfOutside(event.target);
    };

    const handleFocusIn = (event: FocusEvent) => {
      closeIfOutside(event.target);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleSignOut = async () => {
    setIsMenuOpen(false);
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
      <div
        className="flex items-center gap-2"
        role="status"
        aria-label="অ্যাকাউন্ট লোড হচ্ছে"
      >
        <div className="skeleton size-9 rounded-full" />
        <div className="skeleton hidden h-4 w-20 sm:block" />
      </div>
    );
  }

  if (session?.user) {
    const user = session.user;
    const displayName = user.name.trim() || user.email;

    return (
      <div ref={accountRef} className="relative z-50">
        <button
          ref={triggerRef}
          type="button"
          aria-label={`${displayName} অ্যাকাউন্ট মেনু`}
          aria-expanded={isMenuOpen}
          aria-controls="account-dropdown"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 items-center gap-2 rounded-full px-1.5 transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-primary sm:pr-3"
        >
          <UserAvatar
            key={user.image || displayName}
            image={user.image}
            label={displayName}
          />

          <span className="hidden max-w-28 truncate text-sm font-semibold text-base-content sm:block">
            {displayName}
          </span>

          <ChevronDown
            aria-hidden="true"
            className={`hidden size-4 text-base-content/60 transition-transform sm:block ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMenuOpen && (
          <div
            id="account-dropdown"
            aria-label="অ্যাকাউন্ট অপশন"
            className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-base-300 bg-base-100 p-2 shadow-xl"
          >
            <div className="min-w-0 px-3 py-2">
              <p className="truncate text-sm font-semibold text-base-content">
                {displayName}
              </p>

              <p className="mt-0.5 truncate text-xs text-base-content/60">
                {user.email}
              </p>
            </div>

            <div className="my-1 h-px bg-base-300" />

            <nav aria-label="ব্যবহারকারী অপশন" className="space-y-1">
              <Link
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-base-content transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-primary"
              >
                <UserRound aria-hidden="true" className="size-[17px]" />
                আমার প্রোফাইল
              </Link>

              <button
                type="button"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-error transition-colors hover:bg-error/10 focus-visible:outline-2 focus-visible:outline-error disabled:opacity-60"
              >
                {isSigningOut ? (
                  <span className="loading loading-spinner loading-xs" />
                ) : (
                  <LogOut aria-hidden="true" className="size-[17px]" />
                )}

                {isSigningOut ? "লগআউট হচ্ছে..." : "লগআউট"}
              </button>
            </nav>
          </div>
        )}
      </div>
    );
  }

  return (
    <nav aria-label="অ্যাকাউন্ট" className="flex items-center gap-2">
      <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
        সাইন ইন
      </Link>

      <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
        সাইন আপ
      </Link>
    </nav>
  );
}
