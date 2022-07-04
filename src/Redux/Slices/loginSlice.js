import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "admin",
  role: "Fulfillment",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { setLoginDetails } = loginSlice.actions;

export default loginSlice.reducer;
