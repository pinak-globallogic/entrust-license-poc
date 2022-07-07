import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  licenseServerID: "23456-234567890-123456789-123456",
  uploadFile: "",
  protocolVersion: 1,
  keyID: 1,
};

export const activateKeySlice = createSlice({
  name: "activateKey",
  initialState,
  reducers: {
    setActivateKeyDetails: (state, action) => {
      state.licenseServerID = action.payload.licenseServerID;
      state.uploadFile = action.payload.uploadFile;
      state.protocolVersion = action.payload.protocolVersion;
      state.keyID = action.payload.keyID;
    },
  },
});

export const { setActivateKeyDetails } = activateKeySlice.actions;

export default activateKeySlice.reducer;
