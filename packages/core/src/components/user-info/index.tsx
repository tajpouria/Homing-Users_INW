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
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { PersistentDrawer, LinearProgressBar, UserInfoCustomCard, UserAddressCustomCard, UserAboutCustomCard, Helper, MuiIconsColorPallet } from "@users_assignment/utility";
/**
 * Internal Imports
 */
import { fetchSpecifUser, likeUser } from "src/redux/actions";
import { IFetchedUsers } from "src/typings/fetchUser";
import { defaultUserImage } from "src/typings/core-envConfig";
import { MUIcons } from "@users_assignment/utility";

interface IProps extends RouteComponentProps<{ userId: string }> {
    fetchedUsers: IFetchedUsers;
    fetchSpecifUser: typeof fetchSpecifUser;
    likeUser: typeof likeUser;
}

const actions = { fetchSpecifUser, likeUser };

@connect(
    state => ({ ...(state.fetchUser || {}) }),
    actions
)
class UserInfo extends Component<IProps> {
    protected fetchSpecifUser = this.props.fetchSpecifUser;
    protected likeUser = this.props.likeUser;
    protected userId = this.props.match.params.userId;
    protected history = this.props.history;

    private _isMounted: boolean;
    protected get isMounted(): boolean {
        return this._isMounted;
    }
    protected set isMounted(value: boolean) {
        this._isMounted = value;
    }

    constructor(props: IProps) {
        super(props);

        this.isMounted = false;
    }

    public componentDidMount() {
        this.isMounted = true;
        if (this.isMounted) {
            this.handleFetchSpecificUser();
        }
    }
    public componentWillUnmount() {
        this.isMounted = false;
    }

    public render() {
        const user = this.props.fetchedUsers[this.userId];
        return (
            <PersistentDrawer
                title={user && user.name}
                navbarLeftIcon={{ icon: MUIcons.KeyboardArrowLeft, color: MuiIconsColorPallet.action, callback: this.handleBackToUsersPage, disabled: !user }}
                navbarRightIcon={{ icon: MUIcons.Favorite, color: user && user.liked ? MuiIconsColorPallet.secondary : undefined, callback: this.handleLikeClicked, disabled: !user }}
            >
                {user ? (
                    <>
                        <UserInfoCustomCard
                            imagePath={defaultUserImage}
                            imageAlt={`${user.name}${user.title}`}
                            name={user.name}
                            title={user.title}
                            like={Helper.JSON.likeDescriptor(user.likes, user.liked)}
                            liked={user.liked}
                        />
                        {user.address && <UserAddressCustomCard address={user.address} />}
                        {user.about && <UserAboutCustomCard about={user.about} />}
                    </>
                ) : (
                    <LinearProgressBar />
                )}
            </PersistentDrawer>
        );
    }

    private handleFetchSpecificUser = () => {
        const { fetchedUsers } = this.props;
        if (this.isMounted && !fetchedUsers[this.userId]) {
            this.fetchSpecifUser(this.userId);
        }
    };

    private handleLikeClicked = () => {
        this.likeUser(this.userId);
        this.forceUpdate();
    };

    private handleBackToUsersPage = () => {
        this.history.push("/");
    };
}

export default UserInfo as React.ComponentClass<{}>;
