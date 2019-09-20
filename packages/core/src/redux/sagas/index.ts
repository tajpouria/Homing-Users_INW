/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { all } from "redux-saga/effects";
import fetchUserWatcher from "./fetchUser";
import likeUserWatcher from "./likeUser";

export default function* rootSaga() {
    yield all([fetchUserWatcher(), likeUserWatcher()]);
}
