import { createContext } from "react";

export type OnboardingContextType = {
  steps: string[];
  currentStep: number;
  next: () => void;
  prev: () => void;
};

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);
