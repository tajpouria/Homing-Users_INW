/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

/**
 *
 * Is an index or number.
 *
 * Optionally remove the value
 *
 * @param {string} string
 */
export const isIndex = (str: string) => /^\d+$/.test(str);

/**
 *
 * Group an array of object based on provided prop
 *
 *
 * @param {objectArray} Array<{}>
 * @param {property} string<{}>
 */
export const groupBy = (objectArray: Array<{}>, property: string) => {
    return objectArray.reduce((total, obj) => {
        const key = obj[property];
        if (!total[key]) {
            total[key] = [];
        }
        total[key].push(obj);
        return total;
    }, {});
};

/**
 *
 * Indicate custom sentence based how if current user liked or how some body else
 *
 *
 * @param {likes} number
 * @param {liked} boolean
 */
export const likeDescriptor = (likes: number, liked: boolean): string => {
    const likedPrefix = (answer: string) => `liked by ${answer}.`;

    if (!liked && !likes) {
        return likedPrefix("no body, be the first one");
    } else if (liked && !likes) {
        return likedPrefix("you");
    } else if (!liked && likes) {
        return likedPrefix(`${likes} people`);
    } else if (liked && likes) {
        return likedPrefix(`you and ${likes} other people`);
    } else {
        return "likeDescriptor : answer is no in predicted dimensions.";
    }
};
