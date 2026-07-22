"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  placeholder = "Enter your password",
  maxLength = 128,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`
            h-12 w-full
            rounded-xl
            border
            bg-white
            px-4 pr-12
            text-sm text-neutral-950
            outline-none
            transition-all duration-200
            placeholder:text-neutral-400

            ${
              error
                ? `
                  border-red-300
                  focus:border-red-400
                  focus:ring-4
                  focus:ring-red-500/5
                `
                : `
                  border-neutral-200
                  hover:border-neutral-300
                  focus:border-blue-400
                  focus:ring-4
                  focus:ring-blue-500/5
                `
            }
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
          className="
            absolute right-3 top-1/2
            -translate-y-1/2
            rounded-lg p-1.5
            text-neutral-400
            transition-colors
            hover:bg-neutral-100
            hover:text-neutral-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
          "
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" className="h-4.5 w-4.5" />
          ) : (
            <Eye aria-hidden="true" className="h-4.5 w-4.5" />
          )}
        </button>
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}