/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Core from "src/components/core";
import UserInfo from "src/components/user-info";

class App extends Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Core} />
                    <Route path="/user/:userId" component={UserInfo} />
                </Switch>
            </Router>
        );
    }
}

export default App as React.ComponentClass<{}>;
