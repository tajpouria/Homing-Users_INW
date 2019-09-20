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
import React from "react";
import { Link } from "react-router-dom";
import { UserInfoCustomCard, LinearProgressBar, Typography, Paper, Helper } from "@users_assignment/utility";
/**
 * Internal Imports
 */
import { IFetchAllUser, IFetchSpecificUser } from "src/typings/fetchUser";
import { Prefixes, Quotes, defaultUserImage } from "src/typings/core-envConfig";

export interface ITabProps {
    favoritesPage?: boolean;
    children: IFetchAllUser[] | IFetchSpecificUser[];
    exceptionMessage?: string;
}

export default function({ children, exceptionMessage, favoritesPage }: ITabProps) {
    const renderMessages = (quote: string, typoColor?: "initial" | "error") => (
        <Paper data-test="tab-empty-favorite-Paper">
            <Typography color={typoColor} variant="body2" data-test="tab-empty-favorite-Typography">
                {quote}
            </Typography>
        </Paper>
    );

    const renderUsers = (): JSX.Element | JSX.Element[] => {
        const specifiedChildren = children as [];
        if (exceptionMessage) {
            return renderMessages(`${Quotes.ExceptionQuote}"${exceptionMessage}"`, "error");
        }
        if (favoritesPage && !specifiedChildren.length) {
            return renderMessages(Quotes.EmptyFavoriteQuote);
        }
        return specifiedChildren && specifiedChildren.length ? (
            specifiedChildren.map((user: any) => (
                <Link className="user-link-container" to={`${Prefixes.specific_user}${user.id !== undefined ? user.id : user.Id}`} key={user.id !== undefined ? user.id : user.Id} data-test="tab-Link">
                    <UserInfoCustomCard
                        imagePath={defaultUserImage}
                        imageAlt={user.name}
                        name={user.name}
                        title={user.title}
                        like={Helper.JSON.likeDescriptor(user.likes, user.liked)}
                        liked={user.liked}
                        data-test="tab-UserInfoCustomCard"
                    />
                </Link>
            ))
        ) : (
            <LinearProgressBar data-test="tab-empty-LinearProgressBar" />
        );
    };

    return <div>{renderUsers()}</div>;
}
