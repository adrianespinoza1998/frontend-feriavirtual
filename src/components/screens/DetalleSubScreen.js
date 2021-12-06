import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import { listarDetSolProd } from './../../helpers/listarDetSolProd';
import { FichaOferta } from '../FichaOferta';

export const DetalleSubScreen = () => {

    const {id} = useParams();

    const [detSolProd, setDetSolProd] = useState([]);

    const fetchData = async()=>{
        const lista = await listarDetSolProd(id);

        console.log(JSON.stringify(lista));
        setDetSolProd(lista);
    }

    useEffect(()=>{
        fetchData();
    },[id]);

    return (
        <div className="container">
            <div className="text-center">
                <p className="display-4">Detalle Subasta</p>
            </div>
            <hr />
            {
                detSolProd.map( det =>{
                    return <FichaOferta tipoProducto={det.tipoProducto} cantidad={det.cantidad} />
                })
            }
        </div>
    )
}
