/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";

interface IProps {
    address: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        marginBottom: theme.spacing(0.5)
    },
    carActionArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    mediaFontSize: {
        ["@media (max-width:425px)"]: {
            fontSize: theme.spacing(1.5),
            wordSpacing: -2
        }
    },
    anchorTag: {
        textDecoration: "none"
    }
}));

export default function userAddressCardWidget({ address }: IProps) {
    const classes = useStyles();

    return (
        <a className={classes.anchorTag} href={`http://google.com/maps/search/?api=1&${address}`}>
            <Card className={classes.card}>
                <CardActionArea className={classes.carActionArea}>
                    <CardContent className={classes.content}>
                        <RoomIcon />
                        <Typography className={classes.mediaFontSize} variant="body2" component="h2">
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    );
}
