import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import customCardSlice from "./Slices/customCardSlice";
import generateLicenseSlice from "./Slices/generateLicenseSlice";
import searchLicenseSlice from "./Slices/searchLicenseSlice";
import activateKeySlice from "./Slices/activateKeySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  generateLicense: generateLicenseSlice,
  searchLicense: searchLicenseSlice,
  customCard: customCardSlice,
  activateKey: activateKeySlice,
});

const isDevEnvironment = process.env.NODE_ENV === "development";

const middlewares = [];

if (isDevEnvironment) {
  const logger = createLogger({
    duration: true,
    diff: true,
  });
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: isDevEnvironment,
});
