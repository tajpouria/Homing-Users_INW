/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user.reducer";
import { History } from "history";

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        fetchUser: user
    });
