import { put, takeLatest, all } from "redux-saga/effects";

import { requestAPI } from '../../utils/func';
import apiConfigs from '../../configs/api';

function* getHistoryChat(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "GET_HISTORY_CHAT_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "GET_HISTORY_CHAT_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* loadmoreChat(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "LOAD_MORE_MESSAGE_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "LOAD_MORE_MESSAGE_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* updateAt(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({
                type: 'UPDATE_LIST_FRIENDS',
                method: 'GET',
                api: `${apiConfigs.BASE_API}user/list-friend?page=1`,
                token: true,
            })
        } else {
            // yield put({ ...action, type: "LOAD_MORE_MESSAGE_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* updateListFriends(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "UPDATE_LIST_FRIENDS_SUCCESS", payload: responses })
        } else {
            // yield put({ ...action, type: "GET_LIST_FRIENDS_FAIL", payload: responses })
        }
    } catch (error) {
    }
}


export default function* saga() {
    yield all([
        takeLatest('GET_HISTORY_CHAT', getHistoryChat),
        takeLatest('LOAD_MORE_MESSAGE', loadmoreChat),
        takeLatest('UPDATE_AT', updateAt),
        takeLatest('UPDATE_LIST_FRIENDS', updateListFriends),
    ])
}