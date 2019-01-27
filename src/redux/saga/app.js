import { put, takeLatest, all } from "redux-saga/effects";

import { requestAPI } from '../../utils/func';

function* registerUser(action) {
    try {
        const responses = yield requestAPI(action);
        responses.status ?
            yield put({ ...action, type: "REGISTER_USER_SUCCESS", payload: responses })
            : yield put({ ...action, type: "REGISTER_USER_FAIL", payload: responses })
    } catch (error) {
        console.log('error :', error)
    }
}

function* login(action) {
    try {
        const responses = yield requestAPI(action);
        responses.status ?
            yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses })
            : yield put({ ...action, type: "USER_LOGIN_FAIL", payload: responses })
    } catch (error) {
        console.log('error :', error)
    }
}

function* changePassword(action) {
    try {
        const responses = yield requestAPI(action);
        responses.status ?
            yield put({ ...action, type: "CHANG_PASSWORD_SUCCESS", payload: responses })
            : yield put({ ...action, type: "CHANG_PASSWORD_FAIL", payload: responses })
        // console.log('responses changePassword : ' + JSON.stringify(responses))
    } catch (error) {
        console.log('error :', error)
    }
}


export default function* saga() {
    yield all([
        takeLatest('REGISTER_USER', registerUser),
        takeLatest('USER_LOGIN', login),
        takeLatest('CHANG_PASSWORD', changePassword)
    ])
}