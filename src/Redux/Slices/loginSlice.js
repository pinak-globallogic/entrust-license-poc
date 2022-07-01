import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginDetails: (state, action) => {
      console.log("action", action.payload);
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { setLoginDetails } = loginSlice.actions;

export default loginSlice.reducer;
