import "server-only";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getSafeRedirectPath } from "@/lib/safe-redirect";

export async function requireSession(returnTo: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const query = new URLSearchParams({
      reason: "login-required",
      redirect: getSafeRedirectPath(returnTo),
    });

    redirect(`/signin?${query.toString()}`);
  }

  return session;
}
