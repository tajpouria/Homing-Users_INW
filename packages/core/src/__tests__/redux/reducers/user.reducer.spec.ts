/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import userReducer from "src/redux/reducers/user.reducer";
import { FetchUser, LikeUser } from "src/redux/actions";
import { IFetchUserStates } from "src/typings/fetchUser";
import { dummyFetchAllUser, dummyFetchSpecificUser } from "@users_assignment/utility/lib/helper/test";

const initialState: IFetchUserStates = {
    users: [],
    fetchedUsers: {},
    targetFetchedUser: undefined,
    favoritesUsers: [],
    exceptionMessage: ""
};

describe("userReducer", () => {
    const UsersActionCreator = (type: FetchUser | LikeUser, payload: any) => ({
        type,
        payload
    });

    let randomDummyFetchAllUser: typeof dummyFetchAllUser;
    let randomDummyFetchSpecificUser: typeof dummyFetchSpecificUser;

    beforeEach(() => {
        randomDummyFetchAllUser = dummyFetchAllUser;
        randomDummyFetchSpecificUser = dummyFetchSpecificUser;
    });

    describe(FetchUser.FETCH_ALL_USERS_SUCCESS, () => {
        it("{ users: [user1, user2] } returns { ..state ,users: [user1, user2] }", () => {
            expect(userReducer(initialState, UsersActionCreator(FetchUser.FETCH_ALL_USERS_SUCCESS, { users: [randomDummyFetchAllUser, randomDummyFetchSpecificUser] }))).toEqual({
                ...initialState,
                users: [randomDummyFetchAllUser, randomDummyFetchSpecificUser]
            });
        });
    });

    describe(FetchUser.FETCH_SPECIFIC_USER_SUCCESS, () => {
        it(" user1  returns { ..state ,fetchedUsers: { user1.id: user1 }, targetFetchedUser: user1 }", () => {
            const fetchedUsers = initialState.fetchedUsers;
            const Id = randomDummyFetchSpecificUser.Id;
            fetchedUsers[Id] = randomDummyFetchSpecificUser;
            expect(userReducer(initialState, UsersActionCreator(FetchUser.FETCH_SPECIFIC_USER_SUCCESS, randomDummyFetchSpecificUser))).toEqual({
                ...initialState,
                fetchedUsers,
                targetFetchedUser: randomDummyFetchSpecificUser
            });
        });
    });

    describe(FetchUser.FETCH_ALL_USERS_FAILURE, () => {
        it("'Exception'  returns { ..state , exceptionMessage: Exception }", () => {
            expect(userReducer(initialState, UsersActionCreator(FetchUser.FETCH_ALL_USERS_FAILURE, "Exception"))).toEqual({
                ...initialState,
                exceptionMessage: "Exception"
            });
        });
    });

    describe(FetchUser.FETCH_SPECIFIC_USER_FAILURE, () => {
        it("'Exception'  returns { ..state , exceptionMessage: Exception }", () => {
            expect(userReducer(initialState, UsersActionCreator(FetchUser.FETCH_SPECIFIC_USER_FAILURE, "Exception"))).toEqual({
                ...initialState,
                exceptionMessage: "Exception"
            });
        });
    });

    describe(LikeUser.LIKE_USER_COMPLETE, () => {
        it(`{ favoritesUsers: [user1, user2], targetUser: user1(liked change), users: [user1, user2](liked changed) }
        returns { ..state , favoritesUsers: [user1, user2], targetUser: user1(liked change), users: [user1, user2](liked changed) }`, () => {
            const randomDummyFetchSpecificUser2 = dummyFetchSpecificUser;

            randomDummyFetchSpecificUser.liked = !randomDummyFetchSpecificUser.liked;
            randomDummyFetchSpecificUser2.liked = !randomDummyFetchSpecificUser2.liked;

            const payload = {
                favoritesUsers: [randomDummyFetchSpecificUser, randomDummyFetchSpecificUser2],
                targetUser: randomDummyFetchSpecificUser,
                users: [randomDummyFetchSpecificUser, randomDummyFetchSpecificUser2]
            };

            expect(userReducer(initialState, UsersActionCreator(LikeUser.LIKE_USER_COMPLETE, payload))).toEqual({
                ...initialState,
                ...payload
            });
        });
    });
});
