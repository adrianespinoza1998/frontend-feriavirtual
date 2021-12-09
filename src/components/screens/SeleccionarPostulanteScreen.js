import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { FichaPostulante } from '../FichaPostulante';
import { listarDetSolProd } from './../../helpers/listarDetSolProd';
import { useForm } from './../../hooks/useForm';

export const SeleccionarPostulanteScreen = (idDetSol) => {

    const {id} = useParams();

    const [postulaciones, setPostulaciones] = useState([]);

    const fetchData = async()=>{
        const lista = await listarDetSolProd(id);
        console.log(JSON.stringify(lista));

        setPostulaciones(lista);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <div className='text-center'>
                <p className='display-4'>Seleccionar Postulantes</p>
            </div>
            <hr />
            <div className='container'>
            {
                postulaciones.map(post=>{
                    return <FichaPostulante
                                key={post.idDetalleSolProductos}
                                tipoProducto={post.tipoProducto}
                                cantidad={post.cantidad} 
                                id={post.idDetalleSolProductos}
                            />
                })
            }
            </div>
        </div>
    )
}
