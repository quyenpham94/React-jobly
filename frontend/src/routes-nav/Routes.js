import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";

const Routes = ({ login, signup }) => {
    return (
        <div className="pt-5">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/">
                
                </Route>
                <Route exact path="/">
                
                </Route>
                <Route exact path="/">
                
                </Route>
                <Route exact path="/">
                
                </Route>
                <Route exact path="/">
                
                </Route>
                <Route exact path="/">
                
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;