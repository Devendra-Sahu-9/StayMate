type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
};

export default function Select({ label, options }: SelectProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <select className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
