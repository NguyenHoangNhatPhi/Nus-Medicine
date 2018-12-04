import { all } from "redux-saga/effects";

import app from './app';
import dataLocal from './dataLocal';

export default function* sagaRoot() {
    yield all([
        app(),
        dataLocal()
    ])
}