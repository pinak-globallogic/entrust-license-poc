import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerCard: {
    expanded: true,
  },
  productInformationCard: {
    expanded: true,
  },
  featureCard: {
    expanded: true,
  },
  limitationCard: {
    expanded: true,
  },
  activePage: {
    number: 0
  }
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
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
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
} = customCardSlice.actions;

export default customCardSlice.reducer;
