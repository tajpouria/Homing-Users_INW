/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import uuid from "uuid/v4";

import MuiIcon, { IMuiIconsProps } from "../../mui-icons";
import TabPanel from "./tabPanel";
import List from "@material-ui/core/List/List";

interface ITab {
    label: string;
    icon: IMuiIconsProps;
}

interface ITabWidgetProps {
    children: any;
    tabs: ITab[];
    bottom?: boolean;
    onTabChange?: (event: React.ChangeEvent<{}>, currentTabIndex: number) => void;
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100%"
    },
    bottom: {
        top: "auto",
        bottom: 0
    },
    list: {
        paddingTop: theme.spacing(0.3)
    },
    paper: {
        paddingBottom: theme.spacing(8)
    }
}));

export default function({ children, tabs, bottom, onTabChange }: ITabWidgetProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        if (onTabChange) {
            onTabChange(event, newValue);
        }
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {!bottom && (
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="primary" aria-label="scrollable force tabs example">
                        {tabs.map(({ label, icon: { icon, color } }: ITab, index: number) => (
                            <Tab label={label} icon={icon ? <MuiIcon icon={icon} color={color} /> : undefined} key={uuid()} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                </AppBar>
            )}
            <div className={classes.paper}>
                <List className={classes.list}>
                    {children.map((tabPanel: any, index: number) => (
                        <TabPanel index={index} value={value} key={uuid()}>
                            {tabPanel}
                        </TabPanel>
                    ))}
                </List>
            </div>
            {bottom && (
                <AppBar className={classes.bottom} position="fixed" color="default">
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="primary" aria-label="scrollable force tabs example">
                        {tabs.map(({ label, icon: { icon, color } }: ITab, index: number) => (
                            <Tab label={label} icon={icon ? <MuiIcon icon={icon} color={color} /> : undefined} key={uuid()} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                </AppBar>
            )}
        </div>
    );
}
