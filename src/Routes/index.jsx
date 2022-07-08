import { Routes, Route } from "react-router-dom";
import Login from "Pages/Login/index";
import DashboardWrapper from "Pages/Dashboard/index";
import GenerateLicenseWrapper from "Pages/License/Generate/index";
import SearchLicenseWrapper from "Pages/License/Search";
import AdminPanelWrapper from "Pages/Admin";
export const LICENSE_SEARCH_PAGE_ROUTE = "/license/search";
export const ADMIN_PANEL_PAGE_ROUTE = "/license/admin";
import ModifyLicenseWrapper from "../Pages/License/Modify";

import FirstRunWrapper from "../Pages/SystemConfiguration/FirstRunWrapper";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardWrapper />} />
      <Route path="/license/generate" element={<GenerateLicenseWrapper />} />
      <Route path="/license/search" element={<SearchLicenseWrapper />} />
      <Route path="/system-configuration" element={<FirstRunWrapper />} />
      <Route path={ADMIN_PANEL_PAGE_ROUTE} element={<AdminPanelWrapper />} />
      <Route path="/license/modify" element={<ModifyLicenseWrapper />} />
      <Route element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default Router;
