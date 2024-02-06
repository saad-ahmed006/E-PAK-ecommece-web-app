import { all,  takeLatest } from "redux-saga/effects";
import { addDataToFireStore, deleteDataToFireStore, getUserProfileDataFromFireStore, updateDataToFireStore } from "./AddUpdateProductSaga";
import { addProductDataInit, deleteProductDataInit, getUserProfileDataInit, updateProductDataInit } from "../store/features/AddUpdateProductDataSlice";
import { getProductDataToFireStore, getSingleProductDataToFireStore } from "./ProductsSaga";
import { getProductDataInit, getSingleProductDataInit } from "../store/features/ProductsSlice";
import { AddToCartDataToFireStore, DecrementFromCart, IncrementFromCart } from "./CartSaga";
import { addToCartInit, decrementProductInit,  incrementProductInit } from "../store/features/CartSlice";
import { OrderPlaceToFireStore, getAdminPageUserOrderPlaceDataToFireStore, getUserOrderPlaceDataFromFireStore } from "./OrderPlaceSaga";
import { getAdminPageUserOrderDataInit, getUserOrderDataInit, userOrderDataInit } from "../store/features/OrderPlaceSlice";
import { addUserContactMessageToFireStore, getUserContactMessageFromFireStore } from "./UserContactMessageSaga";
import { addMessageDataInit, getMessageDataInit } from "../store/features/UserContactMessageSlice";

export default function* rootSaga() {
  yield all([
    takeLatest(addProductDataInit.type,addDataToFireStore ),
    takeLatest(getProductDataInit.type,getProductDataToFireStore ),
    takeLatest(updateProductDataInit.type,updateDataToFireStore ),
    takeLatest(deleteProductDataInit.type,deleteDataToFireStore ),
    takeLatest(addToCartInit.type,AddToCartDataToFireStore ),
    takeLatest(getSingleProductDataInit.type,getSingleProductDataToFireStore ),
    takeLatest(incrementProductInit.type,IncrementFromCart ),
    takeLatest(decrementProductInit.type,DecrementFromCart ),
    takeLatest(getUserProfileDataInit.type,getUserProfileDataFromFireStore ),
    takeLatest(userOrderDataInit.type,OrderPlaceToFireStore ),
    takeLatest(getUserOrderDataInit.type,getUserOrderPlaceDataFromFireStore ),
    takeLatest(getAdminPageUserOrderDataInit.type,getAdminPageUserOrderPlaceDataToFireStore ),
    takeLatest(addMessageDataInit.type,addUserContactMessageToFireStore ),
    takeLatest(getMessageDataInit.type,getUserContactMessageFromFireStore ),
  ]);
}
