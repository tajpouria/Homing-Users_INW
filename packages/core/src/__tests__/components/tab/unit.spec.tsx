/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Helper } from "@users_assignment/utility";
import { dummyFetchAllUser, dummyFetchSpecificUser } from "@users_assignment/utility/lib/helper/test";

import Tab, { ITabProps } from "src/components/tab";
import { Prefixes, defaultUserImage } from "src/typings/core-envConfig";

describe("<Tab />", () => {
    const defaultProps: ITabProps = {
        children: [],
        favoritesPage: false
    };

    function setup(props: any = {}) {
        const specifiedProps = { ...defaultProps, ...props };

        const enzymeWrapper = shallow(<Tab {...specifiedProps} />);

        return enzymeWrapper;
    }

    const UserInfoCustomCardPropContent = (wrapper: ShallowWrapper, user: typeof dummyFetchAllUser | typeof dummyFetchSpecificUser) => {
        const UserInfoCustomCard = Helper.test.findByTestAttribute(wrapper, "tab-UserInfoCustomCard");

        const name = UserInfoCustomCard.find(`[name="${user.name}"]`);
        const title = UserInfoCustomCard.find(`[title="${user.title}"]`);
        const imagePath = UserInfoCustomCard.find(`[imagePath="${defaultUserImage}"]`);
        const imageAlt = UserInfoCustomCard.find(`[imageAlt="${user.name}"]`);
        const like = UserInfoCustomCard.find(`[like="${Helper.JSON.likeDescriptor(user.likes, user.liked)}"]`);
        const liked = UserInfoCustomCard.find(`[liked=${user.liked}]`);

        return { name, title, imagePath, imageAlt, like, liked };
    };

    describe("exceptionMessage", () => {
        let wrapper: ShallowWrapper;

        beforeEach(() => {
            wrapper = setup({ exceptionMessage: "exceptionMessage" });
        });

        it(`returns Paper and Typography`, () => {
            const Paper = Helper.test.findByTestAttribute(wrapper, "tab-empty-favorite-Paper");
            const Typography = Helper.test.findByTestAttribute(wrapper, "tab-empty-favorite-Typography");

            expect(Paper.length).toBe(1);
            expect(Typography.length).toBe(1);
        });
    });

    describe("children === [] and && favoritePage === true", () => {
        let wrapper: ShallowWrapper;

        beforeEach(() => {
            wrapper = setup({ favoritesPage: true });
        });

        it(`returns Paper and Typography`, () => {
            const Paper = Helper.test.findByTestAttribute(wrapper, "tab-empty-favorite-Paper");
            const Typography = Helper.test.findByTestAttribute(wrapper, "tab-empty-favorite-Typography");

            expect(Paper.length).toBe(1);
            expect(Typography.length).toBe(1);
        });
    });

    describe("children === [] and && favoritePage === false", () => {
        let wrapper: ShallowWrapper;

        beforeEach(() => {
            wrapper = setup();
        });

        it("returns LinearProgressBar on empty children(users) and favoritePage === false", () => {
            const LinearProgressBar = Helper.test.findByTestAttribute(wrapper, "tab-empty-LinearProgressBar");

            expect(LinearProgressBar.length).toBe(1);
        });
    });

    describe("children === [dummyFetchSpecificUser]", () => {
        let wrapper: ShallowWrapper;

        const randomDummyFetchSpecificUser = Helper.test.dummyFetchSpecificUser;

        beforeEach(() => {
            wrapper = setup({ children: [randomDummyFetchSpecificUser] });
        });

        it("returns proper Link.props.to", () => {
            const Link = Helper.test.findByTestAttribute(wrapper, "tab-Link");
            const to = Link.find(`[to="${Prefixes.specific_user}${randomDummyFetchSpecificUser.Id}"]`);

            expect(to.length).toBe(1);
        });

        it("returns proper content", () => {
            const { name, title, imagePath, imageAlt, like, liked } = UserInfoCustomCardPropContent(wrapper, randomDummyFetchSpecificUser);

            expect(name.length).toBe(1);
            expect(title.length).toBe(1);
            expect(imagePath.length).toBe(1);
            expect(imageAlt.length).toBe(1);
            expect(like.length).toBe(1);
            expect(liked.length).toBe(1);
        });
    });

    describe("children === [dummyFetchAllUser]", () => {
        let wrapper: ShallowWrapper;

        const randomDummyFetchAllUser = Helper.test.dummyFetchAllUser;

        beforeEach(() => {
            wrapper = setup({ children: [randomDummyFetchAllUser] });
        });

        it(`returns proper Link.props.to`, () => {
            const Link = Helper.test.findByTestAttribute(wrapper, "tab-Link");
            const to = Link.find(`[to="${Prefixes.specific_user}${randomDummyFetchAllUser.id}"]`);

            expect(to.length).toBe(1);
        });

        it("returns proper content", () => {
            const { name, title, imagePath, imageAlt, like, liked } = UserInfoCustomCardPropContent(wrapper, randomDummyFetchAllUser);

            expect(name.length).toBe(1);
            expect(title.length).toBe(1);
            expect(imagePath.length).toBe(1);
            expect(imageAlt.length).toBe(1);
            expect(like.length).toBe(1);
            expect(liked.length).toBe(1);
        });
    });

    describe("children === [dummyFetchAllUser, dummyFetchSpecificUser]", () => {
        let wrapper: ShallowWrapper;

        const randomDummyFetchAllUser = Helper.test.dummyFetchAllUser;
        const randomDummyFetchSpecificUser = Helper.test.dummyFetchSpecificUser;

        beforeEach(() => {
            wrapper = setup({ children: [randomDummyFetchAllUser, randomDummyFetchSpecificUser] });
        });

        it(`returns 2 Link`, () => {
            const Link = Helper.test.findByTestAttribute(wrapper, "tab-Link");

            expect(Link.length).toBe(2);
        });
    });
});
