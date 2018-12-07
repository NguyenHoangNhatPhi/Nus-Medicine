import { all } from "redux-saga/effects";

import app from './app';
import dataLocal from './dataLocal';
import auth from '../../../../core/redux/saga/auth'

export default function* sagaRoot() {
    yield all([
        app(),
        dataLocal(),
        auth()
    ])
}