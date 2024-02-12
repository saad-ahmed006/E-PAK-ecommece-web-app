import { call, put, select } from "redux-saga/effects";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import {
  addToCartFail,
  addToCartSuccess,
  decrementProductFail,
  decrementProductSuccess,
  incrementProductFail,
  incrementProductSuccess,
} from "../store/features/CartSlice";
const user = JSON.parse(localStorage.getItem("user"));
export function* AddToCartDataToFireStore(action) {
  try {
    yield addDoc(
      collection(fireDB, "Cart " + action.payload.uid),
      action.payload.product
    );
    yield put(addToCartSuccess());
  } catch (error) {
    yield put(addToCartFail(error));
  }
}

export function* IncrementFromCart(action) {
  // console.log(action.payload);
  try {
    yield updateDoc(
      doc(fireDB, "Cart " + user.user.uid, action.payload.id),
      action.payload
    );

    yield put(incrementProductSuccess());
  } catch (error) {
    yield put(incrementProductFail(error));
  }
}
export function* DecrementFromCart(action) {
  // console.log(action.payload);
  try {
    yield updateDoc(
      doc(fireDB, "Cart " + user.user.uid, action.payload.id),
      action.payload
    );

    yield put(decrementProductSuccess());
  } catch (error) {
    yield put(decrementProductFail(error));
  }
}
