
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

    updateDate();

    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time
      className="block max-w-[120px] truncate text-[10px] leading-4 text-base-content/60 sm:max-w-none sm:text-xs"
      title={date}
    >
      {date}
    </time>
  );
}
