import React, {useState, useReducer} from 'react';
import { AppRouter } from './routers/AppRouter';
import { UserContext } from './UserContext';
import { subastaReducer } from './reducer/subastaReducer';
import { SubastaContext } from './SubastaContext';


export const MainApp = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const [subasta, dispatch] = useReducer(subastaReducer, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <SubastaContext.Provider value={{
                subasta,
                dispatch
            }} >
                <AppRouter></AppRouter>
            </SubastaContext.Provider>
        </UserContext.Provider>
    );
}
