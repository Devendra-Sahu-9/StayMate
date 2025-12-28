import React from "react";

type CheckboxProps = {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1"
      />
      {label}
    </label>
  );
}
