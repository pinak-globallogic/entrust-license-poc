import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  licenseDetails: {
    productKey: "0480-43cd-12fa-897a",
    featureId: "CMSIGN",
    orderNo: "1006",
    company: "Entrust N",
    expirationDate: "2022/01/02",
    rehostCount: "1",
    limit: "40",
    licenseServerId: "1x83-5684-c832-1b57441x83-5684-c832-1b57441x83-5684-c832",
  },
};

export const searchLicenseSlice = createSlice({
  name: "searchLicense",
  initialState,
  reducers: {
    updateLicenseDetails: (state, action) => {
      state.licenseDetails = action.payload;
    },
  },
});

export const { 
    updateLicenseDetails
 } = searchLicenseSlice.actions;

export default searchLicenseSlice.reducer;
