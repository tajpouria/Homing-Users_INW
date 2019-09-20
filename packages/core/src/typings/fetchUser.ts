/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

export enum HomingEndPoints {
    fetchAllUser = "https://cors-anywhere.herokuapp.com/https://homing-assignment.herokuapp.com/api/people/",
    fetchSpecificUser = "https://cors-anywhere.herokuapp.com/https://homing-assignment.herokuapp.com/api/people/"
}

export interface IFetchAllUser {
    id: number;
    name: string;
    title: string;
    likes: number;
    create_at: string;
    avatar: string;
    liked: boolean;
}

export interface IFetchSpecificUser {
    Id: number;
    name: string;
    title: string;
    likes: number;
    create_at: string;
    avatar: string;
    about: string;
    address: string;
    liked: boolean;
}

export interface IFetchedUsers {
    [id: string]: IFetchSpecificUser;
}

export interface IFetchUserStates {
    users: IFetchAllUser[];
    targetFetchedUser?: IFetchSpecificUser;
    fetchedUsers: IFetchedUsers;
    favoritesUsers: IFetchSpecificUser[];
    exceptionMessage: string;
}
