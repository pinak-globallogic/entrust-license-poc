import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  license: {
    licenseServerID: "23456-234567890-123456789-123456",
    uploadFile: "",
    downloadFile: "",
    protocolVersion: 1,
  },
  activePage: {
    number: 0,
  },
  customer: {
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    region: "",
    zip: "",
    country: "",
    phone: "",
    email: "",
  },
  key: {
    id: "",
    showKeyDetails: false,
  }
};

export const activateKeySlice = createSlice({
  name: "activateKey",
  initialState,
  reducers: {
    updateLicense: (state, action) => {
      state.license.licenseServerID = action.payload.licenseServerID;
      state.license.uploadFile = action.payload.uploadFile;
      state.license.protocolVersion = action.payload.protocolVersion;
      state.license.downloadFile = action.payload.downloadFile;
    },
    updateActivePage: (state, action) => {
      state.activePage.number = action.payload.number;
    },
    updateCustomer: (state, action) => {
      state.customer.firstName = action.payload.firstName;
      state.customer.lastName = action.payload.lastName;
      state.customer.company = action.payload.company;
      state.customer.city = action.payload.city;
      state.customer.addressLine1 = action.payload.addressLine1;
      state.customer.addressLine2 = action.payload.addressLine2;
      state.customer.region = action.payload.region;
      state.customer.zip = action.payload.zip;
      state.customer.country = action.payload.country;
      state.customer.phone = action.payload.phone;
      state.customer.email = action.payload.email;
    },
    updateKey: (state, action) => {
      state.key.id = action.payload.id;
      state.key.showKeyDetails = action.payload.showKeyDetails;
    }
  },
});

export const { updateLicense, updateActivePage, updateCustomer, updateKey } = activateKeySlice.actions;

export default activateKeySlice.reducer;
