import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyID: "",
  uploadFile: "",
};

export const activateKeySlice = createSlice({
  name: "activateKey",
  initialState,
  reducers: {
    setActivateKeyDetails: (state, action) => {
      state.keyID = action.payload.keyID;
      state.uploadFile = action.payload.uploadFile;
    },
  },
});

export const { setActivateKeyDetails } = activateKeySlice.actions;

export default activateKeySlice.reducer;
