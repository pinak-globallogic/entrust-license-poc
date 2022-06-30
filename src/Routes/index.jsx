import { Routes, Route } from "react-router-dom";
import Login from "Pages/Login/index";
import DashboardWrapper from "Pages/Dashboard/index";
import GenerateLicenseWrapper from "Pages/License/Generate/index";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardWrapper />} />
      <Route path="/license/generate" element={<GenerateLicenseWrapper />} />
      <Route element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default Router;
