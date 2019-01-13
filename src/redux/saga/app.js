import { put, takeLatest, all } from "redux-saga/effects";

function* registerUser(action) {
    try {
        console.log('=== test app ==== ');
        // yield put({ ...action, type: "APP_GET_LINKS_WEBVIEW_SUCCESS" });
    } catch (error) {

    }
}

export default function* saga() {
    yield all([
        takeLatest('REGISTER_USER', registerUser)
    ])
}