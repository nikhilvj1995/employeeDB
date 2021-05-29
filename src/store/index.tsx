import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { logger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from '../reducers';
import rootSaga from '../sagas';

export type AppState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
