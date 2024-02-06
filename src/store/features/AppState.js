import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  loading: false,
};

export const AppStateSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    handleColorMode: (state, action) => {
      if (state.mode === "light") {
        state.mode = action.payload;
        document.body.style.backgroundColor = "rgb(17, 24, 39)";
      } else {
        state.mode = action.payload;
        document.body.style.backgroundColor = "white";
      }
    },
    isLoading: (state, action) => {
        state.loading=action.payload
    },

  },
});

export const { handleColorMode,isLoading } = AppStateSlice.actions;

export default AppStateSlice.reducer;
