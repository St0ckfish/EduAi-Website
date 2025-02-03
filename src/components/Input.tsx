"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string | undefined;
  theme?: "search";
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  error,
  register,
  theme,
  className,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const handleTogglePassword = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <label className="grid w-full gap-1.5 sm:gap-2.5 text-end text-gray-200">
      <p className="text-start text-xs sm:text-sm font-medium">{label}</p>
      <div className="relative w-full flex justify-start">
        <input
          {...props}
          type={inputType}
          {...register}
          className={
            className ??
            `w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white rounded-md sm:rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500
             ${error ? "border border-error" : ""} 
             ${theme === "search" ? "pl-8 sm:pl-10 pr-3 sm:pr-4" : "px-3 sm:px-4"}`
          }
        />
        {error ? (
          <small className="absolute -bottom-5 left-0 text-xs sm:text-sm text-error">
            {error}
          </small>
        ) : (
          <small className="absolute -bottom-5 left-0 text-xs sm:text-sm opacity-0">
            No Error
          </small>
        )}
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 bottom-0 right-12 sm:right-1 flex items-center px-1.5 sm:px-2"
          >
            {inputType === "password" ? (
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 outline-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 outline-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            )}
          </button>
        )}
        {theme === "search" && (
          <div className="pointer-events-none absolute inset-y-0 bottom-6 left-0 flex items-center px-1.5 sm:px-2">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-purpleMain"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        )}
      </div>
    </label>
  );
};

export default Input;