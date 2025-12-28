import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import OnboardingPage from "../features/onboarding/OnboardingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  );
};

export default AppRoutes;
