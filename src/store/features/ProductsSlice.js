import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  singleProductData: {},
  error: null,
};

export const getProductDataSlice = createSlice({
  name: "getproduct",
  initialState,
  reducers: {
    getProductDataInit: (state) => {
      state.loading = true;
    },
    getProductDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getProductDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getSingleProductDataInit: (state) => {
      state.loading = true;
    },
    getSingleProductDataSuccess: (state, action) => {
      state.loading = false;
      state.singleProductData = action.payload;
    },
    getSingleProductDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductDataInit,
  getProductDataSuccess,
  getProductDataFail,
  getSingleProductDataInit,
  getSingleProductDataSuccess,
  getSingleProductDataFail,
} = getProductDataSlice.actions;

export default getProductDataSlice.reducer;
