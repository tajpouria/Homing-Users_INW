/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { IFetchUserStates } from "src/typings/fetchUser";

export enum LikeUser {
    LIKE_USER = "@@homing_assignment@core/LIKE_USER",
    LIKE_USER_COMPLETE = "@@homing_assignment@core/LIKE_USER_COMPLETE"
}

export interface ILikeUserAction {
    type: LikeUser;
    payload: string;
}

export interface ILikeUserActionCompleted {
    type: LikeUser;
    payload: IFetchUserStates;
}
