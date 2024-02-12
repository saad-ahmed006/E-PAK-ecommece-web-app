import { call, put } from "redux-saga/effects";
import {
  getProductDataFail,
  getProductDataSuccess,
  getSingleProductDataFail,
  getSingleProductDataSuccess,
} from "../store/features/ProductsSlice";
import { fireDB } from "../firebase/FirebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
const productRef = collection(fireDB, "products");
export function* getProductDataToFireStore() {
  try {
    const querySnapshot = yield call(getDocs, productRef);
    const productsData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    yield put(getProductDataSuccess(productsData));
  } catch (error) {
    yield put(getProductDataFail(error));
  }
}
export function* getSingleProductDataToFireStore(action) {
  try {
    const product = doc(productRef, action.payload.uid);
    const singleProduct = yield call(getDoc, product);
    yield put(getSingleProductDataSuccess({...singleProduct.data(),id:singleProduct.id}));
  } catch (error) {
    yield put(getSingleProductDataFail(error));
  }
}
