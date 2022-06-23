import { Routes, Route } from "react-router-dom";
import Login from "./../Pages/Login/index";
import License from "./../Pages/License/index";
import UpdateLicense from "../Components/UpdateLicense";
import { useState } from "react";
import Header from "./../Layouts/Header/index";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./../Layouts/Footer/index";

const Router = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login setOpen={setOpen} />} />
        <Route
          path="license"
          element={<License drawer={{ open, setOpen }} />}
        />
        <Route path="/editLicense/:name" exact component={<UpdateLicense />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer open={open} />
    </>
  );
};

export default Router;
