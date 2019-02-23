import { all } from "redux-saga/effects";

import app from './app';
import dataLocal from './dataLocal';
import chat from './chat';

export default function* sagaRoot() {
    yield all([
        app(),
        dataLocal(),
        chat()
    ])
}