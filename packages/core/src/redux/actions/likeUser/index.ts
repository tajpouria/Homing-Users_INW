/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { LikeUser, ILikeUserAction } from "./action-type";

export * from "./action-type";

export const likeUser = (userId: string): ILikeUserAction => ({ type: LikeUser.LIKE_USER, payload: userId });
