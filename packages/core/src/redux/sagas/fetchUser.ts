/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { FetchUser } from "../actions";
import { HomingEndPoints, IFetchAllUser } from "../../typings/fetchUser";
import { IFetchSpecifUserAction } from "../actions/fetchUser";

import { Helper } from "@users_assignment/utility";

function* fetchAllUsersRequestWorker() {
    try {
        const response = yield call(Helper.HTTP.get, HomingEndPoints.fetchAllUser);
        const users = yield response.parsedData.data.map((user: IFetchAllUser) => ({ ...user, liked: false }));
        yield put({ type: FetchUser.FETCH_ALL_USERS_SUCCESS, payload: { users, exceptionMessage: "" } });
    } catch (ex) {
        put({ type: FetchUser.FETCH_ALL_USERS_FAILURE, payload: ex.message });
    }
}

function* fetchSpecificUserRequestWorker(action: IFetchSpecifUserAction) {
    try {
        const response = yield call(Helper.HTTP.get, `${HomingEndPoints.fetchSpecificUser}${action.payload}`);
        yield put({ type: FetchUser.FETCH_SPECIFIC_USER_SUCCESS, payload: { ...response.parsedData, liked: false } });
    } catch (ex) {
        put({ type: FetchUser.FETCH_SPECIFIC_USER_FAILURE, payload: ex.message });
    }
}

export default function* generatorWatcher() {
    yield takeEvery(FetchUser.FETCH_ALL_USERS, fetchAllUsersRequestWorker);
    yield takeEvery(FetchUser.FETCH_SPECIFIC_USER, fetchSpecificUserRequestWorker);
}
