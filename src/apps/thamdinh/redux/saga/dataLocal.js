import { put, takeLatest, all } from "redux-saga/effects";

function* testDataLocal() {
    try {
        console.log('=== test data local ==== ')
    } catch (error) {

    }
}

export default function* saga() {
    yield all([
        takeLatest('TEST_DATA_LOCAL', testDataLocal)
    ])
}