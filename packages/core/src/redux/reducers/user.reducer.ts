/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { Action, FetchUser, LikeUser } from "../actions";
import { IFetchUserStates, IFetchSpecificUser } from "../../typings/fetchUser";

const initialState: IFetchUserStates = {
    users: [],
    fetchedUsers: {},
    targetFetchedUser: undefined,
    favoritesUsers: [],
    exceptionMessage: ""
};

export default (state: IFetchUserStates = initialState, action: Action): IFetchUserStates => {
    switch (action.type) {
        case FetchUser.FETCH_ALL_USERS_SUCCESS:
            return { ...state, ...action.payload };
        case FetchUser.FETCH_SPECIFIC_USER_SUCCESS:
            const fetchedUsers = state.fetchedUsers;
            const { Id } = action.payload as IFetchSpecificUser;
            fetchedUsers[Id] = action.payload as IFetchSpecificUser;
            return { ...state, targetFetchedUser: action.payload as IFetchSpecificUser, fetchedUsers };
        case FetchUser.FETCH_ALL_USERS_FAILURE:
        case FetchUser.FETCH_SPECIFIC_USER_FAILURE:
            return { ...state, exceptionMessage: action.payload.toString() };
        case LikeUser.LIKE_USER_COMPLETE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
