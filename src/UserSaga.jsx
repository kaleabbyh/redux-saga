/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getUsersSuccess } from "./UserState";

function* getUsers() {
  const users = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/albums")
  );

  const formated = yield users.json();
  const allUsers = formated.slice(0, 10);
  yield put(getUsersSuccess(allUsers));
}

function* userSaga() {
  yield takeEvery("users/getUsersFetch", getUsers);
}

export default userSaga;
