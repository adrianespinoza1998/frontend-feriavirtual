import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../screen/LoginScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { LandingScreen } from '../screen/LandingScreen';
import { MarketScreen } from '../screen/MarketScreen';
import { ProductoScreen } from '../screen/ProductoScreen';
import { ProductorScreen } from '../screen/ProductorScreen'
import { SignInScreen } from '../screen/SignInScreen';
import { SubastaScreen } from '../screen/SubastaScreen';
import { TransporteScreen } from '../screen/TransporteScreen';
import { HomeClienteExterno } from '../screen/HomeClienteExterno';
import { ListaSubastas } from '../screen/ListaSubastas';
import { UserContext } from '../UserContext';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    /*const {user} = useContext(UserContext);

    const redireccionar = (idRol)=>{
        switch(idRol){
            case 2:
                return <ProductorScreen />
            case 3:
                return <TransporteScreen />
            case 4:
                return <MarketScreen />
            case 5:
                return <HomeClienteExterno />
        }
    }*/

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
                {/*<Route exact path="/market">
                    {
                        (user === null) 
                            ? <LoginScreen /> 
                            : (user.idRol !== 4) ? redireccionar(user.idRol) : <MarketScreen />
                    }
                </Route>
                <Route exact path="/producto">
                    {
                        (user === null)
                            ?<LoginScreen />
                            : (user.idRol !== 4) ? redireccionar(user.idRol) : <ProductoScreen />
                    }
                    <ProductoScreen />
                </Route>
                <Route exact path="/productor">
                    {
                        (user === null)
                            ?<LoginScreen />
                            : (user.idRol !== 2) ? redireccionar(user.idRol) : <ProductorScreen />
                    }
                </Route>
                <Route exact path="/subasta">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 5) ? redireccionar(user.idRol) : <SubastaScreen />
                    }
                </Route>
                <Route exact path="/transporte">
                    {
                        (user === null)
                        ? <LoginScreen />
                        : (user.idRol !== 3) ? redireccionar(user.idRol) : <TransporteScreen />
                    }
                </Route>
                <Route exact path="/externo">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 5) ? redireccionar(user.idRol) : <HomeClienteExterno />
                    }
                </Route>
                <Route exact path="/lista-subastas">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 5) ? redireccionar(user.idRol) : <ListaSubastas />
                    }
                </Route>*/}
                <Redirect to="/home" />
            </Switch>
        </Router>
    );
}
