import Stepper from "./Stepper";

export default function StepLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Stepper />

      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
