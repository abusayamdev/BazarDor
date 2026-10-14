import { Suspense } from "react";

import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { requireSession } from "@/lib/require-session";

async function UpdateProfileContent() {
  // Verify authenticated session
  const session = await requireSession("/profile/update");

  return <UpdateProfileForm initialName={session.user.name} />;
}

export default function UpdateProfilePage() {
  return (
    <main className="mx-auto w-full max-w-[1152px] px-4 py-12">
      <Suspense
        fallback={
          <div className="mx-auto max-w-2xl rounded-2xl border border-base-300 bg-base-100 p-8">
            <div className="skeleton mb-6 h-8 w-52" />
            <div className="skeleton mb-4 h-5 w-72 max-w-full" />
            <div className="skeleton mt-8 h-12 w-full" />
            <div className="skeleton mt-8 ml-auto h-10 w-40" />
          </div>
        }
      >
        <UpdateProfileContent />
      </Suspense>
    </main>
  );
}
