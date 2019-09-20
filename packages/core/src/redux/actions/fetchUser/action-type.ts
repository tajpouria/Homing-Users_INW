/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { IFetchAllUser, IFetchSpecificUser } from "src/typings/fetchUser";

export enum FetchUser {
    FETCH_ALL_USERS = "@@homing_assignment@core/FETCH_ALL_USERS",
    FETCH_ALL_USERS_SUCCESS = "@@homing_assignment@core/FETCH_ALL_USERS_SUCCESS",
    FETCH_ALL_USERS_FAILURE = "@@homing_assignment@core/FETCH_ALL_USERS_FAILURE",
    FETCH_SPECIFIC_USER = "@@homing_assignment@core/FETCH_SPECIFIC_USER",
    FETCH_SPECIFIC_USER_SUCCESS = "@@homing_assignment@core/FETCH_SPECIFIC_SUCCESS",
    FETCH_SPECIFIC_USER_FAILURE = "@@homing_assignment@core/FETCH_SPECIFIC_FAILURE"
}

export interface IFetchALLUserAction {
    type: FetchUser;
    payload: IFetchAllUser[];
}

export interface IFetchSpecifUserAction {
    type: FetchUser;
    payload: string;
}

export interface IFetchSpecifUserActionSuccess {
    type: FetchUser;
    payload: IFetchSpecificUser;
}
