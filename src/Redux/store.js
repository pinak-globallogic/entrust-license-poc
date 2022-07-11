import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import customCardSlice from "./Slices/customCardSlice";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import searchLicenseSlice from "./Slices/searchLicenseSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage,
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  generateLicense: generateLicenseSlice,
  searchLicense: searchLicenseSlice,
  customCard: customCardSlice
});

const isDevEnvironment = process.env.NODE_ENV === "development";

const middlewares = [];

if (isDevEnvironment) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: isDevEnvironment,
});
