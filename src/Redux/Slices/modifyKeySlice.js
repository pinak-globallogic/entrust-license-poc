import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productKey: {
    id: null,
  },
  licenseDetails: {
    oldLicense: "",
    newLicense: ""
  },
};

export const modifyKeySlice = createSlice({
  name: "modifyKey",
  initialState,
  reducers: {
    updateKeyToModify: (state, action) => {
      state.productKey.id = action.payload.id;
    },
    updateLicense: (state,action) => {
        state.licenseDetails.oldLicense = action.payload.oldLicense;
        state.licenseDetails.newLicense = action.payload.newLicense;
    }
  },
});

export const { 
    updateKeyToModify, updateLicense
 } = modifyKeySlice.actions;

export default modifyKeySlice.reducer;
