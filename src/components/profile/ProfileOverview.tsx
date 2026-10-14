
import { requireSession } from "@/lib/require-session";

export default async function ProfileOverview() {
  const session = await requireSession("/profile");
  const user = session.user;

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="avatar avatar-placeholder">
            <div className="w-20 rounded-full bg-primary text-primary-content">
              <span className="text-3xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-base-content">
              {user.name}
            </h1>

            <p className="mt-1 text-sm text-base-content/60">
              {user.email}
            </p>
          </div>

          <span className="badge badge-success badge-soft">
            লগইন করা হয়েছে
          </span>
        </div>

        <div className="mt-8 border-t border-base-300 pt-6">
          <h2 className="text-lg font-semibold text-base-content">
            ব্যক্তিগত তথ্য
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-xs text-base-content/50">
                নাম
              </p>

              <p className="mt-1 font-medium">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                ইমেইল
              </p>

              <p className="mt-1 break-all font-medium">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
