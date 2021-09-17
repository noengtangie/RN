import { all } from "redux-saga/effects";
import {appSaga} from "../Modules/app";
import {loginSaga} from "../Modules/login";

const sagas = [
  appSaga(),
  loginSaga(),
];

export default function*() {
  yield all(sagas);
}
