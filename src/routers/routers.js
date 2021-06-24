import React from "react";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";

import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";

const Routers = () => {
    let BrowserHistory = createBrowserHistory();

    return (
        <Router history={BrowserHistory}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="admin" component={Admin} />
                </Switch>
            </div>
        </Router>
    )
};

export default Routers;