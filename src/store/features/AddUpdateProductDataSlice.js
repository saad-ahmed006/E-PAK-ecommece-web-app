import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  userProfileData:[],
  error: null,
  editProductData: [],
};

export const AddProductDataSlice = createSlice({
  name: "addproduct",
  initialState,
  reducers: {
    addProductDataInit: (state) => {
      state.loading = true;
    },
    addProductDataSuccess: (state, action) => {
      state.loading = false;
    },
    addProductDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    handleEdit: (state, action) => {
      state.editProductData = action.payload;
    },
    updateProductDataInit: (state) => {
      state.loading = true;
    },
    updateProductDataSuccess: (state, action) => {
      state.loading = false;
      // state.error = null;
    },
    updateProductDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductDataInit: (state) => {
      state.loading = true;
    },
    deleteProductDataSuccess: (state, action) => {
      state.loading = false;
    },
    deleteProductDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUserProfileDataInit: (state) => {
      state.loading = true;
    },
    getUserProfileDataSuccess: (state, action) => {
      state.loading = false;
      state.userProfileData =action.payload;
    },
    getUserProfileDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addProductDataInit,
  addProductDataSuccess,
  addProductDataFail,
  updateProductDataInit,
  updateProductDataSuccess,
  updateProductDataFail,
  deleteProductDataInit,
  deleteProductDataSuccess,
  deleteProductDataFail,
  getUserProfileDataInit,
  getUserProfileDataSuccess,
  getUserProfileDataFail,
  handleEdit,
} = AddProductDataSlice.actions;

export default AddProductDataSlice.reducer;
