import { useOnboarding } from "../context/useOnboarding";
export default function Stepper() {
  const { steps, currentStep } = useOnboarding();

  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {steps.map((step: string, i: number) => (
        <div key={step} className="flex items-center gap-2">
          <span
            className={`h-5 w-5 rounded-full text-xs flex items-center justify-center
            ${i <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            ✓
          </span>
          <span
            className={i === currentStep ? "text-blue-600 font-medium" : ""}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}
