import { Routes, Route } from "react-router-dom";
import Login from "Pages/Login/index";
import DashboardWrapper from "Pages/Dashboard/index";
import GenerateLicenseWrapper from "Pages/License/Generate/index";
import SearchLicenseWrapper from "Pages/License/Search";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardWrapper />} />
      <Route path="/license/generate" element={<GenerateLicenseWrapper />} />
      <Route path="/license/search" element={<SearchLicenseWrapper />} />
      <Route element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default Router;
export const LICENSE_SEARCH_PAGE_ROUTE = "/license/search";
