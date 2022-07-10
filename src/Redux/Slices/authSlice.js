import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "admin",
  role: "Fulfillment",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateLogin: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    updateLogout: () => initialState,
  },
});

export const { updateLogin, updateLogout } = authSlice.actions;

export default authSlice.reducer;
