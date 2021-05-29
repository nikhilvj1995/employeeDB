import { all, fork } from 'redux-saga/effects';
import { list } from './list';

export default function* rootSaga() {
    yield all(
        [
            fork(list),
        ]
    );
}