import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

function PagesRoutes() {
    return (

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>

    )
}

export default PagesRoutes
