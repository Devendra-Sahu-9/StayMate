import "./styles/index.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import OnboardingPage from "./features/onboarding/OnboardingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Home />
        <OnboardingPage />
      </BrowserRouter>
    </>
  );
}

export default App;
