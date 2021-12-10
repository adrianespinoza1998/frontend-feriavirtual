import React from 'react'
import { useState, useEffect } from 'react';
import { listarSubastasXEstadoTipo } from './../../helpers/listarSubastasXEstadoTipo';
import { useHistory } from 'react-router-dom';
import { transformarFecha } from './../../helpers/transformarFecha';

export const SubastasProductorScreen = () => {

const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const history = useHistory();

    const [subastas, setSubastas] = useState([]);

    const [idSubIni, setIdSubIni] = useState(0)

    const fetchData = async()=>{
        const listaSub = await listarSubastasXEstadoTipo(21,2);

        listaSub.sort((a,b)=>{
            if (a.idSubastas > b.idSubastas) {
                return 1;
              }
              if (a.idSubastas < b.idSubastas) {
                return -1;
              }
              return 0;
        });

        setSubastas(listaSub);

        if(listaSub.length>0){
            setIdSubIni( listaSub[0].idSubastas -1);
        }
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const handleSubasta = (id)=>{
        history.push(`/det-sub/${id}`);
    }

    return (
        <div className="container mb-5">
            <div className="text-center">
                <p className="display-4">Subastas Disponibles</p>
            </div>
            <hr />
            <div className="container-fluid">
                <ul className="list-group text-center">
                    {
                        (subastas.length>0) 
                        ?
                        subastas.map(sub=>{
                            return <li 
                                        key={sub.idSubastas}
                                        className="list-group-item list-group-item-action list-group-item-light btn"
                                        onClick={()=>{handleSubasta(sub.idSolicitudProductos)}}
                                    >
                                        {`Subasta ${sub.idSubastas - idSubIni} - Fecha : ${(sub.fecha!==null) ? transformarFecha(sub.fecha).toLocaleDateString("es-ES", options) : 'No registrada'}`}
                                    </li>
                        })

                        :
                        <p className='display-4'>No hay subastas disponibles</p>
                    }
                </ul>
            </div>
        </div>
    )
}
