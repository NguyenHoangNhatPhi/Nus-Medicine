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
        if (responses.status) {
            yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses });
            yield put({ ...action, type: "SAVE_PROFILE_LOCAL", payload: responses })
        } else {
            yield put({ ...action, type: "USER_LOGIN_FAIL", payload: responses })
        }
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
    } catch (error) {
        console.log('error :', error)
    }
}

function* updateProfile(action) {
    try {
        const responses = yield requestAPI(action);
        console.log(responses)
        if (responses.status) {
            // yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses });
            yield put({ ...action, type: "SAVE_PROFILE_LOCAL", payload: responses })
        } else {
            yield put({ ...action, type: "UPDATE_PROFILE_FAIL", payload: responses })
        }
    } catch (error) {
        console.log('error :', error)
    }
}

function* logOut(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            // yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses });
            yield put({ ...action, type: "CLEAR_PROFILE_LOCAL", payload: responses })
        } else {
            yield put({ ...action, type: "LOG_OUT_APP_FAIL", payload: responses })
        }
    } catch (error) {
        console.log('error :', error)
    }
}

function* forgotPassword(action) {
    try {
        const responses = yield requestAPI(action);
        console.log(responses)
        if (responses.status) {
            yield put({ ...action, type: "FORGOT_PASSWORD_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "FORGOT_PASSWORD_FAIL", payload: responses })
        }
    } catch (error) {
        console.log('error :', error)
    }
}


export default function* saga() {
    yield all([
        takeLatest('REGISTER_USER', registerUser),
        takeLatest('USER_LOGIN', login),
        takeLatest('CHANG_PASSWORD', changePassword),
        takeLatest('UPDATE_PROFILE', updateProfile),
        takeLatest('LOG_OUT_APP', logOut),
        takeLatest('FORGOT_PASSWORD', forgotPassword),
    ])
}