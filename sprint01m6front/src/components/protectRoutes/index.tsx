import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export function ProtectRoutes() {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem('@MyList:TOKEN')
  const id = localStorage.getItem('@MyList:USERID')
  if (token) {
    return id ? <Outlet /> : <Navigate to="dashboard" />;
  }

  return user ? <Outlet /> : <Navigate to="login" />;
}
