import { put, takeLatest, all } from "redux-saga/effects";

import { requestAPI } from '../../utils/func';

function* getHistoryChat(action) {
    try {
        const responses = yield requestAPI(action);
        console.log('history chat : ' + JSON.stringify(responses))
        // if (responses.status) {
        //     yield put({ ...action, type: "CONTACT_US_SUCCESS", payload: responses })
        // } else {
        //     yield put({ ...action, type: "CONTACT_US_FAIL", payload: responses })
        // }
    } catch (error) {
        console.log('error8 :', error)
    }
}


export default function* saga() {
    yield all([
        takeLatest('GET_HISTORY_CHAT', getHistoryChat),
    ])
}