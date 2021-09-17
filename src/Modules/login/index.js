import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import {axios} from "../app/index";
import nomalize from "./../../Utils/normiliseServerResponce";
import {
    TEST
} from './reducer'

export function* getTest({payload}){
   alert(payload)
}

export function* loginSaga(){
    yield takeLatest(TEST,getTest);
}