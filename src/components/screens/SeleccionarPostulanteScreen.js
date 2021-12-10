import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { FichaPostulante } from '../FichaPostulante';
import { listarDetSolProd } from './../../helpers/listarDetSolProd';
import { useForm } from './../../hooks/useForm';

export const SeleccionarPostulanteScreen = () => {

    const {id} = useParams();

    const [postulaciones, setPostulaciones] = useState([]);

    const fetchData = async()=>{
        const lista = await listarDetSolProd(id);

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
                (postulaciones.length>0) 
                ?
                    postulaciones.map(post=>{
                        return <FichaPostulante
                                key={post.idDetalleSolProductos}
                                tipoProducto={post.tipoProducto}
                                cantidad={post.cantidad} 
                                id={post.idDetalleSolProductos}
                                lista={postulaciones}
                                setLista={setPostulaciones}
                            />
                })
                :
                    <div className='text-center'><p className='display-4'>No hay productos solicitados</p></div>
            }
            </div>
        </div>
    )
}
