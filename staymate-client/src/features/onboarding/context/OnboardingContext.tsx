import { useState } from "react";
import { OnboardingContext } from "./onboarding.context";
import { ONBOARDING_STEPS } from "../constants/steps";

export default function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () =>
    setCurrentStep((s) => Math.min(s + 1, ONBOARDING_STEPS.length - 1));

  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <OnboardingContext.Provider
      value={{
        steps: ONBOARDING_STEPS,
        currentStep,
        next,
        prev,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
