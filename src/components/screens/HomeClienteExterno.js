import '../../styles/subasta-screen.css'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';

export const HomeClienteExterno = ()=>{

    const {user} = useContext(UserContext);

    return(
        <div>
            <div className="text-center">
                <p className="display-4">
                    Bienvenido {user.nombre}
                </p>
            </div>
            <hr />
        </div>
    )
}