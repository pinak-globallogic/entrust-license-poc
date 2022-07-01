import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    name: "Company ABC",
  },
  product: {
    name: "KMS Key Manager Site License",
    salesOrderNo: "12345",
    lineItemNo: "1.1",
    productItemNo: "654123879",
  },
  feature: {
    edition: "Professional",
  },
  limitation: {
    siteLicense: "false",
    limitCount: 1,
    expiration: "",
    select: "No expiry Date",
  },
};

export const generateLicenseSlice = createSlice({
  name: "generateLicense",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    updateCustomer: (state, action) => {
      state.customer = action.payload;
    },
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
    updateFeature: (state, action) => {
      state.feature = action.payload;
    },
    updateLimitation: (state, action) => {
      state.limitation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCustomer,
  updateProduct,
  updateFeature,
  updateLimitation,
} = generateLicenseSlice.actions;

export default generateLicenseSlice.reducer;
