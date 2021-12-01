import React, {useState, useReducer} from 'react';
import { AppRouter } from './routers/AppRouter';
import { UserContext } from './contexts/UserContext';
import { subastaReducer } from './reducers/subastaReducer';
import { SubastaContext } from './contexts/SubastaContext';
import { ventaInternaReducer } from './reducers/ventaInternaReducer';
import { VentaInternaContext } from './contexts/VentaInternaContext';

const init = ()=>{
    return JSON.parse(localStorage.getItem('ventas')) || [];
}

export const MainApp = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const [subasta, dispatch] = useReducer(subastaReducer, []);

    const [venta, dispatchVenta] = useReducer(ventaInternaReducer, [], init);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <SubastaContext.Provider value={{
                subasta,
                dispatch
            }} >
                <VentaInternaContext.Provider value={{
                    venta,
                    dispatchVenta
                }}>
                    <AppRouter></AppRouter>
                </VentaInternaContext.Provider>
            </SubastaContext.Provider>
        </UserContext.Provider>
    );
}
