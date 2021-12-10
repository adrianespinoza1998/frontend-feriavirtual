import React from 'react'
import { useState, useEffect } from 'react';
import { listarPostulacionXDetSol } from './../../helpers/listarPostulacionXDetSol';

export const SelectPostulante = ({idDetSol = 0, handleInputChange}) => {

    const [postulantes, setPostulantes] = useState([]);

    const fetchData = async()=>{

        const lista = await listarPostulacionXDetSol(idDetSol);

        console.log(JSON.stringify(lista));

        setPostulantes(lista);
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const handle = async({target})=>{

        if(target.value !== '0'){

            const postul = postulantes.find(p => p.idPostulacion = Number(target.value));

            handleInputChange({
                target:{
                    name : 'datos',
                    value : postul
                }
            });
        }else{

            handleInputChange({
                target:{
                    name : 'datos',
                    value : {
                        precioXKg: 0
                    }
                }
            });
        }
    }

    return (
        <div>
            {
                (postulantes.length>0)
                ?
                <select className="form-control" onChange={handle}>
                    <option key={0} value={0}>--SELECCIONE TIPO PRODUCTO--</option>
                    {   
                        postulantes.map(post=>{
                            return <option 
                                        key={post.idPostulacion} 
                                        value={post.idPostulacion} >
                                        {`${post.nombre} ${post.apPaterno} ${post.apMaterno}`}
                                    </option>
                        })
                    }
                </select>
                :
                <p>No hay postulantes</p>
            }
        </div>

    )
}
