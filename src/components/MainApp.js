import React, {useState} from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';


export const MainApp = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    );
}
