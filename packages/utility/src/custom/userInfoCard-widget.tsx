/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import clx from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

interface IProps {
    imagePath: string;
    imageAlt?: string;
    name?: string;
    title?: string;
    like?: string;
    liked?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        marginBottom: theme.spacing(0.5)
    },
    cardActionArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    media: {
        margin: theme.spacing(1, 0.5),
        width: theme.spacing(10),
        height: theme.spacing(10),
        borderRadius: 5,
        ["@media (max-width:370px)"]: {
            width: theme.spacing(7),
            height: theme.spacing(7)
        },
        ["@media (max-width:325px)"]: {
            height: theme.spacing(6)
        }
    },
    inline: {
        whiteSpace: "nowrap"
    },
    content: {
        padding: 0
    },
    likeIcon: {
        marginRight: theme.spacing(0.5),
        fontSize: theme.spacing(2)
    },
    like: {
        fontSize: theme.spacing(1.4),
        wordSpacing: -1
    },
    mediaFontSize: {
        ["@media (max-width:425px)"]: {
            fontSize: theme.spacing(1.5),
            wordSpacing: -2
        }
    }
}));

export default function userInfoCardWidget({ imagePath, imageAlt, name, title, like, liked }: IProps) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardActionArea}>
                <LazyLoadImage className={classes.media} alt={imageAlt} src={imagePath} effect="blur" />
                <CardContent className={classes.content}>
                    <Typography className={clx(classes.inline, classes.mediaFontSize)} variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.mediaFontSize} variant="body1" gutterBottom={true} color="textSecondary" component="h2">
                        {title}
                    </Typography>
                    <div className={classes.cardActionArea}>
                        <FavoriteIcon className={classes.likeIcon} color={liked ? "secondary" : "disabled"} />
                        <Typography className={clx(classes.inline, classes.like)} variant="caption" color="textSecondary" component="p">
                            {like}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
