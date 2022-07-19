import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_HOME } from "routes";

const ProtectedRoute = () => {
  const auth = useAuth();
  return auth && auth.name && auth.role ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE_HOME} />
  );
};

export default ProtectedRoute;
