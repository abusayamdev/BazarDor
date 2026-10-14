"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

interface AuthNoticeProps {
  page: "home" | "signin";
}

export default function AuthNotice({ page }: AuthNoticeProps) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (page === "signin") {
      if (params.get("reason") === "login-required") {
        toast.error("পণ্যের বিস্তারিত দেখতে আগে লগইন করুন।", {
          id: "login-required",
        });

        params.delete("reason");
      }

      if (params.has("oauthError") || params.has("error")) {
        toast.error("সোশ্যাল লগইন সম্পন্ন হয়নি। আবার চেষ্টা করুন.");

        params.delete("oauthError");
        params.delete("error");
      }

      const query = params.toString();
      const url = `/signin${query ? `?${query}` : ""}`;

      window.history.replaceState(window.history.state, "", url);
    }

    if (page === "home" && params.get("auth") === "success") {
      params.delete("auth");

      const query = params.toString();
      const url = `/${query ? `?${query}` : ""}`;

      window.history.replaceState(window.history.state, "", url);

      const checkSession = async () => {
        try {
          const { data } = await authClient.getSession();

          if (data?.session) {
            toast.success("সফলভাবে লগইন হয়েছে!");
          } else {
            toast.error("লগইন নিশ্চিত করা যায়নি।");
          }
        } catch {
          toast.error("লগইন স্ট্যাটাস পরীক্ষা করা যায়নি।");
        }
      };

      void checkSession();
    }
  }, [page]);

  return null;
}
