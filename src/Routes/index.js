import { Routes, Route } from "react-router-dom";
import Login from "./../Pages/Login/index";
import License from "./../Pages/License/index";
import Header from "./../Layouts/Header/index";
import CssBaseline from "@mui/material/CssBaseline";

const Router = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="license" element={<License />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};

export default Router;
