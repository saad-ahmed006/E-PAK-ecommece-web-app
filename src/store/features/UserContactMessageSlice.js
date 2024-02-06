import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  adminPageMessageData: [],
  error: null,
};

export const userContactMessage = createSlice({
  name: "getproduct",
  initialState,
  reducers: {
    addMessageDataInit: (state) => {
      state.loading = true;
    },
    addMessageDataSuccess: (state) => {
      state.loading = false;
    },
    addMessageDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMessageDataInit: (state) => {
      state.loading = true;
    },
    getMessageDataSuccess: (state, action) => {
      state.loading = false;
      state.adminPageMessageData = action.payload;
    },
    getMessageDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  },
});

export const {
  addMessageDataInit,
  addMessageDataSuccess,
  addMessageDataFail,
  getMessageDataInit,
  getMessageDataSuccess,
  getMessageDataFail,
 
} = userContactMessage.actions;

export default userContactMessage.reducer;
