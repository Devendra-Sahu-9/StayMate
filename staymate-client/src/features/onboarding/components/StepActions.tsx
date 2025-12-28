import Button from "../../../components/ui/Button";
import { useOnboarding } from "../context/useOnboarding";

export default function StepActions({
  hideBack = false,
  nextLabel = "Continue",
}: {
  hideBack?: boolean;
  nextLabel?: string;
}) {
  const { prev, next, currentStep } = useOnboarding();

  return (
    <div className="flex justify-between mt-8">
      {!hideBack ? (
        <Button variant="secondary" onClick={prev} disabled={currentStep === 0}>
          Back
        </Button>
      ) : (
        <div />
      )}

      <Button onClick={next}>{nextLabel}</Button>
    </div>
  );
}
