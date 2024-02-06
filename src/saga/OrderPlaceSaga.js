import { call, put } from "redux-saga/effects";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import {
  getAdminPageUserOrderDataFail,
  getAdminPageUserOrderDataSuccess,
  getUserOrderDataFail,
  getUserOrderDataSuccess,
  userOrderDataFail,
  userOrderDataSuccess,
} from "../store/features/OrderPlaceSlice";
import { fireDB } from "../firebase/FirebaseConfig";

export function* OrderPlaceToFireStore(action) {
  try {
    yield action.payload.data.cart.map(async (productData) => {
      await addDoc(collection(fireDB, "UserOrder " + action.payload.uid), {
        ...productData,
      });
    });
    yield addDoc(collection(fireDB, "AdminPageOrderData"), action.payload.data);
    
    yield action.payload.data.cart.map((item) =>
      deleteDoc(doc(fireDB, "Cart " + action.payload.uid, item.id))
    );
    yield put(userOrderDataSuccess());
  } catch (error) {
    yield put(userOrderDataFail(error));
  }
}

export function* getUserOrderPlaceDataFromFireStore(action) {
  try {
    const querySnapshot = yield call(
      getDocs,
      collection(fireDB, "UserOrder " + action.payload.uid)
    );
    const userOrderData = yield querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    yield put(getUserOrderDataSuccess(userOrderData));
  } catch (error) {
    yield put(getUserOrderDataFail(error));
  }
}

export function* getAdminPageUserOrderPlaceDataToFireStore() {
  try {
    const querySnapshot = yield call(
      getDocs,
      collection(fireDB, "AdminPageOrderData")
    );
    const adminPageOrderData = yield querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    yield put(getAdminPageUserOrderDataSuccess(adminPageOrderData));
  } catch (error) {
    yield put(getAdminPageUserOrderDataFail(error));
  }
}
