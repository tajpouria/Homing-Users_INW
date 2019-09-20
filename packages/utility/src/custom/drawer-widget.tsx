/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MuiIcon, { IMuiIconsProps } from "../mui-icons";

interface INavBarIcon extends IMuiIconsProps {
    callback?: () => void;
    disabled?: boolean;
}
interface IProps {
    children: any;
    title?: string;
    color?: "default" | "inherit" | "primary" | "secondary";
    navbarRightIcon?: INavBarIcon;
    navbarLeftIcon?: INavBarIcon;
}

const drawerWidth = "100%";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        title: {
            flexGrow: 1,
            padding: theme.spacing(2),
            ["@media (max-width:425px)"]: {
                fontSize: theme.spacing(2)
            }
        },
        hide: {
            display: "none"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        toolbar: { paddingLeft: 0 },
        drawerPaper: {
            width: drawerWidth
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-start"
        },
        content: {
            position: "absolute",
            height: "100%",
            width: "100%",
            flexGrow: 1
        }
    })
);

export default function PersistentDrawerRight({ children, title, color, navbarLeftIcon, navbarRightIcon }: IProps) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color={color ? color : "default"} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {navbarLeftIcon && (
                        <IconButton aria-label="open drawer" edge="end" onClick={navbarLeftIcon.callback} disabled={navbarLeftIcon.disabled || false}>
                            <MuiIcon icon={navbarLeftIcon.icon} color={navbarLeftIcon.color} />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap={true} className={classes.title}>
                        {title && title}
                    </Typography>
                    {navbarRightIcon ? (
                        <IconButton aria-label="open drawer" edge="end" onClick={navbarRightIcon.callback} disabled={navbarRightIcon.disabled || false}>
                            <MuiIcon icon={navbarRightIcon.icon} color={navbarRightIcon.color} />
                        </IconButton>
                    ) : (
                        <IconButton aria-label="open drawer" edge="end" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.drawerHeader} />
                {children}
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
                    <Link href="https://findpouria.netlify.com" component="a">
                        findPouria.netlify.com
                    </Link>
                </div>

                <Divider />
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
