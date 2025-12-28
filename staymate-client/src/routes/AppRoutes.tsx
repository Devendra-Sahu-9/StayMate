import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import OnboardingLayout from "../layout/OnboardingLayout";
import PublicLayout from "../layout/PublicLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        {/* login, signup later */}
      </Route>

      {/* Onboarding */}
      <Route element={<OnboardingLayout />}>
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Route>
    </Routes>
  );
}
