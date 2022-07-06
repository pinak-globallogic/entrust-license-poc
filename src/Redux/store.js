import { configureStore } from "@reduxjs/toolkit";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import loginSlice from "./Slices/loginSlice";
import activateKey from "./Slices/activateKey";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    generateLicense: generateLicenseSlice,
    activateKey: activateKey,
  },
});
