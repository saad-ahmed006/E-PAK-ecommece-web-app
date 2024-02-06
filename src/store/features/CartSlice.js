import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cart: [],
  error: false,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCartInit: (state, action) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
    },
    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getCartProductSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    },

    incrementProductInit: (state, action) => {
      state.loading = true;
    },
    incrementProductSuccess: (state, action) => {
      state.loading = false;
    },
    incrementProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    decrementProductInit: (state, action) => {
      state.loading = true;
    },
    decrementProductSuccess: (state, action) => {
      state.loading = false;
    },
    decrementProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteFromCart: (state, action) => {
      const updateItem = state.cart.filter(
        (elem) => elem.id !== action.payload
      );
      state.cart = updateItem;
    },
  },
});

export const {
  addToCartInit,
  addToCartSuccess,
  addToCartFail,
  // getCartProductInit,
  getCartProductSuccess,
  // getCartProductFail,
  incrementProductInit,
  incrementProductSuccess,
  incrementProductFail,
  decrementProductInit,
  decrementProductSuccess,
  decrementProductFail,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
