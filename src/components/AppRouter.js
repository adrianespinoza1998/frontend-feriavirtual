import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { LandingScreen } from './LandingScreen';
import { MarketScreen } from './MarketScreen';
import { ProductoScreen } from './ProductoScreen';

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
