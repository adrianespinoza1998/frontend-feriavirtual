import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import {listarRoles} from '../../helpers/listarRoles';

export const SelectRoles = ({handleInputChange})=>{

    const [roles, setRoles] = useState([]);

    useEffect(async()=>{
        const lista = await listarRoles();

        setRoles(lista);

        handle({target: {value: 5}});
    },[]);

    const handle = ({target})=>{

        handleInputChange({
            target:{
                name: 'idRol',
                value: parseInt(target.value)
            }
        });
    }
    
    return(
        <select className="form-control" onChange={handle}>
            <option key="00" value={0}>--Seleccione Rol--</option>
            {
                roles.map((rol)=>{
                    if(rol.descripcion!='admin'){
                        return <option key={rol.descripcion} value={rol.idRol}>{rol.descripcion}</option>
                    }
                })
            }
        </select>
    )
}