/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { IFetchUserStates } from "src/typings/fetchUser";

interface IStore {
    fetchUser: IFetchUserStates;
    [state: string]: any;
}

export const getUsers = (state: IStore) => state.fetchUser.users;
export const getFetchedUsers = (state: IStore) => state.fetchUser.fetchedUsers;
export const getTargetFetchedUser = (state: IStore) => state.fetchUser.targetFetchedUser;
export const getFavoritesUsers = (state: IStore) => state.fetchUser.favoritesUsers;
