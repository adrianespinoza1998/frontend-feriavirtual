import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from './../contexts/UserContext';

export const ProductorScreen = ()=>{

    const {user} = useContext(UserContext);

    return(
        <div>
            <div className="text-center">
                <p className="display-4">Bienvenido {user.nombre}</p>
            </div>
            <hr />
        </div>
    );
}