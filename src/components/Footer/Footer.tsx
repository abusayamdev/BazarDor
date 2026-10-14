import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "সকল পণ্য", href: "/#all-products" },
];

const accountLinks = [
  { label: "সাইন ইন", href: "/signin" },
  { label: "রেজিস্ট্রেশন", href: "/signup" },
  { label: "আমার প্রোফাইল", href: "/profile" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-100 bg-[#f8faf8]">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-12 pb-9 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447] text-xl text-white shadow-sm">
                🛒
              </div>

              <div>
                <h2 className="text-xl font-bold leading-tight text-[#172b24]">
                  বাজার দর
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  নিত্যপণ্যের বাজারমূল্য
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-[380px] text-sm leading-7 text-gray-600">
              বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজেই। চাল, ডাল,
              তেল, সবজি, মাছসহ বিভিন্ন পণ্যের বর্তমান মূল্য ও দামের পরিবর্তন
              সম্পর্কে তথ্য পান এক জায়গায়।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">
                সহজে জানুন আজকের বাজারদর
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-[#172b24]">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <nav
              aria-label="গুরুত্বপূর্ণ লিংক"
              className="flex flex-col items-start gap-3"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-emerald-700"
                >
                  <span
                    aria-hidden="true"
                    className="text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ›
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Account Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-[#172b24]">
              আমার অ্যাকাউন্ট
            </h3>

            <nav
              aria-label="অ্যাকাউন্ট লিংক"
              className="flex flex-col items-start gap-3"
            >
              {accountLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-emerald-700"
                >
                  <span
                    aria-hidden="true"
                    className="text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ›
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-emerald-100 bg-white/80 px-5 py-4">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            <span className="font-bold text-[#172b24]">বিশেষ দ্রষ্টব্য:</span>{" "}
            এখানে প্রদর্শিত পণ্যের মূল্য তথ্যসূত্রভিত্তিক। স্থান, বাজার ও সময়ের
            ওপর ভিত্তি করে প্রকৃত মূল্য পরিবর্তিত হতে পারে।
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <p className="text-xs text-gray-500">
            © <CopyrightYear /> বাজার দর। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="text-xs text-gray-500">Made for Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
