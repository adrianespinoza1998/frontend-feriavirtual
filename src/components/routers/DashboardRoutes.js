import React, { useContext } from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom';
import { LoginScreen } from './../screen/LoginScreen';
import { MarketScreen } from './../screen/MarketScreen';
import { ProductoScreen } from './../screen/ProductoScreen';
import { ProductorScreen } from './../screen/ProductorScreen';
import { SubastaScreen } from './../screen/SubastaScreen';
import { TransporteScreen } from './../screen/TransporteScreen';
import { HomeClienteExterno } from './../screen/HomeClienteExterno';
import { ListaSubastas } from './../screen/ListaSubastas';
import { NavBar } from '../NavBar';
import { UserContext } from '../UserContext';

export const DashboardRoutes = () => {

    const {user} = useContext(UserContext);

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
    }


    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/market">
                    {
                        (user === null) 
                            ? <LoginScreen /> 
                            : (user.idRol !== 4) ? redireccionar(user.idRol) : <MarketScreen />
                    }
                </Route>
                <Route exact path="/producto/:id">
                    {
                        (user === null)
                            ?<LoginScreen />
                            : (user.idRol !== 4) ? redireccionar(user.idRol) : <ProductoScreen />
                    }
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
                </Route>
            </Switch>
        </div>
    )
}
