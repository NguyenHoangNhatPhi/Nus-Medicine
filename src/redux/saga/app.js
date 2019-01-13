import { put, takeLatest, all } from "redux-saga/effects";

import { requestAPI } from '../../utils/func';

function* registerUser(action) {
    try {
        // yield put({ ...action, type: "APP_GET_LINKS_WEBVIEW_SUCCESS" });
        const responses = yield requestAPI(action);
        console.log('=== test app ====  : ' + JSON.stringify(responses));
    } catch (error) {
        console.log('error :', error)
    }
}

export default function* saga() {
    yield all([
        takeLatest('REGISTER_USER', registerUser)
    ])
}