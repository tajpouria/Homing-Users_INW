/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Icons, MuiIconsColorPallet } from "./typing";

export interface IMuiIconsProps {
    icon: Icons;
    color?: MuiIconsColorPallet;
}

export default ({ icon, color }: IMuiIconsProps) => {
    const defaultColorBehavior = color || "disabled";
    switch (icon) {
        case Icons.Favorite:
            return <FavoriteIcon color={defaultColorBehavior} />;
        case Icons.Home:
            return <HomeIcon color={defaultColorBehavior} />;
        case Icons.Person:
            return <Person color={defaultColorBehavior} />;
        case Icons.KeyboardArrowLeft:
            return <KeyboardArrowLeftIcon color={defaultColorBehavior} />;
        default:
            return null;
    }
};
