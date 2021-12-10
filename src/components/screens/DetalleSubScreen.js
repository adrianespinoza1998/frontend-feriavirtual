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
                    return <FichaOferta
                                key={det.idDetalleSolProductos} 
                                idDetalleSolProd={det.idDetalleSolProductos} 
                                tipoProducto={det.tipoProducto} 
                                cantidad={det.cantidad} 
                                lista={detSolProd}
                                setLista={setDetSolProd}
                            />
                })
            }
        </div>
    )
}
