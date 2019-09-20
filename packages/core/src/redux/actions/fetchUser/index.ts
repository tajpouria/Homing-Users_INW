/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { IFetchALLUserAction, IFetchSpecifUserAction, FetchUser } from "./action-type";

export * from "./action-type";

export const fetchAllUsers = (): IFetchALLUserAction => ({ type: FetchUser.FETCH_ALL_USERS, payload: [] });
export const fetchSpecifUser = (userId: string): IFetchSpecifUserAction => ({ type: FetchUser.FETCH_SPECIFIC_USER, payload: userId });
