/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import clx from "classnames";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface IProps {
    about?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        marginBottom: theme.spacing(0.5)
    },
    inline: {
        whiteSpace: "nowrap"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    mediaFontSize: {
        ["@media (max-width:425px)"]: {
            fontSize: theme.spacing(1.5),
            wordSpacing: -2
        }
    },
    title: {
        ["@media (max-width:425px)"]: {
            fontSize: theme.spacing(2)
        }
    }
}));

export default function userAddressCardWidget({ about }: IProps) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography className={clx(classes.mediaFontSize, classes.title)} variant="h6" component="h6">
                    About
                </Typography>
                <Typography className={clx(classes.mediaFontSize)} variant="body2" component="h2">
                    {about || "Too Quiet!"}
                </Typography>
            </CardContent>
        </Card>
    );
}
