/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import { IFetchALLUserAction, IFetchSpecifUserActionSuccess } from "./fetchUser";
import { ILikeUserActionCompleted } from "./likeUser";
export * from "./fetchUser";
export * from "./likeUser";

export type Action = IFetchALLUserAction | IFetchSpecifUserActionSuccess | ILikeUserActionCompleted;

export type ExtractActionByType<T extends Action["type"], A extends Action = Action> = A extends { type: T } ? A : never;
export type PayloadOfAction<T extends Action["type"]> = {
    [P in Action["type"]]: ExtractActionByType<P>;
}[T]["payload"];
