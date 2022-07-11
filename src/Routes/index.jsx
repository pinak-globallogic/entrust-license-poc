import { Routes, Route } from "react-router-dom";
import Login from "Pages/Login/index";
import DashboardWrapper from "Pages/Dashboard/index";
import GenerateLicenseWrapper from "Pages/License/Generate/index";
import SearchLicenseWrapper from "Pages/License/Search";
import AdminPanelWrapper from "Pages/Admin";
import FirstRunWrapper from "Pages/SystemConfiguration/FirstRunWrapper";
import ProtectedRoute from "./ProtectedRoute";
import ModifyLicenseWrapper from "../Pages/License/Modify";

export const ROUTE_HOME = "/";
export const ROUTE_LICENSE_DASHBOARD = "/license/dashboard";
export const ROUTE_LICENSE_GENERATE = "/license/generate";
export const ROUTE_LICENSE_SEARCH = "/license/search";
export const ROUTE_ADMIN_PANEL = "/license/admin";
export const ROUTE_FIRST_RUN = "/system-configuration";
export const ROUTE_LICENSE_MODIFY = "/license/modify";

const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route exact path={ROUTE_HOME} element={<Login />} />
      <Route path={ROUTE_FIRST_RUN} element={<FirstRunWrapper />} />
      <Route element={<h1>Page not found</h1>} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTE_LICENSE_DASHBOARD} element={<DashboardWrapper />} />
        <Route
          path={ROUTE_LICENSE_GENERATE}
          element={<GenerateLicenseWrapper />}
        />
        <Route path={ROUTE_LICENSE_SEARCH} element={<SearchLicenseWrapper />} />
        <Route path={ROUTE_ADMIN_PANEL} element={<AdminPanelWrapper />} />
      </Route>
      <Route path={ROUTE_LICENSE_MODIFY} element={<ModifyLicenseWrapper />} />
    </Routes>
  );
};

export default Router;
