import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from './screen/LoginScreen';
import { HomeScreen } from './screen/HomeScreen';
import { LandingScreen } from './screen/LandingScreen';
import { MarketScreen } from './screen/MarketScreen';
import { ProductoScreen } from './screen/ProductoScreen';
import { SignInScreen } from './screen/SignInScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
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
                <Route exact path="/market">
                    <MarketScreen />
                </Route>
                <Route exact path="/producto">
                    <ProductoScreen />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
