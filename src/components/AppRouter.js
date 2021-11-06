import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from './screen/LoginScreen';
import { HomeScreen } from './screen/HomeScreen';
import { LandingScreen } from './screen/LandingScreen';
import { MarketScreen } from './screen/MarketScreen';
import { ProductoScreen } from './screen/ProductoScreen';
import { ProductorScreen } from './screen/ProductorScreen'
import { SignInScreen } from './screen/SignInScreen';
import { SubastaScreen } from './screen/SubastaScreen';
import { TransporteScreen } from './screen/TransporteScreen';

export const AppRouter = () => {


    const auth = JSON.parse(localStorage.getItem('user'));

    const redireccionar = (idRol)=>{
        switch(idRol){
            case 2:
                return <ProductorScreen />
            case 3:
                return <TransporteScreen />
            case 4:
                return <MarketScreen />
            case 5:
                return <SubastaScreen />
        }
    }

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
                    {
                        (auth === null) 
                            ? <LoginScreen /> 
                            : (auth.idRol !== 4) ? redireccionar(auth.idRol) : <MarketScreen />
                    }
                </Route>
                <Route exact path="/producto">
                    {
                        (auth === null)
                            ?<LoginScreen />
                            : (auth.idRol !== 4) ? redireccionar(auth.idRol) : <ProductoScreen />
                    }
                    <ProductoScreen />
                </Route>
                <Route exact path="/productor">
                    {
                        (auth === null)
                            ?<LoginScreen />
                            : (auth.idRol !== 2) ? redireccionar(auth.idRol) : <ProductorScreen />
                    }
                </Route>
                <Route exact path="/subasta">
                    {
                        (auth === null)
                        ?<LoginScreen />
                        : (auth.idRol !== 5) ? redireccionar(auth.idRol) : <SubastaScreen />
                    }
                </Route>
                <Route exact path="/transporte">
                    {
                        (auth === null)
                        ?<LoginScreen />
                        : (auth.idRol !== 3) ? redireccionar(auth.idRol) : <TransporteScreen />
                    }
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
