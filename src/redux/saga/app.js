import { put, takeLatest, all, join } from "redux-saga/effects";

import { requestAPI } from '../../utils/func';

function* registerUser(action) {
    try {
        const responses = yield requestAPI(action);
        responses.status ?
            yield put({ ...action, type: "REGISTER_USER_SUCCESS", payload: responses })
            : yield put({ ...action, type: "REGISTER_USER_FAIL", payload: responses })
    } catch (error) {
    }
}

function* login(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "SAVE_PROFILE_LOCAL", payload: responses });
            yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses });
        } else {
            yield put({ ...action, type: "USER_LOGIN_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* changePassword(action) {
    try {
        const responses = yield requestAPI(action);
        responses.status ?
            yield put({ ...action, type: "CHANG_PASSWORD_SUCCESS", payload: responses })
            : yield put({ ...action, type: "CHANG_PASSWORD_FAIL", payload: responses })
    } catch (error) {
    }
}

function* updateProfile(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            // yield put({ ...action, type: "USER_LOGIN_SUCCESS", payload: responses });
            yield put({ ...action, type: "SAVE_PROFILE_LOCAL", payload: responses })
        } else {
            yield put({ ...action, type: "UPDATE_PROFILE_FAIL", payload: responses })
        }
    } catch (error) {
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
    }
}

function* forgotPassword(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "FORGOT_PASSWORD_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "FORGOT_PASSWORD_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* searchUser(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "SEARCH_USER_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "SEARCH_USER_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* contactUs(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "CONTACT_US_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "CONTACT_US_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* getListFriends(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "GET_LIST_FRIENDS_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "GET_LIST_FRIENDS_FAIL", payload: responses })
        }
    } catch (error) {
    }
}

function* addFriend(action) {
    try {
        const responses = yield requestAPI(action);
        // if (responses.status) {
        //     yield put({ ...action, type: "GET_LIST_FRIENDS_SUCCESS", payload: responses })
        // } else {
        //     yield put({ ...action, type: "GET_LIST_FRIENDS_FAIL", payload: responses })
        // }
    } catch (error) {
    }
}

function* requestReunion(action) {
    try {
        const responses = yield requestAPI(action);
        if (responses.status) {
            yield put({ ...action, type: "REQUEST_REUNION_SUCCESS", payload: responses })
        } else {
            yield put({ ...action, type: "REQUEST_REUNION_FAIL", payload: responses })
        }
    } catch (error) {
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
        takeLatest('SEARCH_USER', searchUser),
        takeLatest('CONTACT_US', contactUs),
        takeLatest('GET_LIST_FRIENDS', getListFriends),
        takeLatest('ADD_FRIEND', addFriend),
        takeLatest('REQUEST_REUNION', requestReunion),

        
    ])
}