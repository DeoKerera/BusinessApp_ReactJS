import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login"; // or "./App"
import CreateAccount from "./pages/CreateAccount";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<CreateAccount />} />
    </Routes>
  );
}

export default AppRoutes;
