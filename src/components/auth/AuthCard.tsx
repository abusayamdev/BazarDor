
import Link from "next/link";
import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <section className="w-full max-w-[460px] rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
      <div className="mb-7 text-center">
        <Link href="/" className="text-sm font-semibold text-primary">
          🛒 বাজার দর
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-base-content">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-base-content/60">
          {description}
        </p>
      </div>

      {children}
      
    </section>
  );
}
