import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import CompanyList from "../companies/CompanyList";

const Routes = ({ login, signup }) => {
    return (
        <div className="pt-5">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>

                <PrivateRoute exact path="/">
                
                </PrivateRoute>

                <PrivateRoute exact path="/">
                
                </PrivateRoute>
                
                <PrivateRoute exact path="/">
                
                </PrivateRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;