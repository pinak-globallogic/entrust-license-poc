import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "Components/Loader";

// Routes constants
export const ROUTE_HOME = "/";
export const ROUTE_LICENSE_DASHBOARD = "/license/dashboard";
export const ROUTE_LICENSE_GENERATE = "/license/generate";
export const ROUTE_LICENSE_SEARCH = "/license/search";
export const ROUTE_ADMIN_PANEL = "/license/admin";
export const ROUTE_FIRST_RUN = "/system-configuration";
export const ROUTE_LICENSE_MODIFY = "/license/modify";
export const ROUTE_LICENSE_ACTIVATE = "/license/activate";

// Lazy components
const Login = lazy(() => import("Pages/Login"));
const FirstRunWrapper = lazy(() => import("Pages/SystemConfiguration"));
const DashboardWrapper = lazy(() => import("Pages/Dashboard"));
const AdminPanelWrapper = lazy(() => import("Pages/Admin"));
const GenerateLicenseWrapper = lazy(() => import("Pages/License/Generate"));
const SearchLicenseWrapper = lazy(() => import("Pages/License/Search"));
const ModifyProductKeyWrapper = lazy(() => import("Pages/License/Modify"));
const ActivateLicenseWrapper = lazy(() => import("Pages/License/Activate"));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public routes */}
        <Route exact path={ROUTE_HOME} element={<Login />} />
        <Route path={ROUTE_FIRST_RUN} element={<FirstRunWrapper />} />
        <Route element={<h1>Page not found</h1>} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path={ROUTE_LICENSE_DASHBOARD}
            element={<DashboardWrapper />}
          />
          <Route
            path={ROUTE_LICENSE_GENERATE}
            element={<GenerateLicenseWrapper />}
          />
          <Route
            path={ROUTE_LICENSE_SEARCH}
            element={<SearchLicenseWrapper />}
          />
          <Route
            path={ROUTE_LICENSE_ACTIVATE}
            element={<ActivateLicenseWrapper />}
          />
          <Route
            path={ROUTE_LICENSE_MODIFY}
            element={<ModifyProductKeyWrapper />}
          />
          <Route path={ROUTE_ADMIN_PANEL} element={<AdminPanelWrapper />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
