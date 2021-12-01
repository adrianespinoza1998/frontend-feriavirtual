import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LandingScreen } from '../screens/LandingScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                    <LandingScreen />
                </Route>
                <Route exact path="/login">
                    <LoginScreen />
                </Route>
                <Route exact path="/signin">
                    <SignInScreen />
                </Route>
                <Route exact path="/home">
                    <HomeScreen />
                </Route>
                <Route path="/" component={DashboardRoutes} />
                <Redirect to="/home" />
            </Switch>
        </Router>
    );
}
