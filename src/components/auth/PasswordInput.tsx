"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoComplete?: "current-password" | "new-password";
}

export default function PasswordInput({
  value,
  onChange,
  disabled = false,
  autoComplete = "current-password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-medium text-base-content"
      >
        পাসওয়ার্ড
      </label>

      <div className="relative">
        <input
          className="w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 pr-12 text-sm text-base-content outline-none transition-colors placeholder:text-base-content/40 focus:border-primary disabled:opacity-60"
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="আপনার পাসওয়ার্ড লিখুন"
          autoComplete={autoComplete}
          disabled={disabled}
          required
        />

        <button
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-base-content/50 hover:text-primary disabled:opacity-50"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
          aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
          aria-pressed={showPassword}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
