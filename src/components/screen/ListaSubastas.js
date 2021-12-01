import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { listarSubastas } from '../../helpers/listarSubastas';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';

export const ListaSubastas = () => {

    const [productos, setProductos] = useState([]);

    const {user} = useContext(UserContext)
    
    const history = useHistory();

    const [idSubIni, setIdSubIni] = useState(0) 

    useEffect(async()=>{
        const productos = await listarSubastas(user.idUsuario); 
        setProductos(productos);

        setIdSubIni( productos[0].idSubastas -1);

    },[]);


    return (
        <ul>
            {
                productos.map( producto =>{
                    return <li key={producto.idSubastas}>
                                   {'subasta ' + (producto.idSubastas - idSubIni) + ' - ' + 'Tipo de  solicitud : ' + producto.tipoSolicitud }
                                   

                           </li> 
                                
                                
                          
                })
            }

        </ul>
    );

    
}



