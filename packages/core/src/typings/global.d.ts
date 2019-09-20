/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

declare interface NodeModule {
    hot: {
        accept(path?: string, fn?: () => void, callback?: () => void): void;
    };
}
