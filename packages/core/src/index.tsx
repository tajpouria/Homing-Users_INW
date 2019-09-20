/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/app";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/store";

const { store, persistor } = configureStore();

ReactDOM.render(
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </PersistGate>,
    document.getElementById("root")
);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
