import { call, put } from "redux-saga/effects";
import { fireDB } from "../firebase/FirebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {
  addMessageDataFail,
  addMessageDataSuccess,
  getMessageDataFail,
  getMessageDataSuccess,
} from "../store/features/UserContactMessageSlice";
const UserMessageRef = collection(fireDB, "Message");
export function* addUserContactMessageToFireStore(action) {
  try {
    yield addDoc(UserMessageRef, action.payload);
    yield put(addMessageDataSuccess());
  } catch (error) {
    yield put(addMessageDataFail(error));
  }
}
export function* getUserContactMessageFromFireStore() {
  try {
    const querySnapshot = yield call(getDocs, UserMessageRef);
    const messageData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    yield put(getMessageDataSuccess(messageData));
  } catch (error) {
    yield put(getMessageDataFail(error));
  }
}
