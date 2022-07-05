import { configureStore } from "@reduxjs/toolkit";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import loginSlice from "./Slices/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    generateLicense: generateLicenseSlice,
  },
});
