import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userOrderData: [],
  adminPageOrderData: [],
  error: false,
};

export const OrderSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {
    userOrderDataInit: (state) => {
      state.loading = true;
    },
    userOrderDataSuccess: (state, action) => {
      state.loading = false;
    },
    userOrderDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUserOrderDataInit: (state) => {
      state.loading = true;
    },
    getUserOrderDataSuccess: (state, action) => {
      state.loading = false;
      state.userOrderData = action.payload;
    },
    getUserOrderDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAdminPageUserOrderDataInit: (state) => {
      state.loading = true;
    },
    getAdminPageUserOrderDataSuccess: (state, action) => {
      state.loading = false;
      state.adminPageOrderData = action.payload;
    },
    getAdminPageUserOrderDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userOrderDataInit,
  userOrderDataSuccess,
  userOrderDataFail,
  getUserOrderDataInit,
  getUserOrderDataSuccess,
  getUserOrderDataFail,
  getAdminPageUserOrderDataInit,
  getAdminPageUserOrderDataSuccess,
  getAdminPageUserOrderDataFail,
} = OrderSlice.actions;

export default OrderSlice.reducer;
