/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

interface IProps {
    color?: "primary" | "secondary";
    variant?: "determinate" | "indeterminate" | "buffer" | "query";
    valueBuffer?: number;
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

export default function({ color, variant, valueBuffer }: IProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LinearProgress color={color} variant={variant} valueBuffer={valueBuffer} />
        </div>
    );
}
