import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "components/loader";

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
const Login = lazy(() => import("pages/login"));
const FirstRunWrapper = lazy(() => import("pages/system-configuration"));
const DashboardWrapper = lazy(() => import("pages/dashboard"));
const AdminPanelWrapper = lazy(() => import("pages/admin"));
const GenerateLicenseWrapper = lazy(() => import("pages/license/generate"));
const SearchLicenseWrapper = lazy(() => import("pages/license/search"));
const ModifyProductKeyWrapper = lazy(() => import("pages/license/modify"));
const ActivateLicenseWrapper = lazy(() => import("pages/license/activate"));

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
