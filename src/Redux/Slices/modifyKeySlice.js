import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productKey: {
    id: null,
  },
  licenseDetails: {
    oldLicense: "234234-234234-234234-234234",
    newLicense: "",
  },
  modifyLicense: true,
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
    },
    updateModifyLicenseFlag : (state, action) => {
        state.modifyLicense = action.modifyLicense;
    }
  },
});

export const { 
    updateKeyToModify, 
    updateLicense,
    updateModifyLicenseFlag,
 } = modifyKeySlice.actions;

export default modifyKeySlice.reducer;
