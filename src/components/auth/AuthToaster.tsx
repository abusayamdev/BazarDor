"use client";

import { Toaster } from "react-hot-toast";

export default function AuthToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3500,
        style: {
          background: "#FFFFFF",
          color: "#1D271F",
          border: "1px solid #E1E8E1",
          fontFamily: "inherit",
        },
        success: {
          iconTheme: {
            primary: "#05893E",
            secondary: "#FFFFFF",
          },
        },
        error: {
          iconTheme: {
            primary: "#D03739",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
}
