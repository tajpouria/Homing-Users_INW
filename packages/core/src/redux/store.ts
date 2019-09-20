/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer(history);

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type CoreStore = ReturnType<typeof rootReducer>;

const middlewareStack = [routerMiddleware(history), sagaMiddleware];

export default (initialState?: object) => {
    const store = createStore(persistedReducer, initialState, applyMiddleware(...middlewareStack));
    const persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};
