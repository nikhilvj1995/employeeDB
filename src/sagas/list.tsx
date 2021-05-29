import * as TYPES from '../actions/types';
import Api from '../api/Api';
import { takeLatest, put } from 'redux-saga/effects';

function* listUsers() {
    try {
        //API Call
        const data = yield Api.getUsers();
        // // Dispatch Action To Redux Store
        yield put({
            type: TYPES.GET_LIST_SUCCESS,
            data: data
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* list() {
    // Take Last Action
    yield takeLatest(TYPES.GET_LIST, listUsers);
}