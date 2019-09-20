/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

/**
 * External Imports
 */
import React, { Component, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { PersistentDrawer, MobileTab, MUIcons, MuiIconsColorPallet } from "@users_assignment/utility";
/**
 * Internal Imports
 */
import { Tabs } from "src/typings/core-envConfig";
import Tab from "../tab";
import { fetchAllUsers } from "src/redux/actions";
import { IFetchAllUser, IFetchSpecificUser } from "src/typings/fetchUser";

export interface ICoreProps extends RouteComponentProps {
    users: IFetchAllUser[];
    favoritesUsers: IFetchSpecificUser[];
    fetchAllUsers: typeof fetchAllUsers;
    exceptionMessage?: string;
}

interface ICoreStates {
    currentTab: Tabs;
}

export class Core extends Component<any, ICoreStates> {
    public state = { currentTab: Tabs.Users };
    protected fetchAllUsers = this.props.fetchAllUsers;
    protected history = this.props.history;

    public componentDidMount() {
        const users = this.props.users;
        if (!users.length) {
            this.fetchAllUsers();
        }
    }
    public render() {
        const { users, favoritesUsers, exceptionMessage } = this.props;
        const { currentTab } = this.state;

        const tabs = [
            { label: "Home", icon: { icon: MUIcons.Home, color: currentTab === Tabs.Users ? MuiIconsColorPallet.primary : undefined } },
            { label: "Favorites", icon: { icon: MUIcons.Favorite, color: currentTab === Tabs.Favorites ? MuiIconsColorPallet.primary : undefined } }
        ];

        return (
            <PersistentDrawer title={currentTab} navbarLeftIcon={{ icon: MUIcons.Person, color: MuiIconsColorPallet.action, callback: this.handleBackToUsersPage }} data-test="core-PersistentDrawer">
                <MobileTab tabs={tabs} bottom={true} onTabChange={this.handleTabChange} data-test="core-MobileTab">
                    <Tab exceptionMessage={exceptionMessage} data-test="core-Tab">
                        {users}
                    </Tab>
                    <Tab favoritesPage={true} exceptionMessage={exceptionMessage} data-test="core-Tab">
                        {favoritesUsers}
                    </Tab>
                </MobileTab>
            </PersistentDrawer>
        );
    }

    private handleTabChange = async (event: ChangeEvent<{}>, currentTabIndex: number) => {
        currentTabIndex ? await this.setState({ currentTab: Tabs.Favorites }) : await this.setState({ currentTab: Tabs.Users });
    };

    private handleBackToUsersPage = () => {
        this.history.push("/");
    };
}

const actions = { fetchAllUsers };

export default connect(
    state => {
        return { ...(state.fetchUser || {}) };
    },
    actions
)(Core);
