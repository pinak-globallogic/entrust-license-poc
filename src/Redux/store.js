import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import searchLicenseSlice from "./Slices/searchLicenseSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    generateLicense: generateLicenseSlice,
    searchLicense: searchLicenseSlice,
  },
});
