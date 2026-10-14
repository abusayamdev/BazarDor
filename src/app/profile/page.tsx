
import { Suspense } from "react";

import ProfileOverview from "@/components/profile/ProfileOverview";

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-[1152px] px-4 py-12">
      <Suspense
        fallback={
          <div className="mx-auto max-w-2xl rounded-2xl border border-base-300 bg-base-100 p-8">
            <div className="skeleton mx-auto h-20 w-20 rounded-full" />
            <div className="skeleton mx-auto mt-6 h-6 w-48" />
            <div className="skeleton mx-auto mt-4 h-4 w-64 max-w-full" />
            <div className="skeleton mt-10 h-32 w-full" />
          </div>
        }
      >
        <ProfileOverview />
      </Suspense>
    </div>
  );
}
