import "./styles/index.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
