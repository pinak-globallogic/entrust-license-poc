import { configureStore } from "@reduxjs/toolkit";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import loginSlice from "./Slices/loginSlice";
import searchLicenseSlice from "./Slices/searchLicenseSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    generateLicense: generateLicenseSlice,
    searchLicense: searchLicenseSlice,
  },
});
