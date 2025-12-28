import Button from "../../../components/ui/Button";
import StepLayout from "../components/StepLayout";

export default function Review() {
  return (
    <StepLayout title="Review Your Setup">
      <p className="text-gray-600">
        Please review your information before completing onboarding.
      </p>

      <div className="mt-6">
        <Button>Finish Setup</Button>
      </div>
    </StepLayout>
  );
}
