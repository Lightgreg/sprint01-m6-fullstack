import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/protectRoutes";
import Dashboard from "../pages/dashboard";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

export function RoutesCenter() {

  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
        <Route path="*" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  )
}