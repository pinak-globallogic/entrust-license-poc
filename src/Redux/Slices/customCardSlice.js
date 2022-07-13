import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerCard: {
    id: 0,
    expanded: true,
  },
  productInformationCard: {
    id: 1,
    expanded: true,
  },
  featureCard: {
    id: 2,
    expanded: true,
  },
  limitationCard: {
    id: 3,
    expanded: true,
  },
  licenseServerCard: {
    id: 4,
    expanded: true,
  },
  miscellaneousCard: {
    id: 5,
    expanded: true,
  },
  activePage: {
    number: 0,
    modifyLicenseWizard: 0,
    activateLicenseWizard: 0,
  },
};

export const customCardSlice = createSlice({
  name: "customCard",
  initialState,
  reducers: {
    updateCustomerCardState: (state, action) => {
      state.customerCard = action.payload;
    },
    updateProductInformationCardState: (state, action) => {
      state.productInformationCard = action.payload;
    },
    updateFeatureCardState: (state, action) => {
      state.featureCard = action.payload;
    },
    updateLimitationsCardState: (state, action) => {
      state.limitationCard = action.payload;
    },
    updateLicenseServerCardState: (state, action) => {
      state.licenseServerCard = action.payload;
    },
    updateMiscellaneousCardState: (state, action) => {
      state.miscellaneousCard = action.payload;
    },
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    resetActivePage: (state = initialState) => {
      state.activePage = initialState.activePage;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCustomerCardState,
  updateProductInformationCardState,
  updateFeatureCardState,
  updateLimitationsCardState,
  updateActivePage,
  updateLicenseServerCardState,
  updateMiscellaneousCardState,
  resetActivePage,
} = customCardSlice.actions;

export default customCardSlice.reducer;
