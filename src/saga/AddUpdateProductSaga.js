import { call, put } from "redux-saga/effects";
import {
  addProductDataFail,
  addProductDataSuccess,
  deleteProductDataFail,
  deleteProductDataSuccess,
  getUserProfileDataFail,
  getUserProfileDataSuccess,
  updateProductDataFail,
  updateProductDataSuccess,
} from "../store/features/AddUpdateProductDataSlice";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
const productRef = collection(fireDB, "products");
const userRef = collection(fireDB, "users");

export function* addDataToFireStore(action) {
  try {
    yield addDoc(productRef, action.payload);
    yield put(addProductDataSuccess());
  } catch (error) {
    yield put(addProductDataFail(error));
  }
}
export function* updateDataToFireStore(action) {
  try {
    yield updateDoc(doc(productRef, action.payload.id), action.payload);
    yield put(updateProductDataSuccess());
  } catch (error) {
    yield put(updateProductDataFail(error));
  }
}
export function* deleteDataToFireStore(action) {
  try {
    yield deleteDoc(doc(fireDB, "products", action.payload.id));
    yield put(deleteProductDataSuccess());
  } catch (error) {
    yield put(deleteProductDataFail(error));
  }
}

export function* getUserProfileDataFromFireStore() {
  try {
    const querySnapshot = yield getDocs(userRef);

    const usersData = yield querySnapshot?.docs?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    yield put(getUserProfileDataSuccess(usersData));
  } catch (error) {
    yield put(getUserProfileDataFail(error));
  }
}
