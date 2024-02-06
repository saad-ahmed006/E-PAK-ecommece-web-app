import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./features/AppState";
import CartSlice from "./features/CartSlice";
import ProductsSlice from "./features/ProductsSlice";
import AddProductDataSlice from "./features/AddUpdateProductDataSlice";
import OrderPlaceSlice from "./features/OrderPlaceSlice";
import UserContactMessage from "./features/UserContactMessageSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/RootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    AppStateSlice,
    CartSlice,
    ProductsSlice,
    AddProductDataSlice,
    OrderPlaceSlice,
    UserContactMessage,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
