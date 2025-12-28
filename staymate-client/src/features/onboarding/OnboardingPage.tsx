import OwnerDetails from "./steps/OwnerDetails";
import PgDetails from "./steps/PgDetails";
import RoomsBeds from "./steps/RoomsBeds";
import Caretaker from "./steps/Caretaker";
import Review from "./steps/Review";
import { useOnboarding } from "./context/useOnboarding";
import OnboardingProvider from "./context/OnboardingContext";

function StepRenderer() {
  const { currentStep } = useOnboarding();

  switch (currentStep) {
    case 1:
      return <OwnerDetails />;
    case 2:
      return <PgDetails />;
    case 3:
      return <RoomsBeds />;
    case 4:
      return <Caretaker />;
    case 5:
      return <Review />;
    default:
      return <OwnerDetails />;
  }
}

export default function OnboardingPage() {
  return (
    <OnboardingProvider>
      <StepRenderer />
    </OnboardingProvider>
  );
}
