/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { takeEvery, put, select } from "redux-saga/effects";

import { getUsers, getFetchedUsers, getTargetFetchedUser, getFavoritesUsers } from "../reducers/selector";
import { ILikeUserAction, LikeUser } from "../actions";
import { IFetchAllUser, IFetchSpecificUser } from "src/typings/fetchUser";

function* likeUserRequestWatcher(action: ILikeUserAction) {
    const userId = parseInt(action.payload, 10);
    const users = yield select(getUsers);
    const fetchedUsers = yield select(getFetchedUsers);
    const targetFetchedUser = yield select(getTargetFetchedUser);
    const favoritesUsers = yield select(getFavoritesUsers);

    if (users.length) {
        users.map((user: IFetchAllUser) => {
            if (user.id === userId) {
                user.liked = !user.liked;
            }
        });
    }
    if (fetchedUsers[userId]) {
        fetchedUsers[userId].liked = !fetchedUsers[userId].liked;
    }

    let removed = false;
    favoritesUsers.map((user: IFetchSpecificUser, index: number) => {
        if (user.Id === userId) {
            favoritesUsers.splice(index, 1);
            removed = true;
        }
    });
    if (!removed && fetchedUsers[userId]) {
        favoritesUsers.push(fetchedUsers[userId]);
    }

    yield put({ type: LikeUser.LIKE_USER_COMPLETE, payload: { users, fetchedUsers, targetFetchedUser, favoritesUsers } });
}

export default function* generatorWatcher() {
    yield takeEvery(LikeUser.LIKE_USER, likeUserRequestWatcher);
}
