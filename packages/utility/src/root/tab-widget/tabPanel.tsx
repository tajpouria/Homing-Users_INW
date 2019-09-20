/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export default function ITabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography component="div" role="tabpanel" hidden={value !== index} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
            <Box p={0.3}>{children}</Box>
        </Typography>
    );
}
