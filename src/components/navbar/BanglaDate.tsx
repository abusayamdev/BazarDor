
"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  const [date, setDate] = useState("আজকের তারিখ");

  useEffect(() => {
    const updateDate = () => {
      const today = new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());

      setDate(today);
    };

    // Show the current date after mounting.
    updateDate();

    // Keep the date updated if the page stays open.
    const interval = setInterval(updateDate, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time
      className="
        block max-w-[120px] truncate
        text-[10px] leading-4
        text-base-content/60
        sm:max-w-none sm:text-xs
      "
      title={date}
    >
      {date}
    </time>
  );
}
