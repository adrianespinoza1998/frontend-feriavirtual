import React from 'react'
import {listarPaises} from '../../helpers/listarPaises';
import {useEffect} from 'react';
import {useState} from 'react';

export const SelectPaises = ({handleInputChange})=>{

    const [paises, setPaises] = useState([]);

    const fetchData = async()=>{
        const listaPaises = await listarPaises();

        setPaises(listaPaises);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const handle = ({target})=>{

        handleInputChange({
            target:{
                name: 'idPais',
                value: parseInt(target.value)
            }
        });
    }

    return (
        <select className="form-control" onChange={handle}>
            <option key="0" value={0}>--Seleccione País--</option>
            {
                paises.map((pais)=>{
                    return <option key={pais.descripcion} value={pais.idPais}>{pais.descripcion}</option>
                })
            }
        </select>
    )
}