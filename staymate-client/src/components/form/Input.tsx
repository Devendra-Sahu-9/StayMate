import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  type?: string;
};

export default function Input({
  label,
  error,
  className = "",
  type,
  ...props
}: InputProps) {
  return (
    console.log(label, props),
    (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}

        <input
          type={type}
          {...props}
          className={`w-full h-11 px-4 rounded-lg border 
          ${error ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${className}`}
        />

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  );
}
