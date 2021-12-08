import '../../styles/subasta-screen.css'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import React from "react";
import '../../styles/index.css'


export const HomeClienteExterno = ()=>{

    const {user} = useContext(UserContext);

    return(

        <div>
        
    <body class="masthead bg text-black text-center">
        <div className="container mt-5"><img class="img-fluid d-block mx-auto mb-10" src="https://i.ibb.co/tMMpQrY/user.png" />
        <p className="display-4">
        <h3>Bienvenido {user.nombre}</h3>
     </p>
            <hr className="star-light" />
        </div>
    </body>

    
        </div>
        
    )
}







