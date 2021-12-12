import React, { useContext } from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom';
import { LoginScreen } from './../screens/LoginScreen';
import { MarketScreen } from './../screens/MarketScreen';
import { ProductoScreen } from './../screens/ProductoScreen';
import { ProductorScreen } from './../screens/ProductorScreen';
import { SubastaScreen } from './../screens/SubastaScreen';
import { TransporteScreen } from './../screens/TransporteScreen';
import { HomeClienteExterno } from './../screens/HomeClienteExterno';
import { ListaSubastas } from './../screens/ListaSubastas';
import { NavBar } from '../NavBar';
import { UserContext } from '../contexts/UserContext';
import { ComprasScreen } from '../screens/ComprasScreen';
import { PagosScreen } from './../screens/PagosScreen';
import { SubastasProductorScreen } from './../screens/SubastasProductorScreen';
import { CrearProductoScreen } from './../screens/CrearProductoScreen';
import { DetalleSubScreen } from './../screens/DetalleSubScreen';
import { SeleccionarPostulanteScreen } from './../screens/SeleccionarPostulanteScreen';
import '../../styles/index.css'
import { EditarUsuarioScreen } from '../screens/EditarUsuarioScreen';


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
            default:
                return <LoginScreen />
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
                <Route exact path="/comprar">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 4) ? redireccionar(user.idRol) : <ComprasScreen />
                    }
                </Route>
                <Route exact path="/pago">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 4) ? redireccionar(user.idRol) : <PagosScreen />
                    }
                </Route>
                <Route exact path="/sub-productor">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 2) ? redireccionar(user.idRol) : <SubastasProductorScreen />
                    }
                </Route>
                <Route exact path="/crear-prod">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 2) ? redireccionar(user.idRol) : <CrearProductoScreen />
                    }
                </Route>
                <Route exact path="/det-sub/:id">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 2) ? redireccionar(user.idRol) : <DetalleSubScreen />
                    }
                </Route>
                <Route exact path="/seleccion-post/:id">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : (user.idRol !== 5) ? redireccionar(user.idRol) : <SeleccionarPostulanteScreen />
                    }
                </Route>
                <Route exact path="/editar-usuario">
                    {
                        (user === null)
                        ?<LoginScreen />
                        : <EditarUsuarioScreen />
                    }
                </Route>
            </Switch>
        </div>
    )
}
