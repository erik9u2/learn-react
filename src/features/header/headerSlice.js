import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    style: {
      backgroundColor: "white",
    },
  },
  reducers: {
    changeToRed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.style.backgroundColor = "red";
    },
    resetToDefault: (state) => {
      state.style.backgroundColor = "white";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeToRed, resetToDefault } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
