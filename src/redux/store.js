import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import customCardSlice from "./slices/customCardSlice";
import generateLicenseSlice from "./slices/generateLicenseSlice";
import searchLicenseSlice from "./slices/searchLicenseSlice";
import activateKeySlice from "./slices/activateKeySlice";
import modifyKeySlice from "./slices/modifyKeySlice";
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
  modifyKey: modifyKeySlice,
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
