import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

import { db, mongoClient } from "./mongodb";

function getTrustedOrigins() {
  const origins = [
    process.env.BETTER_AUTH_URL,
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ];

  return origins.flatMap((value) => {
    if (!value) {
      return [];
    }

    try {
      const url = new URL(
        value.includes("://") ? value : `https://${value}`,
      );
      return [url.origin];
    } catch {
      throw new Error("Invalid Better Auth trusted-origin URL configuration");
    }
  });
}

export const auth = betterAuth({
  appName: "BazarDor",

  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: getTrustedOrigins(),

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    requireEmailVerification: false,
    autoSignIn: true,
  },

  socialProviders: {
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),

    ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        }
      : {}),
  },
});
